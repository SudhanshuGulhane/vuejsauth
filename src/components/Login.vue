<template>
<div class="logincard">
    <form @submit.prevent="login">
        <h3>Login</h3>
        <div >
            <input type="text" v-model="username" placeholder="username"/>
        </div>
        <div>
            <input type="password" v-model="password" placeholder="password"/>
        </div>
        <button className="btn waves-effect waves-light #7e57c2 deep-purple lighten-1">Login</button>
    </form>
</div>
</template>

<script>

import axios from 'axios'
import M from 'materialize-css'

export default {
    name:'Login',
    data () { 
        return {
            username:'',
            password:''
        }
    },
    methods:{
        async login(){
            let username = this.username
            let password=this.password

            if(!username || !password){
                M.toast({
                    html:"fields can't be empty!"
                })
                return
            }

            axios.post('login',{
                username,
                password
            })
            .then(data=>{
                if(data.data==="SUCCESS"){
                    M.toast({
                        html:"Loggedin Successfully",
                        classes:"#388e3c green darken-2"
                    })
                    this.$router.push('/profile')
                }
                else{
                    M.toast({
                        html:"invalid username or password",
                        classes:"#c62828 red darken-3"
                    })
                    return
                }
            })
            .catch(err=>{
                console.log(err)
            })
        }
    }
}
</script>

<style scoped>
.logincard{
    max-width: 450px;
    margin-left: 30px;
}
</style>