$(document).ready(function()
{
// can you do mousediag1 on .maedabox
	console.log("run");

	// $(".close").click(function()
	// 	{
	// 		$(this).parent().hide();
	// 	});

	// clock log
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

	// activating section
	$(".robotgifs,.robotgifsL2,.robotgifsL3,.robotgifsL4,.headmarker,#crosscontain,#boxer,#markermock").mouseover(function()
		{
			// $(".notifpos").fadeIn(500).delay(3000)
		 //    .queue(function(next) 
		 //      { 
		 //        $(".notifpos").attr("class","notifpos2");
		 //        $("#notif").text("ACTIVE")
		 //        next(); 
		 //      });
		    $(".notifpos2").fadeIn(200);
		    					$("#crosscontain").css("opacity","1");
		    $("#cam").css("color","#3fdd00");
		});
	
	// temp Charger
	$("#lander").click(function()
		{
		// assign to a start or activate button. maybe a landing page?
			$(".notifpos").fadeIn(500).delay(3000)
		    	.queue(function(next) 
		      { 
		        $(".notifpos").attr("class","notifpos2").delay(3000).fadeOut();
		        $("#notif").text("ACTIVE");
		        next(); 
		      });

		    $(this).hide();
		    $("#top").hide();
		    $("#atop").hide();
		    $("#aatop").hide();
		    $("#aaatop").hide();
		    $("#toprev").hide();
		    $("#atoprev").hide();
		    $("#aatoprev").hide();

	    	$("#top1rev").show().each(function()
					{
            		this.offsetHeight;
        			})
        			.prop("src","gifs/3q/top1rev.gif");

        	$("#top1revjr").show().each(function()
					{
            		this.offsetHeight;
        			})
        			.prop("src","gifs/3q/top1rev.gif");

	    	$("#atop1rev").show().each(function()
					{
            		this.offsetHeight;
        			})
        			.prop("src","gifs/fV/atop1rev.gif");

        	$("#atop1revjr").show().each(function()
					{
            		this.offsetHeight;
        			})
        			.prop("src","gifs/fV/atop1rev.gif");


	    	$("#aatop1rev").show().each(function()
					{
            		this.offsetHeight;
        			})
        			.prop("src","gifs/sideV/aatop1rev.gif");

	    	$("#aatop1revjr").show().each(function()
					{
            		this.offsetHeight;
        			})
        			.prop("src","gifs/sideV/aatop1rev.gif");

	    	$("#aaatop1rev").show().each(function()
					{
            		this.offsetHeight;
        			})
        			.prop("src","gifs/rearV/aaatop1rev.gif");  

   	    	$("#aaatop1revjr").show().each(function()
					{
            		this.offsetHeight;
        			})
        			.prop("src","gifs/rearV/aaatop1rev.gif");  


        	$(".turnbuttr,.turnbutt").attr("id","top1");
        	// $("#movebar").css("width","7%");
        	$("#crosscontain").fadeIn();
        	$("#boxer").fadeIn().delay(400)
		    .queue(function(next) 
		      { 
		        $(".robotgifs,.robotgifsjrMaincam,.robotgifsL2,.robotgifsL2jr,.robotgifsL3,.robotgifsL3jr,.robotgifsL4,.robotgifsjr").css("opacity","1")
 				next(); 
		      });

		})

	$(".robotgifs,.robotgifsL2,.robotgifsL3,.robotgifsL4").mousemove(function(event)
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
			$("#xax").css("width",xax +"%");
			$("#xax").css("margin-top",yax +"%");
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
		        $(this).css("margin-top", yax*2 +"%")
		        next(); 
		      });

		    $("#ydy2").css("opacity","1").delay(35)
		    .queue(function(next) 
		      { 
		        $(this).css("margin-top", yax*2 +"%")
		        next(); 
		      });	

		    $("#ydy3").css("opacity","1").delay(30)
		    .queue(function(next) 
		      { 
		        $(this).css("margin-top", yax*2 +"%")
		        next(); 
		      });	

		    $("#ydy4").css("opacity","1").delay(25)
		    .queue(function(next) 
		      { 
		        $(this).css("margin-top", yax*2 +"%")
		        next(); 
		      });

		    $("#ydy5").css("opacity","1").delay(20)
		    .queue(function(next) 
		      { 
		        $(this).css("margin-top", yax*2 +"%")
		        next(); 
		      });	

		    $("#ydy6").css("opacity","1").delay(20)
		    .queue(function(next) 
		      { 
		        $(this).css("margin-top", xax *2 +"%")
		        next(); 
		      });

		    $("#ydy7").css("opacity","1").delay(25)
		    .queue(function(next) 
		      { 
		        $(this).css("margin-top", xax *2 +"%")
		        next(); 
		      });

		    $("#ydy8").css("opacity","1").delay(30)
		    .queue(function(next) 
		      { 
		        $(this).css("margin-top", xax *2 +"%")
		        next(); 
		      });			

		    $("#ydy9").css("opacity","1").delay(35)
		    .queue(function(next) 
		      { 
		        $(this).css("margin-top", xax *2 +"%")
		        next(); 
		      });

		    $("#ydy10").css("opacity","1").delay(40)
		    .queue(function(next) 
		      { 
		        $(this).css("margin-top", xax *2 +"%")
		        next(); 
		      });				
		});

	$(".robotgifs,.robotgifsL2,.robotgifsL3,.robotgifsL4").mouseleave(function()
				{
					$("#xax").css("width","5%");
					$("#xax").css("margin-top","5%");
					$("#yaxtext").text("y * READ >> 0");
					$("#xaxtext").text("x * READ >> 0");
					$(".crosslabs").text("0 / 0");
					$(".crosslabsM").text("0 / 0");
					$(".crosslabsB").text("0 / 0");
					$(".notifpos2").fadeOut(200);
					$("#crosscontain").css("opacity",".5");
					$("#boxer").css("opacity",".25");
					$("#cam").css("color","white");
				});

	$("#msd2switch").click(function()
		{
			$(".ydelays").toggleClass("ydelays2");
			$(".mousediag2a").toggleClass("mousediag2");
			$(".mouseloghold2").toggleClass("mouseloghold");
		});

	// $(".maedabox").click(function()
	// 	{
	// 		$("#markermock").show();
	// 	});

	$(".mockrect").click(function()
		{
			var id = event.target.id
			$("#"+id).css("fill","white");
			$("#"+id).css("pointer-events","none");
		});


	// gifswitcher
	$(".turnbutt").click(function(event)
	  {
		var layertop = ["top1","top2","top3","top4","top5","top6","top7","top8","top9","top10","top11","top12","top13"]
		var layertopslide = ["slidetop1","slidetop2","slidetop3","slidetop4","slidetop5","slidetop6","slidetop7","slidetop8","slidetop9","slidetop10","slidetop11","slidetop12","slidetop13","slidetop1"]
		var layerbottom = ["atop1","atop2","atop3","atop4","atop5","atop6","atop7","atop8","atop9","atop10","atop11","atop12","atop13","atop1",]

	    var t = event.target.id
	    var next= layertop[($.inArray(t,layertop)+1+layertop.length) % layertop.length]
	    var mbslide= layertopslide[($.inArray(t,layertopslide)+1+layertopslide.length) % layertopslide.length]
	    
	    var mb = $("#movebar").width();
	    var parent = $("#subbutthold").width();
	    var parper = mb/parent*100



	    // var mbcontain = $("#subbutthold").width()/13;
	    
	    // // var mmb = mbcontain*;
	    // var mbslide = mb + mbcontain;

		// $("#movebar").css("width",parper+7+"%");
				$("#movebar").attr("class","slide"+next);
	    $("#"+t).hide();
	    $("#"+t+"rev").hide();
	    $("#"+next).show().each(function()
					{
            		this.offsetHeight;
        			})
        			.prop("src","gifs/3q/"+t+".gif");

        $(this).attr("id",next);
        $(".turnbuttr").attr("id",next);


        // SUBCAMs
        	// subcam4
	       	$("#"+t+"jr").hide();
		    $("#"+t+"rev"+"jr").hide();
		    $("#"+next+"jr").show().each(function()
						{
	            		this.offsetHeight;
	        			})
	        			.prop("src","gifs/3q/"+t+".gif");

	        // subcam1
	       	$("#aaa"+t+"jr").hide();
	       	$("#aaa"+t+"rev"+"jr").hide();
		    $("#aaa"+next+"jr").show().each(function()
						{
	            		this.offsetHeight;
	        			})
	        			.prop("src","gifs/rearV/aaa"+t+".gif");

	        // subcam2
	       	$("#a"+t+"jr").hide();
	       	$("#a"+t+"revjr").hide();
		    $("#a"+next+"jr").show().each(function()
						{
	            		this.offsetHeight;
	        			})
	        			.prop("src","gifs/fV/a"+t+".gif");

	        // for robotgifsL3
	       	$("#aa"+t+"jr").hide();
	       	$("#aa"+t+"revjr").hide();
		    $("#aa"+next+"jr").show().each(function()
						{
	            		this.offsetHeight;
	        			})
	        			.prop("src","gifs/sideV/aa"+t+".gif");


        // for robotgifsL2
       	$("#a"+t).hide();
       	$("#a"+t+"rev").hide();
	    $("#a"+next).show().each(function()
					{
            		this.offsetHeight;
        			})
        			.prop("src","gifs/fV/a"+t+".gif");

        // for robotgifsL3
       	$("#aa"+t).hide();
       	$("#aa"+t+"rev").hide();
	    $("#aa"+next).show().each(function()
					{
            		this.offsetHeight;
        			})
        			.prop("src","gifs/sideV/aa"+t+".gif");

        // for robotgifsL4
       	$("#aaa"+t).hide();
       	$("#aaa"+t+"rev").hide();
	    $("#aaa"+next).show().each(function()
					{
            		this.offsetHeight;
        			})
        			.prop("src","gifs/rearV/aaa"+t+".gif");

// if ( $('#aatop1').attr('src') == 'gifs/sideV/aatop13.gif' ) {
//     console.log("yoooooooooooooo")
// } else {
//     // do that
// }
	  });

	$(".turnbuttr").click(function(event)
	  {
		var layertop = ["top1","top2","top3","top4","top5","top6","top7","top8","top9","top10","top11","top12","top13"]

	    var t = event.target.id
	    var next= layertop[($.inArray(t,layertop)-1+layertop.length) % layertop.length]

	    console.log(next);


		var mb = $("#movebar").width();
	    var parent = $("#subbutthold").width();
	    var parper = mb/parent*100

		// $("#movebar").css("width",parper-7+"%");
				$("#movebar").attr("class","slide"+next+"rev");
	    $(".turnbuttr").attr("id",next);
	    $(".turnbutt").attr("id",next);

	    $("#"+t).hide();
	    $("#"+t+"rev").hide();
	    $("#"+next+"rev").show().each(function()
			{
            	this.offsetHeight;
        	})
        	.prop("src","gifs/3q/"+next+"rev"+".gif");


       	// subcams
       		// subcam4
	       	$("#"+t+"jr").hide();
		    $("#"+t+"revjr").hide();
		    $("#"+next+"revjr").show().each(function()
				{
	            	this.offsetHeight;
	        	})
	        	.prop("src","gifs/3q/"+next+"rev"+".gif");

	        // for subcam1
	       	$("#aaa"+t+"jr").hide();
	       	$("#aaa"+t+"revjr").hide();
		    $("#aaa"+next+"revjr").show().each(function()
						{
	            		this.offsetHeight;
	        			})
	        			.prop("src","gifs/rearV/aaa"+next+"rev"+".gif"); 

	        // subcam2
	       	$("#a"+t+"jr").hide();
	       	$("#a"+t+"revjr").hide();
		    $("#a"+next+"revjr").show().each(function()
						{
	            		this.offsetHeight;
	        			})
	        			.prop("src","gifs/fV/a"+next+"rev"+".gif");

	        // subcam3
	       	$("#aa"+t+"jr").hide();
	       	$("#aa"+t+"revjr").hide();
		    $("#aa"+next+"revjr").show().each(function()
						{
	            		this.offsetHeight;
	        			})
	        			.prop("src","gifs/sideV/aa"+next+"rev"+".gif"); 


        // for robotgifsL2
       	$("#a"+t).hide();
       	$("#a"+t+"rev").hide();
	    $("#a"+next+"rev").show().each(function()
					{
            		this.offsetHeight;
        			})
        			.prop("src","gifs/fV/a"+next+"rev"+".gif");

        // for robotgifsL3
       	$("#aa"+t).hide();
       	$("#aa"+t+"rev").hide();
	    $("#aa"+next+"rev").show().each(function()
					{
            		this.offsetHeight;
        			})
        			.prop("src","gifs/sideV/aa"+next+"rev"+".gif");        			

        // for robotgifsL4
       	$("#aaa"+t).hide();
       	$("#aaa"+t+"rev").hide();
	    $("#aaa"+next+"rev").show().each(function()
					{
            		this.offsetHeight;
        			})
        			.prop("src","gifs/rearV/aaa"+next+"rev"+".gif");     



                     // try and use this to do the move bar and disable buttons. if # is visible (use inview) then run below

					        			if ( $('#aatop1').attr('src') == 'gifs/sideV/aatop13.gif' ) {
					    console.log("yoooooooooooooo")
					} else {
					    // do that
					}
		});

	// camera switches
	$("#switchfirst").click(function()
			{	
				$(".maedaboxA").attr("class","maedabox2");
				$(".maedabox").attr("class","maedabox2");
				$("#mbox1").attr("class","maedabox");

			});

    // #cam1{background-color:#7db6cb;}
    // #cam2{background-color: #3592b4;}
    // #cam3{background-color:#387991;}
    // #cam4{background-color:#395b68;}



	$("#cam1").click(function()
			{	
				$(".robotgifs").css("margin-left","0");
				$(".robotgifsL2").css("margin-left","-300%");
				$(".robotgifsL3").css("margin-left","-300%");
				$(".robotgifsL4").css("margin-left","-300%");
				$("#cam").text("CAM// MS - 1231");

				$("#cam1").css("background-color","#ff7300");
				$("#cam2").css("background-color","#3592b4");
				$("#cam3").css("background-color","#387991");
				$("#cam4").css("background-color","#395b68");

				$("#switchfirst").css("background-color","#ff7300");
				$("#switchsecond").css("background-color","#3592b4");
				$("#switchthird").css("background-color","#387991");
				$("#switchfourth").css("background-color","#395b68");

			});

	$("#switchsecond").click(function()
			{	
				$(".maedaboxA").attr("class","maedabox2");
				$(".maedabox").attr("class","maedabox2");
				$("#mbox2").attr("class","maedabox");
			});

	$("#cam2").click(function()
			{	
				$(".robotgifsL2").css("margin-left","0");
				$(".robotgifs").css("margin-left","-300%");
				$(".robotgifsL3").css("margin-left","-300%");
				$(".robotgifsL4").css("margin-left","-300%");
				$("#cam").text("CAM// NH - 0626");

				$("#cam2").css("background-color","#ff7300");
				$("#cam1").css("background-color","#7db6cb");
				$("#cam3").css("background-color","#387991");
				$("#cam4").css("background-color","#395b68");

				$("#switchsecond").css("background-color","#ff7300");
				$("#switchfirst").css("background-color","#7db6cb");
				$("#switchthird").css("background-color","#387991");
				$("#switchfourth").css("background-color","#395b68");
			});

	$("#switchthird").click(function()
			{	
$(".maedaboxA").attr("class","maedabox2");
				$(".maedabox").attr("class","maedabox2");
				$("#mbox3").attr("class","maedabox");
			});

	$("#cam3").click(function()
			{	
				$(".robotgifsL3").css("margin-left","0%");
				$(".robotgifs").css("margin-left","-300%");
				$(".robotgifsL2").css("margin-left","-300%");
				$(".robotgifsL4").css("margin-left","-300%");
				$("#cam").text("CAM// LM - 1006");

				$("#cam3").css("background-color","#ff7300");
				$("#cam1").css("background-color","#7db6cb");
				$("#cam2").css("background-color","#3592b4");
				$("#cam4").css("background-color","#395b68");

				$("#switchthird").css("background-color","#ff7300");
				$("#switchfirst").css("background-color","#7db6cb");
				$("#switchsecond").css("background-color","#3592b4");
				$("#switchfourth").css("background-color","#395b68");	
			});

	$("#switchfourth").click(function()
			{
$(".maedaboxA").attr("class","maedabox2");
				$(".maedabox").attr("class","maedabox2");
				$("#mbox4").attr("class","maedabox");
			});

	$("#cam4").click(function()
			{	
				$(".robotgifsL4").css("margin-left","0%");
				$(".robotgifs").css("margin-left","-300%");
				$(".robotgifsL2").css("margin-left","-300%");
				$(".robotgifsL3").css("margin-left","-300%");
				$("#cam").text("CAM// LM - 1016");
				
				$("#cam4").css("background-color","#ff7300");
				$("#cam1").css("background-color","#7db6cb");
				$("#cam2").css("background-color","#3592b4");
				$("#cam3").css("background-color","#387991");

				$("#switchfourth").css("background-color","#ff7300");
				$("#switchfirst").css("background-color","#7db6cb");
				$("#switchsecond").css("background-color","#3592b4");
				$("#switchthird").css("background-color","#387991");
			});






	//maedabox

	$("#draggbutt").click(function()
		{
		$("#revertbutt2").hide();
		$("#revertbutt").show();
		$(".maedabox2").show();
		$(".maedaboxA").attr("class","maedabox");
		$(".maedabox2A").attr("class","maedabox2");
		$("#mbox1").attr("class","maedabox");
		$("#mainrobotcontainer").css("width","75%");


		$(".maedabox2").show();
		$(".maedaboxA").attr("class","maedabox");
		$("#mainrobotcontainer").css("width","75%");
		$(".inside").show();


			$(".maedabox2").attr("class","maedabox2A");
			$(".maedabox").attr("class","maedabox2A");
			$("#mainrobotcontainer").css("width","0%");

		});

	$("#resizebutt").click(function()
	{
		$("#revertbutt").hide();
		$("#revertbutt2").show();
		$(".maedabox2").show();
		$(".maedaboxA").attr("class","maedabox");
		$(".maedabox2A").attr("class","maedabox2");
		$("#mainrobotcontainer").css("width","75%");



		$(".maedaboxA").attr("class","maedabox2");
				$(".maedabox2").show();
		$("#mainrobotcontainer").css("width","75%");
		$(".inside").show();






		$(".maedabox2").hide();
		$(".maedabox").attr("class","maedaboxA");
		$("#mainrobotcontainer").css("width","50%");
		$(".inside").hide();

	});

	$("#revertbutt").click(function()
	{
		$(".maedabox2").show();
		$(".maedaboxA").attr("class","maedabox");
		$(".maedabox2A").attr("class","maedabox2");
		$("#mbox1").attr("class","maedabox");
		$("#mainrobotcontainer").css("width","75%");

	});

		$("#revertbutt2").click(function()
	{



		$(".maedabox2").show();
		$(".maedaboxA").attr("class","maedabox");
		$("#mainrobotcontainer").css("width","75%");
		$(".inside").show();

});







});