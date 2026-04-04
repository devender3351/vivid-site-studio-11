import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import vrLounge from "@/assets/vr-lounge.jpg";
import TiltCard from "@/components/TiltCard";

const info = [
  { icon: Phone, label: "Phone", value: "+1 (555) 987-6543" },
  { icon: Mail, label: "Email", value: "info@vrzone.com" },
  { icon: Clock, label: "Hours", value: "Mon–Sat: 10 AM – 9 PM" },
  { icon: MapPin, label: "Location", value: "123 Innovation Blvd, Tech City, TX 75001" },
];

const ContactSection = () => (
  <section id="contact" className="py-32 relative overflow-hidden">
    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-5 mb-20"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Get In Touch</p>
        <h2 className="apple-text-large">Contact Us</h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Interactive venue image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="group rounded-3xl overflow-hidden relative cursor-pointer"
        >
          <img
            src={vrLounge}
            alt="VR Zone venue"
            loading="lazy"
            width={1024}
            height={768}
            className="w-full h-full min-h-[300px] object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-lg font-bold mb-1">Visit Our Venue</p>
            <p className="text-sm text-muted-foreground">Experience VR Zone in person</p>
          </div>
        </motion.div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          {info.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            >
              <TiltCard className="rounded-3xl h-full" tiltAmount={12}>
                <div className="group flex flex-col items-center text-center space-y-4 p-8 rounded-3xl glass cursor-default h-full justify-center">
                  <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-500">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <p className="font-semibold">{item.label}</p>
                  <p className="text-muted-foreground text-sm">{item.value}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
