jquery 源码剖析：
	1. 定义一坨辅助变量
	2. 定义 jQuery=(selector, context)=>{}
	3. 定义$.fn指向原型链 jQuery.fn = jQuery.prototype = { ... }
	4. 定义jQUery.extend = jQuery.fn.extend
	5. 执行jQuery.exte	nd() 初始化
	6. 给 jQuery.fn添加Symbol.iterator
	7. 处理javaScript的所有类型
	8. 集成Sizzle
	9. jQuery.find = Sizzle 获取css的方法直接使用的就是sizzle
	10.执行jQuery.fn.extend() 继续初始化
	11.定义jQuery.fn.init(),并且init.prototype = jQuery.fn = jQuery.prototype
	12.定义rootjQuery = jQuery(document) 初始化
	13.执行jQuery.fn.extend() 继续初始化
	14.执行jQuery.extend() 继续初始化
	15.定义jQuery.fn.ready
	16.定义jQuery.ready.promise并且执行
	
	17.定义Data构造函数
	18.重写Data.prototype
	19.实例化两个Data对象
	20.执行jQuery.extend 继续初始化
	21.执行jQuery.fn.extend 继续初始化
	22.定义jQuery.event={}
	23.定义jQuery.removeEvent = ()=>{}
	24.定义jQuery.Event = ()=>{}
	25.重写jQuery.Event.prototype
	26.处理鼠标事件
	27.执行jQuery.fn.extend 继续初始化
	28.定义jQuery.cssHooks
	
	29.定义Tween构造函数 并放到jQuery.Tween = Tween;
	30.重新定义Tween.prototype
	31.关联 Tween.prototype.init.prototype = Tween.prototype
	32.定义Tween.propHooks={}
	33.定义jQuery.easing={}
	34.定义jQuery.fx = Tween.prototype.init;
	
	35.定义jQuery.Animation = $.extend(Animation, {})
	36.定义jQuery.speed = ()=>{}
	37.定义jQuery.timers = []
	38.定义jQuery.fx.tick = ()=>{}
	39.定义jQuery.fx.timer = (time)=>{}
	40.定义jQuery.fx.interval  =13
	41.定义jQuery.fx.start = ()=>{}
	42.定义jQuery.fx.stop = ()=>{}
	43.定义jQuery.fx.speeds = {} 
	44.定义jQuery.fn.delay = ()=>{}
	45.扩展jQuery.event
	46.定义jQuery.parseJSON
	47.定义jQuery.parseXML
	48.定义jQuery._evalUrl = (url)=>{}
	49.定义jQuery.expr.filters.hidden
	50.定义jQuery.expr.filters.visible
	51.定义jQuery.param = ()=>{}
	52.定义jQuery.ajaxSettings.xhr
	53.执行jQuery.ajaxSetup 初始化
	54.执行jQuery.ajaxPrefilter('script', (s)=>{})
	55.执行执行jQuery.ajaxTransport('script', (s)=>{})
	56.定义jQuery.parseHTML = ()=>{}
	57.定义jQuery.fn.load()=>{}
	58.定义jQuery.expr.filters.animated
	59.定义jQuery.offset= {}
	60.定义jQuery.fn.andSelf = jQuery.fn.addBack
	61.定义jQuery.noConflict
	62.添加全局变量window.jQuery、window.$
	
	
	
	
	