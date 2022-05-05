
let numArr = [10,4,10,50];
let strArr = ["name1","name71","name3"]

// strArr.push("name4")
// strArr.pop()

strArr.unshift("name0")


let result = numArr.splice(1,2,14,15)

numArr.push(100)

console.log(numArr.sort(function(a,b){return a-b}))
console.log(numArr.reverse())

console.log("items:")
numArr.forEach((el,i)=>{
    console.log(i+' - '+el)
})

let userArr = [{name:'Name1',surname:'surname1'},{name:'Name2',surname:'surname2'},{name:'Name3',surname:'surname3'}]
function funcForMap(el){ return  {fullname:el.name+' '+el.surname}}
let fullnameArr = userArr.map(funcForMap);


// userArr.forEach(el=>{
//     fullnameArr.push(el.name+' '+el.surname)
// })

console.log(fullnameArr)


let pointArr = [10,45,65,76,88,90];

function filter(arr,check){
    let newArr = [];
    arr.forEach(el=>{
        if(check(el)){
            newArr.push(el)
        }
    })

    return newArr;
}

let filteredArr = pointArr.filter(x=>x>50)

console.log(pointArr)
console.log(filteredArr)

let arr = ['a','b','c']

let r = arr.join('-');
console.log(r)
console.log(r.split('-'))


let numbers = [10,4,50,20];

let total=0;
function sum(arr, i=0){
    if(arr.length>i){
        total += arr[i];    
        i++;
        sum(arr,i)
    }
    else{
        return;
    }
}

sum(numbers);
console.log(total)


let nums1 = [14,10,5,67];
let nums2 = [10,4,78,90,5];


function arrContact(arr1,arr2){
    return nums1.concat(arr2.filter(x=>arr1.indexOf(x)<0));
}

console.log(arrContact(nums1,nums2))




