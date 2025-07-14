import { NextResponse } from "next/server"
import { anime } from "@/lib/data"

// TODO: api anime

export default async function GET() {
  return Response.json(anime)
}