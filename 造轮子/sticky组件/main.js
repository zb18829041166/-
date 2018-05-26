class sticky{
    constructor(selector,n){
        this.element=$(selector)
        this.offset = n || 0 
        this.addPlaceHolder()
        this.cacheOffset()
        this.linstenToScroll()
    }
    addPlaceHolder(){
        this.element.wrap("<div class='sticky-wrap'></div>")
        this.element.parent().height(this.element.height())
    }
    cacheOffset(){
        this.top= this.element.offset().top
    }
    linstenToScroll(){
        $(window).on('scroll',()=>{
            var scrollY=window.scrollY
            console.log("Y"+scrollY)
            console.log("set"+this.offset)
            console.log("top"+this.top)
            if((scrollY+this.offset)>this.top){
                this.element.addClass("sticky").css({top:this.offset})
            }else{
                this.element.removeClass("sticky")
            }
        })
    }
}

new sticky("#topbar")
new sticky("button",60)