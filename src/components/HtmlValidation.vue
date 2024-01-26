<template>
    <h1>This concept is the html validation</h1>
    <form action="post">
        <div class="name-container">
            <div class="first">
                <label>First Name</label>
                <input type="text">
            </div>
            <div class="second">
                <label>Last Name</label>
                <input type="name" placeholder="">
            </div>
        </div>
        <div class="userName-container">
            <label>User Name</label>
            <input type="name" placeholder="Username">
            <label>Email(Optional)</label>
            <input type="email" placeholder="enter your mail">
            <label>Address</label>
            <input type="address" placeholder="enter your address">
        </div>
        <div class="option-container">
            <div class="first-opt">
                <label for="country">Country</label>
                <select name="select" id="options">
                    <option value="india">india</option>
                    <option value="pakistan">pakistan</option>
                    <option value="china">china</option>
                    <option value="bangladesh">bangladesh</option>
                </select>
            </div>

            <div class="second-opt" >
                <label for="state">State</label>
                <select name="select" id="options">
                    <option value="Uttarpradesh">Uttarpradesh</option>
                    <option value="MadhyaPradesh">MadhyaPradesh</option>
                    <option value="Maharashra">Maharashra</option>
                    <option value="Delhi">Delhi</option>
                </select>
            </div>

            <div class="third-opt" >
                <label for="country">Zip</label>
                <input type="text">
            </div>
        </div>
    </form>
</template>

<script>
export default {
    name: 'HtmlValidation'
}
</script>

<style scoped>
h1 {
    background-color: rgb(7, 109, 156);
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

.first {
    /* display: flex; */
}
</style>
