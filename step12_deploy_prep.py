#!/usr/bin/env python3
"""
Step 12 - Vercel deploy prep (server)

server/app.js
  1. app.set('trust proxy', 1)
     Vercel proxy ke peeche har visitor ka IP same dikhta hai. Iske bina rate limiter
     (15 min me 5 requests) saare visitors ko ek hi gina karega - kuch ke baad sabka
     contact form "Too many requests" dega.
  2. CORS: CLIENT_ORIGIN me comma se kai domains (www aur non-www, vercel.app + custom domain).
server/.env.example
  - CLIENT_ORIGIN / NODE_ENV ke comments sahi kiye

Usage (AgencySpire folder me):
  python step12_deploy_prep.py --dry-run
  python step12_deploy_prep.py
  python step12_deploy_prep.py --restore
"""
import sys
import shutil
from pathlib import Path

ROOT = Path.cwd()
APP = ROOT / "server/app.js"
ENV = ROOT / "server/.env.example"
BACKUP = ROOT / "_backup_step12_deploy_prep"

APP_EDITS = [
    ("const app = express();\n",
     "const app = express();\n\n// Vercel/proxy ke peeche asli visitor IP (rate limiter ke liye zaroori)\napp.set('trust proxy', 1);\n"),
    ("app.use(cors({\n  origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',\n  credentials: true\n}));",
     "// CLIENT_ORIGIN: ek ya kai domains, comma se alag (trailing slash nahi)\nconst allowedOrigins = (process.env.CLIENT_ORIGIN || 'http://localhost:5173')\n  .split(',')\n  .map((o) => o.trim().replace(/\\/+$/, ''))\n  .filter(Boolean);\n\napp.use(cors({\n  origin: allowedOrigins,\n  credentials: true\n}));"),
]
ENV_EDITS = [
    ("NODE_ENV=development/production  // Edit it about your project", "NODE_ENV=production"),
    ("CLIENT_ORIGIN=http://localhost:5173",
     "# Frontend ka URL (trailing slash nahi). Kai domains: comma se alag.\n# Production: https://your-site.vercel.app,https://www.yourdomain.com\nCLIENT_ORIGIN=http://localhost:5173"),
    ("CONTACT_TO_EMAIL=hello@example.com", "CONTACT_TO_EMAIL=info@jadhavsofttech.com"),
]


def read(p):
    raw = p.read_bytes().decode("utf-8")
    return raw.replace("\r\n", "\n"), "\r\n" in raw


def run(text, edits, log):
    ok = True
    for old, new in edits:
        short = old.strip()[:50].replace("\n", " ")
        if old in text and new not in text:
            text = text.replace(old, new, 1)
            log.append(("ok", short))
        elif new in text:
            log.append(("skip", short + "  (already applied)"))
        else:
            log.append(("FAIL", short + "  (nahi mila)"))
            ok = False
    return text, ok


def main():
    args = sys.argv[1:]
    if "--restore" in args:
        for f in (APP, ENV):
            b = BACKUP / f.name
            if b.exists():
                shutil.copy2(b, f)
                print("restored", f.relative_to(ROOT))
        return 0
    for f in (APP, ENV):
        if not f.exists():
            print("File nahi mili:", f)
            print("Script AgencySpire folder me chalao (jahan client/ aur server/ hain).")
            return 1
    results, ok_all = [], True
    for f, edits in ((APP, APP_EDITS), (ENV, ENV_EDITS)):
        t, crlf = read(f)
        log = []
        new, ok = run(t, edits, log)
        ok_all &= ok
        results.append((f, t, new, crlf))
        print("\n==", f.relative_to(ROOT))
        for st, msg in log:
            print(f"  [{st:>4}] {msg}")
    if not ok_all:
        print("\nKuch fail hua - kuch bhi write nahi kiya.")
        return 1
    if "--dry-run" in args:
        print("\n--dry-run: kuch write nahi kiya.")
        return 0
    BACKUP.mkdir(exist_ok=True)
    for f, before, after, crlf in results:
        if after != before:
            if not (BACKUP / f.name).exists():
                shutil.copy2(f, BACKUP / f.name)
            f.write_bytes((after.replace("\n", "\r\n") if crlf else after).encode("utf-8"))
    print("\nDone. Backup:", BACKUP.name)
    return 0


if __name__ == "__main__":
    sys.exit(main())
