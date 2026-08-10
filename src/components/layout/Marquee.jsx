import { marqueeTech } from '../../data/skills'

const items = ['Engineer-first. Product-minded. Production-ready.', ...marqueeTech]

// Duplicated track + a -50% translate = a seamless, GPU-cheap loop.
const Track = () => (
  <div className="flex shrink-0 items-center gap-8 pr-8" aria-hidden="true">
    {items.map((tech) => (
      <span key={tech} className="flex items-center gap-8 whitespace-nowrap">
        {tech}
        <span className="h-1 w-1 rounded-full bg-accent/70" />
      </span>
    ))}
  </div>
)

const Marquee = () => (
  <div className="fixed inset-x-0 top-0 z-50 border-b border-border bg-surface/80 backdrop-blur">
    <div className="mask-fade-x flex overflow-hidden py-1.5 text-xs font-medium tracking-wide text-ink-faint">
      <div className="flex animate-marquee">
        <Track />
        <Track />
      </div>
    </div>
  </div>
)

export default Marquee
