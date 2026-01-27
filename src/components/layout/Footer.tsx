import { Link } from 'react-router-dom'
import { Container } from '../ui/Container'
import { Github, Twitter, Mail } from 'lucide-react'
import logoWhite from '../../assets/app-icon-white-noBackgroud.png'

const footerLinks = {
  Product: [
    { name: 'Features', href: '/features' },
    { name: 'Download', href: '#download' },
  ],
  Company: [
    { name: 'About', href: '#' },
    { name: 'Contact', href: 'mailto:support@addit.dev' },
  ],
  Legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
}

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'Email', icon: Mail, href: 'mailto:support@addit.dev' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {/* Brand */}
            <div className="col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <img src={logoWhite} alt="Addit" className="w-8 h-8 object-contain" />
                <span className="text-white font-semibold text-xl">Addit</span>
              </Link>
              <p className="text-foreground-secondary text-sm max-w-xs mb-6">
                AI-powered call recording and transcription. Privacy-first, always.
              </p>
              {/* Social links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-foreground-secondary hover:text-white hover:bg-white/10 transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-white font-semibold mb-4">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      {link.href.startsWith('/') ? (
                        <Link
                          to={link.href}
                          className="text-foreground-secondary hover:text-white transition-colors text-sm"
                        >
                          {link.name}
                        </Link>
                      ) : link.href.startsWith('#') ? (
                        <a
                          href={link.href}
                          onClick={(e) => {
                            e.preventDefault()
                            const element = document.querySelector(link.href)
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' })
                            }
                          }}
                          className="text-foreground-secondary hover:text-white transition-colors text-sm"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <a
                          href={link.href}
                          className="text-foreground-secondary hover:text-white transition-colors text-sm"
                        >
                          {link.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground-muted text-sm">
            &copy; {new Date().getFullYear()} Addit. All rights reserved.
          </p>
          <p className="text-foreground-muted text-sm">
            Made with care for your privacy.
          </p>
        </div>
      </Container>
    </footer>
  )
}
