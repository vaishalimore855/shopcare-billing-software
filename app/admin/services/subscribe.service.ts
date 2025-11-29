import { subscribeSchema } from "@/lib/validations";
import { SubscribeData } from "@/lib/types";

export const subscribeService = {
  subscribeEmail: async (data: SubscribeData) => {
    const parsed = subscribeSchema.safeParse(data);

    if (!parsed.success) {
      return {
        success: false as const,
        error: parsed.error.flatten(),
      };
    }

    console.log("SUBSCRIBER:", parsed.data.email);

    return {
      success: true as const,
      message: "Subscription successful.",
    };
  },
};
