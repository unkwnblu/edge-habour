import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  const { email, type } = await req.json();

  if (!email || !type) {
    return NextResponse.json({ error: "Missing fields." }, { status: 400 });
  }

  if (!["employer", "candidate"].includes(type)) {
    return NextResponse.json({ error: "Invalid type." }, { status: 400 });
  }

  const { error } = await supabase
    .from("waitlist")
    .insert({ email, type });

  if (error) {
    if (error.code === "23505") {
      // unique_violation — email already registered
      return NextResponse.json(
        { error: "This email is already on the waitlist." },
        { status: 409 }
      );
    }
    console.error("Supabase error:", error);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
