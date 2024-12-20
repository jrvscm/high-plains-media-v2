import { ContactForm } from "./ContactForm";

export const Contact = () => {
  return (
    <div id="contact" className="grid min-h-screen lg:grid-cols-2">
      {/* Form Section */}
      <div className="flex flex-col justify-center p-6 md:p-10">
        <div className="w-full max-w-md mx-auto">
          <ContactForm />
        </div>
      </div>
      {/* Testimonial Section */}
      <div className="hidden sm:flex relative bg-muted dark:bg-gray-800 text-foreground dark:text-white flex items-center justify-center p-10">
        <div className="relative z-10 text-center flex flex-col justify-center items-center max-w-md space-y-10">
          <h2 className="text-5xl font-semibold">High Plains Media</h2>
          <p className="text-2xl italic">
            "High Plains Media transformed our online presence with their expertise. Our website traffic and conversions have skyrocketed!"
          </p>
          <p className="text-2xl">- Future You, CEO of Your Company</p>
        </div>
        {/* Background for Testimonial Section */}
        <img
          src="/images/mobile-apps-min2.png"
          alt="Testimonial Background"
          className="absolute inset-0 h-full w-full object-cover opacity-20 dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
};

export default Contact;
