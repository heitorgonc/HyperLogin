export default {
    state : {
        show: true,
        openSearch: true,
        switchTheme: true,
        mini: false
    },
    mutations:{
        setShow(state, show){
            state.show = show
        },
        setOpenSearch(state, openSearch){
            state.openSearch = openSearch
        },
        setSwitchTheme(state, switchTheme){
            state.switchTheme = switchTheme
        },
        setMini(state, mini){
            state.mini = mini
        }
    },
    getters:{
        show(state){
            return state.show
        },
        openSearch(state){
            return state.openSearch
        },
        switchTheme(state){
            return state.switchTheme
        },
        mini(state){
            return state.mini
        }
    },
}