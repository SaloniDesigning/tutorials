$(document).ready(function () {
	// hide/show

	$("#hide").click(function () {
		$("#content").hide();
	});

	$("#show").click(function () {
		$("#content").show();
	});

	$("#toggle").click(function () {
		$("#content").toggle();
	});

	// Fade Effects

	$("#fade_in").click(function () {
		$("#box1").fadeIn();
		$("#box2").fadeIn("fast");
		$("#box3").fadeIn(2000);
	});

	$("#fade_out").click(function () {
		$("#outBox1").fadeOut();
		$("#outBox2").fadeOut("slow");
		$("#outBox3").fadeOut(5000);
	});

	$("#fade_toggle").click(function () {
		$("#toggleBox1").fadeToggle();
		$("#toggleBox2").fadeToggle("slow");
		$("#toggleBox3").fadeToggle(2000);
	});

	$("#fade_to").click(function () {
		$("#fadeToBox1").fadeTo("slow", 0.15);
		$("#fadeToBox2").fadeTo("fast", 0.4);
		$("#fadeToBox3").fadeTo(1000, 0.7);
	});

	$("#flipDown").click(function () {
		$("#panelDown").slideDown("slow", function () {
			alert("Slide down done.........");
		});
	});

	$("#flipUp").click(function () {
		$("#panelUp").slideUp();
	});

	$("#flipToggle").click(function () {
		$("#panelToggle").slideToggle();
	});

	// Animations

	$("#start_btn").click(function () {
		$("#anm1").animate({
			height: "toggle"
		});
	});

	$("#start_que_btn").click(function () {
		var div = $("#que_anm");
		div.animate({ height: "300px", opacity: "0.4" }, "slow");
		div.animate({ width: "300px", opacity: "0.8" }, "slow");
		div.animate({ height: "100px", opacity: "0.4" }, "slow");
		div.animate({ width: "100px", opacity: "0.8" }, "slow");
	});

	$("#stop").click(function () {
		$("#que_anm").stop();
	});

	// Chaining

	$("#start_chain").click(function () {
		$("#chain").css({ color: "red", fontSize: 16 }).slideUp().css({ color: "blue", fontSize: 18 }).slideDown();
	});
});
