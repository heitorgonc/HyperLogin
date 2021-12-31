<template>
    <div>
        <v-menu bottom origin="center center" transition="scale-transition">
            <template v-slot:activator="{on, attrs}">
                <v-list-item v-bind="attrs" v-on="on">
                    <div class="mr-2">
                        <v-img :src="flagSelected.src"></v-img>
                    </div>
                    <v-list-item-title v-text="flagSelected.title"></v-list-item-title>
                </v-list-item>
            </template>
            <v-list class="mt-14">
                <v-list-item v-for="(flag, i) in flags" :key="i" @click="changeLang(flag)" :to="flag.way">
                    <div class="mr-2">
                        <v-img :src="flag.src"></v-img>
                    </div>
                    <v-list-item-title v-text="flag.title"></v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>

<script>
export default {
    data(){
        return{
            flagSelected:{
                title: 'Português-BR', src: 'https://img.icons8.com/color/48/000000/brazil.png'
            },
            flags:[
                {title: 'Inglês', src: 'https://img.icons8.com/color/48/000000/usa.png', way: '/'},
                {title: 'Português-BR', src: 'https://img.icons8.com/color/48/000000/brazil.png', way: ''}
            ],
        }
    },
    methods:{
        changeLang(flag){
            this.flagSelected.title = flag.title
            this.flagSelected.src = flag.src
        }
    }
}
</script>