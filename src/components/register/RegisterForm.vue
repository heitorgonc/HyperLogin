<template>
    <div class="form">
        <v-card flat tile color="transparent">
            <v-card-title>
                <v-layout align-content-start column>
                    <v-layout align-center>
                        <span class="form-title">Aventura começa aqui</span>
                        <div class="form-title-icon">
                            <v-img src="../../assets/imgs/Icons/rocket48px.png"></v-img>
                        </div>
                    </v-layout>
                    <div class="form-subtitle">
                        <span>Gerencie sua aplicação de forma fácil e divertida</span>
                    </div>
                </v-layout>
            </v-card-title>
            <v-card-text>
                <v-form>
                    <v-container fluid>
                        <v-row>
                            <span class="form-label">Usuário</span>
                        </v-row>
                        <v-row>
                            <v-text-field v-model="username" outlined type="text" color="red darken-3" dense placeholder="exemplo" 
                            single-line :rules="[rules.userRequired, rules.userShort]" spellcheck="false"></v-text-field>
                        </v-row>
                        <v-row>
                            <span class="form-label">Email</span>
                        </v-row>
                        <v-row>
                            <v-text-field v-model="email" outlined type="email" color="red darken-3" dense placeholder="exemplo@hypersoft.com.br" 
                            single-line :rules="[rules.emailRequired, rules.emailValid]" spellcheck="false"></v-text-field>
                        </v-row>
                        <v-row>
                            <span class="form-label">Senha</span>
                        </v-row>
                        <v-row>
                            <v-text-field v-model="password" outlined color="red darken-3" dense placeholder="......" @click:append="show = !show"
                            :append-icon="show ? 'mdi-eye-outline' : 'mdi-eye-off-outline'" :type="show ? 'text' : 'password'" 
                            :rules="[rules.passwordRequired, rules.passwordShort]"></v-text-field>
                        </v-row>
                        <v-row>
                            <v-checkbox label="Concordo com os termos de política e privacidade" color="red darken-2"></v-checkbox>
                        </v-row>
                        <v-row>
                            <v-btn block color="red darken-1" class="mt-4" 
                            :disabled=" noEmail || noPassword || !validEmail(email) || shortPassword || shortUsername">
                                <span class="login-btn-text">Criar conta</span>
                            </v-btn>
                        </v-row>
                        <v-row>
                            <v-layout justify-center class="pt-3 pb-3">
                                <span class="login-subtext mr-1">Já tem uma conta ?</span>
                                <router-link class="login-subtext link" to="/">Faça o login</router-link>
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
            email: '',
            password: '',
            username: '',
            show: false,
            rules: {
                passwordRequired: value => !!value || 'A senha é obrigatória',
                passwordShort: value => value.length >= 6 || 'A senha é muito curta',
                emailRequired: value => !!value || 'O email é obrigatório',
                emailValid: value => this.validEmail(value) || 'O email não é válido',
                userRequired: value => !!value || 'O usuário é obrigatório',
                userShort: value => value.length >= 5 || 'O usuário é muito curto'
            }
        }
    },
    methods:{
        validEmail(email){
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/;
            return re.test(email);
        }
    },
    computed:{
        noEmail(){
            return this.email.length == 0
        },
        noPassword(){
            return this.password.length == 0
        },
        noUsername(){
            return this.username.length == 0
        },
        shortPassword(){
            return this.password.length < 6
        },
        shortUsername(){
            return this.username.length < 5
        }
    }
}
</script>

<style>

</style>