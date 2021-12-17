<template>
        <v-app>
            <v-layout class="background">
                <router-view name="appbar"></router-view>
                <v-main>
                    <v-container fluid class="background">
                        <router-view name="content"></router-view>
                    </v-container>
                </v-main>
            </v-layout>
        </v-app>
</template>