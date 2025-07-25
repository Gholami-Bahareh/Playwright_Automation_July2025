//to write if something is in the array say testcase= pass, else say not pass
const result = [ 'Yellow', 'Black', 'Orange','violet', 'Indigo' ]
let flag = false
for(i=0;i<result.length;i++){
    if(result[i]==="violet"){
        flag = true    
        break        
    }
    
}
if (flag){
    console.log("testcase pass")
}
else{
    console.log("Testcase fail")
}

//array.forEach(callbackfn(items, index, array(optional)){some code})
let arrayDemo = [345, "Demo", true, 203.39];

arrayDemo.forEach(function(val, ind){

    console.log("things are:"+val + "   - "+"with this index: "+ind);
})