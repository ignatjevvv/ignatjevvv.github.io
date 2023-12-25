'use strict';

let wordList = [
    {
        "translate": "быть",
        "v1": "be",
        "v2": "was / were",
        "v3": "been",
        "v4": "[biː]",
        "v5": "[wɒz]/[wɪər]",
        "v6": "[biː]"
    },
    {
        "translate": "становится",
        "v1": "become",
        "v2": "became",
        "v3": "become"
    },
    {
        "translate": "начинать",
        "v1": "begin",
        "v2": "began",
        "v3": "begun"
    },
    {
        "translate": "ломать",
        "v1": "break",
        "v2": "broke",
        "v3": "broken"
    },
    {
        "translate": "приносить",
        "v1": "bring",
        "v2": "brought",
        "v3": "brought"
    },
    {
        "translate": "строить",
        "v1": "build",
        "v2": "built",
        "v3": "built"
    },
    {
        "translate": "покупать",
        "v1": "buy",
        "v2": "bought",
        "v3": "bought"
    },
    {
        "translate": "мочь",
        "v1": "can",
        "v2": "could",
        "v3": "(been able)"
    },
    {
        "translate": "ловить",
        "v1": "catch",
        "v2": "caught",
        "v3": "caught"
    },
    {
        "translate": "выбирать",
        "v1": "choose",
        "v2": "chose",
        "v3": "chosen"
    },
    {
        "translate": "приходить",
        "v1": "come",
        "v2": "came",
        "v3": "come"
    },
    {
        "translate": "стоить",
        "v1": "cost",
        "v2": "cost",
        "v3": "cost"
    },
    {
        "translate": "копать",
        "v1": "dig",
        "v2": "dug",
        "v3": "dug"
    },
    {
        "translate": "делать",
        "v1": "do",
        "v2": "did",
        "v3": "done"
    },
    {
        "translate": "рисовать",
        "v1": "draw",
        "v2": "drew",
        "v3": "drawn"
    },
    {
        "translate": "пить",
        "v1": "drink",
        "v2": "drank",
        "v3": "drunk"
    },
    {
        "translate": "водить",
        "v1": "drive",
        "v2": "drove",
        "v3": "driven"
    },
    {
        "translate": "есть",
        "v1": "eat",
        "v2": "ate",
        "v3": "eaten"
    },
    {
        "translate": "падать",
        "v1": "fall",
        "v2": "fell",
        "v3": "fallen"
    },
    {
        "translate": "кормить",
        "v1": "feed",
        "v2": "fed",
        "v3": "fed"
    },
    {
        "translate": "чувствовать",
        "v1": "feel",
        "v2": "felt",
        "v3": "felt"
    },
    {
        "translate": "находить",
        "v1": "find",
        "v2": "found",
        "v3": "found"
    },
    {
        "translate": "летать",
        "v1": "fly",
        "v2": "flew",
        "v3": "flown"
    },
    {
        "translate": "забывать",
        "v1": "forget",
        "v2": "forgot",
        "v3": "forgotten"
    },
    {
        "translate": "получать",
        "v1": "get",
        "v2": "got",
        "v3": "got or gotten"
    },
    {
        "translate": "давать",
        "v1": "give",
        "v2": "gave",
        "v3": "given"
    },
    {
        "translate": "идти",
        "v1": "go",
        "v2": "went",
        "v3": "gone"
    },
    {
        "translate": "расти",
        "v1": "grow",
        "v2": "grew",
        "v3": "grown"
    },
    {
        "translate": "иметь",
        "v1": "have",
        "v2": "had",
        "v3": "had"
    },
    {
        "translate": "слышать",
        "v1": "hear",
        "v2": "heard",
        "v3": "heard"
    },
    {
        "translate": "держать",
        "v1": "hold",
        "v2": "held",
        "v3": "held"
    },

    {
        "translate": "боль",
        "v1": "hurt",
        "v2": "hurt",
        "v3": "hurt"
    },
    {
        "translate": "хранить",
        "v1": "keep",
        "v2": "kept",
        "v3": "kept"
    },
    {
        "translate": "знать",
        "v1": "know",
        "v2": "knew",
        "v3": "known"
    },
    {
        "translate": "учиться",
        "v1": "learn",
        "v2": "learned or learnt",
        "v3": "learned or learnt"
    },
    {
        "translate": "покидать",
        "v1": "leave",
        "v2": "left",
        "v3": "left"
    },
    {
        "translate": "позволять",
        "v1": "let",
        "v2": "let",
        "v3": "let"
    },
    {
        "translate": "терять",
        "v1": "lose",
        "v2": "lost",
        "v3": "lost"
    },
    {
        "translate": "делать",
        "v1": "make",
        "v2": "made",
        "v3": "made"
    },
    {
        "translate": "значить",
        "v1": "mean",
        "v2": "meant",
        "v3": "meant"
    },
    {
        "translate": "встречать",
        "v1": "meet",
        "v2": "met",
        "v3": "met"
    },
    {
        "translate": "платить",
        "v1": "pay",
        "v2": "paid",
        "v3": "paid"
    },
    {
        "translate": "класть",
        "v1": "put",
        "v2": "put",
        "v3": "put"
    },
    {
        "translate": "читать",
        "v1": "read",
        "v2": "read /red/",
        "v3": "read /red/"
    },
    {
        "translate": "ездить верхом",
        "v1": "ride",
        "v2": "rode",
        "v3": "ridden"
    },
    {
        "translate": "звонить",
        "v1": "ring",
        "v2": "rang",
        "v3": "rung"
    },
    {
        "translate": "бежать",
        "v1": "run",
        "v2": "ran",
        "v3": "run"
    },
    {
        "translate": "сказать",
        "v1": "say",
        "v2": "said",
        "v3": "said"
    },
    {
        "translate": "видеть",
        "v1": "see",
        "v2": "saw",
        "v3": "seen"
    },
    {
        "translate": "продавать",
        "v1": "sell",
        "v2": "sold",
        "v3": "sold"
    },
    {
        "translate": "посылать",
        "v1": "send",
        "v2": "sent",
        "v3": "sent"
    },
    {
        "translate": "светить",
        "v1": "shine",
        "v2": "shone or shined",
        "v3": "shone or shined"
    },
    {
        "translate": "показывать",
        "v1": "show",
        "v2": "showed",
        "v3": "shown or showed"
    },
    {
        "translate": "петь",
        "v1": "sing",
        "v2": "sang or sung",
        "v3": "sung"
    },
    {
        "translate": "сидеть",
        "v1": "sit",
        "v2": "sat",
        "v3": "sat"
    },
    {
        "translate": "спать",
        "v1": "sleep",
        "v2": "slept",
        "v3": "slept"
    },
    {
        "translate": "говорить",
        "v1": "speak",
        "v2": "spoke",
        "v3": "spoken"
    },
    {
        "translate": "тратить",
        "v1": "spend",
        "v2": "spent",
        "v3": "spent"
    },
    {
        "translate": "стоять",
        "v1": "stand",
        "v2": "stood",
        "v3": "stood"
    },
    {
        "translate": "воровать",
        "v1": "steal",
        "v2": "stole",
        "v3": "stolen"
    },
    {
        "translate": "плавать",
        "v1": "swim",
        "v2": "swam",
        "v3": "swum"
    },
    {
        "translate": "брать",
        "v1": "take",
        "v2": "took",
        "v3": "taken"
    },
    {
        "translate": "обучать",
        "v1": "teach",
        "v2": "taught",
        "v3": "taught"
    },
    {
        "translate": "рассказывать",
        "v1": "tell",
        "v2": "told",
        "v3": "told"
    },
    {
        "translate": "думать",
        "v1": "think",
        "v2": "thought",
        "v3": "thought"
    },
    {
        "translate": "бросать",
        "v1": "throw",
        "v2": "threw",
        "v3": "thrown"
    },
    {
        "translate": "понимать",
        "v1": "understand",
        "v2": "understood",
        "v3": "understood"
    },
    {
        "translate": "носить, одевать",
        "v1": "wear",
        "v2": "wore",
        "v3": "worn"
    },
    {
        "translate": "побеждать",
        "v1": "win",
        "v2": "won",
        "v3": "won"
    },
    {
        "translate": "писать",
        "v1": "write",
        "v2": "wrote",
        "v3": "written"
    }

];

