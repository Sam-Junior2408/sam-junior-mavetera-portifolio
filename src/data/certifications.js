import { Flag, Network } from 'lucide-react'

/**
 * `status`: 'In progress', 'Earned' or 'Completed' (for competitions).
 * `rank`: final placing in a competition (optional); `year`: when it happened (optional).
 * `provider`: where the course is taken (optional); `description`: one line (optional).
 * `credentialUrl`: the verification link once earned (null hides the button).
 * `certificateId`: the ID printed on the certificate; copied for the visitor when they verify.
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
  {
    id: 'potraz-ctf',
    name: 'POTRAZ National Capture the Flag Competition',
    issuer: 'POTRAZ × CTFROOM',
    status: 'Completed',
    rank: 28,
    year: 2026,
    icon: Flag,
    topics: [
      'Web exploitation',
      'Cryptography',
      'Forensics',
      'Reverse engineering',
      'Boot2Root',
      'Mobile',
      'Blockchain',
      'Steganography',
    ],
    description:
      'Competed in the national cybersecurity Capture the Flag challenge hosted by POTRAZ on CTFROOM, finishing 28th overall.',
    certificateId: 'CTFR-EVT-B40670E7F0',
    credentialUrl: 'https://app.ctfroom.com/certverify',
  },
]
