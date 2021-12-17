<template>
    <v-app>
        <v-layout class="background">
            <v-main>
                <v-container fluid>
                    <router-view name="appbar"></router-view>
                    <router-view name="content"></router-view>
                </v-container>
            </v-main>
        </v-layout>
    </v-app>
</template>

<script>


export default {
    
}
</script>
