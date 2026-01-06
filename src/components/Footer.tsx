import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, Mail } from "lucide-react";
import { fadeInUpVariant } from "@/lib/animations";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const quickLinks = [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  const paymentMethods = ["Visa", "Mastercard", "Amex", "PayPal"];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ];

  return (
    <footer className="bg-black border-t border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Quick Links */}
          <motion.div
            variants={fadeInUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <h3 className="text-xs uppercase tracking-widest text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            variants={fadeInUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <h3 className="text-xs uppercase tracking-widest text-foreground mb-4">
              Follow Us
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            variants={fadeInUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            <h3 className="text-xs uppercase tracking-widest text-foreground mb-4">
              Stay Updated
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe for exclusive offers and updates
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter email"
                className="bg-secondary/50 border-border/50 text-sm"
              />
              <Button size="sm" className="shrink-0">
                <Mail size={16} />
              </Button>
            </div>
          </motion.div>

          {/* Payment & Legal */}
          <motion.div
            variants={fadeInUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
          >
            <h3 className="text-xs uppercase tracking-widest text-foreground mb-4">
              Payment
            </h3>
            <div className="flex gap-2 mb-6">
              {paymentMethods.map((method) => (
                <div
                  key={method}
                  className="px-2 py-1 bg-secondary/50 rounded text-[10px] text-muted-foreground border border-border/30"
                >
                  {method}
                </div>
              ))}
            </div>
            <div className="flex gap-4 text-xs text-muted-foreground">
              {legalLinks.map((link, index) => (
                <span key={link.name} className="flex items-center gap-4">
                  <a
                    href={link.href}
                    className="hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                  {index < legalLinks.length - 1 && (
                    <span className="text-border">|</span>
                  )}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border/20 text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 REVV-10. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
