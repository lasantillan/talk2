$(document).ready(function(){

	$(".tnclink").on("click",function() {
        $(".tnc-modal").show();
      });

      $(".tnc-modal .close").on("click",function(){
        $(".tnc-modal").hide();
      });

	if($(window).width() >= 746) {

		window.timeDelay = 4000;

		function selectNext() {
			var selectedFeature = $(".features ul .feature.selected");
			var nextFeature = selectedFeature.attr("data-next");
			var nextBG = $(nextFeature).attr("data-bg");

			$(".features ul .feature").removeClass("selected");
			$(nextFeature).addClass("selected");
			$("#container #features .hero").css("background-image",nextBG);
			( document.selection )?document.selection.empty():window.getSelection().removeAllRanges();
		}
		
		$(".features ul .feature").on("click",function(){
			if(window.intervalID) window.clearInterval(window.intervalID);

			$(".features ul .feature").removeClass("selected");
			$(this).addClass("selected");
			var bg = $(this).attr("data-bg");
			$("#container #features .hero").css("background-image",bg);
			( document.selection )?document.selection.empty():window.getSelection().removeAllRanges();
			
			window.intervalID = window.setInterval(selectNext,window.timeDelay);

		});

		window.intervalID = window.setInterval(selectNext,window.timeDelay);

	}
});