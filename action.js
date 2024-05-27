function fun(value){
    document.getElementById("ansbox").value +=value;
}
function clearResult(){
    document.getElementById("ansbox").value="";
}
function submit(){
    try {
        var result = eval(document.getElementById("ansbox").value);
        document.getElementById("ansbox").value = result;
    } catch (error) {
        document.getElementById("ansbox").value = "Error";
    }
}