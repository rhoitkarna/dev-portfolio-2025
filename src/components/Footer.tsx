import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'github.com/rhoitkarna', label: 'GitHub' },
  { icon: Linkedin, href: 'linkedin.com/in/rohit-karna', label: 'LinkedIn' },
  { icon: Twitter, href: 'x.com/rhoitkarna', label: 'Twitter' },
];

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo / Name */}
          <div className="text-center md:text-left">
            <a href="#" className="font-mono text-xl font-bold text-primary">
              &lt;RK /&gt;
            </a>
            <p className="text-sm text-muted-foreground mt-1">
              Full Stack Developer
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-md hover:bg-muted transition-colors"
              >
                <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            Built with <Heart className="w-4 h-4 text-destructive fill-destructive" /> using React & Tailwind
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2 font-mono">
            © {new Date().getFullYear()} Rohit Karna. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
