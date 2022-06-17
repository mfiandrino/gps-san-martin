const navElements = document.querySelectorAll('header li')
const menuImgs = document.querySelectorAll('.categories');


for (let i=0; i < menuImgs.length; i++)
{
    menuImgs[i].addEventListener('mouseover',() => {
        navElements[i].classList.add('bgSecColor')
        menuImgs[i].addEventListener('mouseout',() => navElements[i].classList.remove('bgSecColor'));
    })
}
