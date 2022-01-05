export default function ({ store, i18n }) {
    console.log( store.state, i18n.locale )
    if (store.state.locale) {
        i18n.locale = store.state.locale
    }
    console.log( store.state, i18n.locale )
}