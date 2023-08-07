var _ua = (function(u){
  return {
    Tablet:(u.indexOf("windows") != -1 && u.indexOf("touch") != -1 && u.indexOf("tablet pc") == -1)
      || u.indexOf("ipad") != -1
      || (u.indexOf("android") != -1 && u.indexOf("mobile") == -1)
      || (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1)
      || u.indexOf("kindle") != -1
      || u.indexOf("silk") != -1
      || u.indexOf("playbook") != -1,
    Mobile:(u.indexOf("windows") != -1 && u.indexOf("phone") != -1)
      || u.indexOf("iphone") != -1
      || u.indexOf("ipod") != -1
      || (u.indexOf("android") != -1 && u.indexOf("mobile") != -1)
      || (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1)
      || u.indexOf("blackberry") != -1
  }
})(window.navigator.userAgent.toLowerCase());
var userAgent = navigator.userAgent.toLowerCase();
var isIpad = userAgent.indexOf('ipad') > -1;
var meta = document.createElement('meta');
/*//////////////////////////////////////////////////////リサイズ*/
var winW, winH

var h_animef = true;
var mX = -50;
var mY = -50;

window.onmousemove = handleMouseMove;
   function handleMouseMove(event) {
       event = event || window.event; // IE対応
       mX = event.clientX;
       mY = event.clientY;
   }

var sc_size = {sm:400,md:768,lg:1000,xl: 1200}

function resize() {
  winW = $(window).width()
  winH = $(window).height()
  $("#fv").height(winH)
  $("body").removeClass("sm")
  $("body").removeClass("md")
  $("body").removeClass("lg")
  $("body").removeClass("xl")
  if(sc_size.sm>=winW){
    $("body").addClass("sm")
  }else if(sc_size.md>=winW){
    $("body").addClass("md")
  }else if(sc_size.lg>=winW){
    $("body").addClass("lg")
    if(!pc_op){
      header_op()
    }
  }else if(sc_size.xl>=winW){
    if(!pc_op){
      header_op()
    }
    $("body").addClass("xl")
  }
}
var agent = navigator.userAgent;
    var tablet=false
    if(agent.search(/iPad/) != -1 || agent.search(/Android/) != -1){

        if(screen.width>767&&screen.width<979){
              tablet=true;
        }
    }
    if(tablet){

    document.write('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">');

    }else{

    document.write('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">');
    }
var h_animef = true;
var url_arr =["collection","price","salon","hair","staff","works","recruit"]
//page-scroller
$(function(){

resize()
pjax_barba()

$(window).load(function(){
  resize()

})

$(window).resize(function(){
  resize()
})

/*////////////////////////*/

$(".g_menu,.g_sns").find("a").each(function(i){
    $(this).removeClass("now_page")
})

for(var i =0;i<url_arr.length;i++){
  if(location.href.indexOf(url_arr[i])!=-1){
    $(".a_"+url_arr[i]).addClass("now_page")
  }
}

/*//////////////////////////////////////////////////////lazyload*/


setTimeout(function(){
  $(".lazyload,.lazyloaded").each(function(){
    if($(this).offset().top<$(window).height()){
      var bg = $(this).attr('data-bg');
      if (bg) {
        $(this).css({"background-image":'url(' + bg + ')'});
      }
    }
  })
},500)
  /*//////////////////////////////////////////////////////lazyload*/
  window.lazySizesConfig = {
    lazyClass: 'lazyload', // lazyloadの対象とするクラスの指定。
  };

  document.addEventListener('lazybeforeunveil', function(e) {
    var bg = e.target.getAttribute('data-bg');
    if (bg) {
      e.target.style.backgroundImage = 'url(' + bg + ')';
    }
  });

    $(".menu_btn").tap(function() {

      h_animef = false;
      setTimeout(function(){
        h_animef = true
      },1000)
      if($("#g_header").hasClass('on')){
      $("#g_header").removeClass('on')
       header_anime_out()

      }else{
      $("#g_header").addClass('on')
        header_anime()
      }
    })
    $("#g_header #g_nav li a").lettering()
    $("#g_header #g_nav li a .char").css({transform:'translateY(30px)'})
    setTimeout(function(){
    header_op()
},350)

});

