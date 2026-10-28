// Contact form lead -> Google Sheet (Apps Script web app). Mail Apps Script khud bhejti hai.
const TIMEOUT_MS = 20000;

const SERVICE_LABELS = {
  'hire-developer': 'Hire a Developer',
  'software-development': 'Software Development',
  hrms: 'HRMS Solutions',
  'data-bi-crm': 'Data, BI & CRM',
  other: 'Something else',
};
const BUDGET_LABELS = {
  '5k-15k': '$5k - $15k',
  '15k-50k': '$15k - $50k',
  '50k-100k': '$50k - $100k',
  '100k+': '$100k+',
};

export function isSheetConfigured() {
  return Boolean(process.env.SHEET_WEBHOOK_URL && process.env.SHEET_WEBHOOK_SECRET);
}

export async function saveToSheet(data) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(process.env.SHEET_WEBHOOK_URL, {
      method: 'POST',
      // text/plain: Apps Script ko JSON body bina preflight ke milti hai
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      redirect: 'follow',
      signal: ctrl.signal,
      body: JSON.stringify({
        secret: process.env.SHEET_WEBHOOK_SECRET,
        name: data.name,
        email: data.email,
        company: data.company || '',
        service: SERVICE_LABELS[data.service] || data.service || '',
        budget: BUDGET_LABELS[data.budget] || data.budget || '',
        message: data.message,
      }),
    });
    const text = await res.text();
    let json;
    try {
      json = JSON.parse(text);
    } catch {
      throw new Error(`Sheet webhook ne JSON nahi diya (HTTP ${res.status}). Deployment me "Who has access: Anyone" aur URL .../exec check karo.`);
    }
    if (!res.ok || !json.ok) throw new Error(`Sheet webhook error: ${json.error || res.status}`);
    return json;
  } finally {
    clearTimeout(timer);
  }
}
