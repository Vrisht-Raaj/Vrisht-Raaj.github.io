function displayUsers() {
    // get the list of users from local storage
    var users = JSON.parse(localStorage.getItem("users")) || [];
    
    // get the HTML element to display the list
    var userList = document.getElementById("user-list");
    
    // create a string with the HTML for the list
    var html = "";
    for (var i = 0; i < users.length; i++) {
      html += "<li>" + users[i].name + " (" + users[i].email + ")</li>";
    }
    
    // add the HTML to the element
    userList.innerHTML = html;
  }
  