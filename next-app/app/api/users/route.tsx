// GET - getting data
// POST - creating data
// PUT - updating data
// If you want to return markup or HTML content, we use page.tsx
// otherwise if you want to handle HTTP requests, we use route.tsx. Not both.

// How to get api endpoint for getting an object
import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  // fetch users from a db
  return NextResponse.json([
    { id: 1, name: "Mosh" },
    { id: 2, name: "Hyunwook" },
  ]);
}