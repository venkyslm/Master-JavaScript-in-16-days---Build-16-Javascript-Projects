let query_selector_class = document.querySelector('.class');
let button_class = document.querySelector('.button-class');

button_class.addEventListener('click',function(){

    query_selector_class.textContent = "Works";
});

let query_selector_id = document.querySelector('#id-query');
let button_id_query = document.querySelector('.button-id-query');

button_id_query.addEventListener('click',function(){

    query_selector_id.textContent = "WORKS";
});

let get_element_by_id = document.getElementById('id');
let button_id = document.querySelector('.button_id');

button_id.addEventListener('click',function(){

    get_element_by_id.textContent = "WORKS!";
});