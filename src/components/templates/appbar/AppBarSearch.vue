<template>
    <v-text-field solo flat height="60px" class="pa-0 ma-0">
        <template v-slot:append>
            <v-icon color="grey darken-1" @click.stop="openSearch=!openSearch">mdi-close</v-icon>
        </template>
    </v-text-field>
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
        }
    }
}
</script>