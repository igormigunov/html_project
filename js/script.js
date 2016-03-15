$(document).ready(function (e) {
    nice = $("#userList").niceScroll();
    $('.right-panel > a').each(function(e){
        $tooltip=$(this).tooltip(
            {
                html: true,
                title: $('#tooltip').html(),
                placement:'right',
                animation: true,
                delay: {show: 0, hide: 200}
            })
    });
});