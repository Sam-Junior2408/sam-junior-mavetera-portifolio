import SectionHeading from '../ui/SectionHeading'
import { skillGroups } from '../../data/skills'

const Skills = () => (
  <section id="skills" className="border-y border-border bg-surface/40">
    <div className="section">
      <SectionHeading
        eyebrow="Skills"
        title="The stack I build with"
        subtitle="From the API contract down to the container that runs it - here's what I reach for day to day."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map(({ id, title, icon: Icon, blurb, items, wide }) => (
          <div
            key={id}
            className={`card card-hover flex flex-col p-6 ${wide ? 'md:col-span-2 lg:col-span-3' : ''}`}
          >
            <div className="flex items-center gap-3">
              <Icon size={20} className="shrink-0 text-accent" />
              <h3 className="font-semibold text-ink">{title}</h3>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{blurb}</p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {items.map(({ name, icon: ItemIcon }) => (
                <li key={name} className="chip group hover:border-accent/50 hover:text-accent">
                  <ItemIcon
                    size={13}
                    aria-hidden="true"
                    className="shrink-0 text-ink-faint transition group-hover:text-accent"
                  />
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Skills
