let text = document.getElementById("bin-text");
let form = document.getElementById("form");
let output  = document.getElementById("output");

form.addEventListener("submit", function(event){
    event.preventDefault();
    let str = text.value;
    let arr = [];
    let result = [];
    for(let i = 0; i < str.length;i++){
        arr.push(str.charCodeAt(i));
    }
    arr.forEach(item => {
        let binary = item.toString(2);
        result.push(binary)
    });
    result = result.join(" ");

    output.innerHTML = "<h3>Output: " + result + "</h3>";

})