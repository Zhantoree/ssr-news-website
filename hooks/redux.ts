import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, TypeRootState} from "@/store/store";

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<TypeRootState> = useSelector;