import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";
import { ToastAction } from "@/components/ui/toast";

export const Newsletter = () => {
  const { toast } = useToast();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

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

    const serviceID = `${import.meta.env.VITE_EMAILJS_SERVICE_ID}`;
    const templateID = `${import.meta.env.VITE_EMAILJS_TEMPLATE_ID}`;
    const userID = `${import.meta.env.VITE_EMAILJS_USER_ID}`;

    emailjs
      .send(serviceID, templateID, { email }, userID)
      .then(
        (response) => {
          toast({
            title: "Success",
            description: "You have successfully subscribed to our newsletter!",
            variant: "outline",
            action: <ToastAction altText="Close">Close</ToastAction>,
          });
          setEmail(""); // Clear email input
        },
        (err) => {
          toast({
            title: "Error",
            description: "Failed to subscribe. Please try again later.",
            variant: "destructive",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        }
      );
  };

  return (
    <section id="newsletter">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
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
          <Button type="submit">Subscribe</Button>
        </form>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
