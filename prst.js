function addProject() {
    let input = document.getElementById("projectInput").value;

    if (input === "") {
        alert("Enter a project name");
        return;
    }

    let li = document.createElement("li");
    li.textContent = input;

    document.getElementById("projectList").appendChild(li);

    document.getElementById("status").innerHTML = "Projects Updated";

    document.getElementById("projectInput").value = "";
}