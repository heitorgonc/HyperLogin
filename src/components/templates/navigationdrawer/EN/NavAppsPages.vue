<template>
    <v-list>
        <v-list-item dense v-if="mini == false">
            <v-list-item-title class="list-item-title">APPS & PAGES</v-list-item-title>
        </v-list-item>
        <v-list-item v-for="([title, icon, way], i) in appspages" :key="i" link :to="way"
        class="list-item-dashboard ma-1 head-shake" active-class="list-item-dashboard-active">
            <v-list-item-icon><v-icon small v-text="icon"></v-icon></v-list-item-icon>
            <v-list-item-title v-text="title"></v-list-item-title>
        </v-list-item>
    </v-list>
</template>

<script>
export default {
    data(){
        return{
            appspages:[
                ['Email', 'mdi-email-outline', 'email'],
                ['Chat', 'mdi-message-outline', 'chat'],
                ['Todo', 'mdi-checkbox-marked-outline', 'todo'],
                ['Calendar', 'mdi-calendar-blank-outline', 'calendar']
            ]
        }
    },
    computed:{
        mini(){
            return this.$store.getters.mini
        }
    }
}
</script>