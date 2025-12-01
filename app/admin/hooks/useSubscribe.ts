"use client";

import { useMutation } from "@tanstack/react-query";

export function useSubscribe() {
  return useMutation({
    mutationFn: async (body: { email: string }) => {
      const res = await fetch("/api/subscriber", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Subscription failed");
      }

      return data;
    },
  });
}
