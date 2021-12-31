<template>
    <div class="profilehome-background">
        <router-view name="navigation"></router-view>
        <router-view name="appbar"></router-view>
        <v-container fluid>
            <router-view name="content"></router-view>
        </v-container>
    </div>
</template>