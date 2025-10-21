const YM_SCRIPT_SRC = 'https://mc.yandex.ru/metrika/tag.js'

type YmFunction = ((...args: unknown[]) => void) & { a?: unknown[]; l?: number }

declare global {
  interface Window {
    ym?: YmFunction
    __ymInitializedCounters?: Set<number>
  }
}

const ensureMetrikaScript = () => {
  const existingScript = Array.from(document.getElementsByTagName('script')).find(
    (script) => script.src === YM_SCRIPT_SRC
  )

  if (!existingScript) {
    const script = document.createElement('script')
    script.async = true
    script.src = YM_SCRIPT_SRC
    document.head.appendChild(script)
  }
}

const ensureYmFunction = () => {
  if (!window.ym) {
    const ymFunction = function (...args: unknown[]) {
      ;(ymFunction.a = ymFunction.a || []).push(args)
    } as YmFunction

    ymFunction.l = Number(new Date())
    window.ym = ymFunction
  }
}

const isValidCounterId = (counterId: string | undefined): counterId is string => {
  if (!counterId) return false
  const trimmed = counterId.trim()
  if (trimmed === '') return false
  if (!/^\d+$/.test(trimmed)) return false
  return true
}

export const initYandexMetrika = () => {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return
  }

  const rawCounterId = import.meta.env.VITE_YANDEX_METRIKA_ID

  if (!isValidCounterId(rawCounterId)) {
    return
  }

  const counterId = Number(rawCounterId)

  window.__ymInitializedCounters = window.__ymInitializedCounters ?? new Set<number>()
  if (window.__ymInitializedCounters.has(counterId)) {
    return
  }

  ensureYmFunction()
  ensureMetrikaScript()

  window.ym?.(counterId, 'init', {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true
  })

  window.__ymInitializedCounters.add(counterId)
}
