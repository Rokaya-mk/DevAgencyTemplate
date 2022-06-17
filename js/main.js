/*set slider height
*/
//get slider
let slider = document.querySelector('.slider')
let carouselItem = document.querySelectorAll('.carousel-item')
//get upperBar 
let upperbar = document.querySelector('.upper-bar')
//get navbar 
let navbar = document.querySelector('.navbar')
let sliderHeight = (window.innerHeight) - (upperbar.offsetHeight + navbar.offsetHeight)
 slider.style.height = `${sliderHeight}px`
 carouselItem.forEach(item => {
    item.style.height = `${sliderHeight}px`
})
/**
 * Start Featured work
 * 
 */
//add active class to list item

//add overlay images
let list = document.querySelectorAll('.featured-work li')
//get img div
let images = document.querySelectorAll('.featured-work .col-md');
list.forEach(element =>{
    element.addEventListener('click',(e) =>{
        e.preventDefault()
        element.classList.add("active")
        list.forEach(item=>{
            if(item !== e.target){
                item.classList.remove("active")
            }
        })
        const category = element.getAttribute('data-class')
        images.forEach(item=>{
            if(item.getAttribute('data-class') === category){
                item.style.opacity="1"
            }else if(element.getAttribute('data-class') === 'all'){
                images.forEach(item => item.style.opacity ="1")
            }else{
                item.style.opacity = "0.1"
            }
            
        })

    })
})

images.forEach(column => {
    column.addEventListener("mouseover",(e)=>{
        e.preventDefault();
        e.stopPropagation()
        //get overlay
        let overlay = column.lastElementChild;
            overlay.style.display = "flex";
    })
    column.addEventListener("mouseout",(e)=>{
        e.preventDefault();
        e.stopPropagation()
        //get overlay
        let overlay = column.lastElementChild;
            overlay.style.display = "none";
    })
    
    
})

