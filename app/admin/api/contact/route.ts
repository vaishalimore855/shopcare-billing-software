import { NextResponse } from "next/server";
import { contactService } from "@/app/admin/services/contact.service";
import { ContactFormData } from "@/lib/types";

export async function POST(req: Request) {
  const body: ContactFormData = await req.json();
  const result = await contactService.submitContact(body);

  return NextResponse.json(result, { status: result.success ? 200 : 400 });
}
