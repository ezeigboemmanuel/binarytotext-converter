let text = document.getElementById("bin-text");
let form = document.getElementById("form");
let output  = document.getElementById("output");

form.addEventListener("submit", function(event){
    event.preventDefault();
    let str = text.value;
    let arr = [];
    str = str.split(" ");
    for(let i = 0;i<str.length;i++){
        let digit = parseInt(str[i], 2);
        arr.push(String.fromCharCode(digit));
    }
    let result = arr.join("");

    output.innerHTML = "<h3>Output: " + result + "</h3>";

})