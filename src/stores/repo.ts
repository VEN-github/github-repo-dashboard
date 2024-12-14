import { defineStore } from 'pinia'

export const useRepoStore = defineStore('counter', {
  state: () => ({
    repos: [],
    user: null as any
  }),
  actions: {
    async fetchRepos() {
      try {
        const response = await fetch('https://api.github.com/users/VEN-github/repos')
        this.repos = await response.json()
      } catch (error: any) {
        console.error(error.code)
      }
    },
    async fetchUser() {
      try {
        const response = await fetch('https://api.github.com/users/VEN-github')
        this.user = await response.json()
      } catch (error: any) {
        console.error(error.code)
      }
    }
  }
})
