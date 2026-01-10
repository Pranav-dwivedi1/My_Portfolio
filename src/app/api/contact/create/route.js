import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request) {
  try {
    const formData = await request.json();

    // Basic validation
    if (!formData.name || !formData.email || !formData.mobileNo) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, Email and Mobile number are required"
        },
        { status: 400 }
      );
    }

    // Insert into Supabase
    const { data, error } = await supabase.from("contacts").insert([
      {
        name: formData.name,
        company: formData.company || null,
        mobile_no: formData.mobileNo,
        email: formData.email,
        message: formData.message || null,
        from_page: formData.fromPage || null,
        ip_address: formData.ipAddress || null,
        from_source: formData.fromSource || null
      }
    ]);

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        {
          success: false,
          message: "Database insert failed",
          error: error.message
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully"
    });

  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
        error: err.message
      },
      { status: 500 }
    );
  }
}
