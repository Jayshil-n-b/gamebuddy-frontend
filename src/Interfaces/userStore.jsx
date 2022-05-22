import create from "zustand"

const userStore = (set) => ({
    userid: null,
    username: '',
    usertheme: 'dark',
    setUserName: (userName) => {
        set((state) => ({
            username: userName,
        }))
    },
    toggleTheme: () => {
        set((state) => ({
            usertheme: !usertheme,
        }))
    }
})

const useUserStore = create(userStore);

export default useUserStore;