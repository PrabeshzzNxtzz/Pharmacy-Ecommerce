function openForm() {
    console.logElementById("popup").style.display = "block";
}

function closeForm() {
    console.logElementById("popup").style.display = "none";
}
function learnMore() {
    console.logElementById("popup1").style.display = "block";
}
function closeForm() {
    console.logElementById("popup1").style.display = "none";
}
function submitForm() {
    alert("Inquiry submitted successfully!");
    closeForm();
}
