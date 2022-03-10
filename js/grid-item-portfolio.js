// JavaScript Document

	// portfolio animation
	$(function(){
		
	   // main animation
	   var total2 = 11;
	   var counter2 = 0;
	   timer2 = setInterval(function(){
	   		if (counter2 < total2 ) {
			 counter2++;
			 $("#workme img").css({marginLeft:"-=200"});			 
			} else {
			 counter2 = 0;
			 $("#workme img").css({marginLeft:0});			 
			}
	   },120);

	   var total3 = 1;
	   var counter3 = 0;
	   timer3 = setInterval(function(){
	   		if (counter3 < total3 ) {
			 counter3++;
			 $("#helicopter img").css({marginLeft:"-=85"});			 
			} else {
			 counter3 = 0;
			 $("#helicopter img").css({marginLeft:0});			 
			}
	   },150);

	   helLooper();
	   function helLooper() {
	   $("#helicopter").animate({right:115, top:9},2000)
	   				   .animate({right:135, top:0},2000)
	   				   .animate({right:115, top:7},2000)
	   				   .animate({right:90, top:0},2000,helLooper);
	   }

	   var total4 = 27;
	   var counter4 = 0;
	   timer4 = setInterval(function(){
	   		if (counter4 < total4 ) {
			 counter4++;
			 $("#work_eye img").css({marginLeft:"-=315"});			 
			} else {
			 counter4 = 0;
			 $("#work_eye img").css({marginLeft:0});			 
			}
	   },170);

	   var total5 = 20;
	   var counter5 = 0;
	   timer5 = setInterval(function(){
	   		if (counter5 < total5 ) {
			 counter5++;
			 $("#work_book img").css({marginLeft:"-=162"});			 
			} else {
			 counter5 = 0;
			 $("#work_book img").css({marginLeft:0});			 
			}
	   },160);

	   var total6 = 19;
	   var counter6 = 0;
	   timer6 = setInterval(function(){
	   		if (counter6 < total6 ) {
			 counter6++;
			 $("#work_robot img").css({marginLeft:"-=135"});			 
			} else {
			 counter6 = 0;
			 $("#work_robot img").css({marginLeft:0});			 
			}
	   },100);

	   robot();
	   function robot() {
	   $("#work_robot").animate({left:410, top:5},880)
	   				   .animate({left:425, top:33},540)
	   				   .animate({left:455, top:7},880)
	   				   .animate({left:475, top:33},450)
	   				   .animate({left:490, top:5},880)
	   				   .animate({left:500, top:33},430)
	   				   .animate({left:488, top:8},880)
	   				   .animate({left:477, top:33},450)
	   				   .animate({left:465, top:10},880)
	   				   .animate({left:443, top:33},350)
	   				   .animate({left:417, top:13},880)
	   				   .animate({left:395, top:33},430)
	   				   .animate({left:375, top:7},880,robot);
	   }

		
	})