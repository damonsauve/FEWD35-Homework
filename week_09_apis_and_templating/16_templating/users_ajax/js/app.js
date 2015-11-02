$(document).ready(function() {

    $.ajax({
        type: "GET",
        url: "http://daretodiscover.herokuapp.com/users/",
        success: function(data) {

            var source = $('#users-template').html();
            var template = Handlebars.compile(source);

            for (var i in data) {

                // console.log(data[i].id);
                // console.log(data[i].firstname);

                // for(var j in data[i]) {

                    // console.log(j + ' : ' + data[i][j]);

                    var html = template(data[i]);

                    $('tbody').append(html);

                // }
                // console.log('***************');
            }
        },
        error: function() {
            alert('Error!');
        }
    });
});
