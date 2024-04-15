$("document").ready(function() {
    $("#dateSelector").datepicker();
    $("#dateOfBirth").datepicker();
});

function validateForm() {

    const date = new Date();
    let todaysDate = (date.getMonth()+1);
    todaysDate+="/";
    if ((date.getDate())<10) {
        todaysDate+="0";
    }
    todaysDate+=date.getDate();
    todaysDate+="/";
    todaysDate+=date.getFullYear();

    let errorMessage="Invalid: ";

    let fnameTest=true;
    let snameTest=true;
    let dobTest=true;

    let fname = document.forms["myForm"]["frmForename"].value;
    if ((/^[A-z]{1}[a-z]{2,}$/.test(fname))==false) {
        fnameTest=false;
        errorMessage+=(" Forename,");
    }

    let sname = document.forms["myForm"]["frmSurname"].value;
    if ((/^[A-z]{1}[a-z]{1,}$/.test(sname))==false) {
        snameTest=false;
        errorMessage+=(" Surname,");
    }

    let dob = document.forms["myForm"]["frmDateOfBirth"].value;
    if (dob<("01/01/1900") || dob>todaysDate) {
        dobTest=false;
        errorMessage+=(" Date of Birth,");
    }

    errorMessage=errorMessage.slice(0,((errorMessage.length)-1))
    
    if (fnameTest==true && snameTest==true && dobTest==true && ageTest==true && dateRegTest==true && genderTest==true && courseTest==true) {
        window.alert("All Validation Passed!");
    } else {
        document.getElementById("errorMessageBox").innerHTML = errorMessage;
    }
    event.preventDefault();
}