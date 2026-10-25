import {
  Activity, ArrowLeftRight, BarChart3, BrainCircuit, Boxes, Bot, Briefcase, Braces,
  Building2, Bug, ClipboardList, Cloud, CloudCog, Code2, Coffee, Cpu, Database,
  FileSpreadsheet, FlaskConical, Gem, GitBranch, Globe, Hash, KanbanSquare,
  Landmark, Layers, LayoutDashboard, LayoutTemplate, Network, Palette, PenTool,
  Settings2, Share2, ShoppingBag, ShoppingCart, Smartphone, Store, Terminal,
  Users, Workflow, Zap,
} from 'lucide-react';

// Purane Services dropdown ka purple palette (har column ka alag colour)
const GROUP_COLORS = ['#a06cd5', '#D8B4E2', '#9b7bd0', '#c49bda', '#a06cd5', '#D8B4E2'];

// Pehla match jeet-ta hai - specific rules upar, general neeche.
const RULES = [
  [/ai\/ml|genai|machine learning/, BrainCircuit],
  [/data scientist/, FlaskConical],
  [/power bi|data analyst/, BarChart3],
  [/informatica|etl/, ArrowLeftRight],
  [/database|sql/, Database],
  [/oracle/, Database],
  [/\baws\b|\bazure\b|\bgcp\b|cloud engineer/, Cloud],
  [/devops/, GitBranch],
  [/^sre\b/, Activity],
  [/\.net/, Hash],
  [/^java\b/, Coffee],
  [/\bmern\b|\bmean\b/, Layers],
  [/php|laravel/, Braces],
  [/python|django/, Terminal],
  [/ruby/, Gem],
  [/golang|^go\b/, Zap],
  [/\bsap\b|netsuite/, Building2],
  [/salesforce/, CloudCog],
  [/crm|zoho/, Users],
  [/business central/, Briefcase],
  [/finance/, Landmark],
  [/dynamics/, Workflow],
  [/servicenow/, Settings2],
  [/sharepoint/, Share2],
  [/odoo/, Boxes],
  [/power platform/, Zap],
  [/\brpa\b/, Bot],
  [/workfront/, KanbanSquare],
  [/\bvba\b/, FileSpreadsheet],
  [/magento/, ShoppingCart],
  [/solidus/, Store],
  [/shopify|bigcommerce|woocommerce/, ShoppingBag],
  [/wordpress/, LayoutDashboard],
  [/webflow/, PenTool],
  [/ui\/ux/, Palette],
  [/designer/, PenTool],
  [/frontend/, LayoutTemplate],
  [/web developer/, Globe],
  [/android|flutter|react native|xamarin|swift|\bios\b/, Smartphone],
  [/\bqa\b|tester/, Bug],
  [/project manager/, ClipboardList],
  [/lead|architect/, Network],
  [/embedded/, Cpu],
];

export function getRoleIcon(label = '') {
  const l = label.toLowerCase();
  for (const [re, Icon] of RULES) if (re.test(l)) return Icon;
  return Code2;
}

export default function RoleIcon({ label, groupIndex = 0, className = '' }) {
  const Icon = getRoleIcon(label);
  const color = GROUP_COLORS[groupIndex % GROUP_COLORS.length];
  return (
    <span
      aria-hidden="true"
      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110 ${className}`}
      style={{ background: `${color}18` }}
    >
      <Icon className="h-3.5 w-3.5" style={{ color }} />
    </span>
  );
}
