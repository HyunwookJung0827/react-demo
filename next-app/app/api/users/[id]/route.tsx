// [3-Getting a Single Object]
// Try http://localhost:3000/api/users/1 or http://localhost:3000/api/users/11
import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Props {
  params: { id: number };
}

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // Fetch data from a db
  // If not found, return 404 error
  // Else return data
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({ id: 1, name: "Mosh" });
}

export async function PUT(
  request: NextResponse,
  { params }: { params: { id: number } }
) {
  // 1. Validate the request body
  const body = await request.json();
  // 2. If invalid, return 400
  const validation = schema.safeParse(body); // parse() throws an exception if there is a validation error, safeParse() doesn't
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  // 3. Fetch the user with the given id
  // 4. If doesn't exist, return 404 not found
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  // 5. Update the user
  // 6. Return the updated user
  return NextResponse.json({ id: 1, name: body.name });
}

export function DELETE(
  request: NextResponse,
  { params }: { params: { id: number } }
) {
  // 1. Fetch user from db
  // 2. If not found, return 404
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  // 3. Delete the user
  // 4. Return 200
  return NextResponse.json({});
}
