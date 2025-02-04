import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'; // This will force the page to be rendered dynamically

// This function will be called when the API route is requested
export async function GET() {
    const currentTime = new Date().toLocaleTimeString('en-US');

    return NextResponse.json({ 
        message: `Hello from the API! The current time is ${currentTime}.`
    });
}