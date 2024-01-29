var welcomeMssg = document.getElementById('welcomeMssg');
var logOut = document.getElementById('logOut');

$(function() {
    $('.loader').fadeOut(1000, function() {
        $('.loading').fadeOut(1000);
    });
})
var mssg = localStorage.getItem('userName');
if (mssg != null) {
    welcomeMssg.innerHTML = `Welcome ${mssg}`;
}

function logout() {
    window.location.href = '.././SignIn/signin.html';
    localStorage.removeItem('userName');
}
logOut.addEventListener('click', function() {
    logout();
})