//pushing the books to saved
function savedBooks(id){
    let selected = id;
    saved_records= JSON.parse(sessionStorage.getItem("saved"))?JSON.parse(sessionStorage.getItem("saved")):[]

    let savebook= allBooks.find(function(x){
        return selected === x.id;
    })
    if (savebook){
        let findDupe= saved_records.find(function(x){
            return savebook.id === x.id;
        })
        if(findDupe){
            if(elementExists("saved"+savebook.id)){
                console.log('dupe')
                saved_records=saved_records.filter(function(x){
                    return findDupe.id !== x.id;
                })
                let hearfill= document.getElementById("saved"+findDupe.id);
                hearfill.classList.remove("heart-fill");
                sessionStorage.setItem("saved",JSON.stringify(saved_records));
                console.log(saved_records)
            } if (elementExists("savedModal"+savebook.id)){
                let hearfill= document.getElementById("savedModal"+savebook.id);
                hearfill.classList.remove("heart-fill");
                console.log("Modal")
            } if (elementExists("savedRelated"+savebook.id)){
                let hearfill= document.getElementById("savedRelated"+savebook.id);
                hearfill.classList.remove("heart-fill");
                console.log("Related")
            }
            
        }else{
            if (elementExists("saved"+savebook.id)){
                let hearfill= document.getElementById("saved"+savebook.id);
                saved_records.push({
                    "id": savebook.id,
                })
                sessionStorage.setItem("saved",JSON.stringify(saved_records));
                hearfill.classList.add("heart-fill");
                console.log("saved")
            } if (elementExists("savedModal"+savebook.id)){
                let hearfill= document.getElementById("savedModal"+savebook.id);
                hearfill.classList.add("heart-fill");
                console.log("Modal")
            } if (elementExists("savedRelated"+savebook.id)){
                let hearfill= document.getElementById("savedRelated"+savebook.id);
                hearfill.classList.add("heart-fill");
                console.log("Related")
            }
            
        }
    }     
}
//stopped unnecessary behavior
function clickEvent(event){
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
}
//for the heartfill
function checkSaved(){
    saved_records= JSON.parse(sessionStorage.getItem("saved"))?JSON.parse(sessionStorage.getItem("saved")):[]
    saved_records.map(function(x){
        let hearfill= document.getElementById("saved"+x.id);
        hearfill.classList.add("heart-fill");
    })
}
function elementExists(id) {
    return !!document.getElementById(id);
}
function checkModal(){
    saved_records= JSON.parse(sessionStorage.getItem("saved"))?JSON.parse(sessionStorage.getItem("saved")):[]
    saved_records.map(function(x){
        if (elementExists("savedRelated"+x.id)){
            let hearfillRelated=document.getElementById("savedRelated"+x.id);
            hearfillRelated.classList.add("heart-fill");
           
        }else if(elementExists("savedModal"+x.id)){
            let hearfillModal=document.getElementById("savedModal"+x.id);
            hearfillModal.classList.add("heart-fill");
        }else{
            console.log("not here");
        }
    })
}
checkSaved();




