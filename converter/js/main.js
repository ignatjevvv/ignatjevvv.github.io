const shopName = document.getElementById('shopName');
const button = document.getElementById('button');

button.addEventListener('click', () => {
    let shopNameArr = shopName.value.replace(/\n/g, ' ').split(' ');
    shopName.value = '';
    shopNameArr.forEach(function (i) {
        if (i != '' && i.indexOf('eva') != 0) {
            shopName.value += `eva${i.replace(/\n/g, '')}a \n`
        }
    });
})