var pc_op = false;
function header_op(){
TweenLite.to($("#g_header"),1,{opacity:1})

if(!$("body").hasClass("sm")&&!$("body").hasClass("md")){

  pc_op = true;

  $("#g_header li").each(function(i){
    $(this).find(".char").each(function(t){
      TweenLite.to($(this),0,{y:30})
      TweenLite.to($(this),0.6,{y:0,delay:(t*0.01)+(i*0.06),ease:Power3.easeOut})
    })
  })
}

}

function header_anime(){
  $("#g_menu").css("display","block")
  $("#g_header #g_nav li a .char").css({transform:'translateY(30px)'})
  $("#g_header li").each(function(i){
    $(this).find(".char").each(function(t){
      TweenLite.to($(this),0,{y:30})
      TweenLite.to($(this),0.6,{y:0,delay:(t*0.01)+(i*0.06),ease:Power3.easeOut})
    })
  })
}


function header_anime_out(){
  $("#g_menu").css("display","none")
  $("#g_header #g_nav li").each(function(i){
    $(this).find(".char").each(function(t){
      TweenLite.to($(this),0.6,{y:-30,delay:(t*0.01)+(i*0.06),ease:Power3.easeOut})
    })
  })
}

/*マウスカーソル*/
var tcf  = true;
function mouse_cursor(){

if(tcf){
tcf  = false;

    var x_ =  mX
    var y_ =  mY
    var _x =  mX
    var _y =  mY

    function transform_value(e){

      var values = e.split('(')[1];

      values = values.split(')')[0];
      values = values.split(', ');
      var matrix = {
        scaleX:values[0],
        rotateP:values[1],
        rotateM:values[2],
        scaleY:values[3],
        transformX:values[4],
        transformY:values[5]
      };
      return matrix;
    }


    $('.btn_slide').css({"transform":"translate("+mX+"px,"+mY+"px)",opacity:0.5})
    $(window).mousemove(function(){
    	if(mvb==false){
    		mvb = true;
    		$('.btn_slide').css({"transform":"translate("+mX+"px,"+mY+"px)"})
    		x_ =  mX
    		y_ =  mY
    		_x =  mX
    		 _y =  mY
    	}

    })


    var mvb = false;

    var $btn_slide =$('.btn_slide')
    var props = $('.btn_slide').css("transform")
    		 function mouse_enter(){


           props = $btn_slide.css("transform")

    				if(props == "none")return false;
    				_x =  transform_value(props).transformX
    				_y =  transform_value(props).transformY
    				x_ -= (_x - mX)/10
    				y_ -= (_y - mY)/10


    					$btn_slide.css({"transform":"translate("+x_+"px,"+y_+"px)"})

              window.requestAnimationFrame(mouse_enter);
    		}
          var item_ov = false;
                window.requestAnimationFrame(mouse_enter);
}

$('a,.price_p,.discount,.post_text div').hover(function(){
    item_ov = true;
    $('.btn_slide').addClass("top").removeClass("no")
},function(){
    item_ov = false;
    $('.btn_slide').removeClass("top").addClass("no")
})

$('header,footer,button').hover(function(){
    item_ov = true;

    $('.btn_slide').addClass("ahover").removeClass("top")
},function(){

    item_ov = false;
    $('.btn_slide').removeClass("ahover").removeClass("top")
})
  $('header,footer').hover(function(){
  TweenLite.to($('.btn_slide'),0.3,{opacity:0})
},function(){
  TweenLite.to($('.btn_slide'),0.3,{opacity:0.7})
})

}



/*pjax処理*/

