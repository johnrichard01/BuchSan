//set admin accounts
let admin_records=new Array();
admin_records = JSON.parse(localStorage.getItem("admins"))?JSON.parse(localStorage.getItem("admins")):[];
// Check if the data already exists in the array
var newData = {
    "name": "jessica Pam Velasquez",
    "username": "pam",
    "email": "pam@buchsan.com",
    "password": "12345678"
};

var newDataExists = admin_records.some(function (admin) {
    return admin.username === newData.username && admin.email === newData.email;
});

if (!newDataExists) {
    // Data doesn't exist, so push it into the array
    admin_records.push(newData);
}

// Repeat the process for the second set of data
newData = {
    "name": "John Richard Vidal Sumagui",
    "username": "Richard",
    "email": "richard@buchsan.com",
    "password": "12345678"
};

newDataExists = admin_records.some(function (admin) {
    return admin.username === newData.username && admin.email === newData.email;
});

if (!newDataExists) {
    // Data doesn't exist, so push it into the array
    admin_records.push(newData);
}
localStorage.setItem("admins",JSON.stringify(admin_records));