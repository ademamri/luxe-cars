let star0=document.getElementsByClassName("star0")
let star1=document.getElementsByClassName("star1")
let star2=document.getElementsByClassName("star2")
let star3=document.getElementsByClassName("star3")
let stars=document.getElementsByClassName("stars")
let star4=document.getElementsByClassName("star4")
let all=[star0,star1,star2,star3,star4]
console.log(all[0][1])
// for (let ii = 0; ii < stars.length; ii++) {
    
//     stars[ii].addEventListener("click",function(){
//         for (let index = 0; index < all[ii].length; index++) {
//             all[ii].addEventListener("click",function(){
//                 for (let i = 0; i < all[ii].length; i++) {
//                     all[ii][i].style.color="yellow"
                    
//                 }
//             })
            
//         }
//     })
// }
var tt=""
for (let index = 0; index < all.length; index++) {

    stars[index].addEventListener("click",function(){
        for (let i = 0; i < all[index].length; i++) {
            all[index][i].addEventListener("click",function(){
               
                    
                    
                all[index][i].style.color="yellow"
             
                
            })
            
        }
    })
    
    
}