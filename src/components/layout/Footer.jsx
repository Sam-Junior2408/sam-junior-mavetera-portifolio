import { Github, Linkedin, Mail } from 'lucide-react'

const links = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/ghsam-2408' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/sam-junior-mavetera/' },
  { icon: Mail, label: 'Email', href: 'mailto:ghsam2408@gmail.com' },
]

const Footer = () => (
  <footer className="border-t border-border">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
      <p className="text-sm text-ink-faint">
        &copy; {new Date().getFullYear()} Sam Junior Mavetera. Built with React & Tailwind CSS.
      </p>

      <div className="flex items-center gap-2">
        {links.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="grid h-9 w-9 place-items-center rounded-lg border border-border text-ink-faint transition hover:border-accent hover:text-accent"
          >
            <Icon size={16} />
          </a>
        ))}
      </div>
    </div>
  </footer>
)

export default Footer
