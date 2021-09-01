import { ACCESS_TOKEN_KEY, CACHED_URL } from "../constants/localStorage";

export const getToken = () => localStorage.getItem(ACCESS_TOKEN_KEY);

export const getCachedUrl = () => localStorage.getItem(CACHED_URL);

export const removeCachedUrl = () => localStorage.removeItem(CACHED_URL);

export const isHavingToken = () => !!getToken();
