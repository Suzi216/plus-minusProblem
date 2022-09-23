function plusMinus(arr) {
    let posSum=0;
    let nevSum=0;
    let zeroSum=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]<0){
            nevSum=nevSum+1;
        }
        else if(arr[i]>0){
            posSum=posSum+1;
        }
        else{
            zeroSum=zeroSum+1;
        }
    }
    console.log((posSum/arr.length).toFixed(6));
    console.log((nevSum/arr.length).toFixed(6));
    console.log((zeroSum/arr.length).toFixed(6));

}
