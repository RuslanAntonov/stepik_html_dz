var lang_select_field_label = document.getElementById("lang_select_field_label");
var lang_select_field_label_text = document.getElementById("lang_select_field_label_text");
var lang_select_option = document.getElementsByClassName("lang_select_option");
var lang_select_list = document.getElementById("lang_select_list")
var lang_select = document.getElementById("lang_select")

lang_select.onclick = function() {
    lang_select_list.classList.toggle("hide");
}

for (option of lang_select_option) {
    option.onclick = function() {
        lang_select_field_label_text.innerHTML = this.textContent;
    }
}