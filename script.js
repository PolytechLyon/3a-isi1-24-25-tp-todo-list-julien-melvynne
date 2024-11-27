var trucachanger;

function supprimer(target) {
    let balise = target.currentTarget.parentNode;
    balise.remove();
}

function modifier(target) {
    if (document.getElementById("new-item").attributes["hidden"] === undefined) {
        document.getElementById("new-item").toggleAttribute("hidden");
        document.getElementById("edit-item").toggleAttribute("hidden");
    }
    trucachanger = target.currentTarget.parentNode;
}

function confirm() {
    let new_name = document.getElementById("edit-todo-item-title").value;
    if (new_name !== "") {
        trucachanger.childNodes[0].innerText = new_name;
        cancel();
    }
}

function cancel() {
    document.getElementById("new-item").toggleAttribute("hidden");
    document.getElementById("edit-item").toggleAttribute("hidden");
}

function ajouter() {
    let user_input = document.getElementById("new-todo-item-title");
    let new_title = user_input.value;
    user_input.value = "";

    let list_item = document.createElement("li");
    
    let span = document.createElement("span");
    span.innerText = new_title;

    let delete_button = document.createElement("button");
    delete_button.textContent = "Delete";
    delete_button.addEventListener("click", supr = supprimer);

    let edit_button = document.createElement("button");
    edit_button.textContent = "Edit";
    edit_button.addEventListener("click", modifier); 

    list_item.appendChild(span);
    list_item.appendChild(delete_button);
    list_item.appendChild(edit_button);

    let list = document.getElementById("todo-list");
    list.appendChild(list_item);
}

document.getElementById("new-todo-item-title").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        ajouter();
    }
});
document.getElementById("new-todo-item-add").addEventListener("click", ajouter);
document.getElementById("edit-todo-item-confirm").addEventListener("click", confirm);
document.getElementById("edit-todo-item-cancel").addEventListener("click", cancel);