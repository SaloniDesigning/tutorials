$(document).ready(function () {
	// Ancestors

	$("#parent").click(function () {
		$("span").parent().css({ color: "red", border: "1px solid red" });
	});

	$("#parents").click(function () {
		$("span").parents().css({ color: "blue", border: "1px solid blue" });
	});

	$("#parentUntil").click(function () {
		$("span").parentsUntil("div").css({ color: "green", border: "1px solid green" });
	});
});
