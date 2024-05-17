$('.btn-sign-up').click(function() {
			
    name_user = $('input[name="name"]').val();
    email_user = $('input[name="email"]').val();
    password_user = $('input[name="password"]').val();
    data_signup = {
        full_name: name_user,
        email: email_user,
        password: password_user
    }

    $.ajax({
        url: 'http://localhost:4040/register',
        type: 'POST',
        data: JSON.stringify(data_signup),
        contentType: 'application/json',
        success: function(response) {
            alert('Sign up success');
            window.location.href = 'pages-sign-in.html';
        },
        error: function(response) {
            alert('Sign up failed');
        }
    });

});