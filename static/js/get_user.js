$(document).ready(function(){
    // load token from local storage
    console.log(localStorage.getItem('token'));
    var token = localStorage.getItem('token');
    $.ajax({
        url: 'http://localhost:4040/user',
        type: 'GET',
        headers: {Authorization: 'Bearer ' +  token},
        dataType: 'json',
        success: function(data){
            console.log(data);
            localStorage.setItem('full_name', data.full_name);
            localStorage.setItem('avatar', data.avatar);
        }
    });
});

// // rewrite the above code using fetc
// // Path: static/js/get_user.js
// $(document).ready(function(){
//     // load token from local storage
//     console.log(localStorage.getItem('token'));
//     var token = localStorage.getItem('token');
//     fetch('http://localhost:4040/user', {
//         method: 'GET',
//         headers: {
//             Authorization: 'Bearer ' + token
//         }
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         localStorage.setItem('full_name', data.full_name);
//         localStorage.setItem('avatar', data.avatar);
//     })
//     .catch(error => console.error('Error:', error));
// });