const container =document.querySelector('.container')
const besar =document.querySelector('.besar')

container.addEventListener('click',function(e){
if( e.target.className== 'thumb' ) {
    besar.src = e.target.src;
    besar.classList.add('fade')
    setTimeout(function() {
        besar.classList.remove('fade')
        
    },500)  
}});