let userData = [
  {
    id: 1,
    firstName: "Harsh",
    middleName: "S",
    lastName: "Kaushik",
    email: "hks@gmail.com",
    phoneNumber: "+91-9898989898",
    role: "Intern",
    address: "India",
  },
  {
    id: 2,
    firstName: "krystal",
    middleName: "",
    lastName: "Clear",
    email: "kc@domain.com",
    phoneNumber: "+91-96969696996",
    role: "Data Scientist",
    address: "India",
  },
  {
    id: 3,
    firstName: "krystal",
    middleName: "",
    lastName: "Clear",
    email: "kc@domain.com",
    phoneNumber: "+91-96969696996",
    role: "Data Scientist",
    address: "India",
  },
];
function loadUserData() {
  let tableBody = document.getElementById("userTableBody");
  tableBody.innerHTML = "";
  for (let user of userData) {
    let row = document.createElement("tr");
    row.innerHTML = `
                <td>${user.firstName}</td>
                <td>${user.middleName}</td>
                <td>${user.lastName}</td>
                <td>${user.email}</td>
                <td>${user.phoneNumber}</td>
                <td>${user.role}</td>
                <td>${user.address}</td>
                <td>
                    <button onclick="editUser(this)">Edit</button>
                    <button onclick="deleteUser(this)">Delete</button>
                </td>
            `;
    tableBody.appendChild(row);
  }
  document.getElementById("loadButton").innerHTML = "Refresh data";
}
function editUser(button) {
  let row = button.parentNode.parentNode;
  let firstName = row.cells[0].innerHTML;
  let middleName = row.cells[1].innerHTML;
  let lastName = row.cells[2].innerHTML;
  let email = row.cells[3].innerHTML;
  let phoneNumber = row.cells[4].innerHTML;
  let role = row.cells[5].innerHTML;
  let address = row.cells[6].innerHTML;
  row.innerHTML = `
            <td><input type="text" value="${firstName}"></td>
            <td><input type="text" value="${middleName}"></td>
            <td><input type="text" value="${lastName}"></td>
            <td><input type="email" value="${email}"></td>
            <td><input type="tel" value="${phoneNumber}"></td>
            <td><input type="text" value="${role}"></td>
            <td><input type="text" value="${address}"></td>
            <td>
            <button onclick="saveUser(this)">Save</button>
            <button onclick="cancelEdit(this)">Cancel</button>
            </td>
    `;
}
function saveUser(button) {
  let row = button.parentNode.parentNode;
  let inputs = row.getElementsByTagName("input");
  let id = row.rowIndex - 1;
  userData[id].firstName = inputs[0].value;
  userData[id].middleName = inputs[1].value;
  userData[id].lastName = inputs[2].value;
  userData[id].email = inputs[3].value;
  userData[id].phoneNumber = inputs[4].value;
  userData[id].role = inputs[5].value;
  userData[id].address = inputs[6].value;
  row.innerHTML = `
<td>${userData[id].firstName}</td>
<td>${userData[id].middleName}</td>
<td>${userData[id].lastName}</td>
<td>${userData[id].email}</td>
<td>${userData[id].phoneNumber}</td>
<td>${userData[id].role}</td>
<td>${userData[id].address}</td>
<td>
  <button onclick="editUser(this)">Edit</button>
  <button onclick="deleteUser(this)">Delete</button>
</td>
`;
}

function cancelEdit(button) {
  let row = button.parentNode.parentNode;
  let user = userData[row.rowIndex - 1];
  row.innerHTML = `
        <td>${user.firstName}</td>
        <td>${user.middleName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        <td>${user.phoneNumber}</td>
        <td>${user.role}</td>
        <td>${user.address}</td>
        <td>
            <button onclick="editUser(this)">Edit</button>
            <button onclick="deleteUser(this)">Delete</button>
        </td>
    `;
}
function deleteUser(button) {
  let row = button.parentNode.parentNode;
  row.remove();
}
