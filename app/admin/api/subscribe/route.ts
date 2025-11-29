import { NextResponse } from "next/server";
import { subscribeService } from "@/app/admin/services/subscribe.service";
import { SubscribeData } from "@/lib/types";

export async function POST(req: Request) {
  const body: SubscribeData = await req.json();
  const result = await subscribeService.subscribeEmail(body);

  return NextResponse.json(result, { status: result.success ? 200 : 400 });
}
