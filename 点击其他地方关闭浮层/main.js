clickMe.addEventListener('click', function (e) {
    if(popover.style.display === 'block'){
        popover.style.display = 'none'
        console.log('消失')
    }
    else{
        popover.style.display = 'block'
    }  
    console.log('点了')
})
wrapper.addEventListener('click', function (e) {
    e.stopPropagation()
})

document.addEventListener('click', function () {
    popover.style.display = 'none'
})