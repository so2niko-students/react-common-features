const USER_URL = 'https://609a76db0f5a13001721b1e9.mockapi.io/api/v1/users';

export function testCall() {
    // Create
    const oldAjax = new XMLHttpRequest();

    // Callback settings
    // oldAjax.onload = function (ev) {
    //     console.log('onload0', ev);
    // }

    // oldAjax.onload = function (ev) {
    //     console.log('onload1', ev);
    // }
    function load2(ev){
        console.log('onload2', ev);
        const data = JSON.parse(ev.target.responseText);
        console.log(data);
    }

    oldAjax.addEventListener('load', load2);

    oldAjax.addEventListener('load', function(ev){
        // console.log('onload3', ev);
        oldAjax.removeEventListener('load', load2);
    });

    // Set method, url, *request type - optional (async)
    oldAjax.open('GET', USER_URL, true);

    // Send request
    oldAjax.send();
}

export const getAlltUsers = (callback) => {
    const oldAjax = new XMLHttpRequest();
    oldAjax.addEventListener('load', (ev) => {
        const d = JSON.parse(ev.target.responseText);
        console.log(d);
        callback(d);
    });
    oldAjax.open('GET', USER_URL, true);
    oldAjax.send();
}

export const createUser = (user, callback) => {
    const userData = JSON.stringify(user);
    const oldAjax = new XMLHttpRequest();
    oldAjax.addEventListener('load', (ev) => {
        const d = JSON.parse(ev.target.responseText);
        console.log(d);
        callback(d);
    });
    oldAjax.open('POST', USER_URL, true);
    oldAjax.send(userData);
}

// async
// js
// and 
// XML
