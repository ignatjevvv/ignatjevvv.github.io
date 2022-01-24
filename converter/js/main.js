const shopName = document.getElementById('shopName');
const redgateXML = document.getElementById('redgateXML');
const button = document.getElementById('button');
const countItem = document.querySelectorAll('.count');

button.addEventListener('click', createItemList);

function createItemList() {

   let shopNameArr = [];

   if (shopName.value.indexOf('eva') != 0 && shopName.value != 0) {
      shopNameArr = shopName.value
         .replace(/\n/g, ' ')
         .split(' ')
         .filter(item => { return item != '' && +item });
   }

   deleteDublicateItem(shopNameArr);
}

function deleteDublicateItem(arr) {

   const arrayWithoutDuplicates = [...new Set(arr)];
   let duplicates = [...arr];

   arrayWithoutDuplicates.forEach((item) => {
      const i = duplicates.indexOf(item);
      duplicates = duplicates
         .slice(0, i)
         .concat(duplicates.slice(i + 1, duplicates.length));
   });

   showListItem(arrayWithoutDuplicates);
   showCountItem(arrayWithoutDuplicates);

}

function showListItem(shopListArr) {

   shopName.value = "";
   redgateXML.value = "";

   shopListArr.forEach(function (i) {

      if (i != '' && i.indexOf('eva') != 0) {

         //shopName.value += `eva${i.replace(/\n/g, '')}a\n`;
         shopName.value += `sh${i.replace(/\n/g, '')}a@eva.ua\n`;
         redgateXML.value +=
            `<value version = "5" type = "database">` +
            `\n   <name>master</name>` +
            `\n   <server>eva${i.replace(/\n/g, '')}a\\kassa</server>` +
            `\n   <integratedSecurity>False</integratedSecurity>` +
            `\n   <username>sa</username>` +
            `\n   <savePassword>True</savePassword>` +
            `\n   <password encrypted="1">UKjJDz3jUrg=</password>` +
            `\n   <connectionTimeout>15</connectionTimeout>` +
            `\n   <protocol>-1</protocol>` +
            `\n   <packetSize>4096</packetSize>` +
            `\n   <encrypted>False</encrypted>` +
            `\n   <selected>False</selected>` +
            `\n   <cserver>eva${i.replace(/\n/g, '')}a\\kassa</cserver>` +
            `\n</value>\n`
      }

   });

}

function showCountItem(arr) {
   countItem[0].innerHTML = `Количество: ${arr.length}`;
}

/********************* COPY TO BUFFER ********************/

const copyButton = document.querySelectorAll('.wrapper__copy');

copyButton.forEach((copyBtn, i) => {
   copyBtn.addEventListener('click', () => {
      if (shopName.value.includes('eva')) {
         copyBtn.parentNode.childNodes[7].select();
         document.execCommand("copy")
         modal(i);
         setTimeout(modalClose, 1000);
      }
   })
});

/**************** MODAL LABEL "Copyed!" *****************/

const copyLabel = document.querySelectorAll('.copy');

let modal = function (label) {
   copyLabel[label].classList.add('active');
}

let modalClose = function () {
   copyLabel.forEach(copyLabel => {
      copyLabel.classList.remove('active');
   })
}
