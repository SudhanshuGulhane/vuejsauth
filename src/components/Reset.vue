<template>
    <div class="res">
    <form @submit.prevent="reset">
        <h3>Reset</h3>
        <div >
            <input type="email" v-model="email" placeholder="email"/>
        </div>
        <div>
            <input v-model="password" type="password" placeholder="new password"/>
        </div>
        <button className="btn waves-effect waves-light #7e57c2 deep-purple lighten-1">Reset</button>
    </form>
    </div>
</template>

<script>

import axios from 'axios'
import M from 'materialize-css'

export default {
    name:'Reset',
    data() { 
        return { 
            email:'',
            password:''
        }
    },
    methods:{
        async reset(){
            let email=this.email
            let password=this.password
            
            if(!email || !password){
                M.toast({
                    html:"field should not be empty!"
                })
                return
            }

            axios.post('reset',{
                email,
                password
            })
            .then(data=>{
                if(data.data==="SUCCESS"){
                    M.toast({
                    html:"Password changed successfully!",
                    classes:"#388e3c green darken-2"
                    })
                    this.$router.push('/login')
                }
                else{
                    M.toast({
                        html:"Email is invalid",
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
.res{
    max-width: 300px;
    margin-left: 30%
}
</style>