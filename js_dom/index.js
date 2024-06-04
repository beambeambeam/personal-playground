const element = document.getElementById("test1");
console.log(element.innerHTML);

const list = document.getElementById("list");
console.log(list.children);

const newDiv = document.createElement("div");
newDiv.className = "addClasses";
newDiv.innerHTML = "<div>test</div>";

document.body.append(newDiv);
