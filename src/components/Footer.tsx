import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/vrzone", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/vrzone", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com/vrzone", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/vrzone", label: "LinkedIn" },
];

const Footer = () => (
  <footer className="py-20 border-t border-border/20">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2 space-y-5">
          <h3 className="text-2xl font-bold">
            VR <span className="text-gradient">Zone</span>
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
            Immersive VR entertainment, training, and learning experiences founded by Dr. Devender Rapolu. Transforming how the world experiences virtual reality.
          </p>
          <div className="flex gap-3 pt-2">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="h-11 w-11 rounded-2xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-500"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <h4 className="font-semibold">Quick Links</h4>
          <nav className="flex flex-col gap-3">
            {["About", "Services", "Testimonials", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                {l}
              </a>
            ))}
          </nav>
        </div>

        <div className="space-y-5">
          <h4 className="font-semibold">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <span>+1 (555) 987-6543</span>
            <span>info@vrzone.com</span>
            <span>Mon–Sat: 10 AM – 9 PM</span>
            <span>123 Innovation Blvd,<br />Tech City, TX 75001</span>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-border/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} VR Zone. All rights reserved.
        </p>
        <div className="flex gap-8">
          <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
