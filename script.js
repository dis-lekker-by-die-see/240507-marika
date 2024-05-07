const hiragana = {'あめ': 'ame', 'いぬ': 'inu', 'うま': 'uma', 'えんぴつ': 'enpitsu', 'おにぎり': 'onigiri', 'かさ': 'kasa', 'きつね': 'kitsune', 'くま': 'kuma', 'けいたい': 'keitai', 'こねこ': 'koneko', 'さかな': 'sakana', 'しまうま': 'shimauma', 'すし': 'sushi', 'せんべい': 'senbei', 'そら': 'sora', 'たまご': 'tamago', 'ちず': 'chizu', 'つき': 'tsuki', 'てがみ': 'tegami', 'とんぼ': 'tonbo', 'なし': 'nashi', 'にわとり': 'niwatori', 'ぬいぐるみ': 'nuigurumi', 'ねっこ': 'nekko', 'のり': 'nori', 'はな': 'hana', 'ひつじ': 'hitsuji', 'ふね': 'fune', 'へび': 'hebi', 'ほし': 'hoshi', 'まど': 'mado', 'みかん': 'mikan', 'むし': 'mushi', 'めがね': 'megane', 'もも': 'momo', 'やま': 'yama', 'ゆき': 'yuki', 'よる': 'yoru', 'らっぱ': 'rappa', 'りんご': 'ringo', 'るすばん': 'rusuban', 'れいぞうこ': 'reizouko', 'ろうそく': 'rousoku', 'わに': 'wani', 'がっこう': 'gakkou', 'ぎんこう': 'ginkou', 'ぐみ': 'gumi', 'げんかん': 'genkan', 'ごはん': 'gohan', 'ざっし': 'zasshi', 'じてんしゃ': 'jitensha', 'ずぼん': 'zubon', 'ぜんぶ': 'zenbu', 'ぞう': 'zou', 'だいこん': 'daikon', 'ぢから': 'chikara', 'づつみ': 'dutsumi', 'でんしゃ': 'densha', 'どうぐ': 'dougu', 'ばんご': 'bango', 'びじん': 'bijin', 'ぶた': 'buta', 'べんとう': 'bentou', 'ぼうし': 'boushi', 'ぱん': 'pan', 'ぴあの': 'piano', 'ぷりぷり': 'puripuri', 'ぺん': 'pen', 'ぽんかん': 'ponkan', 'きゃく': 'kyaku', 'きゅうり': 'kyuuri', 'きょうかしょ': 'kyoukasho', 'しゃしん': 'shashin', 'しゅくだい': 'shukudai', 'しょうがっこう': 'shougakkou', 'ちゃわん': 'chawan', 'ちゅうい': 'chuui', 'ちょうさ': 'chousa', 'にゃんこ': 'nyanko', 'にゅうがく': 'nyuugaku', 'にょうぼう': 'nyoubou', 'ひゃく': 'hyaku', 'ひゅうが': 'hyuuga', 'ひょうげん': 'hyougen', 'みゃくはく': 'myakuhaku', 'みゅうみゅう': 'myuumyuu', 'みょうじ': 'myouji', 'りゃん': 'ryan', 'りゅう': 'ryuu', 'りょうり': 'ryouri', 'ぎゃく': 'gyaku', 'ぎゅうにゅう': 'gyuunyuu', 'ぎょうざ': 'gyouza', 'じゃがいも': 'jagaimo', 'じゅうしょ': 'juusho', 'じょうず': 'jouzu', 'びゃっこ': 'byakko', 'びゅうびゅう': 'byuubyuu', 'びょういん': 'byouin', 'ぴゃんぴゃん': 'pyanpyan', 'ぴゅうと': 'pyuuto', 'ぴょんぴょん': 'pyonpyon'};


document.addEventListener('DOMContentLoaded', function() {
    displayRandomWord();
    setupEnterKeySubmit();
});

/*const hiragana = {
    'あめ': 'ame',
    'いぬ': 'inu',
    'うま': 'uma',
    'えんぴつ': 'enpitsu',
    'おか': 'oka'
};
*/

function displayRandomWord() {
    const keys = Object.keys(hiragana);
    const randomWord = keys[Math.floor(Math.random() * keys.length)];
    document.getElementById('hiraganaWord').textContent = randomWord;
    document.getElementById('userInput').setAttribute('data-reading', hiragana[randomWord]);
    document.getElementById('userInput').value = ''; // Ensure input is cleared when a new word is displayed
    document.getElementById('userInput').focus(); // Focus on input for a new entry
}

