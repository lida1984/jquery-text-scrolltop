//动画效果
;(function($, window, document) {
    "use strict";
    /**
     * 动画效果参考：  https://easings.net/zh-cn
     */
    var domIndex = 1;
    var defaults = {
        "bottom": '80%'         //相对父级要移动的距离
        ,"opacity" : 0.3        //终止显示透明度
        ,"fontSize" : '16px'    //终止显示的字体大小
        ,"time" : 4000          //动画时长
        ,"ease" : 'easeOutQuart' //动画效果
    };
    function rollTxt(obj , options){
        this.element = $(obj);
        this.options = $.extend(defaults, options);
        this.createMoveDom(domIndex);
        this.startMove = function(origin ,target){
            if (!origin && !target){
                return
            }
            this.setHtml(domIndex ,origin ,target );
            this.createMoveDom( ++domIndex );
        }
        this.updateText = function(origin ,target){
            if (!origin && !target){
                return
            }
            this.updateDom(domIndex , origin ,target );
        }
    }
    rollTxt.prototype = {
        createMoveDom: function(i){
            var div = '<div class="contents" id="c'+i+'"><p></p><p class="en"></p><p class="en"></p></div>' ;
            this.element.append(div);
            
        },
        updateDom : function (i, origin ,target ){
            (origin && typeof(origin) === 'string' ) && $('#c'+i+' p:first-child').html(origin);
            (target && typeof(target) === 'string' ) && $('#c'+i+' p:last-child').html(target).fadeIn();
            
        },
        contentMoveTop: function(i){
            if ($('#c'+i).length == 0 || $('#c'+i).is(':animated') ){
                return
            }
            var self = this ;
            $('#c'+i).animate({
                "bottom": self.options.bottom ,
                "opacity" : self.options.opacity ,
                "fontSize" : self.options.fontSize
            } ,self.options.time ,self.options.ease , function() {
                $('#c'+i).remove();
            });
        },
        setHtml : function(i ,origin, target ){
            (origin && typeof(origin) === 'string' ) && $('#c'+i+' p:first-child').html(origin);
            (target && typeof(target) === 'string' ) && $('#c'+i+' p:last-child').html(target).fadeIn();
            this.contentMoveTop(i);
        }
    }
    window.rollTxt = rollTxt ;
})(jQuery, window, document);