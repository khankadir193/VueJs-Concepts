<template>
    <h1>This concept is the html validation</h1>
    <form @submit.prevent="submitForm">
        <div class="name-container">
            <div class="first">
                <label>First Name</label>
                <input type="text" placeholder="enter your first name" v-model="name" :class="{'error' : !isNameValid}">
                <span v-if="!isNameValid" class="error-message">Name is required</span>
            </div>
            <div class="second">
                <label>Last Name</label>
                <input type="name" placeholder="enter your last name" v-model="lastName" :class="{'error' : !isLastNameValid}">
                <span v-if="!isLastNameValid" class="error-message">LastName is required</span>
            </div>
        </div>
        <div class="userName-container">
            <label>User Name</label>
            <input type="name" placeholder="enter your last Username" v-model="userName" :class="{'error' : !isUserNameValid}" >
            <span v-if="!isUserNameValid" class="error-message">UserName is required</span>
            
            <label>Email(Optional)</label>
            <input type="email" placeholder="enter your mail" v-model="email" :class="{'error' : !isEmailValid}" >
            <span v-if="!isEmailValid" class="error-message">Email is required</span>

            <label>Address</label>
            <input type="address" placeholder="enter your address" v-model="address" :class="{'error' : !isAddressValid}">
            <span v-if="!isAddressValid" class="error-message">Address is required</span>

        </div>
        <div class="option-container">
            <div class="first-opt">
                <label for="country">Country</label>
                <select name="select" id="options" v-model="country">
                    <option value="india">india</option>
                    <option value="pakistan">pakistan</option>
                    <option value="china">china</option>
                    <option value="bangladesh">bangladesh</option>
                </select>
                <span v-if="!isCountryValid" class="error-message">Country is required</span>
            </div>

            <div class="second-opt" >
                <label for="state">State</label>
                <select name="select" id="options" v-model="state">
                    <option value="Uttarpradesh">Uttarpradesh</option>
                    <option value="MadhyaPradesh">MadhyaPradesh</option>
                    <option value="Maharashra">Maharashra</option>
                    <option value="Delhi">Delhi</option>
                </select>
                <span v-if="!isStateValid" class="error-message">State is required</span>
            </div>

            <div class="third-opt" >
                <label for="country">Zip</label>
                <input type="text" placeholder="enter your zip code" v-model="zip">
                <span v-if="!isZipCodeValid" class="error-message">ZipCode is required</span>

            </div>
        </div>
        <button type="submit">Submit</button>
    </form>
</template>

<script>
export default {
    name: 'HtmlValidation',
    data(){
        return{
            name:'',
            isNameValid:false,
            lastName:'',
            isLastNameValid:false,
            userName:'',
            isUserNameValid:false,
            email:'',
            isEmailValid:false,
            address:'',
            isAddressValid:false,
            country:'',
            isCountryValid:false,
            state:'',
            isStateValid:false,
            zip:'',
            isZipCodeValid:false
        }
    },
    methods:{
        submitForm(){
            this.isNameValid = !!this.name.trim();
            this.isLastNameValid = !!this.lastName.trim();
            this.isUserNameValid = !!this.userName.trim();
            this.isEmailValid = !!this.email.trim();
            this.isAddressValid = !!this.address.trim();
            this.isCountryValid = !!this.country.trim();
            this.isStateValid = !!this.state.trim();
            this.isZipCodeValid = !!this.zip.trim();


            // this.isNameValid = true;
            if(this.isNameValid && this.isLastNameValid && this.isUserNameValid && this.isEmailValid && this.isAddressValid && this.isCountryValid && this.isStateValid && this.isZipCodeValid){
                console.log('form submitted is successfully....');
            }
        }
    }
}
</script>

<style scoped>
h1 {
    background-color: rgb(7, 109, 156);
    color: white;
}

.name-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.userName-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
    margin-top: .5rem;

}

.userName-container input {
    width: 100%;
    height: 4vh;
    border: 2px solid purple;
    border-radius: 1vw;
}

.option-container {
    display: flex;
    margin-top: .5rem;
}

.first-opt,.second-opt,.third-opt {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}
.error{
    border-color: red;
}

.error-message{
    color: red;
}

</style>
