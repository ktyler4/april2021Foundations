function newItem(){
    // this is assigning the users input value in HTML to the variable named item.
    var item = document.getElementById("input").value;

    // this is assigning the HTML ul to the JS variable named ul
    var ul = document.getElementById("list");

    // this is creating an <li></li> element in HTML and assigning it to a variable name li
    var li = document.createElement("li");

    // the appendChild method is taking the value of our item(input value) and placing it inside of our <li></li> with the text node of " - "
    // so this will display "- item"
    li.appendChild(document.createTextNode (" - " + item));

    // this is placing our <li></li> inside of our <ul></ul>
    ul.appendChild(li);
    document.getElementById("input").value = " ";
    li.onclick = removeItem;
}

document.body.onkeyup = function(e){
        if(e.keyCode == 13){
            newItem();
        }
};

function removeItem(e){
    e.target.parentElement.removeChild(e.target);
}