function convertTemp() {
    
    let input_Value = document.getElementById("inputValue");
    let result = document.getElementById("answer");
    let changefrom = document.getElementById("changefrom");
    let changeto = document.getElementById("changeto");

    input_Value.addEventListener("keyup", convertTemp);
    changefrom.addEventListener("change", convertTemp);
    changeto.addEventListener("change", convertTemp);

    let x = changefrom.value;
    let y = changeto.value;

    // for celsiuse conversion into others ->
    if(x === "celsius" && y === "fahrenheit"){
        result.value = Number((input_Value.value) * 9/5) + 32;
    }
    else if(x === "celsius" && y === "kelvin") {
        result.value = Number(input_Value.value) + 273.15;
    }
    else if(x === "celsius" && y === "celsius") {
        result.value = input_Value.value;
    }

     // for fahrenheit conversion into others ->
    if(x === "fahrenheit" && y === "celsius"){
        result.value = Number((input_Value.value - 32) * 5) / 9;
    }
    else if(x === "fahrenheit" && y === "kelvin") {
        result.value = Number((input_Value.value - 32) * 5/9) + 273.15;
    }
    else if(x === "fahrenheit" && y === "fahrenheit") {
        result.value = input_Value.value;
    }

    // for kelvin conversion into others ->
    if(x === "kelvin" && y === "celsius"){
        result.value = Number(input_Value.value) - 273.15;
    }
    else if(x === "kelvin" && y === "fahrenheit") {
        result.value = Number((input_Value.value - 273.15) * 9/5) + 32;
    }
    else if(x === "kelvin" && y === "kelvin") {
        result.value = input_Value.value;
    }

}