$(document).ready(function()
{

		$(".headtop1MAP").click(function(event)
			{
				
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
				
				var ts = (event.timeStamp).toFixed(0)
				var h = $(".headtop1MAP").position();
				console.log(h)
				console.log(ts)
				var ht= h.top
				var hl= h.left
				$("#posit").html(yaxL+"'"+"__"+xaxL+"''");

				$("#subtop").clone(true).attr("id","subtop2").appendTo("#topper");
				$("#subtop2").css("margin-top",z1+"%");
				$("#subtop2").css("margin-left",y1+"%");
		   	    $("#subtop2").attr("id","subtop"+ts);

		   	    $("#if1").clone(true).attr("id","subtop"+ts+"mrkpop").appendTo("#topper");
		   	    $("#subtop"+ts+"mrkpop").css("margin-top",z1-15+"%");
				$("#subtop"+ts+"mrkpop").css("margin-left",y1+2+"%");

			});

		$(".bodytop1MAP").click(function(event)
			{
				
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
				
				var ts = (event.timeStamp).toFixed(0)
				var h = $(".headtop1MAP").position();
				console.log(h)
				console.log(ts)
				var ht= h.top
				var hl= h.left
				$("#posit").html(yaxL+"'"+"__"+xaxL+"''");

				$("#subtop").clone(true).attr("id","subtop2").appendTo("#topper");
				$("#subtop2").css("margin-top",z1+"%");
				$("#subtop2").css("margin-left",y1+"%");
				$("#subtop2").attr("id","subtopB"+ts);

		   	    $("#if1").clone(true).attr("id","subtopB"+ts+"mrkpop").appendTo("#topper");
		   	    $("#subtopB"+ts+"mrkpop").css("margin-top",z1-15+"%");
				$("#subtopB"+ts+"mrkpop").css("margin-left",y1+2+"%");
			});



		$(".bicepRTtop1MAP").click(function(event)
			{
				
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
				
				var ts = (event.timeStamp).toFixed(0)
				var h = $(".headtop1MAP").position();
				console.log(h)
				console.log(ts)
				var ht= h.top
				var hl= h.left
				$("#posit").html(yaxL+"'"+"__"+xaxL+"''");

				$("#subtop").clone(true).attr("id","subtop2").appendTo("#topper");
				$("#subtop2").css("margin-top",z1+"%");
				$("#subtop2").css("margin-left",y1+"%");
				$("#subtop2").attr("id","subtopB"+ts);

		   	    $("#if1").clone(true).attr("id","subtopB"+ts+"mrkpop").appendTo("#topper");
		   	    $("#subtopB"+ts+"mrkpop").css("margin-top",z1-15+"%");
				$("#subtopB"+ts+"mrkpop").css("margin-left",y1+2+"%");
			});



		$(".bicepLTtop1MAP").click(function(event)
			{
				
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
				
				var ts = (event.timeStamp).toFixed(0)
				var h = $(".headtop1MAP").position();
				console.log(h)
				console.log(ts)
				var ht= h.top
				var hl= h.left
				$("#posit").html(yaxL+"'"+"__"+xaxL+"''");

				$("#subtop").clone(true).attr("id","subtop2").appendTo("#topper");
				$("#subtop2").css("margin-top",z1+"%");
				$("#subtop2").css("margin-left",y1+"%");
				$("#subtop2").attr("id","subtopB"+ts);

		   	    $("#if1").clone(true).attr("id","subtopB"+ts+"mrkpop").appendTo("#topper");
		   	    $("#subtopB"+ts+"mrkpop").css("margin-top",z1-15+"%");
				$("#subtopB"+ts+"mrkpop").css("margin-left",y1+2+"%");
			});



		$(".foreLTtop1MAP").click(function(event)
			{
				
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
				
				var ts = (event.timeStamp).toFixed(0)
				var h = $(".headtop1MAP").position();
				console.log(h)
				console.log(ts)
				var ht= h.top
				var hl= h.left
				$("#posit").html(yaxL+"'"+"__"+xaxL+"''");

				$("#subtop").clone(true).attr("id","subtop2").appendTo("#topper");
				$("#subtop2").css("margin-top",z1+"%");
				$("#subtop2").css("margin-left",y1+"%");
				$("#subtop2").attr("id","subtopB"+ts);

		   	    $("#if1").clone(true).attr("id","subtopB"+ts+"mrkpop").appendTo("#topper");
		   	    $("#subtopB"+ts+"mrkpop").css("margin-top",z1-15+"%");
				$("#subtopB"+ts+"mrkpop").css("margin-left",y1+2+"%");
			});



		$(".foreRTtop1MAP").click(function(event)
			{
				
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
				
				var ts = (event.timeStamp).toFixed(0)
				var h = $(".headtop1MAP").position();
				console.log(h)
				console.log(ts)
				var ht= h.top
				var hl= h.left
				$("#posit").html(yaxL+"'"+"__"+xaxL+"''");

				$("#subtop").clone(true).attr("id","subtop2").appendTo("#topper");
				$("#subtop2").css("margin-top",z1+"%");
				$("#subtop2").css("margin-left",y1+"%");
				$("#subtop2").attr("id","subtopB"+ts);

		   	    $("#if1").clone(true).attr("id","subtopB"+ts+"mrkpop").appendTo("#topper");
		   	    $("#subtopB"+ts+"mrkpop").css("margin-top",z1-15+"%");
				$("#subtopB"+ts+"mrkpop").css("margin-left",y1+2+"%");
			});


		$(".thighLTtop1MAP").click(function(event)
			{
				
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
				
				var ts = (event.timeStamp).toFixed(0)
				var h = $(".headtop1MAP").position();
				console.log(h)
				console.log(ts)
				var ht= h.top
				var hl= h.left
				$("#posit").html(yaxL+"'"+"__"+xaxL+"''");

				$("#subtop").clone(true).attr("id","subtop2").appendTo("#topper");
				$("#subtop2").css("margin-top",z1+"%");
				$("#subtop2").css("margin-left",y1+"%");
				$("#subtop2").attr("id","subtopB"+ts);

		   	    $("#if1").clone(true).attr("id","subtopB"+ts+"mrkpop").appendTo("#topper");
		   	    $("#subtopB"+ts+"mrkpop").css("margin-top",z1-15+"%");
				$("#subtopB"+ts+"mrkpop").css("margin-left",y1+2+"%");
			});



		$(".thighRTtop1MAP").click(function(event)
			{
				
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
				
				var ts = (event.timeStamp).toFixed(0)
				var h = $(".headtop1MAP").position();
				console.log(h)
				console.log(ts)
				var ht= h.top
				var hl= h.left
				$("#posit").html(yaxL+"'"+"__"+xaxL+"''");

				$("#subtop").clone(true).attr("id","subtop2").appendTo("#topper");
				$("#subtop2").css("margin-top",z1+"%");
				$("#subtop2").css("margin-left",y1+"%");
				$("#subtop2").attr("id","subtopB"+ts);

		   	    $("#if1").clone(true).attr("id","subtopB"+ts+"mrkpop").appendTo("#topper");
		   	    $("#subtopB"+ts+"mrkpop").css("margin-top",z1-15+"%");
				$("#subtopB"+ts+"mrkpop").css("margin-left",y1+2+"%");
			});


		$(".legLTtop1MAP").click(function(event)
			{
				
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
				
				var ts = (event.timeStamp).toFixed(0)
				var h = $(".headtop1MAP").position();
				console.log(h)
				console.log(ts)
				var ht= h.top
				var hl= h.left
				$("#posit").html(yaxL+"'"+"__"+xaxL+"''");

				$("#subtop").clone(true).attr("id","subtop2").appendTo("#topper");
				$("#subtop2").css("margin-top",z1+"%");
				$("#subtop2").css("margin-left",y1+"%");
				$("#subtop2").attr("id","subtopB"+ts);

		   	    $("#if1").clone(true).attr("id","subtopB"+ts+"mrkpop").appendTo("#topper");
		   	    $("#subtopB"+ts+"mrkpop").css("margin-top",z1-15+"%");
				$("#subtopB"+ts+"mrkpop").css("margin-left",y1+2+"%");
			});


		$(".legRTtop1MAP").click(function(event)
			{
				
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
				
				var ts = (event.timeStamp).toFixed(0)
				var h = $(".headtop1MAP").position();
				console.log(h)
				console.log(ts)
				var ht= h.top
				var hl= h.left
				$("#posit").html(yaxL+"'"+"__"+xaxL+"''");

				$("#subtop").clone(true).attr("id","subtop2").appendTo("#topper");
				$("#subtop2").css("margin-top",z1+"%");
				$("#subtop2").css("margin-left",y1+"%");
				$("#subtop2").attr("id","subtopB"+ts);

		   	    $("#if1").clone(true).attr("id","subtopB"+ts+"mrkpop").appendTo("#topper");
		   	    $("#subtopB"+ts+"mrkpop").css("margin-top",z1-15+"%");
				$("#subtopB"+ts+"mrkpop").css("margin-left",y1+2+"%");
			});



		$(".tagshut").click(function(event)
			{
				var par =(event.target.parentNode.parentNode.parentNode.id);
				console.log(par);
				$("#"+par).remove();
				$("#"+par+"mrkpop").remove();


			});



		$(".mrk,.mrk1A").click(function(event)
		{
			var par =(event.target.parentNode.parentNode.parentNode.id);
			$(".mrk,.mrk1A").attr("id", par+"mrk");
			var marker = event.target.id
			$("#"+marker+"pop").show();
		});

});