function checkAnswer() {
    const userInput = document.getElementById('userInput').value.trim().toLowerCase();
    const correctReading = document.getElementById('userInput').getAttribute('data-reading');
    const resultElement = document.getElementById('result');
    
    document.getElementById('userInput').value = ''; // Clear input regardless of the result

    if (userInput === correctReading) {

        //resultElement.textContent = '🟢'; 
        
        resultElement.textContent = correctReading;
        resultElement.style.color = 'black';
        
        resultElement.style.visibility = 'visible';
        resultElement.style.opacity = '1';
        setTimeout(() => {
            resultElement.style.opacity = '0';
            resultElement.style.visibility = 'hidden';
            displayRandomWord(); // Display next word after message disappears
        }, 3000); // Message will fade out and hide after 1.5 seconds
    } else {
        resultElement.textContent = '🔴';
        resultElement.style.color = 'red';
        resultElement.style.visibility = 'visible';
        resultElement.style.opacity = '1';
        setTimeout(() => {
            resultElement.style.opacity = '0';
            resultElement.style.visibility = 'hidden';
        }, 2400); // Keep the same word and allow another attempt
    }
}

function setupEnterKeySubmit() {
    const input = document.getElementById('userInput');
    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent any default behavior
            checkAnswer();
        }
    });
}












/*
document.addEventListener('DOMContentLoaded', function() {
    displayRandomWord();
    setupEnterKeySubmit();
});

const hiragana = {
    'あめ': 'ame',
    'いぬ': 'inu',
    'うま': 'uma',
    'えんぴつ': 'enpitsu',
    'おか': 'oka'
};


function displayRandomWord() {
    const keys = Object.keys(hiragana);
    const randomWord = keys[Math.floor(Math.random() * keys.length)];
    document.getElementById('hiraganaWord').textContent = randomWord;
    document.getElementById('userInput').setAttribute('data-reading', hiragana[randomWord]);
    document.getElementById('userInput').value = ''; // Clear previous input
    document.getElementById('userInput').focus(); // Focus on input for a new entry
}

function checkAnswer() {
    const userInput = document.getElementById('userInput').value.trim().toLowerCase();
    const correctReading = document.getElementById('userInput').getAttribute('data-reading');
    const resultElement = document.getElementById('result');
    if (userInput === correctReading) {
        resultElement.textContent = 'Correct!';
        resultElement.style.color = 'green';
        resultElement.style.visibility = 'visible';
        resultElement.style.opacity = '1';
        setTimeout(() => {
            resultElement.style.opacity = '0';
            resultElement.style.visibility = 'hidden';
            displayRandomWord(); // Display next word after message disappears
        }, 1500); // Message will fade out and hide after 1.5 seconds
    } else {
        resultElement.textContent = 'Incorrect, try again!';
        resultElement.style.color = 'red';
        resultElement.style.visibility = 'visible';
        resultElement.style.opacity = '1';
        setTimeout(() => {
            resultElement.style.opacity = '0';
            resultElement.style.visibility = 'hidden';
        }, 1500); // Keep the same word and allow another attempt
    }
}

function setupEnterKeySubmit() {
    const input = document.getElementById('userInput');
    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent any default behavior
            checkAnswer();
        }
    });
}





document.addEventListener('DOMContentLoaded', function() {
    displayRandomWord();
    setupEnterKeySubmit();
});

const hiragana = {
    'あめ': 'ame',
    'いぬ': 'inu',
    'うま': 'uma',
    'えんぴつ': 'enpitsu',
    'おか': 'oka'
};


function displayRandomWord() {
    document.getElementById('result').style.opacity = '0'; // Ensure message is hidden before displaying a new word
    setTimeout(() => {
        const keys = Object.keys(hiragana);
        const randomWord = keys[Math.floor(Math.random() * keys.length)];
        document.getElementById('hiraganaWord').textContent = randomWord;
        document.getElementById('userInput').setAttribute('data-reading', hiragana[randomWord]);
        document.getElementById('userInput').value = ''; // Clear previous input
        document.getElementById('userInput').focus(); // Focus on input for a new entry
    }, 500); // Delay to ensure the message fades out before the new word appears
}

function checkAnswer() {
    const userInput = document.getElementById('userInput').value.trim().toLowerCase();
    const correctReading = document.getElementById('userInput').getAttribute('data-reading');
    const resultElement = document.getElementById('result');
    if (userInput === correctReading) {
        resultElement.textContent = 'Correct!';
    } else {
        resultElement.textContent = 'Incorrect, try again!';
    }
    resultElement.style.visibility = 'visible';
    resultElement.style.opacity = '1';
    setTimeout(() => {
        resultElement.style.opacity = '0';
        resultElement.style.visibility = 'hidden';
        displayRandomWord(); // Display next word after message disappears
    }, 1500); // Message will fade out and hide after 1.5 seconds
}

function setupEnterKeySubmit() {
    const input = document.getElementById('userInput');
    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent any default behavior
            checkAnswer();
        }
    });
}
*/