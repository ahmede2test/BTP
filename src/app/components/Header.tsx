import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="text-white text-xl hidden sm:block">Contrack FM</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <button className="hidden md:block px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors">
            Get Quote
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className="text-gray-300 hover:text-white transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button className="mt-4 px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors">
                Get Quote
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
