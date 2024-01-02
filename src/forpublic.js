function replacePage(){
    let user_records=new Array();
    user_records=JSON.parse(sessionStorage.getItem("users"))?JSON.parse(sessionStorage.getItem("users")):[];
    let admin_records=new Array();
    admin_records = JSON.parse(sessionStorage.getItem("admins"))?JSON.parse(sessionStorage.getItem("admins")):[];
    let email=sessionStorage.getItem('email');
    if (email === null){

        console.log('dont replace')
        return
    }else{
        let find= user_records.find(function(x){
            return x.email === email;
        })
        if (find){
            window.location.replace('../user_mainpage/user.html')
        }else{
            let find= admin_records.find(function(x){
                return x.email === email;
            })
            if (find){
                window.location.replace('../admin_mainpage/admin.html')
            }else{
                return;
            }
        }
    }
 }
 replacePage();
 window.onunload = function(){};