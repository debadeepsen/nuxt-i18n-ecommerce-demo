import { DEFAULT_LOCALE } from '~/utils/constants'

export const state = () => ({
    locale: DEFAULT_LOCALE,
    cart: []
})

export const mutations = {
    setLocale(state, locale) {
        state.locale = locale
    },

    addToCart(state, item) {
        state.cart.push(item)
    },

    removeFromCart(state, item) {
        state.cart = state.cart.filter(i => i.id !== item.id)
    },

    clearCart(state) {
        state.cart = []
    }
}