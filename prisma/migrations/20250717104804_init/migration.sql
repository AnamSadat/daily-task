-- CreateTable
CREATE TABLE "Anime" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "skor" INTEGER NOT NULL,
    "genre" TEXT NOT NULL,
    "img_url" TEXT NOT NULL,

    CONSTRAINT "Anime_pkey" PRIMARY KEY ("id")
);
