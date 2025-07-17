import { NewAnime, NewAnimeInput, } from "@/type/type"
import axios, { AxiosError, AxiosRequestConfig } from 'axios'

const BASE_URL_ENDPOINT = '/api/anime-neon'

export async function apiAxios<T>(url: string, options: AxiosRequestConfig = {}): Promise<T> {
  try {
    const respone = await axios<T>({ url, ...options })
    return respone.data
  } catch (error) {
    const err = error as AxiosError<{ message?: string }>
    const message = err?.response?.data?.message || `Gagal melakukan operasi ${url}`
    throw new Error(message)
  }
}

export async function getAnimeDB() {
  try {
    const response = await axios<{ data: NewAnime[] }>(BASE_URL_ENDPOINT)
    return response.data.data
  } catch (error) {
    const err = error as AxiosError<{ message?: string }>
    const message = err?.response?.data?.message || 'Internal server error'
    throw new Error(message)
  }
}

export async function postAnimeDB(data: NewAnimeInput): Promise<NewAnime> {
  try {
    const response = await axios<{ data: NewAnime }>(BASE_URL_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data,
    })

    return response.data.data
  } catch (error) {
    const err = error as AxiosError<{ message?: string }>
    const message = err?.response?.data?.message || 'Internal server error'
    throw new Error(message)
  }

}

export async function putAnimeDB(data: NewAnimeInput): Promise<NewAnime> {
  try {
    const response = await axios<{ data: NewAnime }>(BASE_URL_ENDPOINT, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      data
    })
    return response.data.data
  } catch (error) {
    const err = error as AxiosError<{ message?: string }>
    const message = err?.response?.data?.message || 'Internal server error'
    throw new Error(message)
  }
}

export async function deleteAnimeDB(id: number) {
  try {
    const response = await axios<{ id: NewAnime }>(BASE_URL_ENDPOINT, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
      },
      data: { id }
    })
    return response.data.id
  } catch (error) {
    const err = error as AxiosError<{ message?: string }>
    const message = err?.response?.data?.message || 'Internal server error'
    throw new Error(message)
  }
}