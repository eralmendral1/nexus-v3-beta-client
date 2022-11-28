import { defineStore } from 'pinia'

export const menuStore = defineStore('menu', {
    state: () => ({
        menu: [] as any,
    }),
    getters: {
        menus: state => state.menu && state.menu.filter((m: any) => !m.parent),
        admin: state => state.menu && state.menu.filter((m: any) => m.parent),
    },
    actions: {
        async fetchMenus() {
            setTimeout(async () => {
                let { data } = await useFetch('http://localhost:8082/api/menu', {
                    headers: {
                        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODIvYXBpL2xvZ2luIiwiaWF0IjoxNjY5NDQwMjk1LCJuYmYiOjE2Njk0NDAyOTUsImp0aSI6IlFORlNlVGR0TDhHUDNyVTUiLCJzdWIiOiI0MjIiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.7U4kiLCAaEYEYn7YWXSdt_9QSlLIdoM_ekGRA1_HaeI'
                    }
                })
                this.menu = data.value
            }, 500)
        },
    }
})