import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import {
  BadgeCheck,
  Check,
  Copy,
  ExternalLink,
  FileText,
  GraduationCap,
  ShieldCheck,
  Trophy,
  X,
} from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { certifications } from '../../data/certifications'

// Certificate files live in src/assets/certificates, named after the entry's id
// (e.g. potraz-ctf.pdf or potraz-ctf.png). A card becomes clickable once its file exists.
const certificateFiles = import.meta.glob('../../assets/certificates/*.{pdf,png,jpg,jpeg,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const certificateFor = (id) => {
  const match = Object.entries(certificateFiles).find(([path]) =>
    path.split('/').pop().startsWith(`${id}.`),
  )
  return match && { url: match[1], isPdf: match[0].toLowerCase().endsWith('.pdf') }
}

const StatusBadge = ({ status }) => {
  const done = status === 'Earned' || status === 'Completed'
  return (
    <span
      className={`chip ${
        done
          ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-500'
          : 'border-amber-500/40 bg-amber-500/10 text-amber-500'
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full bg-current ${done ? '' : 'animate-pulse'}`} />
      {status}
    </span>
  )
}

const copyText = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    return false
  }
}

// Opens the issuer's verify page. The page can't be pre-filled, so the ID is
// copied to the clipboard first for the visitor to paste.
const verify = (url, certificateId) => {
  if (certificateId) copyText(certificateId)
  window.open(url, '_blank', 'noopener,noreferrer')
}

// Certificate ID with a copy button.
const CertificateId = ({ value }) => {
  const [copied, setCopied] = useState(false)
  const onCopy = async (e) => {
    e.stopPropagation()
    if (await copyText(value)) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }
  return (
    <span className="chip font-mono">
      ID: {value}
      <button
        type="button"
        onClick={onCopy}
        className="ml-1 text-ink-faint transition hover:text-accent"
        aria-label="Copy certificate ID"
        title="Copy certificate ID"
      >
        {copied ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
      </button>
    </span>
  )
}

// Full-screen viewer that shows the certificate on the page itself.
// It only closes with the close button or Esc, not by clicking outside.
const CertificateViewer = ({ name, certificate, certificateId, credentialUrl, onClose }) => {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Certificate: ${name}`}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-2 backdrop-blur-sm sm:p-4"
    >
      <div className="card flex max-h-full w-full max-w-7xl flex-col overflow-hidden">
        <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
          <h3 className="truncate text-sm font-semibold text-ink">{name}</h3>
          <div className="flex shrink-0 items-center gap-1">
            <a
              href={certificate.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg p-2 text-ink-soft transition hover:text-accent"
              aria-label="Open in new tab"
              title="Open in new tab"
            >
              <ExternalLink size={18} />
            </a>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-2 text-ink-soft transition hover:text-accent"
              aria-label="Close"
              autoFocus
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-auto bg-surface-2">
          {certificate.isPdf ? (
            <iframe
              src={certificate.url}
              title={`Certificate: ${name}`}
              className="h-[85vh] w-full"
            />
          ) : (
            <img
              src={certificate.url}
              alt={`Certificate: ${name}`}
              className="mx-auto max-h-[85vh] w-full object-contain"
            />
          )}
        </div>

        {(certificateId || credentialUrl) && (
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border px-4 py-3">
            {certificateId ? <CertificateId value={certificateId} /> : <span />}
            {credentialUrl && (
              <button
                type="button"
                onClick={() => verify(credentialUrl, certificateId)}
                className="btn-outline inline-flex"
                title={certificateId ? 'Copies the ID, then opens the verify page' : undefined}
              >
                <ShieldCheck size={16} />
                Verify certificate
              </button>
            )}
          </div>
        )}
      </div>
    </div>,
    document.body,
  )
}

const Certifications = () => {
  const [open, setOpen] = useState(null)

  return (
    <section id="certifications" className="section">
      <SectionHeading
        eyebrow="Certifications"
        title="Always learning"
        subtitle="Formal credentials that sit alongside the hands-on work - and the ones I'm working towards right now."
      />

      <div className={`mt-12 grid gap-5 ${certifications.length > 1 ? 'md:grid-cols-2' : ''}`}>
        {certifications.map(
          ({
            id,
            name,
            issuer,
            provider,
            exam,
            status,
            rank,
            year,
            icon: Icon,
            description,
            topics,
            certificateId,
            credentialUrl,
          }) => {
            const certificate = certificateFor(id)
            const openViewer = () => setOpen({ name, certificate, certificateId, credentialUrl })
            const clickProps = certificate
              ? {
                  role: 'button',
                  tabIndex: 0,
                  'aria-label': `View certificate: ${name}`,
                  onClick: openViewer,
                  onKeyDown: (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      openViewer()
                    }
                  },
                }
              : {}

            return (
              <article
                key={id}
                {...clickProps}
                className={`card card-hover flex flex-col gap-6 p-6 sm:flex-row sm:p-8 ${
                  certificate ? 'cursor-pointer' : ''
                }`}
              >
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
                    {year && <span className="chip">{year}</span>}
                    {rank && (
                      <span className="chip">
                        <Trophy size={13} aria-hidden="true" className="text-amber-500" />
                        Ranked #{rank}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-4 text-xl font-semibold text-ink">{name}</h3>
                  {provider && (
                    <p className="mt-2 flex items-center gap-2 text-sm text-ink-soft">
                      <GraduationCap
                        size={16}
                        aria-hidden="true"
                        className="shrink-0 text-accent"
                      />
                      Studying through {provider}
                    </p>
                  )}
                  {description && (
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-soft">
                      {description}
                    </p>
                  )}

                  {topics?.length > 0 && (
                    <>
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
                    </>
                  )}

                  {(certificate || credentialUrl) && (
                    <div className="mt-6 flex flex-wrap gap-3">
                      {certificate && (
                        <span className="btn-outline inline-flex">
                          <FileText size={16} />
                          View certificate
                        </span>
                      )}
                      {credentialUrl && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            verify(credentialUrl, certificateId)
                          }}
                          onKeyDown={(e) => e.stopPropagation()}
                          className="btn-outline inline-flex"
                          title={
                            certificateId ? 'Copies the ID, then opens the verify page' : undefined
                          }
                        >
                          <ShieldCheck size={16} />
                          Verify certificate
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </article>
            )
          },
        )}
      </div>

      {open && <CertificateViewer {...open} onClose={() => setOpen(null)} />}
    </section>
  )
}

export default Certifications
