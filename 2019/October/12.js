if (localStorage.getItem("12_10_2019") != 0) {
	document.getElementById("12_10_2019").innerHTML = localStorage.getItem("12_10_2019");
}

function add_task() {
	var task = document.getElementById("input_task").value;
	document.getElementById("input_task").value = "";
	document.getElementById("12_10_2019").insertAdjacentHTML("beforeend", task);
	document.getElementById("12_10_2019").insertAdjacentHTML("beforeend", "<br>");
	localStorage.setItem("12_10_2019", document.getElementById("12_10_2019").innerHTML);
}
