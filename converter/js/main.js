const shopName = document.getElementById('shopName');
const redgateXML = document.getElementById('redgateXML');
const button = document.getElementById('button');
const countItem = document.querySelectorAll('.count');

button.addEventListener('click', () => {

   let shopNameArr = [];

   if (shopName.value.indexOf('eva') != 0 && shopName.value != 0) {
      shopNameArr = shopName.value
         .replace(/\n/g, ' ')
         .split(' ')
         .filter( function(el) {
         return el != '';
      });
   }

   shopName.value = '';
   redgateXML.value = '';

   shopNameArr.forEach(function (i) {
      if (i != '' && i.indexOf('eva') != 0) {
         shopName.value += `eva${i.replace(/\n/g, '')}a\n`;
         redgateXML.value += `<value version = "5" type = "database">
    <name>master</name> 
    <server>eva${i.replace(/\n/g, '')}a\\kassa</server> 
    <integratedSecurity>False</integratedSecurity> 
    <username>sa</username> 
    <savePassword>True</savePassword> 
    <password encrypted="1">UKjJDz3jUrg=</password> 
    <connectionTimeout>15</connectionTimeout> 
    <protocol>-1</protocol> 
    <packetSize>4096</packetSize> 
    <encrypted>False</encrypted> 
    <selected>False</selected> 
    <cserver>eva${i.replace(/\n/g, '')}a\\kassa</cserver> 
</value> \n`
      }
   });

   countItem[0].innerHTML = `Количество: ${shopNameArr.length}`;
   shopNameArr.splice(0);

})



/********************* COPY TO BUFER ********************/

const copyLabel = document.querySelectorAll('.copy');
const copyButton = document.querySelectorAll('.wrapper__copy');


let modal = function (label) {
   copyLabel[label].classList.add('active');
}

copyButton.forEach((copyBtn, i) => {
   copyBtn.addEventListener('click', () => {
      console.log(i);

      copyBtn.parentNode.childNodes[7].select();
      document.execCommand("copy");

      if (shopName.textLength > 0) {
         modal(i);
         setTimeout(modalClose, 1000);
      }

   })
});

let modalClose = function () {
   copyLabel.forEach(copyLabel => {
      copyLabel.classList.remove('active');
   })
}