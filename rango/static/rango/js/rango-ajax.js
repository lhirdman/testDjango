$(document).ready(function() {
    $("#about-btn").addClass('btn btn-primary')
    $("p").hover( function() {
        $(p).css('color', 'red');
    },
    function() {
        $(p).css('color', 'blue');
    });
    $("#about-btn").click( function(event) {
    msgstr = $("#msg").html()
        msgstr = msgstr + "o"
        $("#msg").html(msgstr)
    });
    $('#likes').click(function(){
        var catid;
        catid = $(this).attr("data-catid");
        $.get('/rango/like_category/', {category_id: catid}, function(data){
            $('#like_count').html(data);
            $('#likes').hide();
        });
    });
    $('#suggestion').keyup(function(){
        var query;
        query = $(this).val();
        $.get('/rango/suggest_category/', {suggestion: query}, function(data){
            $('#cats').html(data);
        });
    });
    // JQuery code to be added in here.
});
