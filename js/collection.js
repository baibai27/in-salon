

$(function(){

	$(".collection_item").each(function(){
	var url =	$(this).find("a").attr("href")
	$(this).tap(function(){
		location.href = url
	})
	})

	$("h2.title .char").css("opacity","0")
	$(window).load(function(){
		op()
		$(".slick").slick({
		   dots: true,
		  infinite: true,
		  autoplay: true,
		  fade: true,
		  cssEase: 'linear'
		})
	})
})

function op(){
	slide_op()
}

var blurElement = {a:12};

function applyBlur()
{
    TweenMax.set($("#top_slide .box_in .slide_item"), {webkitFilter:"blur(" + blurElement.a + "px)",filter:"blur(" + blurElement.a + "px)"});
};
function slide_op(){
	$("#top_slide .box_in .slide_item").width($("#top_slide .box_in").width())
	$("#top_slide .box_in").css("width","0").css("opacity","1")
	$("#top_slide .box_in .slide_item").css("opacity","0")
	$("#top_slide .box_in .slide_item").eq(now_slide).css("opacity","1")
	TweenLite.to($("#top_slide .box_in .slide_item"),5,{scale:1})
	TweenLite.to($("#top_slide .box_in"),0.8,{delay:1,width:"100%",ease:Power3.easeInOut,onComplete:function(){
		$("#top_slide .box_in .slide_item").css("width","100%")
		$("#top_slide .slide_page").css("opacity","0")
		$("#top_slide .slide_page .title").eq(0).css("opacity","1")
		//TweenLite.to(	$("#top_slide .slide_page"),0,{x:10})
		TweenLite.to(	$("#top_slide .slide_page"),2,{x:0,opacity:1})
		$("#top_slide .line p").css({marginLeft:0,width:0})
			TweenLite.to($("#top_slide .line p"),4.5,{width:"100%",ease:Power0.easeNone,onComplete:function(){
			TweenLite.to($("#top_slide .line p"),0.4,{marginLeft:"100%"})
			//TweenMax.to(blurElement, 2, {a:12, onUpdate:applyBlur});
			TweenLite.to($("#top_slide .box_in .slide_item"),2,{opacity:0})
			$("#top_slide .slide_page .title").eq(now_slide).find(".char").each(function(i){
		      TweenLite.to($(this),0.6,{y:-10,opacity:0,delay:(i*0.03),ease:Power3.easeOut})
		  })
		}})
		movie_anime()

	}})
	scroll_anime()
}
var now_slide = 0;
function movie_anime(){

	$("#top_slide .title dd").lettering()
	$("#top_slide .title dt").lettering()


		$("#top_slide .line p").css({marginLeft:0,width:0})
			TweenLite.to($("#top_slide .line p"),4.5,{width:"100%",ease:Power0.easeNone,onComplete:function(){
			TweenLite.to($("#top_slide .line p"),0.4,{marginLeft:"100%"})
			//TweenLite.to($("#top_slide .box_in .slide_item"),2,{opacity:0})
			/*$("#top_slide .slide_page .title").eq(now_slide).find(".char").each(function(i){
		      TweenLite.to($(this),0.6,{y:-10,opacity:0,delay:(i*0.03),ease:Power3.easeOut})
		  })*/
		}})
}


