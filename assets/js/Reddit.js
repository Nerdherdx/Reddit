$(document).ready(function() {
    $(function () {
        var count = 0, $pics = $('div.single-item .images'), pics = $pics.length;
        console.log($pics);
        var url = "https://www.reddit.com/r/emmawatson/new.json?jsonp=?";
        var img;






      //  var Change = "https://www.reddit.com/r/"+sub+"/new.json?jsonp=?";
        $.getJSON(url, function (data) {
            $.each(data.data.children, function (i, item) {
                var img = [];
                var i = $(".single-item");
                //  var url = '<img src="">';
                var url = item.data.url;
                //url += '</img>';
                var subreddit = item.data.subreddit;
                var title = item.data.title;


                img = $('<img width="100%" class="images"/>').attr("src", url + '.jpg').appendTo('.single-item');


                $(".sauce").append('<p>' + title + " " + "From the subreddit" + " " + "/r/"+subreddit + '</p>');



                $('.next').click(function(){
                    $("img:first").hide();
                    $("div").next().show();
                });



                //item.data.url added .jpg for links
            });
        });
    });
});


