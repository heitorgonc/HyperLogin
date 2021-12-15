<template>
    <div>
        <v-card flat>
            <v-card-title>
                <v-layout align-start column>
                    <v-layout align-center>
                        <span class="form-title">Bem vindo a Hypersoft!</span>
                        <v-icon icon="mdi-earth" size="30px" class="ml-3" color="blue">mdi-earth</v-icon>
                    </v-layout>
                    <v-layout class="mb-5 mt-5">
                        <span class="form-subtitle">Por favor entre em sua conta para começar a aventura!</span>
                    </v-layout>
                    <div class="help">
                        <v-layout  column>
                            <v-layout justify-space-between>
                                <span><span class="help-label">Admin:</span><span class="help-text">admin@hypersoft.com | admin</span></span>
                                <v-icon icon="mdi-help-circle-outline" color="red">mdi-help-circle-outline</v-icon>
                            </v-layout>
                            <v-layout>
                                <span><span class="help-label">Client:</span><span class="help-text">clent@hypersoft.com | client</span></span>
                            </v-layout>
                        </v-layout>
                    </div>
                </v-layout>
            </v-card-title>
            <v-card-text>
                <v-text-field outlined color="red" dense placeholder="email" v-model="email"></v-text-field>
                <v-text-field type="password" outlined color="red" dense placeholder="password" v-model="password"></v-text-field>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    data(){
        return{
            email: 'admin@hypersoft.com.br',
            password: '123456789'
        }
    }
}
</script>

<style>

</style>