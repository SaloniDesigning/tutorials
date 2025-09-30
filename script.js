const handleFormSubmit = () => {
    const dob = document.getElementById("dob").value;
    const date = new Date();
    if (new Date(dob) > date) {
        alert("Date should be in past");
    } else {
        alert("form submitted successfully..");
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";        
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("dob").value = "";
    }
};