document.getElementById("userName").textContent = localStorage.getItem('full_name')
var avatar = localStorage.getItem('avatar')
// if avatar not null
if(avatar){
    document.getElementById("userAvatar").src = avatar
}

// Log out
const logoutButtons = document.querySelectorAll('#btn-log-out');

logoutButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Code to change the link when clicked
        window.localStorage.clear()
        window.location.href = "pages-sign-in.html"
    });
})
