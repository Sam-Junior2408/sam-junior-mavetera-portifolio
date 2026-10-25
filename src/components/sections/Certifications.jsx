import { BadgeCheck, ExternalLink, GraduationCap } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { certifications } from '../../data/certifications'

const StatusBadge = ({ status }) => (
  <span
    className={`chip ${
      status === 'Earned'
        ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-500'
        : 'border-amber-500/40 bg-amber-500/10 text-amber-500'
    }`}
  >
    <span
      className={`h-1.5 w-1.5 rounded-full bg-current ${status === 'Earned' ? '' : 'animate-pulse'}`}
    />
    {status}
  </span>
)

const Certifications = () => (
  <section id="certifications" className="section">
    <SectionHeading
      eyebrow="Certifications"
      title="Always learning"
      subtitle="Formal credentials that sit alongside the hands-on work - and the ones I'm working towards right now."
    />

    <div className={`mt-12 grid gap-5 ${certifications.length > 1 ? 'md:grid-cols-2' : ''}`}>
      {certifications.map(
        ({ id, name, issuer, provider, exam, status, icon: Icon, description, topics, credentialUrl }) => (
          <article key={id} className="card card-hover flex flex-col gap-6 p-6 sm:flex-row sm:p-8">
            <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-accent to-violet text-white shadow-lift">
              <Icon size={30} aria-hidden="true" />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <StatusBadge status={status} />
                <span className="chip">
                  <BadgeCheck size={13} aria-hidden="true" className="text-ink-faint" />
                  {issuer}
                </span>
                {exam && <span className="chip">{exam}</span>}
              </div>

              <h3 className="mt-4 text-xl font-semibold text-ink">{name}</h3>
              {provider && (
                <p className="mt-2 flex items-center gap-2 text-sm text-ink-soft">
                  <GraduationCap size={16} aria-hidden="true" className="shrink-0 text-accent" />
                  Studying through {provider}
                </p>
              )}
              {description && (
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-soft">{description}</p>
              )}

              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-ink-faint">
                What it covers
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {topics.map((topic) => (
                  <li key={topic} className="chip">
                    {topic}
                  </li>
                ))}
              </ul>

              {credentialUrl && (
                <a
                  href={credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline mt-6 inline-flex"
                >
                  <ExternalLink size={16} />
                  Verify credential
                </a>
              )}
            </div>
          </article>
        )
      )}
    </div>
  </section>
)

export default Certifications