function pjax_barba(){
$(window).load(function(){
  int_index()

})
  op()
  mouse_cursor()
  $(".cover").delay(600).fadeOut(600)
//video_index()
// Barba.Pjax.init();
// Barba.Prefetch.init();





// headタグ内の書き換え
// Barba.Dispatcher.on('newPageReady', function(currentStatus, oldStatus, container, newPageRawHTML) {

//   var head = document.head;
//   var newPageRawHead = newPageRawHTML.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0];
//   var newPageHead = document.createElement('head');
//   newPageHead.innerHTML = newPageRawHead;

//   var removeHeadTags = [
//     "meta[name='description']",
//     "meta[property^='og']",
//     "meta[name^='twitter']",
//     "link[rel='canonical']"
//   ].join(',');
//   var headTags = head.querySelectorAll(removeHeadTags)
//   for(var i = 0; i < headTags.length; i++ ){
//     head.removeChild(headTags[i]);
//   }
//   var newHeadTags = newPageHead.querySelectorAll(removeHeadTags)

//   for(var i = 0; i < newHeadTags.length; i++ ){
//     head.appendChild(newHeadTags[i]);
//   }

// });

// Googleアナリティクスに情報を送る
// Barba.Dispatcher.on('initStateChange', function() {
//   if (typeof ga === 'function') {
//     ga('send', 'pageview', window.location.pathname.replace(/^\/?/, '/') + window.location.search);
//   }
// });

// Barba.Pjax.originalPreventCheck = Barba.Pjax.preventCheck;
//             Barba.Pjax.preventCheck = function(evt, element) {
//                 if(element){

//                     if (!element.getAttribute('href')) {
//                         return false;
//                     }
//                     // 外部リンクはtarget="_blank"に
//                     var site_url = location.protocol + '//' + location.host;
//                     if (!element.href.startsWith(site_url)) {
//                         element.setAttribute('target','_blank');
//                         return false;
//                     }
//                     // アンカーリンクであり同一ページでなければbarbaを有効に
//                     var url = location.protocol + '//' + location.host + location.pathname;
//                     var extract_hash = element.href.replace(/#.*$/,"");
//                     if (element.href.startsWith(location.protocol + '//' + location.host)) {
//                         if (element.href.indexOf('#') > -1 && extract_hash != url ){
//                             return true;
//                         }
//                     }
//                     // 拡張子が該当する場合はtarget="_blank"に
//                     if (/\.(xlsx?|docx?|pptx?|pdf|jpe?g|png|gif|svg)/.test(element.href.toLowerCase())) {
//                         element.setAttribute('target','_blank');
//                         return false;
//                     }
//                     // 該当クラスに属していればBarbaを無効に
//                     var ignoreClasses = ['ab-item','custom-no-barba'];
//                     for (var i = 0; i < ignoreClasses.length; i++) {
//                         if (element.classList.contains(ignoreClasses[i])) {
//                             return false;
//                         }
//                     }
//                     if (!Barba.Pjax.originalPreventCheck(evt, element)) {
//                         return false;
//                     }
//                     return true;
//                 }
//             };



var home_fv = true;
// ページごとの処理
// var HomeTransition = Barba.BaseView.extend({
//   namespace: 'home_index',
//   onEnter:function(){
//     $("#top_slide .slide_page").css("opacity","0")
//     $("#top_slide .slide_page .title").css("opacity","0")
//     TweenLite.to(	$("#top_slide .slide_page"),0,{x:0,opacity:0})
//     Insta_api_hair_int()
//     op()
//   },
//   onEnterCompleted:function(){

//     TweenLite.to($("#g_header"),1,{delay:0.3,opacity:1})
//   video_index()
//   scroll_ani()
//   setTimeout(function(){
//    TweenLite.to($(".parts2"),1,{height:53,ease:Power3.easeInOut,onComplete:function(){
//     TweenLite.to($(".parts2"),1,{opacity:0})
//     scroll_ani()
//    }})
//   },5000)
//   function scroll_ani(){
//       TweenLite.to($(".parts2"),1,{height:53,delay:1,ease:Power3.easeOut,onComplete:function(){
//         TweenLite.to($(".parts2"),1,{opacity:0,onComplete:function(){
//           TweenLite.to($(".parts2"),0,{height:0,opacity:1})
//             scroll_ani()
//         }})
//       }})
//     }

// home_fv = false;
// },
// onLeave: function() {

//   $("#top_slide .slide_page .title").css("opacity","0")
//   TweenLite.to(	$("#top_slide .slide_page"),0,{x:0,opacity:0})
//  },
//  onLeaveCompleted: function() {
//    $(".close_btn").parents("a").attr("href","/")
//    $(".back_btn").parents("a").attr("href","/")
// }
// });

// HomeTransition.init();


// var SalonTransition = Barba.BaseView.extend({
//   namespace: 'salon',
//   onEnter:function(){
//   },
//   onEnterCompleted:function(){

//     $(".slick").slick({
//        dots: true,
//       infinite: true,
//       autoplay: true,
//       fade: true,
//       cssEase: 'linear'
//     })

// },
// onLeave: function() {
//  },
//  onLeaveCompleted: function() {
// }
// });
// SalonTransition.init();

// var WorksTransition = Barba.BaseView.extend({
//   namespace: 'works',
//   onEnter:function(){
//     Tumblr_api_int()
//   },
//   onEnterCompleted:function(){



// },
// onLeave: function() {
//  },
//  onLeaveCompleted: function() {
// }
// });
// WorksTransition.init();

// var HairTransition = Barba.BaseView.extend({
//   namespace: 'hair',
//   onEnter:function(){
//   Insta_api_hair_int()
//   },
//   onEnterCompleted:function(){



// },
// onLeave: function() {
//  },
//  onLeaveCompleted: function() {
// }
// });
// HairTransition.init();



// var Collection_detai_Transition = Barba.BaseView.extend({
//   namespace: 'collection_detail',
//   onEnter:function(){
//   },
//   onEnterCompleted:function(){

//     $("header,footer").fadeOut(300)

// },
// onLeave: function() {
//   $("header,footer").fadeIn(300)
//  },
//  onLeaveCompleted: function() {
// }
// });
// Collection_detai_Transition.init();

// var Staff_detai_Transition = Barba.BaseView.extend({
//   namespace: 'staff_detail',
//   onEnter:function(){
//   },
//   onEnterCompleted:function(){
//     Insta_api_staff_int()
//     $("header,footer").fadeOut(300)

// },
// onLeave: function() {
//   $("header,footer").fadeIn(300)
//  },
//  onLeaveCompleted: function() {
// }
// });
// Staff_detai_Transition.init();


// var PageTransition = Barba.BaseTransition.extend({
//   start: function() {

//     if(winW<769){
//         $("#g_header").removeClass('on')
//          header_anime_out()
//     }
//   if(winW<769){
// $(".cover").fadeIn(150)
// }else{
//   $(".cover").fadeIn(600)
// }

// Promise
// .all([this.newContainerLoading, this.fadeOut()])
// .then(this.fadeIn.bind(this));
// },

// fadeOut: function() {

// //this.oldContainerは古いコンテナのHTMLElementです。この場合はアニメーションでフェードアウトさせている。
// return $(this.oldContainer).animate({ opacity: 0 },100).promise();

// },

// fadeIn: function() {
//   $("html,body").scrollTop(0)
//   if(winW<769){
// $(".cover").fadeOut(150)
// }else{
//   $(".cover").fadeOut(600)
// }
//   for(var i =0;i<url_arr.length;i++){
//     $(".a_"+url_arr[i]).removeClass("now_page")
//     if(location.href.indexOf(url_arr[i])!=-1){
//       $(".a_"+url_arr[i]).addClass("now_page")
//     }
//   }
// mouse_cursor()
// int_index()
// op()
// var _this = this;
// var $el = $(this.newContainer);
// $(this.oldContainer).hide();
// $el.css({
// visibility : 'visible',
// opacity : 0
// });

// if(winW<769){
//   $el.animate({ opacity: 1 }, 150, function() {
//   _this.done();
//   });
// }else{
//       $el.delay(400).animate({ opacity: 1 }, 400, function() {
//         _this.done();
//       });
//     }
//   }
// });

// Barba.Pjax.getTransition = function() {
//   return PageTransition;
// };

// Barba.BaseView.init()
// Barba.Pjax.start();

}

