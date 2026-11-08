// Klien tipis untuk GDGoC UGM API. Semua endpoint membalas { success, count?, data }.
const BASE_URL = (import.meta.env.VITE_API_URL ?? 'https://gdgoc-ugm-api.vercel.app/api').replace(/\/$/, '')

// Cache per sesi: request yang sama (mis. /tracks di Home dan Overview, /navigation di Navbar
// dan Footer) hanya dikirim sekali.
const pending = new Map()
const resolved = new Map()

export function peek(path) {
  return resolved.get(path)
}

export function apiGet(path) {
  if (pending.has(path)) return pending.get(path)

  const request = fetch(`${BASE_URL}${path}`, { headers: { Accept: 'application/json' } })
    .then(async (res) => {
      if (!res.ok) throw new Error(`Request ke ${path} gagal (${res.status})`)
      const json = await res.json()
      if (json.success === false) throw new Error(json.message ?? `Request ke ${path} tidak berhasil`)
      resolved.set(path, json.data)
      return json.data
    })
    .catch((error) => {
      pending.delete(path) // jangan cache kegagalan, supaya "Try again" benar-benar mengulang
      throw error
    })

  pending.set(path, request)
  return request
}
