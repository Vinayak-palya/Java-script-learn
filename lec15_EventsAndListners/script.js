
// // // function changeText(event)
// // // {
// // //     console.log(event);
// // //     let fpara = document.getElementById('fpara');
// // //     fpara.textContent = "vinayak";
// // // }
// // // // anothrer way
// // // let fpara = document.getElementById('fpara');
// // // // fpara.addEventListener('click',function ()
// // // // {
// // //     // let fpara = document.getElementById('fpara');
// // // //     fpara.textContent = "vinayak";
// // // // }
// // // // );

// // // fpara.addEventListener('click' , changeText);
// // fpara.removeEventListener('click' , changeText);




// // let anchorElement = document.getElementById('fanchor');
// // anchorElement.addEventListener('click' , function(event){
// //     event.preventDefault();
// //     anchorElement.textContent = "click done bhai";
// // });


// let paras = document.querySelectorAll('p');
function alertPara(event)
{
    if(event.target.nodeName === 'SPAN')
    {
        alert("you have clicked on para :"+ event.target.textContent);
    }
}
// for(let i = 0;i < paras.length;i++)
// {
//     let para = paras[i];
//     para.addEventListener('click' , alertPara);
// }

let mydiv = document.getElementById('wrapper');
document.addEventListener('click' , alertPara);