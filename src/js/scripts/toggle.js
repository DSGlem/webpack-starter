$(".toggle-item").click(function(){
    if($(this).hasClass("opened")) { 
        $(this).removeClass("opened");
    }
    else {
        $(this).addClass("opened");
    }
    console.log($(this).hasClass("opened"));

    $(this).find(".text").slideToggle
    ("slow");
})