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

    if (fname === '' || lname === '' || email === ''  || number === ''  || message === '') {
      alert('Please fill in all fields correctly.');
      return;
    }
   
    // create message for confirm box
    const confirmMessage = `Please confirm your information:\nFirst Name: ${fname}\nLast Name: ${lname}\nEmail: ${email}\nPhone Number: ${number}\nDate of birth: ${birth}\nGender: ${gender}\nComment: ${message}`;
    
    // display confirm box
    const confirmed = window.confirm(confirmMessage);
    
    // submit form if user confirms
    if (confirmed) {
      const userData = { fname, lname,email};

		let registeredMembers = localStorage.getItem('registeredMembers');

		if (registeredMembers) {
			registeredMembers = JSON.parse(registeredMembers);
		} else {
			registeredMembers = [];
		}

		registeredMembers.push(userData);

		localStorage.setItem('registeredMembers', JSON.stringify(registeredMembers));

		myForm.reset();

		alert('Thank you for registering!');
	}
  }