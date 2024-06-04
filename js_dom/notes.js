const submit_btn = document.getElementsByClassName("submit__button")[0];
const notes_container = document.getElementsByClassName("notes__container")[0];
const notes_header = document.getElementById("header");
const notes_detail = document.getElementById("detail");

const notes = [];

const clearField = () => {
	notes_header.value = "";
	notes_detail.value = "";
};

const updateNoteStore = () => {
	const notes_store_header =
		document.getElementsByClassName("notes__header")[0];

	if (notes.length !== 0) {
		notes_store_header.innerHTML = "Notes List";
		const notes_list = document.createElement("div");
		notes_list.className = "notes__child";

		for (items of notes) {
			items_notes = document.createElement("div");
			items_notes.innerHTML = `<div>${items.index}, ${items.header}</div> <div>${items.detail}
			<button class="remove__notes" id='${items.index}'>remove</button></div>`;

			notes_list.appendChild(items_notes);
		}

		notes_store_header.appendChild(notes_list);
		clearField();
	} else {
		notes_store_header.innerHTML = "Not any notes found!";
	}
};
updateNoteStore();

submit_btn.addEventListener("click", () => {
	if (notes_header.value !== "" && notes_detail.value !== "") {
		notes.push({
			index: notes.length,
			header: notes_header.value,
			detail: notes_detail.value,
		});
	}
	updateNoteStore();
});
