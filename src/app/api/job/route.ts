import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export const POST = async (request: Request) => {
  const data = await request.json();
  const result = await prisma.job.create({data})
  return NextResponse.json(result);
}