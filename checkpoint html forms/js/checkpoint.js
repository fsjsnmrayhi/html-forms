$("#submit").click(function() {  $("#alert").css("display","block") ;$("#alert").css("display","inlineblock")})
function submitForm (e){
    e.preventDefault();

    $("#alert").css("display","block");
}
document.getElementById("myform").addEventListener("submit", submitForm);


