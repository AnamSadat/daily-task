

export async function getAnimeList() {
  const res = await fetch('https://api.jikan.moe/v4/anime')
  const { data } = await res.json()
  return data
}

export async function getAnimeDetail(id: string) {
  const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
  const { data } = await res.json()
  return data
}

export async function getNewAnime() {
  const res = await fetch('/api/anime-v1')
  if (!res.ok) {
    throw new Error("Gagal fetch anime")
  }

  return res.json()
}

export async function postNewAnime() {

}

export async function putNewAnime() {

}

export async function deleteNewAnime() {

}