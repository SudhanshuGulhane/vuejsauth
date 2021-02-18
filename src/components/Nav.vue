<template>
    <div className="home-card">
                <h3 className="waves-effect white btn">
                    <router-link to="/login" >Login</router-link>
                </h3>
                <h3 className="waves-effect white btn">
                    <router-link to="/signup">SignUp</router-link>
                </h3>
                <h3 className="waves-effect white btn">
                    <router-link to="/reset">ResetPassword</router-link>
                </h3>
            </div>
</template>

<script>
export default {
    name:'Nav'
}
</script>

<style scoped>
.home-card{
    margin-top: 200px;
    text-align: center;    
}
</style>
