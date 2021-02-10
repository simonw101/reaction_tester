var start = new Date().getTime();

document.getElementById("shape").onclick = function() {
    
    var end = new Date().getTime();
    
    var timeTaken = start - end;
    
    alert(timeTaken);
    
    document.getElementById("shape").style.display = "none";
    
}