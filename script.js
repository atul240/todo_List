$("#form").submit(function(e){
    e.preventDefault();
    var name = $("#input").val();
    // console.log(name);
    $("ol").append('<li>'+name+'</li>')
    $("input").val("")
})