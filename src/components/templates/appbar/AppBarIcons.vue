<template>
    <div class="mr-4">
        <v-list-item-icon class="ma-0 pa-0">
            <v-icon medium class="ml-2 ma-2" color="grey darken-1" v-text="switchTheme ? 'mdi-weather-night' : 'mdi-weather-sunny'"
            @click.stop="switchTheme = !switchTheme"></v-icon>
            <v-icon medium class="ml-2 ma-2" color="grey darken-1" @click.stop="openSearch=!openSearch">mdi-magnify</v-icon>
            <v-badge color="purple darken-2" content="5" overlap class="ml-2 ma-2">
                <v-icon medium color="grey darken-1">mdi-cart-outline</v-icon>
            </v-badge>
            <v-badge color="red darken-1" content="6" overlap class="ml-2 ma-2">
                <v-icon medium color="grey darken-1">mdi-bell-outline</v-icon>
            </v-badge>
        </v-list-item-icon>
    </div>
</template>

<script>
export default {
    computed:{
        openSearch:{
            get(){
                return this.$store.getters.openSearch
            },
            set(openSearch){
                this.$store.commit('setOpenSearch', openSearch)
            }
        },
        switchTheme:{
            get(){
                return this.$store.getters.switchTheme
            },
            set(switchTheme){
                this.$store.commit('setSwitchTheme', switchTheme)
            }
        }
    }
}
</script>