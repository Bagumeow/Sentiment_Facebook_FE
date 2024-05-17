$(document).ready(function() {
    $('.btn-sign-in').click(function() {
        // console.log($('input[name="email"]').val())
        // console.log($('input[name="password"]').val())
        email_user = $('input[name="email"]').val()
        password_user = $('input[name="password"]').val()
        data_json = {
            "email": email_user,
            "password": password_user
        }
        $.ajax({
            url: 'http://localhost:4040/login',
            type: 'POST',
            data: JSON.stringify(data_json),
            // data: data_json,
            contentType: 'application/json',
            success: function(data) {
                console.log(data)
                token = data.token
                // save token to local storage
                localStorage.setItem('token', token)
                $.ajax({

                    url: 'http://localhost:4040/user',
                    type: 'GET',
                    headers: {Authorization: 'Bearer ' +  localStorage.getItem('token')},
                    dataType: 'json',
                    success: function(data){
                        console.log(data);
                        if(data.full_name == null){
                            data.full_name = "User"}
                        localStorage.setItem('full_name', data.full_name);
                        if(data.avatar == null){
                            data.avatar = "img/icons/firefly.png"}
                        localStorage.setItem('avatar', data.avatar);
                        window.location.href = 'add_fanpage.html'
                    }
                });			
            },
            error: function(data) {
                alert('Login failed')
            }
        });			
    });
});