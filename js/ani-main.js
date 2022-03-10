// JavaScript Document

	// main animation
	$(function(){

	   var total3 = 23;
	   var counter3 = 0;
	   timer3 = setInterval(function(){
	   		if (counter3 < total3 ) {
			 counter3++;
			 $("#genieBg img").css({marginLeft:"-=280"});			 
			} else {
			 counter3 = 0;
			 $("#genieBg img").css({marginLeft:0});			 
			}
	   },93);
	   
	   var total4 = 26;
	   var counter4 = 0;
	   timer4 = setInterval(function(){
	   		if (counter4 < total4 ) {
			 counter4++;
			 $("#workBg img").css({marginLeft:"-=178"});			 
			} else {
			 counter4 = 0;	
			 $("#workBg img").css({marginLeft:0});					 
			}
	   },95);
       
	   var total5 = 17;
	   var counter5 = 0;
	   timer5 = setInterval(function(){
	   		if (counter5 < total5 ) {
			 counter5++;
			 $("#choBg img").css({marginLeft:"-=140"});			 
			} else {
			 counter5 = 0;	
			 $("#choBg img").css({marginLeft:0});					 
			}
	   },95);

	   var total6 = 20;
	   var counter6 = 0;
	   timer6 = setInterval(function(){
	   		if (counter6 < total6 ) {
			 counter6++;
			 $("#ufoBg img").css({marginLeft:"-=130"});			 
			} else {
			 counter6 = 0;	
			 $("#ufoBg img").css({marginLeft:0});					 
			}
	   },95);

	   var total7 = 21;
	   var counter7 = 0;
	   timer7 = setInterval(function(){
	   		if (counter7 < total7 ) {
			 counter7++;
			 $("#mrBg img").css({marginLeft:"-=410"});			 
			} else {
			 counter7 = 0;	
			 $("#mrBg img").css({marginLeft:0});					 
			}
	   },95);

	   var total8 = 15;
	   var counter8 = 0;
	   timer8 = setInterval(function(){
	   		if (counter8 < total8 ) {
			 counter8++;
			 $("#mailBg img").css({marginLeft:"-=240"});			 
			} else {
			 counter8 = 0;	
			 $("#mailBg img").css({marginLeft:0});					 
			}
	   },90);

	   var total9 = 23;
	   var counter9 = 0;
	   timer9 = setInterval(function(){
	   		if (counter9 < total9 ) {
			 counter9++;
			 $("#aboutBg img").css({marginLeft:"-=359"});			 
			} else {
			 counter9 = 0;	
			 $("#aboutBg img").css({marginLeft:0});					 
			}
	   },110);

	   var total10 = 25;
	   var counter10 = 0;
	   timer10 = setInterval(function(){
	   		if (counter10 < total10 ) {
			 counter10++;
			 $("#mouseBg img").css({marginLeft:"-=110"});			 
			} else {
			 counter10 = 0;	
			 $("#mouseBg img").css({marginLeft:0});					 
			}
	   },80);


	});