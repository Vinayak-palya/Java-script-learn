

// // code 1
// const t1 = performance.now();
// for(let i=1;i<=100;i++)
//     {
//         let para = document.createElement('p');
//         para.textContent = "This is para " + i;
//         document.body.appendChild(para);
//     }
//     const t2 = performance.now();
//     console.log("total time taken by the code 1 is : " + (t2 - t1));
    
    
    
//     const t3 = performance.now();
//     // code 2
    
//     let mydiv = document.createElement('div');
    
//     for(let i = 1;i <= 100;i++)
//         {
//             let para = document.createElement('p');
//             para.textContent = "This is para : " +(i+1);
//             mydiv.appendChild(para);
            
//         }
//         document.body.appendChild(mydiv);
//         const t4 = performance.now();
//         console.log("total time taken by the code 2 is : " + (t4 - t3));




// best code

let fragment = document.createDocumentFragment();

for(let i =1;i <= 100;i++)
{
    let para = document.createElement('p');
    para.textContent = "this is para "+(i +100);
    // No reflow and repaint
    fragment.appendChild(para);
}
// 1 reflow and 1 repaint
document.body.appendChild(fragment);