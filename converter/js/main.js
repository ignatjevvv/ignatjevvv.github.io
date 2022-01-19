const shopName = document.getElementById('shopName');
const redgateXML = document.getElementById('redgateXML');
const button = document.getElementById('button');
const countItem = document.querySelectorAll('.count');

button.addEventListener('click', () => {

   let shopNameArr = [];

   if (shopName.value.indexOf('eva') != 0 && shopName.value != 0) {
      shopNameArr = shopName.value.replace(/\n/g, ' ').split(' ');
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

const copyButton = document.querySelectorAll('.wrapper__copy');

copyButton.forEach(i => {
   i.addEventListener('click', () => {
      i.parentNode.childNodes[5].select();
      document.execCommand("copy");
      if (shopName.textLength > 0) {
         alert("Скопировано в буфер")
      }
   })
});
