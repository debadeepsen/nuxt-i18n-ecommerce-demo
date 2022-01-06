import { DEFAULT_LOCALE } from '~/utils/constants'

export const state = () => ({
    locale: DEFAULT_LOCALE,
    cart: []
})

export const mutations = {
    setLocale(state, locale) {
        state.locale = locale
    },

    setCart(state, cart) {
        state.cart = cart
    },

    addToCart(state, item) {
        let itemIndex = state.cart.findIndex(i => i.product.id === item.product.id)

        console.log({ state, itemIndex, item })

        if (itemIndex > -1) {
            state.cart[itemIndex].count += item.count
        }
        else {
            state.cart.push(item)
        }
    },

    removeFromCart(state, item) {
        state.cart = state.cart.filter(i => i.product.id !== item.product.id)
    },

    clearCart(state) {
        state.cart = []
    }
}