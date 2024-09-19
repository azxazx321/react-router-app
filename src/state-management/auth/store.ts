import {create} from "zustand";

interface AuthStore {
    user: string;
    login: (username: string) => void;
    logon: () => void;
}

const useAuthStore = create<AuthStore>(set => ({
    user: '',
    login: (username) => set(() => ({ user:username})),
    logon: () => set(() => ({ user: ''}))
}))
export default useAuthStore