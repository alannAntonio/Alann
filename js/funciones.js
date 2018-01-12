		$(document).load(function() {
		   // html + images + css loaded
		});
		var keys = {37: 1, 38: 1, 39: 1, 40: 1};

		function preventDefault(e) {
		  e = e || window.event;
		  if (e.preventDefault)
		      e.preventDefault();
		  e.returnValue = false;
		}

		function preventDefaultForScrollKeys(e) {
		    if (keys[e.keyCode]) {
		        preventDefault(e);
		        return false;
		    }
		}

		function disableScroll() {
		  if (window.addEventListener) // older FF
		      window.addEventListener('DOMMouseScroll', preventDefault, false);
		  window.onwheel = preventDefault; // modern standard
		  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
		  window.ontouchmove  = preventDefault; // mobile
		  document.onkeydown  = preventDefaultForScrollKeys;
		}

		function enableScroll() {
		    if (window.removeEventListener)
		        window.removeEventListener('DOMMouseScroll', preventDefault, false);
		    window.onmousewheel = document.onmousewheel = null;
		    window.onwheel = null;
		    window.ontouchmove = null;
		    document.onkeydown = null;
		}

		$(function(){
		    $('.slider1 div:gt(0)').hide();
		    setInterval(function(){
		      $('.slider1 div:first-child').fadeOut(0)
		         .next('div').fadeIn(500)
		         .end().appendTo('.slider1');},2000 );
		});


		$(function() {
		  $('a[href*="#"]:not([href="#"])').click(function() {
		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		      if (target.length) {
		        $('html, body').animate({
		          scrollTop: target.offset().top
		        }, 1000);
		        $("#list_mobile").animate({"margin-left" : "-100%"},1000);
		        con = 0;
		        return false;
		      }
		    }
		  });
		});

		$(function(){
			$(".s_todo").click(function(){
				$("div#pics").show(500);
			});
			$(".s_web").click(function(){
				$("div#pics").hide(500);
				$("div.t_web").show(500);
			});
			$(".s_logo").click(function(){
				$("div#pics").hide(500);
				$("div.t_logo").show(500);
			});
			$(".s_ilustracion").click(function(){
				$("div#pics").hide(500);
				$("div.t_ilustracion").show(500);
			});
			$("#down1").click(function(){
				$(".intro").animate({"top" : "-100%"},1500);
				$('body,html').animate({scrollTop : 0}, 1000);
			});
			$("#down2").click(function(){
				$('body,html').animate({scrollTop : 0}, 1000);
				$(".intro2").animate({"top" : "-100%"},1500);
				$(function empezar(){
				    $('#slider div:gt(0)').hide();
				    setInterval(function(){
				      $('#slider div:first-child').fadeOut(0)
				         .next('div').fadeIn(1500)
				         .end().appendTo('#slider');}, 5000);
					});
				enableScroll();
				$('body').css({"overflow-y" : "auto"});
			});
		});

		$(function(){
			con = 0;
			$("#hamburger").click(function(){
				if(con == 0){
					$("#list_mobile").animate({"margin-left" : "0%"},700);
					con = 1;
				}else{
					$("#list_mobile").animate({"margin-left" : "-100%"},700);
					con = 0
				}
			});
			$('#btn_top').click(function(){
			    $('body,html').animate({scrollTop : 0}, 1000);
			    return false;
			});


			$(function() {
			   // Interceptamos el evento submit
			    $('.formulario_contacto').submit(function() {
			  // Enviamos el formulario usando AJAX
			        $.ajax({
			            type: 'POST',
			            url: $(this).attr('action'),
			            data: $(this).serialize(),
			            // Mostramos un mensaje con la respuesta de PHP
			            success: function(data) {
			            	$("#contenedor_result").animate({height: "toggle"});
			                $('#result').html(data);
			                $("#contenedor_result").delay(3000).animate({height: "toggle"});
			                $('.formulario_contacto')[0].reset();
			            }
			        })
			        return false;
	    			});
			});
		});


		$(document).ready(function (){
			disableScroll();

			$(window).load(function() {
				$("#load").fadeOut(500);  
			  	$("#down2").delay(500).fadeIn(500);  
			});
			$(window).scroll(function(){

				var altoPantalla = ($(window).height())-20;
			    if ($(this).scrollTop() >= altoPantalla) {
			        $('#menu_fixed').fadeIn();
			        $("#btn_top").fadeIn(1500);
			        $('#menu').fadeOut();
			        var elemento = $(".html5");
					var posicion = elemento.position();
					posicion.top
				    } else {
				        $('#menu_fixed').fadeOut(10);
				        $("#btn_top").fadeOut(500);
				        $('#menu').fadeIn(10);
			    }



			    function correrBarras(barrita, cantidad){
			    	var porcentaje = cantidad;
			    	var element = barrita;
			    	var windowTop = $(document).scrollTop()+20;
				    var windowBottom = windowTop + window.innerHeight-20;
				    var elementPositionTop = element.offset().top;
				    var elementPositionBottom = elementPositionTop + element.height();
			    	if(elementPositionTop > windowBottom || elementPositionBottom < windowTop){
			    	element.stop().animate({'width':'0px'},0)
				    }else{
				    	element.animate({'width': porcentaje},1000)
				    }
			    }
			    function darOpacidad(elemento){
			    	var x = elemento;
			    	var windowTop = $(document).scrollTop()+20;
				    var windowBottom = windowTop + window.innerHeight-20;
				    var elementPositionTop = x.offset().top;
				    var elementPositionBottom = elementPositionTop + x.height();
			    	if(elementPositionTop > windowBottom || elementPositionBottom < windowTop){
			    	x.stop().animate({'opacity':'0'},0)
				    }else{
				    	x.animate({'opacity': "1"},1500)
				    }
			    }
			    correrBarras($(".html5"), "95%");
			    correrBarras($(".html6"), "95%");
			    correrBarras($(".php"), "75%");
			    correrBarras($(".javascript"), "85%");
			    correrBarras($(".jquery"), "78%");
			    correrBarras($(".css3"), "100%");
			    darOpacidad($("#contenedor_servicios"));


				var barra = $(window).scrollTop();
				var posicion =  (barra * 0.10);
				var topAlan = $(".contenedor").height()/2;
				$('#sobre_mi').css({
					'background-position': '0 -' + posicion*1.4 + 'px'
				});
				$('#alan').css({
					'top': topAlan + (posicion*-3) + 'px'
				});
				$('#color_left').css({
					'top' : posicion*-1.4
				});
				$('#color_right').css({
					'bottom' : posicion*1.4
				});
			});
		});

