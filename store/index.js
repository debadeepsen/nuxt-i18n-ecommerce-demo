import { DEFAULT_LOCALE } from '~/utils/constants'

export const state = () => ({
    locale: DEFAULT_LOCALE
})

export const mutations = {
    setLocale(state, locale) {
        state.locale = locale
    }
}