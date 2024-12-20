import emailjs from "emailjs-com";

export const useEmail = () => {
  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
  const userID = import.meta.env.VITE_EMAILJS_USER_ID as string;

  if (!serviceID || !templateID || !userID) {
    throw new Error("EmailJS environment variables are not properly configured.");
  }

  const sendEmail = async (templateData: Record<string, unknown>) => {
    return emailjs.send(serviceID, templateID, templateData, userID);
  };

  return { sendEmail };
};
