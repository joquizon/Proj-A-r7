$(document).ready(function()
{
		$("#subtopperM").draggable();

		$(".toppermap").click(function(event)
			{var month = [
			  "Jan",
			"Feb",
			"Mar",
			"Apr",
			 "May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec"];
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
					$("#baretime").clone(true).attr("class","logshow").html(timelist).prependTo("#log");
				
				var y = $(topper).width();
				var z =$(topper).height();
				var x = $("#botcontainer").position();
				var x2 = $(window).height();
				var x1 = x.top;
				var w = z-x1

				console.log(x);
				console.log(y);
				console.log(z);
				console.log(x1);

				var yaxL = (event.pageY).toFixed(0)
				var xaxL = (event.pageX).toFixed(0) 

				var x4 = yaxL-x1
				var z1 = x4/z *54.5
				var y1 = xaxL/y * 100
				console.log(yaxL);
				console.log(x4);			
				console.log(z1, y1);
				 
				var targ = event.target.id
				var ts = (event.timeStamp).toFixed(0)
				var h = $("#"+targ).position();
				console.log(h)
				console.log(ts)
				var ht= h.top
				var hl= h.left
				$("#posit").html(yaxL+"'"+"__"+xaxL+"''");
				$("#bareposit").clone(true).attr("class","logshow").html("position"+yaxL+"'"+"__"+xaxL+"''"+"marked").prependTo("#log");
				// $("#subposit").html(yaxL+"'"+"__"+xaxL+"''");

				$("#subtop").clone(true).attr("id","subtop2").appendTo("#topper");
				$("#subtop2").css("margin-top",z1+"%");
				$("#subtop2").css("margin-left",y1+"%");
		   	    $("#subtop2").attr("id","subtop"+ts);

		   	    $("#scid1").text(targ);
		   	    $("#if1").clone(true).prependTo("#subtopper");
		   	    $("#if1").css("margin-top","0%");
				$("#if1").css("margin-left","0%");
							$(".sectorid").attr("id", "scid1"+ts);
			$(".subsectorid").attr("id", "subscid1"+ts);
			var t= Math.floor(Math.random() * 129) + 1;
			var dbar = (t/130)*100;
			$("#dbarmarkholder").css("width", dbar + "%");
			$("#scid1"+ts).text(targ);
			$("#scid1").text(targ);
			$("#subscid1"+ts).text(t);
			$("#subscid1").text(targ);
			$("#subposit").html(yaxL+"'"+"__"+xaxL+"''");
							setInterval(function()
				{
       			 var t= Math.floor(Math.random() * 129) + 1;
       			 var b= Math.floor(Math.random() * 3) + 1;
					$("#Layer"+ t +"oami").attr("class","oamicam1depixel"+b);	
    			},2000); 		


			});




		$(".tagshut").click(function(event)
			{
				var par =(event.target.parentNode.parentNode.parentNode.id);
				console.log(par);
				$("#"+par).remove();
				$("#"+par+"mrkpop").remove();


			});



		// $("#posit").click(function(event)
		// {
		// 	var par =(event.target.parentNode.id);
		// 	$(".tagshut").attr("id", par+"mrk");
		// 	$("#"+par+"mrkpop").show();
		// 	$("#"+par+"mrkpop").draggable();
		// 	console.log(par);
		// 	// var parpos = $("#"+par).position();
		// 	// 	var pt= parpos.top
		// 	// 	var pl= parpos.left
		// 	// 	console.log(pt,pl);
		// 	// $("#"+par+"mrkpop").css("margin-top",pt);
		// 	// $("#"+par+"mrkpop").css("margin-left","0%");

		// 	$(".sectorid").attr("id", "scid1"+par);
		// 	$(".subsectorid").attr("id", "subscid1"+par);
		// 	var t= Math.floor(Math.random() * 129) + 1;
		// 	var dbar = (t/130)*100;
		// 	$("#dbarmarkholder").css("width", dbar + "%");
		// 	$("#scid1"+par).text(t);
		// 	$("#subscid1"+par).text(t);		
		// });

 




});