function scroll_anime(){

	var controller = new ScrollMagic.Controller();

	$("h2.title").lettering()
	$("h2.title").each(function(i){
				var tween = TweenMax.to($(this), 1, {delay:0.3,opacity: 1,y:0});
				var $title_font = $(this)
				$title_font.find(".char").each(function(t){
						TweenLite.to($(this),0,{y:30,opacity:0})
					})
				var scene = new ScrollMagic.Scene({reverse:false,triggerElement: $(this).get(0),offset:(-winH/2)+50}) // トリガー要素、終了距離（px）
						.on("enter", function (event) {
							$title_font.find(".char").each(function(t){
									TweenLite.to($(this),0,{y:30,opacity:0})
									TweenLite.to($(this),0.6,{y:0,opacity:1,delay:0.3+(t*0.01)+(i*0.06),ease:Power3.easeOut})
								})
						})
						.setClassToggle($(this).get(0),"on")
						.addTo(controller);

	})
	$(".collection_img h2").lettering()
	$(".collection_img h2").each(function(i){
				var tween = TweenMax.to($(this), 1, {delay:0.3,opacity: 1,y:0});
				var $title_font = $(this)
				$title_font.find(".char").each(function(t){
						TweenLite.to($(this),0,{y:30,opacity:0})
					})
				var scene = new ScrollMagic.Scene({reverse:false,triggerElement: $(this).get(0),offset:(-winH/2)+50}) // トリガー要素、終了距離（px）
						.on("enter", function (event) {
							$title_font.find(".char").each(function(t){
									TweenLite.to($(this),0,{y:30,opacity:0})
									TweenLite.to($(this),0.6,{y:0,opacity:1,delay:0.3+(t*0.03)+(i*0.06),ease:Power3.easeOut})
								})
						})
						.addTo(controller);

	})
	$(".collection_img ul").each(function(t){
			let $main = $(this)
		 $(this).find("li:not(:eq(0))").each(function(i){
				TweenMax.to($(this), 0, {opacity: 0,x:15});
				var tween = TweenMax.to($(this), 1+(i*0.6), {delay:0.7+(i*0.2),opacity: 1,x:0,ease:Power3.easeOut});

				var scene = new ScrollMagic.Scene({reverse:false,triggerElement: $main.get(0),offset:(-winH/2)+50})
						.setTween(tween)
						.addTo(controller);
					})
	})

	$(".collection_img .bg_img").each(function(t){

			let $main = $(this)
				TweenMax.to($(this), 0, {opacity: 0,y:50});
				var tween = TweenMax.to($(this), 3, {delay:0.7,opacity: 1,y:0,ease:Power3.easeOut});

				var scene = new ScrollMagic.Scene({reverse:false,triggerElement: $main.get(0),offset:(-winH/2)+50})
						.setTween(tween)
						.addTo(controller);

	})

	$(".price dl,.discount,.credit,.salon_info dl").each(function(t){

			let $main = $(this)
				TweenMax.to($(this), 0, {opacity: 0,y:15});
				var tween = TweenMax.to($(this), 1.2, {delay:0.1,opacity: 1,y:0,ease:Power3.easeOut});

				var scene = new ScrollMagic.Scene({reverse:false,triggerElement: $main.get(0),offset:(-winH/2)+50})
						.setTween(tween)
						.addTo(controller);

	})
	$(".price .price_list>p:not(.credit)").each(function(t){

			let $main = $(this)
				TweenMax.to($(this), 0, {opacity: 0,x:-20});
				var tween = TweenMax.to($(this), 1.6, {delay:0.6,opacity: 1,x:0,ease:Power3.easeOut});

				var scene = new ScrollMagic.Scene({reverse:false,triggerElement: $main.get(0),offset:(-winH/2)+50})
						.setTween(tween)
						.addTo(controller);

	})

	$(".hair_list li").each(function(t){

			let $main = $(this)
				TweenMax.to($(this), 0, {opacity: 0,y:15});
				var tween = TweenMax.to($(this), 1.2, {delay:0.2+($(this).offset().left*0.0002),opacity: 1,y:0,ease:Power3.easeOut});

				var scene = new ScrollMagic.Scene({reverse:false,triggerElement: $main.get(0),offset:(-winH/2)+50})
						.setTween(tween)
						.addTo(controller);

	})

	$(".staff_item .staff_img").each(function(t){

			let $main = $(this)
				TweenMax.to($(this), 0, {opacity: 0,y:15});
				var tween = TweenMax.to($(this), 1.2, {delay:0.2,opacity: 1,y:0,ease:Power3.easeOut});

				var scene = new ScrollMagic.Scene({reverse:false,triggerElement: $main.get(0),offset:(-winH/2)+50})
						.setTween(tween)
						.addTo(controller);

	})

	$(".salon_text,.reserve_text").each(function(t){

			let $main = $(this)
				TweenMax.to($(this), 0, {opacity: 0,x:20});
				var tween = TweenMax.to($(this), 1.6, {delay:0.6,opacity: 1,x:0,ease:Power3.easeOut});

				var scene = new ScrollMagic.Scene({reverse:false,triggerElement: $main.get(0),offset:(-winH/2)+50})
						.setTween(tween)
						.addTo(controller);

	})



}








/**/
