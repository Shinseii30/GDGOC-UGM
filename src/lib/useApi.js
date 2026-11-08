import { useCallback, useEffect, useState } from 'react'
import { apiGet, peek } from './api'

/**
 * Ambil data dari API.
 * `fallback` dipakai sebagai data awal (berguna untuk Navbar/Footer yang tidak boleh kosong).
 * Mengembalikan { data, loading, error, retry }.
 */
export function useApi(path, { fallback = null } = {}) {
  const [state, setState] = useState(() => {
    const cached = peek(path)
    return { data: cached ?? fallback, loading: cached === undefined, error: null }
  })
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    let ignore = false
    apiGet(path)
      .then((data) => {
        if (!ignore) setState({ data, loading: false, error: null })
      })
      .catch((error) => {
        if (!ignore) setState((prev) => ({ ...prev, loading: false, error }))
      })
    return () => {
      ignore = true
    }
  }, [path, attempt])

  const retry = useCallback(() => {
    setState((prev) => ({ ...prev, loading: true, error: null }))
    setAttempt((n) => n + 1)
  }, [])

  return { ...state, retry }
}
