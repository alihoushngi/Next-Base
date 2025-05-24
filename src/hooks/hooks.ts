import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";

// Custom typed version of useDispatch to use AppDispatch type from your store
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

// Custom typed version of useSelector to use RootState type from your store
export const useAppSelector = useSelector.withTypes<RootState>();
