import { contactSchema } from "@/lib/validations";
import { ContactFormData } from "@/lib/types";

export const contactService = {
  submitContact: async (data: ContactFormData) => {
    const parsed = contactSchema.safeParse(data);

    if (!parsed.success) {
      return {
        success: false as const,
        error: parsed.error.flatten(),
      };
    }

    // Todo: Save to DB or send email
    console.log("CONTACT SUBMITTED:", parsed.data);

    return {
      success: true as const,
      message: "Contact form submitted successfully.",
    };
  },
};
