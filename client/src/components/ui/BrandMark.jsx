// Navbar logo: diamond (purana style) + andar "JS"
export default function BrandMark({ size = 'md' }) {
  const s =
    size === 'sm'
      ? { box: 'h-8 w-8', diamond: 'h-5 w-5', text: 'text-[8px]', radius: 'rounded-[3px]' }
      : { box: 'h-9 w-9', diamond: 'h-6 w-6', text: 'text-[10px]', radius: 'rounded-[4px]' };
  return (
    <div className={`relative flex ${s.box} items-center justify-center`} aria-hidden="true">
      <div
        className={`${s.diamond} rotate-45 ${s.radius}`}
        style={{
          background: 'linear-gradient(135deg, #f5e0ff 0%, #D8B4E2 55%, #a06cd5 100%)',
          boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.6), 0 3px 8px rgba(160,108,213,0.45)',
        }}
      />
      <span
        className={`absolute font-display ${s.text} font-black leading-none tracking-tighter text-[#25152d]`}
      >
        JS
      </span>
    </div>
  );
}
