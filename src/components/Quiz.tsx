import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useEmail } from "@/hooks/use-email";
import { Confirmation } from '@/components/ContactConfirmation';

const questions = [
  {
    id: 1,
    question: "Tell us about yourself and your business",
    type: "mixed",
    fields: [
      { id: "name", placeholder: "Enter your first name", label: "First Name", type: "text" },
      { id: "businessName", placeholder: "Enter your business name", label: "Business Name", type: "text" },
      { id: "phone", placeholder: "Enter your phone number", label: "Phone", type: "tel" },
      { id: "email", placeholder: "Enter your email address", label: "Email", type: "email" },
    ],
  },
  {
    id: 2,
    question: "What is your project about?",
    type: "textarea",
    placeholder: "Describe your project...",
  },
  {
    id: 3,
    question: "What service do you need?",
    type: "select",
    options: [
      "1 Day Funnel",
      "Website Development",
      "SaaS Product/Application",
      "Mobile App",
      "E-commerce",
      "Digital Marketing",
      "Other"
    ],
  },
  {
    id: 4,
    question: "What's your budget?",
    type: "select",
    options: ["< $1,000", "$1,000 - $5,000", "$5,000 - $10,000", "> $10,000", "I'm not sure"],
  },
  {
    id: 5,
    question: "Do you already have a website?",
    type: "select",
    options: ["Yes", "No"],
  },
  {
    id: 6,
    question: "When do you want to start?",
    type: "select",
    options: ["Immediately", "1-3 months", "3-6 months", "Not sure"],
  },
];

export const Quiz = () => {

     // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const { toast } = useToast();
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({honeypot: ""});
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [submitted, setSubmitted] = useState(false);
    const currentQuestion = questions[step];
    const { sendEmail } = useEmail();
  
    const validateField = (id: string, value: string) => {
      if (id === "phone" && !/^\d{10,15}$/.test(value)) {
        return "Phone number must be 10-15 digits.";
      }
      if (id === "email" && !/\S+@\S+\.\S+/.test(value)) {
        return "Invalid email address.";
      }
      if (!value.trim()) {
        return "This field is required.";
      }
      return ""; // No error
    };
  
    const handleAnswerChange = (id: number | string, value: string) => {
      const idAsString = id.toString(); 
      setAnswers({ ...answers, [id]: value });
      setErrors({ ...errors, [id]: validateField(idAsString, value) }); // Update validation error
    };
  
    const handleNext = () => {
      if (currentQuestion.type === "mixed") {
        const fieldErrors = currentQuestion.fields?.reduce((acc, field) => {
          const error = validateField(field.id, answers[field.id] || "");
          if (error) acc[field.id] = error;
          return acc;
        }, {} as Record<string, string>);
  
        setErrors(fieldErrors || {});
        if (Object.keys(fieldErrors || {}).length > 0) {
          toast({
            title: "Validation Error",
            description: "Please correct the highlighted errors before proceeding.",
            variant: "destructive",
            action: <ToastAction altText="Close">Close</ToastAction>,
          });
          return;
        }
      } else if (!answers[currentQuestion.id]) {
        toast({
          title: "Incomplete Answer",
          description: "Please answer the question before proceeding.",
          variant: "destructive",
          action: <ToastAction altText="Close">Close</ToastAction>,
        });
        return;
      }
  
      if (step < questions.length - 1) {
        setStep(step + 1);
      } else {
        handleSubmit();
      }
    };
  
    const handleBack = () => {
      if (step > 0) setStep(step - 1);
    };
  
    const handleSubmit = async () => {
      if (answers.honeypot) {
        toast({
          title: "Error",
          description: "Spam detected.",
          variant: "destructive",
        });
        return;
      }
      const formattedAnswers = Object.entries(answers)
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n");
    
      const formData = { message: formattedAnswers };
    
      try {
        if (import.meta.env.VITE_APP_ENV === "production") {
          await sendEmail(formData);
        }
        setSubmitted(true);
      } catch {
        toast({
          title: "Error",
          description: "Failed to submit the quiz. Please try again.",
          variant: "destructive",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      }
    };
  
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-muted/10 p-4">
        {submitted ? (
          <Confirmation />
        ) : (
          <>
            <div className="mb-8 text-center">
              <h1 className="text-2xl font-bold">Take our short quiz</h1>
              <p className="text-muted-foreground text-lg">
                Tell us about your project, and we'll get the ball rolling!
              </p>
            </div>
  
            <div className="max-w-lg w-full bg-background p-6 rounded-lg shadow-md">
              <Progress value={((step + 1) / questions.length) * 100} className="mb-6" />
              <h2 className="text-xl font-bold mb-4">{currentQuestion.question}</h2>
  
              {currentQuestion.type === "mixed" && (
                <div className="space-y-4">
                  {currentQuestion.fields?.map((field) => (
                    <div key={field.id}>
                      <label htmlFor={field.id} className="block mb-1 font-medium">
                        {field.label}
                      </label>
                      <Input
                        id={field.id}
                        placeholder={field.placeholder}
                        value={answers[field.id] || ""}
                        onChange={(e) => handleAnswerChange(field.id, e.target.value)}
                      />
                      {errors[field.id] && (
                        <p className="mt-2 text-sm text-red-500">{errors[field.id]}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
  
              {currentQuestion.type === "textarea" && (
                <Textarea
                  placeholder={currentQuestion.placeholder}
                  value={answers[currentQuestion.id] || ""}
                  onChange={(e) => handleAnswerChange(currentQuestion.id, e.target.value)}
                />
              )}
  
              {currentQuestion.type === "select" && (
                <Select
                  value={answers[currentQuestion.id] || ""}
                  onValueChange={(value) => handleAnswerChange(currentQuestion.id, value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>{currentQuestion.question}</SelectLabel>
                      {currentQuestion?.options && currentQuestion.options.map((option, index) => (
                        <SelectItem key={index} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}

              {/* Honeypot Field */}
              <Input
                type="hidden"
                id="honeypot"
                name="honeypot"
                value={answers.honeypot || ""}
                onChange={(e) => handleAnswerChange("honeypot", e.target.value)}
              />
  
              <div className="flex justify-between mt-4">
                <Button variant="ghost" onClick={handleBack} disabled={step === 0}>
                  Back
                </Button>
                <Button onClick={handleNext}>
                  {step === questions.length - 1 ? "Submit" : "Next"}
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    );
  };
  
export default Quiz;
