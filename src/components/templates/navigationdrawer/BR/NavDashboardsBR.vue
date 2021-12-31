<template>
    <v-list-group :value="true" color="grey darken-4">
        <template v-slot:activator>
            <v-list-item-icon>
                <v-icon icon="mdi-home-outline">mdi-home-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="head-shake">Painéis</v-list-item-title>
            <v-list-item-action-text><v-badge color="orange" content="2"></v-badge></v-list-item-action-text>
        </template>
        <v-list-item v-for="([title , icon, way], i) in dashboards" :key="i" link :to="way" 
        class="list-item-dashboard ma-1 head-shake" active-class="list-item-dashboard-active">
            <v-list-item-icon><v-icon small v-text="icon" ></v-icon></v-list-item-icon>
            <v-list-item-title v-text="title"></v-list-item-title>
        </v-list-item>
    </v-list-group>
</template>

<script>
export default {
    data(){
        return{
            dashboards: [
                ['Comércio Virtual', 'mdi-checkbox-blank-circle-outline', 'ecomerce'],
                ['Analítico', 'mdi-checkbox-blank-circle-outline', 'analytics']
            ]
        }
    }
}
</script>