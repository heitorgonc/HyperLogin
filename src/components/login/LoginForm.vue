<template>
    <div class="form">
        <v-card flat tile >
            <v-card-title>
                <v-layout align-content-end column>
                    <v-layout align-center>
                        <span class="form-title">Bem vindo a Hypersoft!</span>
                        <div class="form-title-icon">
                            <v-icon  class="ml-3" icon="mdi-hand-wave" size="30px"
                            color="yellow">mdi-hand-wave-outline</v-icon>
                        </div>
                    </v-layout>
                    <v-layout class="mb-5 mt-5">
                        <div class="pa-2">
                            <span class="form-subtitle">Por favor entre em sua conta para começar a aventura!</span>
                        </div>
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
                <v-form>
                    <v-container fluid>
                        <v-row>
                            <span>Email</span>
                        </v-row>
                        <v-row>
                            <v-text-field outlined type="e-mail" class="login-tf" color="red darken-3" dense placeholder="exemplo@hypersoft.com.br" 
                            v-model="email" single-line :rules="[rules.emailRequired]" spellcheck="false"></v-text-field>
                        </v-row>
                        <v-row>
                            <v-layout justify-space-between>
                                <span>Senha</span> <span class="link">Esqueceu a senha?</span>
                            </v-layout>
                        </v-row>
                        <v-row>
                            <v-text-field class="login-tf" outlined color="red darken-3" dense placeholder="senha" @click:append="show = !show"
                            v-model="password" :append-icon="show ? 'mdi-eye-outline' : 'mdi-eye-off-outline'" :type="show ? 'text' : 'password'" 
                            :rules="[rules.passwordRequired]"></v-text-field>
                        </v-row>
                        <v-row>
                            <v-checkbox label="Lembre de mim" color="red darken-2"></v-checkbox>
                        </v-row>
                        <v-row>
                            <v-btn block color="red darken-1" class="mt-4" :disabled=" noEmail || noPassword">
                                <span class="login-btn-text">Sign in</span>
                            </v-btn>
                        </v-row>
                        <v-row>
                            <v-layout justify-center class="pt-5 pb-5">
                                <span class="login-subtext mr-1">Novo por aqui ?</span>
                                <router-link class="login-subtext link" to="/register">Crie sua conta</router-link>
                            </v-layout>
                        </v-row>
                    </v-container>
                </v-form>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-container class="login-avatars">
                    <v-layout justify-space-around align-center>
                        <v-avatar color="primary" rounded size="30">
                            <v-icon icon="mdi-facebook" color="white" small>mdi-facebook</v-icon>
                        </v-avatar>
                        <v-avatar color="blue lighten-1" rounded size="30">
                            <v-icon icon="mdi-twitter" color="white" small>mdi-twitter</v-icon>
                        </v-avatar>
                        <v-avatar color="red darken-2" rounded size="30">
                            <v-icon icon="mdi-gmail" color="white" small>mdi-gmail</v-icon>
                        </v-avatar>
                        <v-avatar color="black lighten-1" rounded size="30">
                            <v-icon icon="mdi-github" color="white" small>mdi-github</v-icon>
                        </v-avatar>
                    </v-layout>
                </v-container>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
export default {
    data(){
        return{
            email: 'admin@hypersoft.com',
            password: 'password',
            show: false,
            rules: {
                passwordRequired: value => !!value || 'A senha é obrigatória',
                emailRequired: value => !!value || 'O email é obrigatório'
            }
        }
    },
    computed:{
        noEmail(){
            return this.email.length == 0
        },
        noPassword(){
            return this.password.length == 0
        }
    }
}
</script>