<template>
    <div>
        <v-icon  v-for="([icon, color], i) in navicons" :key= i medium class="ml-4" :color="color" v-text="icon"></v-icon>
    </div>
</template>

<script>
export default {
    data(){
        return{
            navicons:[
                ['mdi-calendar-blank-outline','grey darken-1'],
                ['mdi-message-outline', 'grey darken-1'],
                ['mdi-email-outline', 'grey darken-1'],
                ['mdi-checkbox-marked-outline', 'grey darken-1'],
                ['mdi-star-outline', 'orange']
            ]
        }
    }
}
</script>