"use client";

import { useMutation } from "@tanstack/react-query";

interface ContactBody {
  fullName: string;
  email: string;
  phone: string;
  businessName?: string;
  heardAboutUs: string;
  message: string;
}

export function useContactForm() {
  return useMutation({
    mutationFn: async (body: ContactBody) => {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      return data;
    },
  });
}
