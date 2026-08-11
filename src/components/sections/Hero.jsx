import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'
import profile from '../../assets/profile.jpeg'

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/ghsam-2408' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/sam-junior-mavetera/' },
  { icon: Mail, label: 'Email', href: 'mailto:ghsam2408@gmail.com' },
]

const stats = [
  { value: '5+', label: 'Projects shipped' },
  { value: '8', label: 'Microservices built' },
  { value: 'Java · React', label: 'Core stack' },
]

const Hero = () => (
  <section id="top" className="relative overflow-hidden">
    {/* Ambient backdrop */}
    <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
    <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
    <div className="pointer-events-none absolute -right-24 top-48 h-80 w-80 animate-float rounded-full bg-violet/20 blur-3xl" />

    <div className="section relative flex min-h-screen items-center pt-32">
      <div className="grid w-full items-center gap-14 md:grid-cols-[1.15fr_0.85fr]">
        <div className="animate-fade-up">
          <span className="chip chip-accent">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            Available for opportunities
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Sam Junior <span className="gradient-text">Mavetera</span>
          </h1>

          <p className="mt-4 text-lg font-semibold text-accent sm:text-xl">
            Full Stack Software Engineer
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            I build secure, scalable, production-ready systems - Spring Boot
            microservices talking over Kafka, containerised with Docker and
            Kubernetes, with React front ends that stay fast and accessible.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              View Projects
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
            <a
              href="https://drive.google.com/file/d/1F2A7g7-IKRI9yDr3BMp9ogj7zuk_Nwh-/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              <Download size={18} />
              Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-surface text-ink-soft transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-fade-up [animation-delay:120ms]">
          <div className="rounded-[28px] bg-gradient-to-br from-accent to-violet p-[3px] shadow-lift">
            <div className="overflow-hidden rounded-[25px] bg-surface">
              <img
                src={profile}
                alt="Sam Junior Mavetera"
                className="aspect-square w-full object-cover"
              />
            </div>
          </div>

          <dl className="mt-5 grid grid-cols-3 gap-2">
            {stats.map((stat) => (
              <div key={stat.label} className="card px-2 py-3 text-center">
                <dt className="text-base font-bold text-ink">{stat.value}</dt>
                <dd className="mt-1 text-[11px] leading-tight text-ink-faint">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  </section>
)

export default Hero
