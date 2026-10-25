// Shared data between AgencyCore (3D) and AgencyCoreMobile (DOM fallback) and the parent section.
// Kept separate from the 3D component so the section can statically import this without
// pulling Three.js into the parent chunk.
export const NODES = [
  { label: 'Strategy' },
  { label: 'Staff Augmentation' },
  { label: 'Software Development' },
  { label: 'HRMS Solutions' },
  { label: 'Data, BI & CRM' },
];
