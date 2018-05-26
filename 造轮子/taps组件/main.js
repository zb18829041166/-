class Tabs{
    constructor(selector){
        this.elements=$(selector)
        this.init()
        this.bindEvent()
    }

    init() {
        this.elements.each((index,element) => {
            $(element).children('.tab-bar').children('li').eq(0).addClass('active')
            $(element).children('.tab-content').children('li').eq(0).addClass('active')
        });
    }

    bindEvent(){
        this.elements.on('click', '.tab-bar > li', function(e){
            var $e=$(e.currentTarget)
            $e.addClass('active').siblings().removeClass('active')
            var index=$e.index()
            var $content=$e.closest('.tabs').find('.tab-content').children('li').eq(index)
            $content.addClass('active').siblings().removeClass('active')
        });
    }
}



var tabs = new Tabs('.xxx')    