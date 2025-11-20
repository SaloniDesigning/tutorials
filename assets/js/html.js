$(document).ready(function () {
	// Get

	$("#text").click(function () {
		alert("Text: " + $("#content").text());
	});

	$("#html").click(function () {
		alert("HTML: " + $("#content").html());
	});

	$("#showName").click(function () {
		alert("Your Name: " + $("#name").val());
	});

	$("#href").click(function () {
		alert("Id: " + $("#google").attr("id"));
	});

	// Set

	$("#setText").click(function () {
		$("#textPara").text("This text is set using jQuery");
	});

	$("#setHtml").click(function () {
		$("#htmlPara").html("<b><i>This text is set using jQuery</i></b>");
	});

	$("#setColor").click(function () {
		$("#color").val("Green");
	});

	// Add

	$("#append").click(function () {
		$("#addText").append(" Appended");
	});

	$("#prepend").click(function () {
		$("#addText").prepend("Prepended: ");
	});

	$("#before").click(function () {
		$("#w3s").before("It's before");
	});

	$("#after").click(function () {
		$("#w3s").after("It's After");
	});

	// Remove / Empty

	$("#empty").click(function () {
		$("#rmText").empty();
	});

	$("#remove").click(function () {
		$("#rmText").remove();
	});

	// CSS Classes

	$("#addCls").click(function () {
		$("#cssText").addClass("cssPara");
	});

	$("#rmCls").click(function () {
		$("#cssText").removeClass("cssPara");
	});

	$("#tgCls").click(function () {
		$("#cssText").toggleClass("cssPara");
	});

	$("#setCss").click(function () {
		$("#cssText").css({
			border: "1px solid red",
			"text-decoration": "underline",
			padding: "10px"
		});
	});
});
