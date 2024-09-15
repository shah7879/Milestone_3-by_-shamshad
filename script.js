// Get reffrences to the form and display area
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // collect input value
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate the resume content dynamically
    var reumeHTML = "\n    <h2><b> Resume</b></h2>\n    <h3>Personal Information<h3>\n    <p><b>Name:</b>".concat(name, "</p>\n    <p><b>Email:</b>").concat(email, "</p>\n    <p><b>Phone:</b>").concat(phone, "</p>\n    \n   <h3>education</h3>\n   <p>").concat(education, "\n   \n    <h3>experience</h3>\n   <p>").concat(experience, "\n   \n    <h3>skills</h3>\n   <p>").concat(skills, "\n   ");
    // Display generated Resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = reumeHTML;
    }
    else {
        console.error('The resume display element is missing');
    }
});
