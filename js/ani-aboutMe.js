// JavaScript Document

	// About Me animation
	$(function(){
		$("#blackBox").css({opacity:0.7});



			win_h =$(window).height()
			$('#about div.abP').css({height:win_h, lineHeight:win_h+'px' /*, minWidth:960, minHeight:700*/})

			$('.abP').each(function(index){			
				$(this).attr('data-n',index * win_h)
			});

			function paper() {
				var total = 25;
				var counter = 0;
				$("#ca").hide();					
				var timer = setInterval(function(){
					counter++;				
					if (counter <= total) {
						$("#pageAni02 > img").css({marginLeft:"-=885"});
						//console.log($("#pageAni02 > img").offset().left)
					} else {
						counter = 0;
												
						clearInterval(timer);
						$("#ca").stop().fadeIn(2000);

					}

				},70);
			}
		
		//네비클릭하면 클릭한 위치로 이동
		$('.gnb li').click(function(){
			var clickNum = $(this).index();
			var winHeight = $(window).height();
				$("html,body").animate({scrollTop:winHeight * clickNum},600)
		});
		
		//mousewheel
		//var win_h =$(window).height()
		
		$('#about div.abP').each(function(index){			
				$(this).attr('data-st',index*win_h)
			})
		
		
		
		$('.abP').mousewheel(function(e,delta){
			st = parseInt($(this).attr('data-st'))
			
			if(delta>0){
				$('body,html').stop().animate({scrollTop:st-win_h},600);
				return false;
			}
			
			if(delta<0){
				$('body,html').stop().animate({scrollTop:st+win_h},600);
				return false; 

			}
			
		});

		var view = [0,0,0];
		$(".gnb li").eq(0).addClass("view");

		$(window).scroll(function(){
			var scrollPos = $(window).scrollTop();
			var winHeight = $(window).height();
	
			if (scrollPos >= winHeight * 2 && view[2] === 0) {
				$("#pageAni02 > img").css({marginLeft:885});
				$("#ca").stop().hide();					
				$(".gnb li").removeClass("view");
				$(".gnb li").eq(2).addClass("view");
				
				view = [0,0,1];

			} else if (scrollPos >= winHeight && view[1] === 0)  {


				$(".gnb li").removeClass("view");
				$(".gnb li").eq(1).addClass("view");
				view = [0,1,0];

				paper();


			} else if (scrollPos < 50 && view[0] === 0 ){
				$("#pageAni02 > img").css({marginLeft:885});
				$("#ca").hide();	

				$(".gnb li").removeClass("view");
				$(".gnb li").eq(0).addClass("view");
				view = [1,0,0];
			}
		})


		$(window).resize(function(){
			 var win_w = $(window).width()
			 var win_h = $(window).height()
			 var viewImg_w = $('#page1_wrap').width()
			 var viewImg_h = $('#page1_wrap').height()
			 var veiwImg_posX = win_w/2 - viewImg_w/2
			 var veiwImg_posY = win_h/2 - viewImg_h/2
			 var viewWhite_w = $('#whiteBack').width()
			 var viewWhite_posX = win_w/2 - viewWhite_w/2
			 var viewWhite_posXX =viewWhite_posX + 640


			 $('#page1_wrap').css({left:veiwImg_posX, top:veiwImg_posY})
			 $('#whiteBack').css({left:viewWhite_posXX})

		 }).resize()  // 이벤트가 재실행되도록 하려면 뒤서 써줘야 한다.

		//애니메이션
		var total1 = 15;
	   	var counter1 = 0;
	    timer1 = setInterval(function(){
	   		if (counter1 < total1 ) {
			  counter1++;
			  $("#camera img").css({marginLeft:"-=448"});			 
			} else {
			  counter1 = 0;
			  $("#camera img").css({marginLeft:0});		 
			}
		},120);

		camera();
	    function camera() {
	    $("#camera").animate({top:28},1000)
	   				.animate({top:0},995,camera);
	    }
		
	})