var currentPage = "main";
var buttonClassName = Object;

$('.button').click(function (e) {
    buttonClassName = $(e.target).attr('class').replace('button', '')
    if(buttonClassName !== currentPage){
    $('#' + currentPage).slideToggle(250)
    $('#' + buttonClassName).slideToggle(250)
    currentPage = buttonClassName
    }
})

// $('div').not('#myid')
