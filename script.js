// array the stores all the images elements in the header-slider class
const imgs = document.querySelectorAll('.header-slider ul img')

// stores control_prev element
const prev_btn = document.querySelector('.control_prev')

// stores control_next element
const next_btn = document.querySelector('.control_next')

let n = 0;

// hide all images except for n image
function changeSlide(){
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
        
    }
    imgs[n].style.display = 'block';

}
changeSlide();

// prev_btn functionality
prev_btn.addEventListener('click', ()=>{
    if(n>0){
        n--;
    }else{
        n=imgs.length-1;
    }
    changeSlide();

})

// next_btn functionality
next_btn.addEventListener('click', ()=>{
    if(n<imgs.length-1){
        n++;
    }else{
        n=0;
    }
    changeSlide();

})

const scrollContainer = document.querySelectorAll('.products');
for (const item of scrollContainer) {
    item.addEventListener('wheel', (evt)=>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    
    })
}