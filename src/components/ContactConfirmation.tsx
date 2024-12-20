import { motion } from "framer-motion";
import { Button } from '@/components/ui/button';
export const Confirmation = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <h1 className="text-3xl font-bold">Thank You!</h1>
      <p className="mt-4 text-muted-foreground text-lg">
        We’ve received your answers and will be in touch shortly!
        <br />
        In the meantime, feel free to schedule a discovery call.
      </p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <a
          href="https://calendly.com/jarvis-highplainsmedia"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Button className="mt-6">Schedule a Call</Button>
        </a>
      </motion.div>
    </motion.div>
  );
};
