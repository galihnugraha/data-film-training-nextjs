'use client'

// set storage
export const setStorage = (key: string, value: string) => {
  if (typeof window !== 'undefined') {
   return localStorage.setItem(key, value)
  }
}

// get storage
export const getStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(key)
  }
}