
const hiragana = {'あめ': 'ame', 'いぬ': 'inu', 'うま': 'uma', 'えんぴつ': 'enpitsu', 'おおきい': 'ookii', 'かさ': 'kasa', 'きつね': 'kitsune', 'くま': 'kuma', 'けいたい': 'keitai', 'こねこ': 'koneko', 'さかな': 'sakana', 'しまうま': 'shimauma', 'すし': 'sushi', 'せんべい': 'senbei', 'そら': 'sora', 'たまご': 'tamago', 'ちず': 'chizu', 'つき': 'tsuki', 'てがみ': 'tegami', 'とんぼ': 'tonbo', 'なし': 'nashi', 'にわとり': 'niwatori', 'ぬいぐるみ': 'nuigurumi', 'ねっこ': 'nekko', 'のり': 'nori', 'はな': 'hana', 'ひつじ': 'hitsuji', 'ふね': 'fune', 'へび': 'hebi', 'ほし': 'hoshi', 'まど': 'mado', 'みかん': 'mikan', 'むし': 'mushi', 'めがね': 'megane', 'もも': 'momo', 'やま': 'yama', 'ゆき': 'yuki', 'よる': 'yoru', 'らっぱ': 'rappa', 'りんご': 'ringo', 'るすばん': 'rusuban', 'れっしゃ': 'ressha', 'ろうそく': 'rousoku', 'わに': 'wani', 'がっこう': 'gakkou', 'ぎんこう': 'ginkou', 'ぐみ': 'gumi', 'げんかん': 'genkan', 'ごはん': 'gohan', 'ざっし': 'zasshi', 'じてんしゃ': 'jitensha', 'ずぼん': 'zubon', 'ぜんぶ': 'zenbu', 'ぞう': 'zou', 'だいふく': 'daifuku', 'ちぢむ': 'chidimu', 'かんづめ': 'kandume', 'でんしゃ': 'densha', 'どうぐ': 'dougu', 'ばんごう': 'bangou', 'びじん': 'bijin', 'ぶた': 'buta', 'べんとう': 'bentou', 'ぼうし': 'boushi', 'ぱん': 'pan', 'ぴあの': 'piano', 'ぷりぷり': 'puripuri', 'ぺん': 'pen', 'ぽんかん': 'ponkan', 'きゃく': 'kyaku', 'きゅうり': 'kyuuri', 'きょうかしょ': 'kyoukasho', 'しゃしん': 'shashin', 'しゅくだい': 'shukudai', 'しょうがっこう': 'shougakkou', 'ちゃわん': 'chawan', 'ちゅうい': 'chuui', 'ちょうさ': 'chousa', 'にゃんこ': 'nyanko', 'にゅうがく': 'nyuugaku', 'にょうぼう': 'nyoubou', 'ひゃく': 'hyaku', 'ひゅうが': 'hyuuga', 'ひょうげん': 'hyougen', 'みゃくはく': 'myakuhaku', 'みゅうみゅう': 'myuumyuu', 'みょうじ': 'myouji', 'りゃん': 'ryan', 'りゅう': 'ryuu', 'りょうり': 'ryouri', 'ぎゃく': 'gyaku', 'ぎゅうにゅう': 'gyuunyuu', 'ぎょうざ': 'gyouza', 'じゃがいも': 'jagaimo', 'じゅうしょ': 'juusho', 'じょうず': 'jouzu', 'ぢゃ': 'dya', 'ぢゅ': 'dyu', 'ぢょ': 'dyo', 'びゃっこ': 'byakko', 'びゅうびゅう': 'byuubyuu', 'びょういん': 'byouin', 'ぴゃんぴゃん': 'pyanpyan', 'ぴゅうと': 'pyuuto', 'ぴょんぴょん': 'pyonpyon'};

/*const hiragana = {
    'あめ': 'ame', 'いぬ': 'inu', 'うま': 'uma', 'えんぴつ': 'enpitsu', 'おにぎり': 'onigiri'
};
*/


document.addEventListener('DOMContentLoaded', function() {
    const correctPassword = '1234';  
    let enteredPassword = prompt('Password > ');

    if (enteredPassword !== correctPassword) {
        // alert('Incorrect password, access denied.');  // Optionally, you can redirect them or hide content
        //document.body.innerHTML = '<h1>Access Denied</h1>';
        window.location.reload(); // Reload the entire page
    } else {
        document.getElementById('wrapper').style.display = 'flex'; // Only display the wrapper if the password is correct
        setupGame(); // Only run setup if the password is correct
    }
});

let newRandomList = [];
let originalListLength;
let wrongCount = 0;
let currentWord = '';

function setupGame() {
    newRandomList = shuffle(Object.keys(hiragana));
    originalListLength = newRandomList.length;
    displayNextWord();
    setupEnterKeySubmit();
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function displayNextWord() {
    if (newRandomList.length === 0) {
        alert('全部できた！！\n \nもう一回');
        window.location.reload(); // Reload the entire page
        return;
    }
    currentWord = newRandomList.shift();
    document.getElementById('hiraganaWord').textContent = currentWord;
    document.getElementById('userInput').value = '';
    document.getElementById('userInput').focus();
    wrongCount = 0;
    updateScoreBoard();
    updateProgress();
}


function checkAnswer() {
    const userInput = document.getElementById('userInput').value.trim().toLowerCase();
    const correctReading = hiragana[currentWord];
    const resultElement = document.getElementById('result');

    if (userInput === correctReading) {
        resultElement.textContent = correctReading;
        resultElement.style.color = 'black';
        setTimeout(() => {
            displayNextWord();
            updateProgress();  // Update progress only when moving to the next word correctly
        }, 2400);
        
    } else {
        wrongCount++;
        updateScoreBoard();
        if (wrongCount === 3) {
            resultElement.textContent = correctReading;
            resultElement.style.color = 'green';
            setTimeout(() => {
                displayNextWord();
                updateProgress();  // Update progress only when finally moving past a word
            }, 2400);
           
        } else {
            resultElement.textContent = '⛔';
            // Reinsert the current word into the list at an appropriate position
            let movePosition = (3 - wrongCount) * 3;
            if (newRandomList.length < movePosition) movePosition = newRandomList.length;
            newRandomList.splice(movePosition, 0, currentWord);
        }
    }

    resultElement.style.visibility = 'visible';
    resultElement.style.opacity = '1';
    setTimeout(() => {
        resultElement.style.opacity = '0';
        resultElement.style.visibility = 'hidden';
        // Clear the input for the next attempt or word
        document.getElementById('userInput').value = '';
        document.getElementById('userInput').focus();
    }, 2400);
}

function updateScoreBoard() {
    let scoreboard = '⛔'.repeat(wrongCount > 2 ? 2 : wrongCount);
    document.getElementById('scoreBoard').innerHTML = scoreboard;
}

function updateProgress() {
    const wordsProcessed = originalListLength - newRandomList.length;
    const progressPercent = (wordsProcessed / originalListLength) * 100;
    document.getElementById('progressBar').textContent = `${progressPercent.toFixed(2)}%`;
}

function setupEnterKeySubmit() {
    const input = document.getElementById('userInput');
    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent default form submission
            checkAnswer();
        }
    });
}

