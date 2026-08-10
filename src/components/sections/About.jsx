import { Boxes, GitBranch, ShieldCheck, Workflow } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

const principles = [
  {
    icon: Boxes,
    title: 'Clean architecture',
    text: 'Layered services with clear domain boundaries, so features land without ripple effects.',
  },
  {
    icon: ShieldCheck,
    title: 'Security first',
    text: 'JWT auth, role-scoped endpoints, and validated inputs baked in from the first commit.',
  },
  {
    icon: Workflow,
    title: 'Event-driven',
    text: 'Kafka topics keep services decoupled and resilient when one of them has a bad day.',
  },
  {
    icon: GitBranch,
    title: 'Ship it properly',
    text: 'Versioned schemas with Flyway, containers with Docker, orchestration with Kubernetes and Helm.',
  },
]

const About = () => (
  <section id="about" className="section">
    <SectionHeading
      eyebrow="About"
      title="Turning complex problems into maintainable systems"
      subtitle="I'm a software engineer focused on building real-world systems with clean architecture, security best practices, and scalable backend APIs. Lately most of my time goes into distributed Spring Boot services — designing the contracts between them, the events they exchange, and the pipeline that gets them running in a cluster."
    />

    <div className="mt-12 grid gap-4 sm:grid-cols-2">
      {principles.map(({ icon: Icon, title, text }) => (
        <div key={title} className="card card-hover p-6">
          <Icon size={22} className="text-accent" />
          <h3 className="mt-4 font-semibold text-ink">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{text}</p>
        </div>
      ))}
    </div>
  </section>
)

export default About
