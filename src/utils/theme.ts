export const getInitialTheme = (): 'light' | 'dark' => {
  const stored = localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark') return stored
  return 'light'
}

export const applyTheme = (theme: 'light' | 'dark') => {
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
}