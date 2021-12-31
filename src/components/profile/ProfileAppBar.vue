<template>
    <v-container fluid class="pa-4">
        <v-app-bar flat rounded color="white" v-if="openSearch == true">
            <v-layout align-center justify-space-between>
                <div class="appbar-left-items">
                    <NavBarIcons></NavBarIcons>
                </div>
                <div class="appbar-right-items">
                    <router-view name="menulang"></router-view>
                    <AppBarIcons></AppBarIcons>
                    <router-view name="appbaravatartitle"></router-view>
                    <AppBarAvatar></AppBarAvatar>
                </div>
            </v-layout>
        </v-app-bar>
        <v-container fluid v-else class="pa-0 ma-0">
            <AppBarSearch></AppBarSearch>
        </v-container>
    </v-container>
</template>

<script>
const NavBarIcons = () => import('../templates/appbar/NavBarIcons')
const AppBarIcons = () => import('../templates/appbar/AppBarIcons')
const AppBarAvatar = () => import('../templates/appbar/AppBarAvatar.vue')
const AppBarSearch = () => import('../templates/appbar/AppBarSearch.vue')

export default {
    components:{
        NavBarIcons, AppBarIcons, AppBarAvatar, AppBarSearch
    },
    computed:{
        openSearch(){
            return this.$store.getters.openSearch
        }
    }
}
</script>