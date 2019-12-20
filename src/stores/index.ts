import { createContext, useContext } from 'react'
import { CvStore } from './cv'

type StoresContextType = {
  CvStore: CvStore
}

const storesContext = createContext<StoresContextType>({
  CvStore: new CvStore(),
})

export const useStores = (): StoresContextType => useContext(storesContext)
