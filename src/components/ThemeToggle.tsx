import React from 'react'
import { applyTheme, getInitialTheme } from '../utils/theme'

const ThemeToggle: React.FC = () => {
    const [theme, setTheme] = React.useState<'light' | 'dark'>(() => getInitialTheme())

    React.useEffect(() => { applyTheme(theme) }, [theme])

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            title={theme === 'light' ? 'Переключить на тёмную тему' : 'Переключить на светлую тему'}
        >
            {theme === 'light' ? '☀️' : '🌙'}
        </button>
    )
}

export default ThemeToggle