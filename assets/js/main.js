//Math lev-1-1
console.log('********lev-1-1********')
console.log(Math.PI)
let pi = Math.PI.toFixed(2);
console.log(pi)

//Math.round lev-1-2
console.log('********lev-1-2********')
let array = [
    3.14,
    193.4464,
    0.8596433607,
    -2.940629089,
  ];
  
  function round(arr){
  arr.forEach(elt =>{
     let a = Math.round(elt);
     console.log(a)
  })
}
round(array)

//Math.Random() Math.floor() lev-1-3
console.log('********lev-1-3********')
let ranNum = Math.random()
let ranNum1_10 = Math.floor(Math.random()*10+1)
let ranNum1_100 = Math.floor((Math.random()*100-1)+1)
console.log(ranNum)
console.log(ranNum1_10)
console.log(ranNum1_100)

//Math.min Math.max lev-1-4
console.log('********lev-1-4********')
let numArr = [393,205,479,47,376,267,385,2,190,383,286,462,115,138,331,409,427,245,224,276,483,55,147,177,208,347,135,282,33,270,475,426,476,453,474,351,219,358,354,410,240,139,371,356,277,202,264,204,447,488];
function minMax(arr){
    for( i=0 ; i < arr.length ; i++){
        console.log('Max of the  Num-'+(i+1)+':'+Math.max(arr[i])) 
        console.log('Min of the  Num-'+(i+1)+':'+Math.min(arr[i])) 
    }
}
minMax(numArr)


//Math.min Math.max lev-2-2
console.log('********lev-2-2********')
let message = window.prompt("Geuss a Number between 1 and 10");
console.log(ranNum1_10)
if (message == ranNum1_10){
    console.log("Wow you did't ")
}else{
    console.log("Sorry you lose! try again the Number is: ",ranNum1_10)
}


//Math.min Math.max lev-2-3
console.log('********lev-2-2********')
function minAge(){
    let parAge = Math.min(55,65);
    let broAge = Math.min(26,16,18)
    let footPlayer = (26,30,40,32,40,19,24,38,23)
    console.log('Parents:'+parAge+' Brothers: '+broAge+'FootballPlayers: '+footPlayer)
    console.log(Math.min(parAge,broAge,footPlayer))
}
minAge()