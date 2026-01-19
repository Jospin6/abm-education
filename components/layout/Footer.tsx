"use client";
import Link  from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const footerLinks = {
  programmes: [
    { name: 'ABM Tech Club', path: '/programmes/tech-club' },
    { name: 'ABM Élite Internationale', path: '/programmes/elite-internationale' },
    { name: 'Un Élève, Un Ordinateur', path: '/programmes/un-eleve-un-ordinateur' },
    { name: 'ABM Education Award', path: '/programmes/education-award' },
    { name: 'Bourse Denis Mukwege', path: '/programmes/bourse-mukwege' },
  ],
  organisation: [
    { name: 'À propos', path: '/a-propos' },
    { name: 'Notre équipe', path: '/equipe' },
    { name: 'Impact', path: '/impact' },
    { name: 'Ressources', path: '/ressources' },
    { name: 'Contact', path: '/contact' },
  ],
  engagement: [
    { name: 'Devenir partenaire', path: '/partenariats' },
    { name: 'Faire un don', path: '/partenariats' },
    { name: 'Devenir mentor', path: '/partenariats' },
    { name: 'Inscrire mon école', path: '/contact' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-lg">ABM</span>
              </div>
              <div>
                <span className="font-bold text-lg">ABM-EDUCATION</span>
                <p className="text-xs text-primary-foreground/70">Africa Bright Minds</p>
              </div>
            </Link>
            <p className="text-primary-foreground/80 mb-6 max-w-sm">
              Former l'excellence africaine. Connecter l'Afrique au monde. 
              L'éducation aujourd'hui, l'excellence demain.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-primary-foreground">Kinshasa, RDC</p>
                  <p>Siège social</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-primary-foreground">Bukavu, RDC</p>
                  <p>Bureau régional</p>
                </div>
              </div>
              <a href="mailto:contact@abm-education.org" className="flex items-center gap-3 hover:text-secondary transition-colors">
                <Mail className="w-5 h-5 text-secondary" />
                contact@abm-education.org
              </a>
              <a href="tel:+243000000000" className="flex items-center gap-3 hover:text-secondary transition-colors">
                <Phone className="w-5 h-5 text-secondary" />
                +243 00 000 0000
              </a>
            </div>
          </div>

          {/* Programmes */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary">Programmes</h4>
            <ul className="space-y-3">
              {footerLinks.programmes.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Organisation */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary">Organisation</h4>
            <ul className="space-y-3">
              {footerLinks.organisation.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* S'engager */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary">S'engager</h4>
            <ul className="space-y-3">
              {footerLinks.engagement.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/60 text-center md:text-left">
              © {new Date().getFullYear()} ABM-EDUCATION. Tous droits réservés. 
              <span className="block md:inline md:ml-2">L'éducation aujourd'hui, l'excellence demain.</span>
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
