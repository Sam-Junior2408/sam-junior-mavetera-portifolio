import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from '../ui/ThemeToggle'

const navItems = [
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['Contact', 'contact'],
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('about')

  // Highlight whichever section is closest to the top of the viewport.
  useEffect(() => {
    const sections = navItems
      .map(([, id]) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  // Don't leave the mobile sheet open behind a desktop layout.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const close = (event) => event.matches && setOpen(false)
    mq.addEventListener('change', close)
    return () => mq.removeEventListener('change', close)
  }, [])

  return (
    <header className="fixed inset-x-0 top-7 z-40 px-4">
      <nav className="mx-auto max-w-4xl rounded-2xl border border-border bg-surface/80 shadow-card backdrop-blur-xl">
        <div className="flex items-center justify-between gap-4 px-4 py-2.5 md:px-5">
          <a
            href="#top"
            className="flex items-center gap-2 text-sm font-bold text-ink transition hover:text-accent"
          >
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-accent to-violet text-xs font-black text-white">
              SJ
            </span>
            Sam Junior
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map(([title, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
                  active === id
                    ? 'bg-accent/10 text-accent'
                    : 'text-ink-soft hover:bg-surface-2 hover:text-ink'
                }`}
              >
                {title}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface text-ink-soft transition hover:border-accent hover:text-accent md:hidden"
            >
              {open ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-border px-4 pb-3 pt-2 md:hidden">
            {navItems.map(([title, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-2 text-sm font-medium transition ${
                  active === id ? 'bg-accent/10 text-accent' : 'text-ink-soft hover:bg-surface-2'
                }`}
              >
                {title}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
