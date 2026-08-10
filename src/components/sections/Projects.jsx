import { Check, ExternalLink, Star } from 'lucide-react'
import bitBucketIcon from '../../assets/bitbucket.png'
import SectionHeading from '../ui/SectionHeading'
import { projects } from '../../data/projects'

const initials = (name) =>
  name
    .replace(/[^a-zA-Z ]/g, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join('')

const StatusBadge = ({ status }) => (
  <span
    className={`chip ${
      status === 'Live'
        ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-500'
        : 'border-amber-500/40 bg-amber-500/10 text-amber-500'
    }`}
  >
    <span className="h-1.5 w-1.5 rounded-full bg-current" />
    {status}
  </span>
)

const Media = ({ project, className = '' }) => (
  <div className={`overflow-hidden rounded-xl border border-border bg-surface-2 ${className}`}>
    {project.image ? (
      <img
        src={project.image}
        alt={`${project.name} screenshot`}
        loading="lazy"
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
    ) : (
      <div className="relative grid h-full min-h-[180px] place-items-center bg-gradient-to-br from-accent/80 to-violet/80 p-6 text-center">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative">
          <span className="text-4xl font-black tracking-tight text-white">
            {initials(project.name)}
          </span>
          <p className="mt-2 text-xs font-medium text-white/80">{project.tagline}</p>
        </div>
      </div>
    )}
  </div>
)

const Links = ({ links }) => (
  <div className="mt-5 flex flex-wrap gap-3">
    {links.live ? (
      <a href={links.live} target="_blank" rel="noreferrer" className="btn-primary !py-2.5 text-sm">
        <ExternalLink size={16} />
        Live Demo
      </a>
    ) : (
      <span
        aria-disabled="true"
        title="Not publicly deployed yet"
        className="btn-outline !py-2.5 cursor-not-allowed text-sm opacity-50"
      >
        <ExternalLink size={16} />
        Live Demo
      </span>
    )}

    {links.bitbucket && (
      <a
        href={links.bitbucket}
        target="_blank"
        rel="noreferrer"
        className="btn-outline !py-2.5 text-sm"
      >
        <img src={bitBucketIcon} alt="" className="h-4 w-4" />
        Bitbucket
      </a>
    )}
  </div>
)

const TechList = ({ technologies }) => (
  <ul className="mt-4 flex flex-wrap gap-2">
    {technologies.map((tech) => (
      <li key={tech} className="chip">
        {tech}
      </li>
    ))}
  </ul>
)

const FeaturedCard = ({ project }) => (
  <article className="card card-hover group overflow-hidden p-5 md:p-6">
    <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)]">
      <Media project={project} className="md:h-full" />

      <div className="flex flex-col">
        <div className="flex flex-wrap items-center gap-2">
          <span className="chip chip-accent">
            <Star size={12} />
            Featured
          </span>
          <StatusBadge status={project.status} />
        </div>

        <h3 className="mt-3 text-2xl font-bold tracking-tight text-ink">{project.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{project.description}</p>

        {project.highlights?.length > 0 && (
          <ul className="mt-4 space-y-2">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2 text-sm text-ink-soft">
                <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                {highlight}
              </li>
            ))}
          </ul>
        )}

        <TechList technologies={project.technologies} />
        <Links links={project.links} />
      </div>
    </div>
  </article>
)

const ProjectCard = ({ project }) => (
  <article className="card card-hover group flex flex-col overflow-hidden p-5">
    <Media project={project} className="aspect-[16/10]" />

    <div className="mt-5 flex flex-1 flex-col">
      <StatusBadge status={project.status} />
      <h3 className="mt-3 text-lg font-bold tracking-tight text-ink">{project.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{project.description}</p>
      <TechList technologies={project.technologies} />
      <Links links={project.links} />
    </div>
  </article>
)

const Projects = () => {
  const featured = projects.filter((project) => project.featured)
  const rest = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="section">
      <SectionHeading
        eyebrow="Work"
        title="Featured Projects"
        subtitle="A mix of production-shaped systems and focused builds — each one solving a real problem end to end."
      />

      <div className="mt-12 space-y-6">
        {featured.map((project) => (
          <FeaturedCard key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {rest.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
