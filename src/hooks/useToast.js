import { useState, useCallback, useRef } from 'react'

export function useToast() {
  const [toast, setToast] = useState({ visible: false, message: '' })
  const timerRef = useRef(null)

  const showToast = useCallback((message) => {
    setToast({ visible: true, message })
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }))
    }, 2800)
  }, [])

  return { toast, showToast }
}
