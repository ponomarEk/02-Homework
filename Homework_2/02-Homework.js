let numberN = +(prompt("Input number N : "));
let numberM = +(prompt("Input number M : "));
let flag = true;
while(flag){

if(parseFloat(numberN)-parseInt(numberN)!==0 || parseFloat(numberM)-parseInt(numberM)!==0 || parseInt(numberN)>=parseInt(numberM)){
    alert("not integer number or N >= M!!!");
    numberN = +(prompt("Input number N : "));
    numberM = +(prompt("Input number M : "));
}else {
flag=false;
}
}

console.log(numberM);
console.log(numberN);
let missEven = confirm("Miss?");
console.log(missEven);
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

let homeworkTemplate = `
number N = ${numberN}<br>
number M = ${numberM}<br>
missEven = ${missEven}<br>
sum = ${sum}<br>`
document.writeln(homeworkTemplate);
