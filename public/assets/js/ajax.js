$(".eatme").on("submit", function() {
    event.preventDefault();
    console.log("clickme");
    var burgerid = $(this).find(".burgerid").val();
    $.ajax({
        method:"PUT",
        url: "/burgers/" + burgerid
    }).then (
        function(result){
            console.log(result);
            location.reload();
        }

    );
})