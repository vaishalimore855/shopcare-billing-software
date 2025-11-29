import { NextResponse } from "next/server";
import { adminService } from "@/app/admin/services/admin.service";
import { AdminLoginData } from "@/lib/types";

export async function POST(req: Request) {
  const body: AdminLoginData = await req.json();
  const result = await adminService.login(body);

  return NextResponse.json(result, {
    status: result.success ? 200 : 401,
  });
}
