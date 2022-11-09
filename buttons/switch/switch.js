function switch_button(id) {
    var input = document.createElement('input');
    input.type = 'checkbox';
    input.classList.add("check");
    input.id = id;

    var label = document.createElement('label');
    label.htmlFor = id;
    label.classList.add("sw");
    label.classList.add("sw-size");
    label.classList.add("sw-bg");

    var container = document.createElement('div');
    container.classList.add('container');
    container.appendChild(input);
    container.appendChild(label);
    return container
}