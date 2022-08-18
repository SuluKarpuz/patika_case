function addisOrEvenish(number){
    let x=0;
    let myFunc = num => Number(num);
    var intArr = Array.from(String(number), myFunc);
    for (let i = 0; i < intArr.length; i++) {
        x += intArr[i] ;
        
    }
    if(x%2==0){
        return "Even";
        
    }
    else{
        return "Odd";
        
    }

    
}


console.log((addisOrEvenish(43)));
console.log((addisOrEvenish(373)));
console.log((addisOrEvenish(4433)));