// ******************* SHOW WORDS LIST ON WEB PAGE *************************
const table = document.querySelector('tbody');

function printWordList(words) {
    words.forEach(item => {
        table.innerHTML += `
        <tr>
          <td><a src="audio/${item.v1}.mp3" class="play"></a></td>
          <td>${item.v1}</td>
          <td>${item.v2}</td>
          <td>${item.v3}</td>
          <td>${item.translate.split(0, 5)}</td>
        </tr>
        <tr class="hide">
            <td></td>
            <td>${item.v4}</td>
            <td>${item.v5}</td>
            <td>${item.v6}</td>
        </tr>
      `;
    });
}

printWordList(wordList);


// ******************* SEARCH WORD *************************
const inputSearchWord = document.getElementById('word');

inputSearchWord.addEventListener('keyup', () => {
    const regex = new RegExp(inputSearchWord.value.toLowerCase()),
        trContent = document.querySelectorAll('tr');

    for (let i = 0; i < trContent.length; i++) {
        if (i > 0) {
            trContent[i].remove();
        }
    }

    wordList.forEach((word, i) => {
        let arr = [word.v1, word.v2, word.v3];
        if (regex.test(arr.join())) {
            printWordList([wordList[i]]);
        }
    });

    player.audioFilesInitial();
    // showTrans();
});


