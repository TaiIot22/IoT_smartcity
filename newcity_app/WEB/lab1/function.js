// khoi tao cac thong so
let btn1 = document.querySelector('#btn1');
let img1 = document.querySelector('#quat');
let btn2 = document.querySelector('#btn2');
// functions nut bam
// const database=firebase.database();
// const deviceRef=database.ref('quan1');

btn1.addEventListener('click', ()=>{
    img1.src = 'image/quat_on.gif'; 
    firebase.database().ref("thietbi1").set({quat: 1})
})
btn2.addEventListener('click', ()=>{
    img1.src = 'image/quat.png';
    firebase.database().ref("thietbi1").set({quat: 0})
})


// khoi tao cac thong so
let btn3 = document.querySelector('#btn3');
let img2 = document.querySelector('#suoi');
let btn4 = document.querySelector('#btn4');
// functions nut bam
btn3.addEventListener('click', ()=>{
    img2.src = 'image/am.gif'; 
    firebase.database().ref("thietbi2").set({suoiam: 1})
})

btn4.addEventListener('click', ()=>{
    img2.src = 'image/may.png';
    firebase.database().ref("thietbi2").set({suoiam: 0})
})



// khoi tao cac thong s
let btn5 = document.querySelector('#btn5');
let img3 = document.querySelector('#lamp');
let btn6 = document.querySelector('#btn6');

// functions nut bam
btn5.addEventListener('click', ()=>{
     img3.src = 'image/lamp.gif' ;
     firebase.database().ref("thietbi3").set({den: 1})

})
btn6.addEventListener('click', ()=>{
    img3.src = 'image/lamp2.png';
    firebase.database().ref("thietbi3").set({den: 0})

})
