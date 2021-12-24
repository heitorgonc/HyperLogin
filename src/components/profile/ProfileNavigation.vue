<template>
    <v-navigation-drawer app v-model="drawer" :mini-variant.sync="mini" permanent>
        <v-card flat>
            <v-card-title>
                <v-layout column>
                    <v-layout align-center justify-space-between>
                        <v-img src="../../assets/imgs/LOGO.png" max-width="120"></v-img>
                        <v-icon :icon="show ? 'mdi-record-circle-outline' : 'mdi-record-circle'" @click="show=!show" color="red darken-2" 
                        medium v-text="show ? 'mdi-record-circle-outline' : 'mdi-record-circle'"></v-icon>
                    </v-layout>
                </v-layout>
            </v-card-title>
            <v-card-text>
                <v-layout justify-center>
                    <v-list>
                        <v-list-group :value="true" prepend-icon="mdi-home-outline" color="grey darken-2">
                            <template v-slot:activator>
                                <v-list-item-title>Dashboards</v-list-item-title>
                            </template>
                            <v-list-item v-for="([title , icon, way], i) in dashboards" :key="i" link :to="way" 
                            class="list-item-dashboard" active-class="list-item-dashboard-active">
                                <v-list-item-icon>
                                    <v-icon small v-text="icon"></v-icon>
                                </v-list-item-icon>
                                <v-list-item-title v-text="title"></v-list-item-title>
                            </v-list-item>
                        </v-list-group>
                    </v-list>
                </v-layout>
            </v-card-text>
        </v-card>
    </v-navigation-drawer>
</template>

<script>
export default {
    data(){
        return{
            mini: true,
            drawer: true,
            show: true,
            dashboards: [
                ['eCommerce', 'mdi-checkbox-blank-circle-outline', 'ecomerce'],
                ['Analytics', 'mdi-checkbox-blank-circle-outline', 'analytics']
            ]
        }
    }

}
</script>