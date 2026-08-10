const SectionHeading = ({ eyebrow, title, subtitle, align = 'left' }) => (
  <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
    {eyebrow && (
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
    )}
    <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h2>
    {subtitle && <p className="mt-4 leading-relaxed text-ink-soft">{subtitle}</p>}
    <div
      className={`mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-accent to-violet ${
        align === 'center' ? 'mx-auto' : ''
      }`}
    />
  </div>
)

export default SectionHeading
