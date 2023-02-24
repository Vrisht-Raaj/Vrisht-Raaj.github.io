function showConfirm(event) {
    event.preventDefault(); // prevent form submission
    
    // get user's entered information
    const fname = document.getElementById("firstName").value;
    const lname = document.getElementById("secondName").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("phoneNo").value;
    const birth = document.getElementById("birth").value;
    const gender = document.getElementById("Gender").value;
    const message = document.getElementById("comments").value;
   
    // create message for confirm box
    const confirmMessage = `Please confirm your information:\nFirst Name: ${fname}\nLast Name: ${lname}\nEmail: ${email}\nPhone Number: ${number}\nDate of birth: ${birth}\nGender: ${gender}\nComment: ${message}`;
    
    // display confirm box
    const confirmed = window.confirm(confirmMessage);
    
    // submit form if user confirms
    if (confirmed) {
      document.getElementById("myForm").submit();
    }
  }