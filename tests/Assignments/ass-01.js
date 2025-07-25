const n = "45676.69787"
for (let i = 0; i < n.length; i++) {
    //console.log(n[i]);
    if(n[i]==="."){
        let r = n[i-1]%2;
        if(r===0){
            console.log("first piece is even")
        }
        else{
            console.log("first piece is odd")
        }
    }
    
  
}

let r2= n[n.length-1]%2
if(r2===0){
    console.log("second piece is even")
}
else{
    console.log("second piece is odd")
}






