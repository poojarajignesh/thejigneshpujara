export default function SectionDivider() {
  return (
    <div className="relative h-32 overflow-hidden">

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C89B3C] to-transparent" />

      <div className="absolute left-1/2 top-10 h-52 w-[900px] -translate-x-1/2 rounded-full bg-[#C89B3C]/10 blur-[120px]" />

    </div>
  );
}