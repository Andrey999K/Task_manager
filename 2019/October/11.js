if (localStorage.getItem("11_10_2019") != 0) {
	document.getElementById("11_10_2019").innerHTML = localStorage.getItem("11_10_2019");
}

function add_task() {
	var task = document.getElementById("input_task").value;
	document.getElementById("input_task").value = "";
	document.getElementById("11_10_2019").insertAdjacentHTML("beforeend", task);
	document.getElementById("11_10_2019").insertAdjacentHTML("beforeend", "<br>");
	localStorage.setItem("11_10_2019", document.getElementById("11_10_2019").innerHTML);
}
