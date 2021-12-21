<template>
    <div class="login-home login-background-gradient">
        <v-app-bar flat color="transparent" max-width="120" max-height="27" >
            <router-link to="/">
                <v-img src="../../assets/imgs/LOGO.png" class="login-logo"></v-img>
            </router-link>
        </v-app-bar>
        <v-container fluid class="login-main pa-0 ma-0">
            <router-view name="banner"></router-view>
            <router-view name="form"></router-view>
        </v-container>
    </div>
</template>