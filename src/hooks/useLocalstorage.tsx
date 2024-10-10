import React from 'react'

function useLocalStorage<T>(key: string, initalValue: T) {
  
  const getStoredValue = (): T => {
    try {
      const value = window.localStorage.get(key)
      return value ? JSON.parse(value) : initalValue
    } catch(err) {
      console.error('Erro ao recuperar dados do armazenamento local')
      return initalValue
    }
  }
  
  const [storedValue, setStoredValue] = React.useState<T>(getStoredValue)
  
  React.useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue))
    } catch(err) {
      console.error('Erro ao armazenar dados do armazenamento local')
    }
  }, [key, storedValue])
  
  return [storedValue, setStoredValue] as const
}

export default useLocalStorage
