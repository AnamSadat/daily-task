import { NextRequest, NextResponse } from "next/server"
import { anime } from "@/lib/data"
import { NewAnime, NewAnimeSchema } from "@/type/type"

// TODO: api anime

export async function GET() {
  const respone = {
    status: 200,
    data: anime
  }
  return NextResponse.json(respone)
}

export async function POST(req: NextRequest) {
  const body = await req.json()

  const parse = NewAnimeSchema.safeParse(body)

  if (!parse.success) {
    return NextResponse.json({ error: parse.error.format() }, { status: 400 });
  }

  const newAnime: NewAnime = {
    ...parse.data,
    id: Date.now()
  }

  anime.push(newAnime)

  const respone = {
    status: 200,
    data: newAnime,
  }

  return NextResponse.json(respone)
}