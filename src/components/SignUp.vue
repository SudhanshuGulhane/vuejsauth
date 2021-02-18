<template>
<div class="logincard">
    <form @submit.prevent="signup">
        <h3>SignUp</h3>
        <div >
            <input type="text" v-model="username" placeholder="username"/>
        </div>
        <div >
            <input type="email" v-model="email" placeholder="email"/>
        </div>
        <div>
            <input type="password" v-model="password" placeholder="password"/>
        </div>
        <button className="btn waves-effect waves-light #7e57c2 deep-purple lighten-1">SignUp</button>
    </form>
</div>
</template>

<script>

import axios from 'axios'
import M from 'materialize-css'


export default {
    name:'SignUp',
    data () { 
        return {
            username:'',
            email:'',
            password:''
        }
    },
    methods:{
        async signup(){
            let username = this.username
            let email=this.email
            let password=this.password

            if(!username || !email || !password){
                M.toast({
                    html:"fields should not be empty"
                })
                return
            }

            if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email) === false){
                M.toast({
                    html:"invalid email",
                    classes:"#d50000 red accent-4"
                })
                return
            }

            axios.post('signup',{
                username,
                email,
                password
            })
            .then(data=>{
                console.log(data)
                if(data.data==="SUCCESS"){
                    M.toast({
                        html:"Saved Successfully",
                        classes:"#388e3c green darken-2"
                    })
                    this.$router.push('/login')
                }
                else{
                    M.toast({
                        html:"Username/Email is already taken",
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