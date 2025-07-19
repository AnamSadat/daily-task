import { NextRequest, NextResponse } from "next/server";
// import { NewAnimeSchema } from "@/type/type"
import Prisma from "@/lib/prisma";
import { NewAnimeSchema } from "@/types/type";

export async function GET() {
  try {
    const anime = await Prisma.anime.findMany();

    return NextResponse.json(
      {
        status: 200,
        data: anime,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Failed to fetch animes:", error);

    return NextResponse.json(
      {
        status: 500,
        error: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}


export async function POST(req: NextRequest) {
  const body = await req.json()
  const parse = NewAnimeSchema.safeParse(body)

  if (!parse.success) {
    return NextResponse.json(
      {
        status: 400,
        error: parse.error.format()
      },
      {
        status: 400
      }
    )
  }

  const newAnime = await Prisma.anime.create({
    data: parse.data
  })

  return NextResponse.json({ status: 200, data: newAnime }, { status: 200 })
}

export async function PUT(req: NextRequest) {
  const body = await req.json()
  const { id, ...res } = body

  if (!id) {
    return NextResponse.json({ status: 400, error: "ID is required" }, { status: 400 })
  }

  const parse = NewAnimeSchema.safeParse(res)

  if (!parse.success) {
    return NextResponse.json({ status: 400, error: parse.error.format() }, { status: 400 })
  }

  const update = await Prisma.anime.update({
    where: { id },
    data: parse.data
  })

  return NextResponse.json({ status: 200, data: update }, { status: 200 })
}

export async function DELETE(req: NextRequest) {
  const body = await req.json()
  const { id } = body

  if (!id) {
    return NextResponse.json({ status: 400, error: "ID is required" }, { status: 400 })
  }

  const existing = await Prisma.anime.findUnique({
    where: { id },
  })

  if (!existing) {
    return NextResponse.json({ status: 400, error: "Anime not found" }, { status: 400 })
  }

  await Prisma.anime.delete({
    where: { id }
  })

  return NextResponse.json({
    status: 200,
    message: `Anime dengan id ${id} berhasil dihapus`
  }, { status: 200 })
}