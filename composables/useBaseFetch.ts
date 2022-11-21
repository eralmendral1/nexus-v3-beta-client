export const useBaseFetch = async (path: string) => {
    const config = useRuntimeConfig()
    return await useFetch(() => `${config.public.API_BASE_URL}/${path}`)
}