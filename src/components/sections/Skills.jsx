import SectionHeading from '../ui/SectionHeading'
import { skillGroups } from '../../data/skills'

const Skills = () => (
  <section id="skills" className="border-y border-border bg-surface/40">
    <div className="section">
      <SectionHeading
        eyebrow="Skills"
        title="The stack I build with"
        subtitle="From the API contract down to the container that runs it — here's what I reach for day to day."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map(({ id, title, icon: Icon, blurb, items }) => (
          <div key={id} className="card card-hover flex flex-col p-6">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent to-violet text-white">
                <Icon size={19} />
              </div>
              <h3 className="font-semibold text-ink">{title}</h3>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{blurb}</p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {items.map((item) => (
                <li key={item} className="chip hover:border-accent/50 hover:text-accent">
                  {item}
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