// ******************* PLAY AUDIO EXAMPLE *************************
class AudioPlayer {
    constructor(audioLinkSelector) {
        this.audio = new Audio();
        this.audioLinks = audioLinkSelector;
        this.totalLinkPlay;

        this.audio.addEventListener('loadedmetadata', () => {
            let ms = this.audio.duration;
        });
    }

    audioFilesInitial() {
        document.querySelectorAll(this.audioLinks).forEach(item => {
            item.addEventListener('click', () => {
                this.play(item.attributes[0].nodeValue, item);
                this.totalLinkPlay = item.attributes[0].nodeValue;
            });
        });
    }

    play(src, item) {
        if (this.totalLinkPlay === src) {

            if (this.audio.paused) {
                item.classList.add('paused');

                tableWord.classList.add('focus');
                item.parentNode.parentNode.classList.add('active');
                this.audio.play();
            } else {
                tableWord.classList.remove('focus');
                item.classList.remove('paused');
                this.audio.pause();
            }

        } else {
            document.querySelectorAll(this.audioLinks).forEach(item => {
                item.classList.remove('paused');
                item.parentNode.parentNode.classList.remove('active');
            });

            this.audio.src = src;
            this.audio.play();

            tableWord.classList.add('focus');
            item.parentNode.parentNode.classList.add('active');
            item.classList.add('paused');

            this.audio.addEventListener('ended', (e) => {
                tableWord.classList.remove('focus');
                item.classList.remove('paused');
                item.parentNode.parentNode.classList.remove('active');
            });
        }
    }
}

let player = new AudioPlayer('.play');
player.audioFilesInitial();

/*============== CHANGE BACKGROUND HEADER ==============*/

function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 100) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);

/*==================== DARK LIGHT THEME ====================*/

const themeButtom = document.getElementById('theme-button'),
    iconTheme = 'bxs-moon',
    lightTheme = 'light-theme';

themeButtom.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    themeButtom.classList.toggle(iconTheme);
    saveLocalStorageTheme();
});

function saveLocalStorageTheme() {
    localStorage.setItem('selected-theme',
        document.body.classList.contains(lightTheme) ? true : false);
}

if (!localStorage.getItem('selected-theme')) {
    document.body.classList.add('light-theme');
    themeButtom.classList.add(iconTheme);
}