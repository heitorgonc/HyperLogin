<template>
    <div>
        <v-list-item>
            <v-badge color="green" overlap dot bottom bordered>
                <v-avatar color="red darken-4" size="35">
                    <v-img :src="img"></v-img>
                </v-avatar>
            </v-badge>
        </v-list-item>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                img: 'https://img.icons8.com/external-flat-02-chattapat-/64/000000/external-avatar-digital-marketing-flat-02-chattapat-.png'
            }
        }
    }
</script>