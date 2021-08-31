
const inputTextName = document.getElementById('name')
const inputTextStreet = document.getElementById('street')
const inputTextHouse = document.getElementById('house')
const inputTextApps = document.getElementById('apps')


document.getElementById('name').onkeydown = function (e) {
    return !((/^[0-9]$/.test(e.key)) || (30 <= inputTextName.value.length)) || e.key == "Backspace";
}

document.getElementById('house').onkeydown = function (e) {
    return !((/^[]$/.test(e.key)) || (5 <= inputTextHouse.value.length)) || e.key == "Backspace";
}

document.getElementById('street').onkeydown = function (e) {
    return !((/^[0-9]$/.test(e.key)) || (30 <= inputTextStreet.value.length)) || e.key == "Backspace";
}

document.getElementById('apps').onkeydown = function (e) {
    return !((/^[А-Яа-яA-Za-z ]$/.test(e.key)) || (3 <= inputTextApps.value.length)) || e.key == "Backspace";
}

// document.getElementById('house').onkeydown = function (e) {
//     return !(/^[А-Яа-яA-Za-z ]$/.test(e.key));
// }

// document.getElementById('street').onkeydown = function (e) {
//     return !(/^[0-9 ]$/.test(e.key));  // IE > 9
// }

// document.getElementById('apps').onkeydown = function (e) {
//     return !(/^[А-Яа-яA-Za-z ]$/.test(e.key));  // IE > 9
// }
