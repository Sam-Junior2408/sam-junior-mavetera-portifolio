import { Network } from 'lucide-react'

/**
 * `status`: 'In progress' or 'Earned'.
 * `provider`: where the course is taken (optional); `description`: one line (optional).
 * `credentialUrl`: the verification link once earned (null hides the button).
 */
export const certifications = [
  {
    id: 'ccna',
    name: 'CCNA - Cisco Certified Network Associate',
    issuer: 'Cisco',
    provider: 'University of Zimbabwe',
    exam: 'Exam 200-301',
    status: 'In progress',
    icon: Network,
    topics: [
      'Network fundamentals',
      'Network access (VLANs, switching)',
      'IP connectivity (routing, OSPF)',
      'IP services (DHCP, DNS, NAT)',
      'Security fundamentals',
      'Automation & programmability',
    ],
    credentialUrl: null,
  },
]
