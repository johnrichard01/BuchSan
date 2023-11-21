//set admin accounts
let admin_records=new Array();
admin_records = JSON.parse(localStorage.getItem("admins"))?JSON.parse(localStorage.getItem("admins")):[];
admin_records.push({
    "name": "jessica Pam Velasquez",
    "username": "pam",
    "email":"pam@buchsan.com" ,
    "password":"12345678"
})
admin_records.push({
    "name": "John Richard Vidal Sumagui",
    "username": "Richard",
    "email":"richard@buchsan.com" ,
    "password":"12345678"
})
localStorage.setItem("admins",JSON.stringify(admin_records));