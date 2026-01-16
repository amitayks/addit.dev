import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo and Copyright */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-sm text-gray-400">
              {currentYear} Addit. All rights reserved.
            </span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="text-sm text-gray-400 hover:text-primary transition-smooth"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-gray-400 hover:text-primary transition-smooth"
            >
              Terms of Service
            </Link>
            <a
              href="mailto:support@addit.dev"
              className="text-sm text-gray-400 hover:text-primary transition-smooth"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
