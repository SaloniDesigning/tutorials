// const handleFormSubmit = (event) => {
//     event.preventDefault();
//     const dob = document.getElementById("dob");
//     const date = new Date();
//     if (dob > date.getDate()) {
//         alert("Date should be in past");
//     } else {
//         alert("form submitted successfully..");
//     }
// };
document.getElementById("contact_form")?.addEventListener("submit", (event) => {
    debugger;
    event.preventDefault();
    debugger;
    const dob = document.getElementById("dob");
    const date = new Date();
    debugger;
    if (dob > date.getDate()) {
        debugger;
        alert("Date should be in past");
    } else {
        debugger;
        alert("form submitted successfully..");
    }
});
