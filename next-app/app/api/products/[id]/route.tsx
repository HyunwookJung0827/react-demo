import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Props {
  params: { id: number };
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // 1. Validate the request body
  const body = await request.json();
  // 2. If invalid, return 400
  const validation = schema.safeParse(body); // parse() throws an exception if there is a validation error, safeParse() doesn't
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 404 });

  return NextResponse.json({ id: 1, name: "Milk", price: 3.5 });
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
  // 3. Fetch the product with the given id
  // 4. If doesn't exist, return 404 not found
  if (params.id > 10)
    return NextResponse.json({ error: "Producct not found" }, { status: 404 });
  // 5. Update the product
  // 6. Return the updated product
  return NextResponse.json({ id: 1, name: body.name, price: body.price });
}

export function DELETE(
  request: NextResponse,
  { params }: { params: { id: number } }
) {
  // 1. Fetch product from db
  // 2. If not found, return 404
  if (params.id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  // 3. Delete the product
  // 4. Return 200
  return NextResponse.json({});
}
