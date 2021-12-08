//Password Show and Hide
function show() {

    var password = document.querySelector('.student-password');
    var confirm = document.querySelector('.student-password-confirm');
    if (password.type === "password", confirm.type === "password") {
        password.type = "text";
        confirm.type = "text";
    }
    else if (password.type === "text", confirm.type === "text") {
        password.type = "password";
        confirm.type = "password";
        }
}

//Profile Picture View
function ReadURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#profile-picture-view').attr('src', e.target.result);
            $("#profile-picture-view").addClass('custom-profile-picture-view');
        };
        reader.readAsDataURL(input.files[0]);
    }
}