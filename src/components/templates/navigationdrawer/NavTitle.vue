<template>
    <div>
        <v-list-item class="px-2 mt-5">
            <v-list-item-avatar>
                <v-btn to="/profile/dashboards/ecomerce" depressed fab color="red darken-4">
                    <div>
                        <v-img src="../../../assets/imgs/Icons/letra-h32px.png"></v-img>
                    </div>
                </v-btn>
            </v-list-item-avatar>
            <v-list-item-title>
                <span class="list-dashboards-item-title">Hypersoft</span>
            </v-list-item-title>
            <v-list-item-icon>
                <v-icon @click.stop="mini=!mini" color="red darken-3" :icon="show ? 'mdi-record-circle-outline' : 'mdi-record-circle'"
                medium v-text="show ? 'mdi-record-circle-outline' : 'mdi-record-circle' "></v-icon>
            </v-list-item-icon>
        </v-list-item>
        <v-list-item v-if="mini == true">
            <v-list-item-icon>
                <v-icon @click="mini=!mini">mdi-chevron-right</v-icon>
            </v-list-item-icon>
        </v-list-item>
    </div>
</template>

<script>
export default {
    computed:{
        show:{
            get(){
                return this.$store.getters.show
            },
            set(show){
                return this.$store.commit('setShow', show)
            }
        },
        mini:{
            get(){
                return this.$store.getters.mini
            },
            set(mini){
                this.$store.commit('setMini', mini)
            }
        }
    }
}
</script>

<style>

</style>