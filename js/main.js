const btnLogout = document.getElementById('btnLogout');
const isLoggedIn = localStorage.getItem('isLoggedIn')

if (isLoggedIn === 'true') {
    const userSession = localStorage.getItem('userSession');
    const user = JSON.parse(userSession) ;

    let optionUsername = document.getElementById('optionUsername');
    let optionMyAccount = document.getElementById('optionMyAccount');
    let navUsername = document.getElementById('navUsername');

    optionMyAccount.classList.add('d-none');
    optionUsername.classList.remove('d-none');

    navUsername.innerText = user.name
}

btnLogout.addEventListener('click', function() {
    localStorage.removeItem('userSession');
    localStorage.setItem('isLoggedIn', 'false');

    window.location.reload();
})