function insta_api(){
  $(".hair_list ul").empty()

}



function int_index(){

$("h2.title .char").css("opacity","0")
var user_ = navigator.userAgent.toLowerCase();
if (user_.indexOf("iphone") != -1||user_.indexOf("ipad") != -1||user_.indexOf("android") != -1||tablet) {
$("video").attr("src","/movie/sp.mp4");
}

$(".slide_tt").slick({
  fade:true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed:2000,
  dots:false})
  $("#top_slide .box_in").width("100%")
  $("#top_slide .box_in .slide_item").width("100%")
  $(".slide_tt").on('beforeChange',function(event, slick, currentSlide, nextSlide){
  if(winW>768){
    $(".title .char,.top_news").css({"color":"#FFF"})
if(nextSlide==0){
  $(".title .char,.top_news").css({"color":"#FFF"})
}else if(nextSlide==1){
  $(".title .char,.top_news").css({"color":"#000"})
}else if(nextSlide==2){
  $(".title .char,.top_news").css({"color":"#FFF"})
}else if(nextSlide==3){
  $(".title .char,.top_news").css({"color":"#FFF"})
}else if(nextSlide==4){
  $(".title .char,.top_news").css({"color":"#FFF"})
}else if(nextSlide==5){
  $(".title .char,.top_news").css({"color":"#FFF"})
}
}
    $("#top_slide .line p").css({width:"0%"})
    TweenLite.killTweensOf($("#top_slide .line p"))
    TweenLite.to($("#top_slide .line p"),5,{width:"100%",ease:Power0.easeNone,onComplete:function(){
    }})
  })

$(".price").find(".price_p").each(function(i){
	var ts = i;
  $(this).tap(function(){
  	$(this).toggleClass("onmouse");
    console.log($(this).index())
    $(this).next(".price_on").slideToggle(150);
  	//$(".price").find(".price_on").eq(ts).slideToggle(150);
    $(".price").find(".price_on").eq($(this).index()+1).slideToggle(150);
  })
})
$(".discount,.post_text").each(function(i){
	var ts = i;
  $(this).tap(function(){
  	$(this).toggleClass("onmouse");
    console.log($(this).index())
    $(this).find(".on_over").slideToggle(150);
  })
})


}
function op(){

	slide_op()
}

