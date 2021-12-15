<template>
    <div class="app">
        <v-app>
            <router-view name="appbar"></router-view>
            <v-main>
                <v-container fluid>
                    <router-view name="content"></router-view>
                </v-container>
            </v-main>
        </v-app>
    </div>
</template>