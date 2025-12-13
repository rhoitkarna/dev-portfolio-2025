// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Send, Mail, MapPin, Loader2 } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { useToast } from '@/hooks/use-toast';

// export const Contact = () => {
//   const { toast } = useToast();
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulate form submission
//     await new Promise((resolve) => setTimeout(resolve, 1500));

//     toast({
//       title: "Message sent!",
//       description: "Thanks for reaching out. I'll get back to you soon.",
//     });

//     setFormData({ name: '', email: '', message: '' });
//     setIsSubmitting(false);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   return (
//     <section id="contact" className="py-24 px-4 bg-muted/30">
//       <div className="max-w-4xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <span className="font-mono text-primary text-sm">// contact</span>
//           <h2 className="text-3xl md:text-4xl font-bold mt-2">
//             Get In <span className="text-primary">Touch</span>
//           </h2>
//           <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
//             Have a project in mind or just want to chat? Feel free to reach out. 
//             I'm always open to discussing new opportunities.
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-5 gap-12">
//           {/* Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="md:col-span-2 space-y-6"
//           >
//             <div className="p-6 rounded-lg bg-card border border-border">
//               <Mail className="w-6 h-6 text-primary mb-3" />
//               <h3 className="font-medium text-foreground mb-1">Email</h3>
//               <a 
//                 href="mailto:rohitkarn627@gmail.com" 
//                 className="text-muted-foreground hover:text-primary transition-colors"
//               >
//                 rohitkarn627@gmail.com
//               </a>
//             </div>

//             <div className="p-6 rounded-lg bg-card border border-border">
//               <MapPin className="w-6 h-6 text-primary mb-3" />
//               <h3 className="font-medium text-foreground mb-1">Location</h3>
//               <p className="text-muted-foreground">Kathmandu, Nepal</p>
//             </div>

//             <div className="p-4 rounded-lg border border-primary/30 bg-primary/5">
//               <p className="text-sm text-primary font-mono">
//                 // Currently available for freelance work and full-time positions
//               </p>
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.form
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//             onSubmit={handleSubmit}
//             className="md:col-span-3 space-y-6"
//           >
//             <div className="grid sm:grid-cols-2 gap-4">
//               <div className="space-y-2">
//                 <label htmlFor="name" className="text-sm font-medium text-foreground">
//                   Name
//                 </label>
//                 <Input
//                   id="name"
//                   name="name"
//                   placeholder="John Smith"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="bg-card border-border focus:border-primary"
//                 />
//               </div>
//               <div className="space-y-2">
//                 <label htmlFor="email" className="text-sm font-medium text-foreground">
//                   Email
//                 </label>
//                 <Input
//                   id="email"
//                   name="email"
//                   type="email"
//                   placeholder="john@example.com"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="bg-card border-border focus:border-primary"
//                 />
//               </div>
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="message" className="text-sm font-medium text-foreground">
//                 Message
//               </label>
//               <Textarea
//                 id="message"
//                 name="message"
//                 placeholder="Tell me about your project..."
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 rows={6}
//                 className="bg-card border-border focus:border-primary resize-none"
//               />
//             </div>

//             <Button 
//               type="submit" 
//               disabled={isSubmitting}
//               className="w-full sm:w-auto"
//             >
//               {isSubmitting ? (
//                 <>
//                   <Loader2 className="w-4 h-4 mr-2 animate-spin" />
//                   Sending...
//                 </>
//               ) : (
//                 <>
//                   <Send className="w-4 h-4 mr-2" />
//                   Send Message
//                 </>
//               )}
//             </Button>
//           </motion.form>
//         </div>
//       </div>
//     </section>
//   );
// };


import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';

const API_BASE_URL = import.meta.env.VITE_EMAIL_JS_SERVICE; 


export const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

   console.log("Env", import.meta.env.VITE_EMAIL_JS_TEMPLATE);

  // Send email function using EmailJS
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, email, message } = formData;

    try {
      // Sending email using EmailJS
      const response = await emailjs.send(
        import.meta.env.VITE_EMAIL_JS_SERVICE,     
        import.meta.env.VITE_EMAIL_JS_TEMPLATE,    
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        import.meta.env.VITE_EMAIL_JS_USER      
      );

      // Display success message
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });

      // Clear form data
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      // Display error message
      toast({
        title: "Error",
        description: "There was an issue sending your message. Please try again later.",
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm">// contact</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out. 
            I'm always open to discussing new opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-6"
          >
            <div className="p-6 rounded-lg bg-card border border-border">
              <Mail className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-medium text-foreground mb-1">Email</h3>
              <a 
                href="mailto:rohitkarn627@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                rohitkarn627@gmail.com
              </a>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border">
              <MapPin className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-medium text-foreground mb-1">Location</h3>
              <p className="text-muted-foreground">Kathmandu, Nepal</p>
            </div>

            <div className="p-4 rounded-lg border border-primary/30 bg-primary/5">
              <p className="text-sm text-primary font-mono">
                // Currently available for freelance work and full-time positions
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="md:col-span-3 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-card border-border focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-card border-border focus:border-primary"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="bg-card border-border focus:border-primary resize-none"
              />
            </div>

            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full sm:w-auto"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