var blurElement = {a:12};

function applyBlur()
{
    TweenMax.set($("#top_slide .box_in .slide_item"), {webkitFilter:"blur(" + blurElement.a + "px)",filter:"blur(" + blurElement.a + "px)"});
};
function slide_op(){

  $("#top_slide .slide_page .title").css("opacity","0")
  $("#top_slide .slide_page").css("opacity","0")
	//$("#top_slide .box_in .slide_item").width($("#top_slide .box_in").width())
	$("#top_slide .box_in").css("width","0").css("opacity","1")
	//$("#top_slide .box_in .slide_item").css("opacity","0")
	TweenLite.to($("#top_slide .box_in .slide_item"),5,{scale:1})
  $("#top_slide .slide_page .title").css("opacity","0")
if(winW<769){
  $("#top_slide .box_in").css("width","100%").css({"opacity":"1"})
  $("#top_slide .slide_page").css({"opacity":"1"})
    $("#top_slide .line").css({"opacity":"1"})
    $("#top_slide .title").css({"opacity":"1"})
    TweenLite.to(	$("#top_slide .title"),0.3,{x:0,opacity:1})
    TweenLite.to(	$("#top_slide .slide_page"),0.3,{x:0,opacity:1})
  }

	TweenLite.to($("#top_slide .box_in"),0.8,{delay:1,width:"100%",ease:Power3.easeInOut,onComplete:function(){
	//	$("#top_slide .box_in .slide_item").css("width","100%")


		//TweenLite.to(	$("#top_slide .slide_page"),0,{x:10})
    TweenLite.to(	$("#top_slide .slide_page .title"),1,{opacity:1})
    if(winW>769){
      $("#top_slide .slide_page").css("opacity","0")
    TweenLite.to(	$("#top_slide .slide_page"),0,{x:0,opacity:0})
		TweenLite.to(	$("#top_slide .slide_page"),2,{x:0,opacity:1})
		$("#top_slide .line p").css({marginLeft:0,width:0})
  }else{
    TweenLite.to(	$("#top_slide .slide_page"),0.3,{x:0,opacity:1})
  }
  /*
  if(winW<768){
    TweenLite.to($("#top_slide .line p"),8,{width:"100%",ease:Power0.easeNone,onComplete:function(){
  }})
  }else{
    TweenLite.to($("#top_slide .line p"),11,{width:"100%",ease:Power0.easeNone,onComplete:function(){
  }})
}*/
setTimeout(function(){
  TweenLite.to($("#top_slide .line p"),5,{width:"100%",ease:Power0.easeNone,onComplete:function(){
  }})
},0)


		// movie_anime()

	}})
	scroll_anime()
}
var now_slide = 0;
function movie_anime(){

	$("#top_slide .title dd").lettering()
	$("#top_slide .title dt").lettering()
  if(winW>768){
    $(".title .char,.top_news").css({"color":"#FFF"})
  }

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
				var scene = new ScrollMagic.Scene({reverse:false,triggerElement: $(this).get(0),offset:(-winH/2)-100}) // トリガー要素、終了距離（px）
						.on("enter", function (event) {
							$title_font.find(".char").each(function(t){
									TweenLite.to($(this),0,{y:30,opacity:0})
									TweenLite.to($(this),0.6,{y:0,opacity:1,delay:0.1+(t*0.01)+(i*0.06),ease:Power3.easeOut})
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
				var scene = new ScrollMagic.Scene({reverse:false,triggerElement: $(this).get(0),offset:(-winH/2)-100}) // トリガー要素、終了距離（px）
						.on("enter", function (event) {
							$title_font.find(".char").each(function(t){
									TweenLite.to($(this),0,{y:30,opacity:0})
									TweenLite.to($(this),0.6,{y:0,opacity:1,delay:0.1+(t*0.03)+(i*0.06),ease:Power3.easeOut})
								})
						})
						.addTo(controller);

	})
	$(".collection_img ul").each(function(t){
			let $main = $(this)
		 $(this).find("li:not(:eq(0))").each(function(i){
				TweenMax.to($(this), 0, {opacity: 0,y:15});
				var tween = TweenMax.to($(this), 1+(i*0.6), {delay:0.1+(i*0.2),opacity: 1,y:0,ease:Power3.easeOut});

				var scene = new ScrollMagic.Scene({reverse:false,triggerElement: $main.get(0),offset:(-winH/2)-100})
						.setTween(tween)
						.addTo(controller);
					})
	})

	$(".collection_img .bg_img").each(function(t){

			let $main = $(this)
				TweenMax.to($(this), 0, {opacity: 0,y:50});
				var tween = TweenMax.to($(this), 3, {delay:0.1,opacity: 1,y:0,ease:Power3.easeOut});

				var scene = new ScrollMagic.Scene({reverse:false,triggerElement: $main.get(0),offset:(-winH/2)-100})
						.setTween(tween)
						.addTo(controller);

	})

	$(".price dl,.discount,.credit,.salon_info dl").each(function(t){

			let $main = $(this)
				TweenMax.to($(this), 0, {opacity: 0,y:15});
				var tween = TweenMax.to($(this), 1.2, {delay:0.1,opacity: 1,y:0,ease:Power3.easeOut});

				var scene = new ScrollMagic.Scene({reverse:false,triggerElement: $main.get(0),offset:(-winH/2)-100})
						.setTween(tween)
						.addTo(controller);

	})
	$(".price .price_list>p:not(.credit)").each(function(t){

			let $main = $(this)
				TweenMax.to($(this), 0, {opacity: 0,y:20});
				var tween = TweenMax.to($(this), 1.6, {delay:0.1,opacity: 1,y:0,ease:Power3.easeOut});

				var scene = new ScrollMagic.Scene({reverse:false,triggerElement: $main.get(0),offset:(-winH/2)-100})
						.setTween(tween)
						.addTo(controller);

	})

	$(".hair_list li").each(function(t){

			let $main = $(this)
				TweenMax.to($(this), 0, {opacity: 0,y:15});
				var tween = TweenMax.to($(this), 1.2, {delay:0.1+($(this).offset().left*0.0002),opacity: 1,y:0,ease:Power3.easeOut});

				var scene = new ScrollMagic.Scene({reverse:false,triggerElement: $main.get(0),offset:(-winH/2)-100})
						.setTween(tween)
						.addTo(controller);

	})

	$(".staff_item .staff_img").each(function(t){

			let $main = $(this)
				TweenMax.to($(this), 0, {opacity: 0,y:15});
				var tween = TweenMax.to($(this), 1.2, {delay:0.1,opacity: 1,y:0,ease:Power3.easeOut});

				var scene = new ScrollMagic.Scene({reverse:false,triggerElement: $main.get(0),offset:(-winH/2)-100})
						.setTween(tween)
						.addTo(controller);

	})

	$(".salon_text,.reserve_text").each(function(t){

			let $main = $(this)
				TweenMax.to($(this), 0, {opacity: 0,y:20});
				var tween = TweenMax.to($(this), 1.6, {delay:0.1,opacity: 1,y:0,ease:Power3.easeOut});

				var scene = new ScrollMagic.Scene({reverse:false,triggerElement: $main.get(0),offset:(-winH/2)-100})
						.setTween(tween)
						.addTo(controller);

	})



}







function video_index(){


  $(".slick").slick({
    dots: true,
    infinite: true,
    autoplay: true,
    fade: true,
    cssEase: 'linear'
  })
video_resize()
$(window).resize(function(){video_resize()})
 function video_resize(){
if(1080/1920<winH/winW){
  $(".top_video").css({"height":winH-100,"width":"auto"})
  if(winW<980){$(".top_video").css({marginLeft:($(".top_video").width()-winW-360)/2})}else{
    $(".top_video").css({marginLeft:0})
  }
}else{
	$(".top_video").css({"height":"auto","width":winW-360})
}
setTimeout(function(){
	if( 1080/1920<(winH)/winW){
		$(".top_video").css({"height":winH-100,"width":"auto"})
    if(winW<980){$(".top_video").css({marginLeft:($(".top_video").width()-winW-360)/2})}else{
      $(".top_video").css({marginLeft:0})
    }

	}else{
		$(".top_video").css({"height":"auto","width":winW-360})

	}
},150)

}
var v = document.getElementById("video");
var user_ = navigator.userAgent.toLowerCase();
//video()
function video(){

 v.play();

 v.addEventListener('play', function() {
 })
 v.addEventListener('ended', function() {
		TweenLite.killTweensOf($("#top_slide .line p"))
		$("#top_slide .line p").css({marginLeft:0,width:0})
    if(winW<768){
      TweenLite.to($("#top_slide .line p"),8,{width:"100%",ease:Power0.easeNone,onComplete:function(){
  	}})
    }else{
      TweenLite.to($("#top_slide .line p"),11,{width:"100%",ease:Power0.easeNone,onComplete:function(){
  	}})
    }

	 v.play();
 });
}
}
function Insta_api_staff_int(){
  $(".insta_list").empty()
  var $container = $(".insta_list");
  var myAccessToken = $(".insta_list").attr("data-token"); //実際のアクセストークンを入力
  $.ajax({
      url:'https://api.instagram.com/v1/users/self/media/recent/?access_token='+myAccessToken,
      dataType: "json"
      }).done(function(data){
        var $data = data.data
        console.log($data[0])
        $i = 0;
        for(var i=0 ; i<12 ;i++){
            $container.append("<li class='insta_f insta_img' style='background-image:url("+$data[i].images.low_resolution.url+")'><a target='_blank' href='"+$data[i].link+"'></a><div class='text'><dl><dd class='name'>"+$data[i].user.username+"</dd><dd>"+$data[i].caption.text+"</dd></dl></div></li>")
          }
      })
}
var url_ins = ["/img/ins/1.jpg","/img/ins/2.jpg","/img/ins/3.jpg","/img/ins/4.jpg","/img/ins/5.jpg","/img/ins/6.jpg","/img/ins/7.jpg","/img/ins/8.jpg","/img/ins/9.jpg"]
function Insta_api_hair_int(){

var $container = $(".hair_list ul");
var myAccessToken = '626506448.9567928.5c2b9df49c624d94ac76acb3410debb8'; //実際のアクセストークンを入力
$.ajax({
    url:'https://api.instagram.com/v1/users/self/media/recent/?access_token='+myAccessToken,
    dataType: "json"
    }).done(function(data){
      var $data = data.data
      console.log($data[0])
      $i = 0;
      for(var i=0 ; i<9 ;i++){
          $container.append('<li class="insta_f"><a target="_blank" href="'+$data[i].link+'"><img src="'+ $data[i].images.low_resolution.url+'" alt=""></a><div class="text"><dl><dd class="name">'+$data[i].user.username+'</dd><dd>'+$data[i].caption.text+'</dd></dl></div></li>')
        }
    })

}
function Tumblr_api_int(){
  /*--------tumblrAPI(Blog)--------*/
  $('.works_list').empty()

    domain ="syantokyo.tumblr.com";
    kensu ="99";
    $('.works_list').empty()

 $.getJSON("https://"+domain+"/api/read/json?num="+kensu+"&callback=?",function(data){


			$.each(data.posts, function(i, posts) {


				var rt = this['regular-title'];//タイトル
				var url = this['url'];//投稿URL
				var rbody = this['regular-body'];
				var rbodydate = $(rbody).html()//画像
				var src = $(rbody).find("img").attr('src');//画像URL


				var caption = $(rbody).text();//説明
				if(caption.length > 112) {caption = caption.substring(0, 112) + " ...";}


					if (this['type'] === "regular") {

$('.works_list').append(

            '<div class="works_item clearfix test" style="opacity:0"><div class="works_img">'+
                '<img src="'+src+'">'+
              '</div><ul><li>'+rt+'</li><li>'+
              caption+'</li></ul></div>')
									//画像をul内にリストとして実装
							} else {
									return;
							}
			});
      $(".works_item").each(function(i){
        TweenLite.to($(this),1,{opacity:1,delay:0.3*i})
      })

        }
    );
}
