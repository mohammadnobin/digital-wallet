'use client'
import { 
  Wallet,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Download,
  Shield,
  Award,
  Heart,
  Globe,
  Clock,
  Lock,

} from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function FooterSection() {

  const pathName = usePathname();
  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Security', href: '#security' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'API Documentation', href: '#api' },
      { name: 'Integrations', href: '#integrations' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press', href: '#press' },
      { name: 'Blog', href: '#blog' },
      { name: 'Investors', href: '#investors' },
      { name: 'Partners', href: '#partners' }
    ],
    support: [
      { name: 'Help Center', href: '#help' },
      { name: 'Contact Us', href: '#contact' },
      { name: 'Live Chat', href: '#chat' },
      { name: 'Status Page', href: '#status' },
      { name: 'Community', href: '#community' },
      { name: 'Tutorials', href: '#tutorials' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'Compliance', href: '#compliance' },
      { name: 'Security Policy', href: '#security-policy' },
      { name: 'Refund Policy', href: '#refunds' }
    ]
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#facebook', name: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: '#twitter', name: 'Twitter' },
    { icon: <Instagram className="w-5 h-5" />, href: '#instagram', name: 'Instagram' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#linkedin', name: 'LinkedIn' },
    { icon: <Youtube className="w-5 h-5" />, href: '#youtube', name: 'YouTube' }
  ];

    if (pathName.startsWith("/dashboard") || pathName.startsWith("/adminDashboard")) {
    return null;
  }

  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-400 rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-indigo-400 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-pink-400 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="bg-white p-2 rounded-xl mr-3">
                  <Wallet className="w-8 h-8 text-primary" />
                </div>
                <span className="text-2xl font-bold">DigitalWallet</span>
              </div>
              
              <p className="text-white mb-6 leading-relaxed">
                The future of digital payments. Send, receive, and manage your money 
                with the security and convenience you deserve. Trusted by millions worldwide.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-white">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>digitalwallet666@gmail.com</span>
                </div>
                <div className="flex items-center text-white">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-white">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>San Francisco, CA, USA</span>
                </div>
                <div className="flex items-center text-white">
                  <Clock className="w-5 h-5 mr-3" />
                  <span>24/7 Customer Support</span>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold mb-3 text-white">Follow Us</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="bg-white text-primary bg-opacity-50 hover:bg-primary/20 hover:text-white p-3 rounded-xl transition-colors duration-300 hover:scale-110 transform"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white hover:text-white duration-300 hover:pl-2 transform transition-all"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white hover:text-white  duration-300 hover:pl-2 transform transition-all"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white hover:text-white duration-300 hover:pl-2 transform transition-all"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white hover:text-white duration-300 hover:pl-2 transform transition-all"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <span className="text-white">
                © 2024 PurpleWallet. All rights reserved.
              </span>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-white">
                <Heart className="w-4 h-4 mr-2 text-red-400" />
                Made with love in San Francisco
              </div>
              <div className="flex space-x-4">
                <a href="#privacy" className="text-white hover:text-white transition-colors duration-300">
                  Privacy
                </a>
                <a href="#terms" className="text-white hover:text-white transition-colors duration-300">
                  Terms
                </a>
                <a href="#cookies" className="text-white hover:text-white transition-colors duration-300">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}