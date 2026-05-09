import emailjs from "emailjs-com";

export const useEmail = () => {
  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
  const userID = import.meta.env.VITE_EMAILJS_USER_ID as string | undefined;

  const isEmailConfigured = Boolean(serviceID && templateID && userID);

  const sendEmail = async (templateData: Record<string, unknown>) => {
    if (!isEmailConfigured || !serviceID || !templateID || !userID) {
      throw new Error(
        "EmailJS is not configured. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_USER_ID to your .env file."
      );
    }
    return emailjs.send(serviceID, templateID, templateData, userID);
  };

  return { sendEmail, isEmailConfigured };
};
