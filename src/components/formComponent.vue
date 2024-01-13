<template>
<h1>This topic is regarding form</h1>
<h2>Simple Form</h2>
<h2>{{ form }}</h2>
<label>Email:</label><br><br>
<input type="text" placeholder="enter your email" v-model="form.email"/>
<br><br>
<label>Password:</label><br><br>
<input type="password" placeholder="enter your password" v-model="form.password" />
<br><br>
<select name="country" v-model="form.country">
    <option value="India">India</option>
    <option value="China">China</option>
    <option value="Pakistan">Pakistan</option>
</select>
<br><br>
<h2>Technology</h2>
<label>Java</label>
<input type="checkbox" value="java" v-model="form.technology"/>
<br><br>
<label>.Net</label>
<input type="checkbox" value=".net" v-model="form.technology" />
<br><br>
<h2>Gender</h2>
<label>Male</label>
<input type="radio" value="male" v-model="form.gender"/>
<br><br>
<label>Female</label>
<input type="radio" value="female" v-model="form.gender" />

<br><br>


<button v-on:click="login">Login</button>
</template>

<script>
export default {
    name: 'refComponent',
    data(){
        return {
            form:{
                email:'',
                password:'',
                country:'',
                technology:[],
                gender:''
            },
            error:[]
        }
    },
    methods: {
        login() {
            this.error = []
            for(const item in this.form){
                if(this.form[item] === "" || this.form[item].lengthn === 0){
                    this.error.push(item);
                }
            }

            if(this.error.length === 0){
                alert('data is submitted..');
            }
            console.log('form..??',this.form);
        }
    }
}
</script>

<style scoped>
h1 {
    background-color: rgb(131, 12, 91);
    color: white;
}
</style>
