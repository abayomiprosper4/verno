import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUpVariant } from "@/lib/animations";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const faqItems = [
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for all unworn items in their original packaging. Simply contact our support team to initiate a return, and we'll provide you with a prepaid shipping label."
  },
  {
    question: "How long does shipping take?",
    answer: "Standard shipping takes 5-7 business days within the US. Express shipping (2-3 business days) is available at checkout. International orders typically take 10-14 business days."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by location. You can see the exact cost at checkout."
  },
  {
    question: "How do I track my order?",
    answer: "Once your order ships, you'll receive an email with a tracking number. You can use this to track your package on our website or directly through the carrier's site."
  },
  {
    question: "Can I modify or cancel my order?",
    answer: "Orders can be modified or cancelled within 2 hours of placement. After that, our fulfillment process begins and changes may not be possible. Contact us immediately if you need to make changes."
  },
  {
    question: "Are your products covered by warranty?",
    answer: "All REVV-10 products come with a 1-year warranty against manufacturing defects. This covers issues with materials and craftsmanship but does not cover normal wear and tear."
  }
];

const supportInfo = [
  {
    icon: Mail,
    title: "Email Us",
    detail: "support@revv10.com",
    subtitle: "We respond within 24 hours"
  },
  {
    icon: Phone,
    title: "Call Us",
    detail: "+1 (555) 123-4567",
    subtitle: "Mon-Fri, 9AM-6PM EST"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    detail: "123 Design District",
    subtitle: "New York, NY 10001"
  },
  {
    icon: Clock,
    title: "Hours",
    detail: "Mon-Fri: 9AM-6PM",
    subtitle: "Sat: 10AM-4PM EST"
  }
];

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <main className="relative w-full min-h-screen bg-background pt-24 pb-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <motion.div
          variants={fadeInUpVariant}
          initial="hidden"
          animate="visible"
          custom={0}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-3">
            Contact & Support
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            Have a question or need assistance? We're here to help. Reach out through any of the channels below.
          </p>
        </motion.div>

        {/* Support Info Cards */}
        <motion.div
          variants={fadeInUpVariant}
          initial="hidden"
          animate="visible"
          custom={1}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 md:mb-16"
        >
          {supportInfo.map((item, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-4 sm:p-5 text-center hover:border-primary/50 transition-colors"
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                {item.title}
              </h3>
              <p className="text-sm font-medium text-foreground mb-0.5">
                {item.detail}
              </p>
              <p className="text-xs text-muted-foreground">
                {item.subtitle}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Two Column: Form + FAQ */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20">
          {/* Contact Form */}
          <motion.div
            variants={fadeInUpVariant}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-6">
              Send us a message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  required
                  className="bg-secondary border-border focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more..."
                  rows={5}
                  required
                  className="bg-secondary border-border focus:border-primary resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            variants={fadeInUpVariant}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-2">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-4 bg-card/50"
                >
                  <AccordionTrigger className="text-sm text-foreground hover:text-primary hover:no-underline py-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
};
