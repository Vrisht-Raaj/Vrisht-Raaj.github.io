const registeredMembersList = document.getElementById('registered-members');

let registeredMembers = localStorage.getItem('registeredMembers');

if (registeredMembers) {
	registeredMembers = JSON.parse(registeredMembers);

	for (const userData of registeredMembers) {
		const listItem = document.createElement('li');
		const fname = userData.fname;
        const lname = userData.lname;
		const email = userData.email;

		listItem.textContent = `${fname} ${lname} (${email})`;

		registeredMembersList.appendChild(listItem);
	}
}