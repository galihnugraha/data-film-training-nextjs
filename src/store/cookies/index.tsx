'use server'
 
import { cookies } from 'next/headers'
 
export async function create(key: string, value: string) {
  return cookies().set(key, value)
}

export async function read(key: string) {
  try {
    return cookies().get(key)?.value
  } catch (error) {
    console.log(error)
  }
}