$(document).ready(function()
{

	console.log("run");

	// $(".close").click(function()
	// 	{
	// 		$(this).parent().hide();
	// 	});

	setInterval(function clocker()
		{
			var month = [
			  "January",
			"February",
			"March",
			"April",
			 "May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"];

			var day = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat",]
			var currentTime = new Date ( );
			var td = currentTime.getDate();
			var tm = currentTime.getMonth();
			var ty = currentTime.getFullYear();
			var tdy = currentTime.getDay();
			var th = currentTime.getHours();
			var tmt = currentTime.getMinutes();
			var ts = currentTime.getSeconds();
			var tmm = currentTime.getTime();
			var monthL = month[tm]
			var day = day[tdy]
			var browser = "BROWSER// "+ navigator.appName + " "+navigator.appCodeName;
			var timelist = td +" "+monthL+" "+ty+" "+ day +" "+ th +"'"+ tmt +"''"+ ts+ "'''";

			$("#date").html(timelist);
			$("#agtno2").html("missing/recovering(!) "+tmm);
			$("#browser").html(" "+browser);

		},1);

	$(".headmarker").click(function()
		{
			$(this).toggleClass("headmarker2");
			$("#headtext").toggle();
			$("#closer").toggle();
			$(".textcontain").toggle();

		});

	$(".robotgifs,.headmarker,#crosscontain,#boxer,#markermock").mouseover(function()
		{
			$(".notifpos").fadeIn(500).delay(3000)
		    .queue(function(next) 
		      { 
		        $(".notifpos").attr("class","notifpos2");
		        $("#notif").text("ACTIVE")
		        next(); 
		      });
		    $(".notifpos2").fadeIn(200);
		});
	


	$(".robotgifs").mousemove(function(event)
		{
			var yax = (event.pageY /7.5).toFixed(2)
			var xax = (event.pageX /7.5).toFixed(2)
			
			var yaxL = event.pageY
			var xaxL = event.pageX 

			var yaxH = (event.pageY).toFixed(2)
			var xaxH = (event.pageX).toFixed(2)

			$("#boxer").show();
			$("#boxer").css("opacity","1");

			$("#mselogger").html("<span>"+ yaxH +"/"+"</span><br>"+xaxH+"</span><br>");


			// mousediag one>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
			$("#yaxtext").text("y * READ >> " + event.pageY );
			$("#xax").css("width",xax +"px");
			$("#xax").css("margin-top",yax +"px");
			$("#xaxtext").text("x * READ >> " + event.pageX );


			// cross hair labelers>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
			var w = $(window).width();
			var w1 = $(".robotgifs").width();


			var CAyax = (yaxL+(w*.6)).toFixed(2)

			var CAxax = (xaxL +(w*.12)).toFixed(2);
			var CBxax = (xaxL +(w*.485)).toFixed(2);
			var CCxax = (xaxL +(w*.85)).toFixed(2);

			var CAMyax = (yaxL+(w1*.16)).toFixed(2);
			var CAByax = (yaxL+(w1*.32)).toFixed(2);

			$("#crosscontain").show();

			$("#crosscontain").css("opacity","1");

			$("#cAl").text(CAyax + " / "+ CAxax);
			$("#cBl").text(CAyax + " / "+ CBxax);
			$("#cCl").text(CAyax + " / "+ CCxax);


			$("#cAMl").text(CAMyax + " / "+ CAxax);
			$("#cBMl").text(CAMyax + " / "+ CBxax);
			$("#cCMl").text(CAMyax + " / "+ CCxax);

			$("#cABl").text(CAByax + " / "+ CAxax);
			$("#cBBl").text(CAByax + " / "+ CBxax);
			$("#cCBl").text(CAByax + " / "+ CCxax);

			// ydelays>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
			$(".ydymarkers").show();
			$(".ydelays").css("background-color","rgba(76, 182, 192, 0.15)");
			$("#ydy1").css("opacity","1").delay(40)
		    .queue(function(next) 
		      { 
		        $(this).css("margin-top", yax+"px")
		        next(); 
		      });

		    $("#ydy2").css("opacity","1").delay(35)
		    .queue(function(next) 
		      { 
		        $(this).css("margin-top", yax+"px")
		        next(); 
		      });	

		    $("#ydy3").css("opacity","1").delay(30)
		    .queue(function(next) 
		      { 
		        $(this).css("margin-top", yax+"px")
		        next(); 
		      });	

		    $("#ydy4").css("opacity","1").delay(25)
		    .queue(function(next) 
		      { 
		        $(this).css("margin-top", yax+"px")
		        next(); 
		      });

		    $("#ydy5").css("opacity","1").delay(20)
		    .queue(function(next) 
		      { 
		        $(this).css("margin-top", yax+"px")
		        next(); 
		      });	

		    $("#ydy6").css("opacity","1").delay(20)
		    .queue(function(next) 
		      { 
		        $(this).css("margin-top", xax / 2 +"px")
		        next(); 
		      });

		    $("#ydy7").css("opacity","1").delay(25)
		    .queue(function(next) 
		      { 
		        $(this).css("margin-top", xax / 2 +"px")
		        next(); 
		      });

		    $("#ydy8").css("opacity","1").delay(30)
		    .queue(function(next) 
		      { 
		        $(this).css("margin-top", xax / 2 +"px")
		        next(); 
		      });			

		    $("#ydy9").css("opacity","1").delay(35)
		    .queue(function(next) 
		      { 
		        $(this).css("margin-top", xax / 2 +"px")
		        next(); 
		      });

		    $("#ydy10").css("opacity","1").delay(40)
		    .queue(function(next) 
		      { 
		        $(this).css("margin-top", xax / 2 +"px")
		        next(); 
		      });				
		});

	$(".robotgifs").mouseleave(function()
				{
					$("#xax").css("width","5px");
					$("#xax").css("margin-top","5px");
					$("#yaxtext").text("y * READ >> 0");
					$("#xaxtext").text("x * READ >> 0");
					$(".crosslabs").text("0 / 0");
					$(".crosslabsM").text("0 / 0");
					$(".crosslabsB").text("0 / 0");
					$(".notifpos2").fadeOut(200);
					$(".ydymarkers").css("margin-top","100px");
					$("#crosscontain").css("opacity",".5");
					$("#boxer").css("opacity",".25");
					$("#mselogger").html("<span>000.00/</span><br><span>000.00</span><br>");
				});

	$("#msd2switch").click(function()
		{
			$(".ydelays").toggleClass("ydelays2");
			$(".mousediag2a").toggleClass("mousediag2");
			$(".mouseloghold2").toggleClass("mouseloghold");
		});

	$(".maedabox").click(function()
		{
			$("#markermock").show();
		});

	$(".mockrect").click(function()
	{
		var id = event.target.id
		$("#"+id).css("fill","white");
		$("#"+id).css("pointer-events","none");
	});

});