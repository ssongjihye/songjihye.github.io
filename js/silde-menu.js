// JavaScript Document

	$(function(){
	  $("#blackBox").css({opacity:0.7});	
        var sideMenuView = 0;
		var total = 23;
		var counter = 0;	
			
		$('#header #ux p#navIcon').click(function(){ 
			
		   if (sideMenuView === 0 ) {
   		  	paperOpen();
			$("#blackBox").stop().fadeIn(1000,function(){
				$("#navBox ul").stop().fadeIn(100);
			});	  	 
   		   } else {
			 paperClose(); 			 
			 $("#blackBox").stop().fadeOut();
			 $("#navBox ul").stop().fadeOut(80);
   		   }
		 });

		function paperOpen() {
		
			timer = setInterval(function(){
				 counter++;
				 if (counter < total) {
				 	$("#navBox_sl").css({width:"530px", display:"block"});
					$("#navBox_sl #boxAni").css({marginLeft:"-=530"});	
				 } else {
				 	clearInterval(timer);
					sideMenuView = 1;

				 }
			},35); 

			totalBtn = 10;
			counterBtn = 1;
			var timerBtn = setInterval(function(){
				if (counterBtn < totalBtn) {
					$('#header #ux p#navIcon a').css({backgroundPosition:"-=34px 0"});
					counterBtn++;					
				} else {
					clearInterval(timerBtn);
				}
				
			},40);						
		}

		function paperClose() {

			timer2 = setInterval(function(){
				 counter--;
				 if (counter > 0) {
				 	
					$("#navBox_sl #boxAni").css({marginLeft:"+=530"});
					$("#navBox_sl").css({width:"0px", display:"none"});
				 } else {
				 	clearInterval(timer2);
					sideMenuView = 0;
						
				 }
			},30);


			var timerBtn = setInterval(function(){
				if (counterBtn > 1) {
					$('#header #ux p#navIcon a').css({backgroundPosition:"+=34px 0"});
					counterBtn--;					
				} else {
					clearInterval(timerBtn);
				}
				
			},40);				
		}

	});