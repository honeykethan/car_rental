$(function(){


		
		$('.item-list').click(function(){


			$('.item-img').removeClass('active');	

			$('.item-list').removeClass('active');

			$(this).addClass('active');

           

			var index = $(this).index() + 1;

			var index2 = $('.item-img:nth-child('+index+')').addClass('active');
			

			$('.main-img').animate({


				left: 0 - index2.position().left

			},500);


			//Slide thumbnails
			
			

			var test = $('.item-img.active').index()+1;


			var a = $('.item-list:nth-child('+test+')');


			$('.img-thumbnail').animate({


			left: 0 - (a.position().left/2)

			},300);




			});



		
			//click prev

			function next(){


																var sau=$('.active').next();

																
																$('.item-img').removeClass('active');
																$('.item-list').removeClass('active');
															    

																sau.addClass('active');

																
																	
																if(sau.length==0){
																	$('.main-img').animate({


																	left: 0 - $('.item-img:first-child').position().left

																	},500);

																	$('.item-img:first-child').addClass('active');
																	$('.item-list:first-child').addClass('active');

																}


																else{
																	var hay = $('.item-img.active').attr('data-slide');


																var index5 = $('.item-img:nth-child('+hay+')').addClass('active');
																
																	

			$('.main-img').animate({


																	left: 0 - index5.position().left

																	},500);
																}

				}




			//Click prev

			function prev(){


						var sau=$('.active').prev();

						
						$('.item-img').removeClass('active');
						$('.item-list').removeClass('active');
						
						


						sau.addClass('active');

						
							
						if(sau.length==0){
							$('.main-img').animate({


								left: 0 - $('.item-img:last-child').position().left

								},500);

								$('.item-img:last-child').addClass('active');
								$('.item-list:last-child').addClass('active');

						}

						var hay = $('.item-img.active').attr('data-slide');

						var index5 = $('.item-img:nth-child('+hay+')').addClass('active');

						$('.main-img').animate({


								left: 0 - index5.position().left

							},500);

			}




//auto run slide
action =setInterval(function(){ 

$('.next').trigger('click');


 }, 2500);

//hover stop auto run slide

$('.gallery').mouseover(function(){
clearTimeout(action);

});

//rê chuột khuột khỏi slider sẽ tự động chạy trở lại

$('.gallery').mouseout(function(){
action =setInterval(function(){ 

$('.next').trigger('click');


 }, 2000);

});


//click next

$('.next').click(function(){

		next();//gọi hàm next vừa tạo ở trên

		var test = $('.item-img.active').index() + 1;


		var a = $('.item-list:nth-child('+test+')');


		$('.img-thumbnail').animate({


		left: 0 - (a.position().left/2)

		},500);


			         						

});


//click prev
$('.prev').click(function(){

		prev();//gọi hàm prev vừa tạo ở trên

		var test = $('.item-img.active').index() + 1;


		var a = $('.item-list:nth-child('+test+')');


		$('.img-thumbnail').animate({


		left: 0 - (a.position().left/2)

		},500);


});




});