$(function(){

    $(".link_nav, .feature_cell").hover(function(){
        $(this).fadeTo("slow", 0.1).fadeTo("slow", 1).css("color","red");}, function(){
        $(this).css("color","black");});  

    $(".button").hover(function(){
        $(this).fadeTo("slow", 0.1).fadeTo("slow", 1);}

    )}); 

    $(function(){
        $(".tab_button2").hide();
        $(".box_button1, .box_button2").click(function(){
            $(".box_button1, .box_button2").toggleClass("tab");
        });

        if($(".tab_button2").is(":visible"))
        {
            $("#form_type").attr("value","Buying Car");
        }
        else{
            $("#form_type").attr("value","Renting Car");}
    });

$(function(){
    $("#dialog").hide();
    $("#twitter, #facebook, #gplus, #instagram").click(function(){
        var social = $(this).attr('id') + '.html'; 
        $("#dialog")
        .html('<iframe style="border: 1px;" src="' + social + '" height=100% width=100%></iframe>')
        .dialog({
            height: 500,
            width: 500,
            dialogClass: 'no-close success-dialog'});
    });

    $(".offers_cell_image").click(function(){
        var big_img = $(this).css("background-image"); 
        $("#dialog")
        .css({
            "background-image": big_img,
            "background-size":"cover"
        })
        .dialog({
            height: 465,
            width: 810,
            dialogClass: 'no-close success-dialog'});
    });

    $( function() {
        $( "#slider-range" ).slider({
          range: true,
          min: 0,
          max: 500,
          values: [ 75, 300 ],
          slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
          }
        });
        $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
          " - $" + $( "#slider-range" ).slider( "values", 1 ) );
      } );

});