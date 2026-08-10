import { Github, Linkedin, Mail, MessageCircle, Phone, Send } from 'lucide-react'
import bitBucketIcon from '../../assets/bitbucket.png'
import SectionHeading from '../ui/SectionHeading'

const details = [
  { icon: Phone, label: '+263 788 166 214', href: 'tel:+263788166214' },
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/263788166214' },
  { icon: Mail, label: 'ghsam2408@gmail.com', href: 'mailto:ghsam2408@gmail.com' },
]

const profiles = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/ghsam-2408' },
  {
    img: bitBucketIcon,
    label: 'Bitbucket',
    href: 'https://bitbucket.org/sam-junior-mavetera/workspace/overview/',
  },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/sam-junior-mavetera/' },
]

const inputClass =
  'w-full rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-ink placeholder:text-ink-faint transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30'

const Contact = () => {
  // No backend wired up yet — hand the message to the visitor's mail client.
  const handleSubmit = (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = form.get('name')
    const email = form.get('email')
    const message = form.get('message')
    const body = `${message}\n\n— ${name} (${email})`
    window.location.href = `mailto:ghsam2408@gmail.com?subject=${encodeURIComponent(
      `Portfolio enquiry from ${name}`
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="border-t border-border bg-surface/40">
      <div className="section">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Connect"
          subtitle="Open to opportunities, collaborations, and meaningful conversations."
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="font-semibold text-ink">Contact Details</h3>
              <ul className="mt-4 space-y-3">
                {details.map(({ icon: Icon, label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-3 text-sm text-ink-soft transition hover:text-accent"
                    >
                      <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-accent-ink">
                        <Icon size={16} />
                      </span>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="font-semibold text-ink">Find Me Online</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {profiles.map(({ icon: Icon, img, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline !py-2.5 text-sm"
                  >
                    {Icon ? <Icon size={16} /> : <img src={img} alt="" className="h-4 w-4" />}
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="card space-y-4 p-6">
            <h3 className="font-semibold text-ink">Send a Message</h3>
            <input name="name" type="text" required placeholder="Your Name" className={inputClass} />
            <input
              name="email"
              type="email"
              required
              placeholder="Your Email"
              className={inputClass}
            />
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Your Message"
              className={inputClass}
            />
            <button type="submit" className="btn-primary w-full">
              <Send size={17} />
              Send Message
            </button>
            <p className="text-center text-xs text-ink-faint">
              This opens your email client with the message pre-filled.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
