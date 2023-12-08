


let arr = [];

function todo(){



let input = document.getElementById('input');
let list = document.getElementById('list')

arr.push(input.value);


 let data = '';


if( input.value !=""){

    for(let item in arr){
        data += `<li class="bg-light list-group-item d-flex justify-content-between"> ${arr[item]} <button onclick="Delete()" class="btn btn-danger">X</button></li>`
        input.value="";
       
        }   
              
}
else{alert('inputu doldur')}


list.innerHTML = data;

}

function Delete(x){
    console.log(arr.splice(x, 1))
}



// if( input.value !=""){

//     for(let item of arr){
//         data += `<li class="bg-light list-group-item d-flex justify-content-between"> ${item} <button onclick="Delete()" class="btn btn-danger">X</button></li>`
//         input.value="";
       
//         }   
              
// }
// else{alert('inputu doldur')}


// list.innerHTML = data;

// }

// function Delete(x){
//     console.log(arr.splice(x, 1))
// }


// if( input.value !=""){

//     for(let i=0;  i<arr.length; i++){
//         // data += `<li class="bg-light list-group-item d-flex justify-content-between"> ${arr[i]} <button onclick="Delete()" class="btn btn-danger">X</button></li>`
//         // input.value="";
//        console.log(i)
//         }   
              
// }
// else{alert('inputu doldur')}


// list.innerHTML = data;

// }

// function Delete(x){
//     // console.log(arr.splice(x, 1))
// }




















// //  for

// //  let cars = ['bmw', 'opel','lada','nissan'];
// // let data = '';
// // for (let i = 0; i < cars.length; i++) {
// //     data += `<li>${cars[i]} </li>`
// // }
// // document.getElementById('list').innerHTML = data;

// // // for of
// //  let cars = ['bmw', 'opel','lada','nissan'];
// //  let data='';

// // for (let item of cars){
// //    data+=`<li>${item} </li>`
// // }
// // document.getElementById('list').innerHTML = data;

// // // for in
// // let cars = ['bmw', 'opel','lada','nissan'];
// //  let data='';

// // for (let item in cars){
// //    data+=`<li>${cars[item]} -${item} </li>`
// // }
// // document.getElementById('list').innerHTML = data;


// // push method -- axira elave etmek
 
// // let cars = ['bmw', 'opel','lada','nissan'];

// // cars.push ('Audi')


// // unshift method -- evvele elave etmek

// // let cars = ['bmw', 'opel','lada','nissan'];
// // cars.unshift('Audi')



// // pop method -- axirdan goturmek
// // let cars = ['bmw', 'opel','lada','nissan'];
// // // cars.pop();
// // alert(cars.pop())



// // shift method -- evvelden goturmek

// // let cars = ['bmw', 'opel','lada','nissan'];
// // cars.shift()

// // splice -  istenilen yere elave etmek ve goturmey

// let cars = ['bmw', 'opel','lada','nissan'];

// // cars.splice(2,0,'Audi')
// // cars.splice(1,1,'audi')
// // cars.splice(1,2,'Audi')
// // cars.splice(2,1)
// // cars.splice(1,3,'Audi')
// cars.splice(1,0,'Audi')




// // console.log(cars)