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
    id: Date.now(),
    ...parse.data,
  }

  anime.push(newAnime)

  const respone = {
    status: 200,
    data: newAnime,
  }

  return NextResponse.json(respone)
}

export async function PUT(req: NextRequest) {
  const body = await req.json()
  const { id, ...res } = body

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  const parse = NewAnimeSchema.safeParse(res)

  if (!parse.success) {
    return NextResponse.json({ error: parse.error.format() }, { status: 400 });
  }

  const index = anime.findIndex((uuid) => uuid.id === id)
  if (index === -1) {
    return NextResponse.json({
      status: 404,
      error: "Anime not found",
    })
  }

  anime[index] = { ...anime[index], ...parse.data }
  return NextResponse.json({
    status: 200,
    data: anime[index]
  })
}

export async function DELETE(req: NextRequest) {
  const body = await req.json()
  const { id } = body

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  const index = anime.findIndex((uuid) => uuid.id === id)

  if (index === -1) {
    return NextResponse.json({
      status: 404,
      error: "Anime not found",
    })
  }

  anime.splice(index, 1)

  return NextResponse.json({
    status: 200,
    message: `Anime dengan id ${id} berhasil dihapus`
  })
}