const main = document.querySelector('.main'),
btnLeft = document.querySelector('.btn-left'),
btnRight = document.querySelector('.btn-right'),
dotContainer = document.querySelector('.dot-container')
btnLeft.addEventListener('click',()=>{
    count--;
   if(count<0){
    count=img.length-1;
   }
   main.style.background=`url('img/img${img[count]}.png')`;
   const nth = document.querySelector('.dot-container:nth-child(2)')
  
})

btnRight.addEventListener('click',()=>{
    count++;
   if(count>img.length-1){
    count=0;
   }
   main.style.background=`url('img/img${img[count]}.png')`;
})


