import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast"
import { useState } from "react";
import emailjs from "emailjs-com";

export function ContactForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const { toast } = useToast(); 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: "" });
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not valid.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const serviceID = `${import.meta.env.VITE_EMAILJS_SERVICE_ID}`;
      const templateID = `${import.meta.env.VITE_EMAILJS_TEMPLATE_ID}`;
      const userID = `${import.meta.env.VITE_EMAILJS_VITE_EMAILJS_USER_ID}`;

      emailjs
        .send(serviceID, templateID, formData, userID)
        .then(
          (response) => {
            toast({
              title: "Message Sent",
              description: "Your message was sent successfully!",
              variant: "outline",
              action: <ToastAction altText="Close">Close</ToastAction>
            });
            setFormData({ name: "", email: "", message: "" }); // Clear form
          },
          (err) => {
            toast({
              title: "Error",
              description: "Failed to send the message. Please try again.",
              variant: "destructive",
              action: <ToastAction altText="Try again">Try again</ToastAction>
            });
          }
        );
    } else {
      toast({
        title: "Validation Error",
        description: "Please fill out all required fields correctly.",
        variant: "destructive",
        action: <ToastAction altText="Try again">Try again</ToastAction>
      });
    }
  };

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      onSubmit={handleSubmit}
      {...props}
    >
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl sm:text-3xl font-bold">Contact Us</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Fill out the form below to send us a message.
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email}</p>
          )}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleInputChange}
          />
          {errors.message && (
            <p className="text-sm text-red-500">{errors.message}</p>
          )}
        </div>
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </div>
    </form>
  );
}
