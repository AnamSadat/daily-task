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