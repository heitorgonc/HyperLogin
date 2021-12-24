<template>
    <div class="form">
        <v-card flat tile color="transparent">
            <v-card-title>
                <v-layout align-content-start column>
                    <v-layout align-center>
                        <span class="form-title">Bem vindo a Hypersoft!</span>
                        <div class="form-title-icon">
                            <v-img src="../../assets/imgs/Icons/hand-wave48px.png"></v-img>
                        </div>
                    </v-layout>
                    <div class="form-subtitle">
                        <span>Por favor entre em sua conta para começar a aventura!</span>
                    </div>
                    <div class="help">
                        <v-layout column>
                            <v-layout justify-space-between>
                                <span><span class="help-label">Admin:</span><span class="help-text">admin@hypersoft.com | admin</span></span>
                                <v-icon icon="mdi-help-circle-outline" color="red">mdi-help-circle-outline</v-icon>
                            </v-layout>
                            <v-layout>
                                <span class="help-label">Client:</span><span class="help-text">clent@hypersoft.com | client</span>
                            </v-layout>
                        </v-layout>
                    </div>
                </v-layout>
            </v-card-title>
            <v-card-text>
                <v-form>
                    <v-container fluid>
                        <v-row>
                            <span class="form-label">Email</span>
                        </v-row>
                        <v-row>
                            <v-text-field outlined type="email" color="red darken-3" dense placeholder="exemplo@hypersoft.com.br" 
                            v-model="email" single-line :rules="[rules.emailRequired, rules.emailValid]" spellcheck="false"></v-text-field>
                        </v-row>
                        <v-row>
                            <v-layout justify-space-between>
                                <span class="form-label">Senha</span> <span class="link">Esqueceu a senha?</span>
                            </v-layout>
                        </v-row>
                        <v-row>
                            <v-text-field outlined color="red darken-3" dense placeholder="......" @click:append="show = !show"
                            v-model="password" :append-icon="show ? 'mdi-eye-outline' : 'mdi-eye-off-outline'" :type="show ? 'text' : 'password'" 
                            :rules="[rules.passwordRequired, rules.passwordShort]"></v-text-field>
                        </v-row>
                        <v-row>
                            <v-checkbox label="Lembre de mim" color="red darken-2"></v-checkbox>
                        </v-row>
                        <v-row>
                            <v-btn block color="red darken-1" class="mt-4" to="/profile/dashboards/ecomerce" :disabled=" noEmail || noPassword || !validEmail(email) || shortPassword">
                                <span class="login-btn-text">Entrar</span>
                            </v-btn>
                        </v-row>
                        <v-row>
                            <v-layout justify-center class="pt-3 pb-3">
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
                passwordShort: value => value.length >= 6 || 'A senha é muito curta',
                emailRequired: value => !!value || 'O email é obrigatório',
                emailValid: value => this.validEmail(value) || 'O email não é válido'
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
        shortPassword(){
            return this.password.length < 6
        }
    }
}
</script>