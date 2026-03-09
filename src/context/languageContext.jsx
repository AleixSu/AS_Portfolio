import { createContext, useContext, useEffect, useState } from 'react'

const languageContext = createContext(null)

export const useLanguageContext = () => {
  const context = useContext(languageContext)
  if (!context) {
    throw new Error('useLanguageContext has to be used inside AuthProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('EN')

  useEffect(() => {
    const storedLanguage = localStorage.getItem('currentLanguage')
    if (storedLanguage) setCurrentLanguage(storedLanguage)
  }, [])

  const setLanguage = (language) => {
    localStorage.setItem('currentLanguage', language)
    setCurrentLanguage(language)
  }
  return (
    <languageContext.Provider value={{ currentLanguage, setLanguage }}>
      {children}
    </languageContext.Provider>
  )
}

/* const buttonEN = document.getElementById('buttonEN')
buttonEN.addEventListener('click', () => {
  setLanguage('EN')
  renderApp()
})
const buttonES = document.getElementById('buttonES')
buttonES.addEventListener('click', () => {
  setLanguage('ES')
  renderApp()
})
 */
