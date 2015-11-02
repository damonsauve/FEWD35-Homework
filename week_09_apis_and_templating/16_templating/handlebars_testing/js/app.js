$(document).ready(function() {

    $.ajax({
        type: "GET",
        url: "http://daretodiscover.herokuapp.com/users/",
        success: function(data) {

            // console.log(data);
            // id: 1278,
            // created_at: "2015-10-27T01:41:57.683Z",
            // updated_at: "2015-10-27T01:41:57.683Z",
            // username: "jsmith",
            // firstname: "John",
            // lastname: "Smith",
            // age: 15

            // Get HTML used for templating.
            //
            var source = $("#users-template").html();

            // Get the function that translates source code.
            //
            var template = Handlebars.compile(source);

            for (var i = 0; i < data.length; i++) {

                // For each user object, run through template to generate HTML.
                //
                var html = template(data[i]);

                // Append each new TR to the table's tbody.
                //
                $("tbody").append(html);
            }
        },
        failure: function() {
            alert("Error!");
        }
    });
});

