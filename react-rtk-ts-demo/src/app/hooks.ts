import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
//this is legacy code, we can use useDispatch and useSelector directly in the components
// export const useAppDispatch = () => useDispatch<AppDispatch>()
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//Modern way to use useDispatch and useSelector directly in the components
export const useAppDispatch =  useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()