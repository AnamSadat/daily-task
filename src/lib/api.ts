import { NewAnime, NewAnimeInput } from "@/type/type"

// fetching anime list

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

// fetching endpoint /api/anime-favorite

const BASE_URL_ENDPOINT = '/api/anime-favorite'

export async function apiFetcher<T>(url: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(url, options)

  if (!res.ok) {
    const errorData: { message?: string } = await res.json().catch(() => ({}));
    throw new Error(errorData.message || `Gagal melakukan operasi ${url}`);
  }

  return res.json() as Promise<T>
}

export async function getNewAnime(): Promise<NewAnime[]> {
  const res = await apiFetcher<{ data: NewAnime[] }>(BASE_URL_ENDPOINT)
  return res.data
}

export async function postNewAnime(data: NewAnimeInput): Promise<NewAnime> {
  const res = await apiFetcher<{ data: NewAnime }>(BASE_URL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })

  return res.data
}

export async function putNewAnime(data: NewAnimeInput): Promise<NewAnime> {
  const res = await apiFetcher<{ data: NewAnime }>(BASE_URL_ENDPOINT, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })

  return res.data
}

export async function deleteNewAnime(id: number) {
  const res = await apiFetcher<{ id: NewAnime }>(BASE_URL_ENDPOINT, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id })
  })

  return res.id
}