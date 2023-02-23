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

  function storeUser() {
    // Add an event listener for form submissions
    document.getElementById('myForm').addEventListener('submit', function() {
      // get user information from the form
    const fname = document.getElementById("firstName").value;
    const lname = document.getElementById("secondName").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("phoneNo").value;
    const birth = document.getElementById("birth").value;
    const gender = document.getElementById("Gender").value;
    const message = document.getElementById("comments").value;
    
    // create an object with user information
    const user = {
      fname: fname,
      lname: lname,
      email: email,
      number: number,
      birth: birth,
      gender: gender,
      message: message
    };
    
    // get existing users from local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    
    // add the new user to the list
    users.push(user);
    
    // store the updated list back to local storage
    localStorage.setItem("users", JSON.stringify(users));      
    });
  }