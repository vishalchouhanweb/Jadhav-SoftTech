// Navbar mega menu data, derived from hireData.js (single source of truth).
import { HIRE_DATA } from './hireData';

export const HIRE_MENU = Object.entries(HIRE_DATA).map(([slug, group]) => ({
  slug,
  title: group.title,
  roles: group.services.map((s) => ({ label: s.name, slug: s.id })),
}));

export const hireGroupHref = (groupSlug) => `/hire/${groupSlug}`;
export const hireRoleHref = (groupSlug, roleSlug) => `/hire/${groupSlug}/${roleSlug}`;
