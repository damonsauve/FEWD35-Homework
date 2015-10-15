$(document).ready(function() {

    $(document).on("submit", "form", function(event) {

        event.preventDefault();

        var formInfo = {
            first_name: $("#first-name").val(),
            last_name:  $("#last-name").val(),
            email:      $("#email-address").val(),
            address:    $("#address").val(),
            address_2:  $("#address-2").val(),
            city:       $("#city").val(),
            state:      $("#state").val()
        };

        console.log('name: ' + formInfo.name);
        console.log(formInfo);

        for (var key in formInfo) {

            if (formInfo[key] === '') {
                alert('Please fill in all fields!');
                return false;
            }
        }

        alert('Form submitted!');

    });

});


