import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useEmail } from "@/hooks/use-email";
import { motion } from "framer-motion";

export const Newsletter = () => {
  const { toast } = useToast();
  const { sendEmail } = useEmail();
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState(""); 
  const [subscribed, setSubscribed] = useState(false); 

  const validateEmail = (email: string) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check honeypot
    if (honeypot) {
      toast({
        title: "Error",
        description: "Spam detected.",
        variant: "destructive",
      });
      return;
    }

    if (!email.trim()) {
      toast({
        title: "Validation Error",
        description: "Email is required.",
        variant: "destructive",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      return;
    }

    if (!validateEmail(email)) {
      toast({
        title: "Validation Error",
        description: "Invalid email address.",
        variant: "destructive",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      return;
    }

    try {
      const formData = { email };
      if (import.meta.env.VITE_APP_ENV === "production") {
        await sendEmail(formData);
      }
      setSubscribed(true); // Show confirmation message
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again later.",
        variant: "destructive",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  };

  return (
    <section id="newsletter">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        {subscribed ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h3 className="text-4xl md:text-5xl font-bold">Thank You!</h3>
            <p className="text-xl text-muted-foreground text-center mt-4">
              You have successfully subscribed to our newsletter. Stay tuned for updates and exclusive deals!
            </p>
          </motion.div>
        ) : (
          <>
            <h3 className="text-center text-4xl md:text-5xl font-bold">
              Join Our{" "}
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                Newsletter
              </span>
            </h3>
            <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
              Stay in touch for deals and discounts.
            </p>

            <form
              className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
              onSubmit={handleSubmit}
            >
              <Input
                placeholder="youremail@gmail.com"
                className="bg-muted/50 dark:bg-muted/80"
                aria-label="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* Honeypot Field */}
              <Input
                type="hidden"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />

              <Button type="submit">Subscribe</Button>
            </form>
          </>
        )}
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
