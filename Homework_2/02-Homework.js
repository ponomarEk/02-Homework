let numberN = prompt("Input nuber N : ");
let numberM = prompt("Input nuber M : ");
let flag = true;
while(flag){
if(parseFloat(numberN)-parseInt(numberN)!==0 ||parseFloat(numberM)-parseInt(numberM)!==0){
    alert("not integer number!!!")
    numberN = prompt("Input nuber N : ");
    numberM = prompt("Input nuber M : ");
}else{
    flag = false;
    numberN=parseInt(numberN);
    numberM=parseInt(numberM);
}
}
console.log(numberM);
console.log(numberN);
let missEven = confirm("Miss?");
let sum=0;
    if(missEven===false){
        for(let i = numberN;i<=numberM;i++){
            sum+=i;
    }
}
else{
    for(let i = numberN;i<=numberM;i++){
    if(i%2===0)continue;
    else sum+=i;
}
}
console.log(sum);

