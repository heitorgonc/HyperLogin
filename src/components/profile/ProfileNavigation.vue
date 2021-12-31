<template>
    <v-card>
        <v-navigation-drawer app floating permanent :mini-variant="mini">
            <v-list>
                <NavTitle></NavTitle>
                <router-view name="dashboards"></router-view>
                <router-view name="appspages"></router-view>
            </v-list>
        </v-navigation-drawer>
    </v-card>
</template>

<script>
const NavTitle = () => import('../templates/navigationdrawer/NavTitle')

export default {
    components:{
        NavTitle
    },
    computed:{
        show:{
            get(){
                return this.$store.getters.show
            },
            set(show){
                return this.$store.commit('setShow', show)
            }
        },
        mini(){
            return this.$store.getters.mini
        }
    }
}
</script>