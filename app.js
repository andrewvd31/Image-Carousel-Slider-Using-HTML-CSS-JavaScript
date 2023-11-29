const img = document.querySelector('.img')
const btns = document.querySelectorAll('.btn')
const imgArray = [1,2,3]
let count = 0

btns.forEach((data)=>{
    data.addEventListener('click',()=>{
        if (data.classList.contains('left')){
            count--;
            if (count < 0){
                count = imgArray.length - 1
            }
            img.src = `${imgArray[count]}.jpg`
        }
        else if (data.classList.contains('right')){
            count++;
            if (count > imgArray.length - 1){
                count = 0
            }
            img.src = `${imgArray[count]}.jpg`
        }
    })
})