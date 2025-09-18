import React from 'react';
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
  Users,
  ArrowRight,
  Heart,
  Globe,
  Clock,
  HelpCircle,
  FileText,
  Lock,
  Star,
  CreditCard,
  Smartphone
} from 'lucide-react';

export default function FooterSection() {
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

  const trustBadges = [
    { icon: <Shield className="w-8 h-8" />, title: 'SOC 2 Certified', desc: 'Security Audited' },
    { icon: <Award className="w-8 h-8" />, title: 'ISO 27001', desc: 'Internationally Recognized' },
    { icon: <Lock className="w-8 h-8" />, title: 'PCI DSS', desc: 'Payment Secure' },
    { icon: <Globe className="w-8 h-8" />, title: 'GDPR Compliant', desc: 'Privacy Protected' }
  ];

  const quickStats = [
    { value: '5M+', label: 'Active Users' },
    { value: '180+', label: 'Countries' },
    { value: '$2B+', label: 'Processed' },
    { value: '99.9%', label: 'Uptime' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-400 rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-indigo-400 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-pink-400 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-purple-800 border-opacity-30">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Stay Updated with 
                <span className="text-purple-300"> PurpleWallet</span>
              </h3>
              <p className="text-purple-100 text-lg mb-6">
                Get the latest updates, tips, and exclusive offers delivered to your inbox. 
                Join 50,000+ subscribers who stay ahead of the curve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 bg-white bg-opacity-10 backdrop-blur-sm border border-purple-400 border-opacity-30 rounded-xl text-black placeholder-purple-600 focus:outline-none focus:border-purple-300 focus:bg-opacity-20 transition-all duration-300"
                  />
                </div>
                <button className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-xl font-semibold transition-colors duration-300 flex items-center">
                  Subscribe
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
              <p className="text-purple-200 text-sm mt-3">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {quickStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-purple-300 mb-2">{stat.value}</div>
                  <div className="text-purple-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="bg-purple-600 p-2 rounded-xl mr-3">
                  <Wallet className="w-8 h-8 text-white" />
                </div>
                <span className="text-2xl font-bold">PurpleWallet</span>
              </div>
              
              <p className="text-purple-100 mb-6 leading-relaxed">
                The future of digital payments. Send, receive, and manage your money 
                with the security and convenience you deserve. Trusted by millions worldwide.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-purple-200">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>support@purplewallet.com</span>
                </div>
                <div className="flex items-center text-purple-200">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-purple-200">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>San Francisco, CA, USA</span>
                </div>
                <div className="flex items-center text-purple-200">
                  <Clock className="w-5 h-5 mr-3" />
                  <span>24/7 Customer Support</span>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold mb-3 text-purple-300">Follow Us</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="bg-purple-800 bg-opacity-50 hover:bg-purple-600 p-3 rounded-xl transition-colors duration-300 hover:scale-110 transform"
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
              <h4 className="font-bold text-lg mb-6 text-purple-300">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-purple-100 hover:text-white transition-colors duration-300 hover:pl-2 transform transition-all"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-purple-300">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-purple-100 hover:text-white transition-colors duration-300 hover:pl-2 transform transition-all"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-purple-300">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-purple-100 hover:text-white transition-colors duration-300 hover:pl-2 transform transition-all"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-purple-300">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-purple-100 hover:text-white transition-colors duration-300 hover:pl-2 transform transition-all"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* App Download Section */}
        <div className="py-12 border-t border-b border-purple-800 border-opacity-30">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Download PurpleWallet Today
              </h3>
              <p className="text-purple-100 mb-6">
                Available on all major platforms. Start your journey to smarter finances.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-black hover:bg-gray-800 px-6 py-4 rounded-xl transition-colors duration-300 flex items-center">
                  <Smartphone className="w-6 h-6 mr-3" />
                  <div className="text-left">
                    <div className="text-xs text-gray-300">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </button>
                <button className="bg-black hover:bg-gray-800 px-6 py-4 rounded-xl transition-colors duration-300 flex items-center">
                  <Download className="w-6 h-6 mr-3" />
                  <div className="text-left">
                    <div className="text-xs text-gray-300">Get it on</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-8 h-8" />
                </div>
                <div className="font-bold">4.9/5 Rating</div>
                <div className="text-purple-200 text-sm">App Store</div>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8" />
                </div>
                <div className="font-bold">5M+ Downloads</div>
                <div className="text-purple-200 text-sm">Worldwide</div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="py-12 border-b border-purple-800 border-opacity-30">
          <h3 className="text-2xl font-bold text-center mb-8">
            Trusted & Certified
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {trustBadges.map((badge, index) => (
              <div key={index} className="text-center group">
                <div className="bg-purple-800 bg-opacity-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600 transition-colors duration-300">
                  <div className="text-purple-300 group-hover:text-white transition-colors duration-300">
                    {badge.icon}
                  </div>
                </div>
                <h4 className="font-bold mb-2">{badge.title}</h4>
                <p className="text-purple-200 text-sm">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <span className="text-purple-200">
                © 2024 PurpleWallet. All rights reserved.
              </span>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-purple-200">
                <Heart className="w-4 h-4 mr-2 text-red-400" />
                Made with love in San Francisco
              </div>
              <div className="flex space-x-4">
                <a href="#privacy" className="text-purple-200 hover:text-white transition-colors duration-300">
                  Privacy
                </a>
                <a href="#terms" className="text-purple-200 hover:text-white transition-colors duration-300">
                  Terms
                </a>
                <a href="#cookies" className="text-purple-200 hover:text-white transition-colors duration-300">
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