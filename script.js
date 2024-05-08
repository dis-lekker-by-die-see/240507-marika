
const hiragana = {'あめ': 'ame', 'いぬ': 'inu', 'うま': 'uma', 'えんぴつ': 'enpitsu', 'おおきい': 'ookii', 'かさ': 'kasa', 'きつね': 'kitsune', 'くま': 'kuma', 'けいたい': 'keitai', 'こねこ': 'koneko', 'さかな': 'sakana', 'しまうま': 'shimauma', 'すし': 'sushi', 'せんべい': 'senbei', 'そら': 'sora', 'たまご': 'tamago', 'ちず': 'chizu', 'つき': 'tsuki', 'てがみ': 'tegami', 'とんぼ': 'tonbo', 'なし': 'nashi', 'にわとり': 'niwatori', 'ぬいぐるみ': 'nuigurumi', 'ねっこ': 'nekko', 'のり': 'nori', 'はな': 'hana', 'ひつじ': 'hitsuji', 'ふね': 'fune', 'へび': 'hebi', 'ほし': 'hoshi', 'まど': 'mado', 'みかん': 'mikan', 'むし': 'mushi', 'めがね': 'megane', 'もも': 'momo', 'やま': 'yama', 'ゆき': 'yuki', 'よる': 'yoru', 'らっぱ': 'rappa', 'りんご': 'ringo', 'るすばん': 'rusuban', 'れっしゃ': 'ressha', 'ろうそく': 'rousoku', 'わに': 'wani', 'がっこう': 'gakkou', 'ぎんこう': 'ginkou', 'ぐみ': 'gumi', 'げんかん': 'genkan', 'ごはん': 'gohan', 'ざっし': 'zasshi', 'じてんしゃ': 'jitensha', 'ずぼん': 'zubon', 'ぜんぶ': 'zenbu', 'ぞう': 'zou', 'だいふく': 'daifuku', 'ちぢむ': 'chidimu', 'かんづめ': 'kandume', 'でんしゃ': 'densha', 'どうぐ': 'dougu', 'ばんごう': 'bangou', 'びじん': 'bijin', 'ぶた': 'buta', 'べんとう': 'bentou', 'ぼうし': 'boushi', 'ぱん': 'pan', 'ぴあの': 'piano', 'ぷりぷり': 'puripuri', 'ぺん': 'pen', 'ぽんかん': 'ponkan', 'きゃく': 'kyaku', 'きゅうり': 'kyuuri', 'きょうかしょ': 'kyoukasho', 'しゃしん': 'shashin', 'しゅくだい': 'shukudai', 'しょうがっこう': 'shougakkou', 'ちゃわん': 'chawan', 'ちゅうい': 'chuui', 'ちょうさ': 'chousa', 'にゃんこ': 'nyanko', 'にゅうがく': 'nyuugaku', 'にょうぼう': 'nyoubou', 'ひゃく': 'hyaku', 'ひゅうが': 'hyuuga', 'ひょうげん': 'hyougen', 'みゃくはく': 'myakuhaku', 'みゅうみゅう': 'myuumyuu', 'みょうじ': 'myouji', 'りゃん': 'ryan', 'りゅう': 'ryuu', 'りょうり': 'ryouri', 'ぎゃく': 'gyaku', 'ぎゅうにゅう': 'gyuunyuu', 'ぎょうざ': 'gyouza', 'じゃがいも': 'jagaimo', 'じゅうしょ': 'juusho', 'じょうず': 'jouzu', 'ぢゃ': 'dya', 'ぢゅ': 'dyu', 'ぢょ': 'dyo', 'びゃっこ': 'byakko', 'びゅうびゅう': 'byuubyuu', 'びょういん': 'byouin', 'ぴゃんぴゃん': 'pyanpyan', 'ぴゅうと': 'pyuuto', 'ぴょんぴょん': 'pyonpyon'};
const katakana = {'ヴァ': 'va', 'ヴィ': 'vi', 'ヴ': 'vu', 'ヴォ': 'vo', 'シェープ': 'she-pu', 'ジェットコースター': 'jettoko-suta-', 'チェック': 'chekku', 'ティラミス': 'texiramisu', 'トゥース': 'toxu-su', 'ディナー': 'dexina-', 'ドゥ': 'doxu', 'ファミリーマート': 'famiri-ma-to', 'フィットネス': 'fittonesu', 'カフェ': 'kafe', 'フォーク': 'fo-ku', 'ヴュ': 'vyu', 'ヴョ': 'vyo', 'ツァーリ': 'tsa-ri', 'ツィター': 'tsita-', 'ツェペリ': 'tseperi', 'マリトッツォ': 'maritottso', 'クィーン': 'kwi-n', 'クェスチョン': 'kwesuchon', 'クォーツ': 'kwo-tsu', 'ズィール': 'zuxi-ru', 'デュエット': 'dexyuetto', 'ニャニィニュニェニョン': 'nyanixinyunyenyon', 'ヒェ': 'hye', 'ビェ': 'bye', 'ピュア': 'pyua', 'ピェ': 'pye', 'リェ': 'rye', 'ミェ': 'mye', 'ウィーク': 'wi-ku', 'ウェールズ': 'we-ruzu', 'ウォン': 'uxon', 'イィ': 'ixi', 'イェ': 'ye', 'アメリカ': 'amerika', 'ビール': 'bi-ru', 'コンピューター': 'konpyu-ta-', 'サービス': 'sa-bisu', 'テレビ': 'terebi', 'ドーナツ': 'do-natsu', 'ハンバーガー': 'hanba-ga-', 'ヘリコプター': 'herikoputa-', 'オペラ': 'opera', 'ケーキ': 'ke-ki', 'ゴルフ': 'gorufu', 'ショッピング': 'shoppingu', 'セーター': 'se-ta-', 'ソース': 'so-su', 'タクシー': 'takushi-', 'チョコレート': 'chokore-to', 'ナイフ': 'naifu', 'ニュース': 'nyu-su', 'ヌードル': 'nu-doru', 'ヨット': 'yotto', 'ワイン': 'wain', 'ミュージック': 'myu-jikku', 'メロン': 'meron', 'モニター': 'monita-', 'ラジオ': 'rajio', 'リゾート': 'rizo-to', 'レンズ': 'renzu', 'ロボット': 'robotto', 'バブル': 'baburu', 'ギター': 'gita-', 'ゲスト': 'gesuto', 'ギリシャ': 'girisha', 'チキン': 'chikin', 'ノート': 'no-to', 'ヒルズ': 'hiruzu', 'ホーム': 'ho-mu', 'ゴーヤ': 'go-ya', 'ユニット': 'yunitto', 'ヲ': 'wo', 'ダメ': 'dame', 'ヂ': 'di', 'ヂャ': 'dya', 'ヂュ': 'dyu', 'ヂョ': 'dyo', 'ヅ': 'du', 'デンマーク': 'denma-ku', 'ベートーヴェン': 'be-to-ven', 'パンダ': 'panda', 'ポンド': 'pondo', 'キャンプ': 'kyanpu', 'キュート': 'kyu-to', 'キョ': 'kyo', 'ギャラリー': 'gyarari-', 'ギュット': 'gyutto', 'ギョ': 'gyo', 'ビャンビャン': 'byanbyan', 'ビュッフェ': 'byuffe', 'ビョーン': 'byo-n', 'ピャ': 'pya', 'ピョン': 'pyon', 'チュチャドル': 'chuchadoru', 'チャーシュー': 'cha-shu-', 'ジャージ': 'ja-ji', 'ジョージ': 'jo-ji', 'ジュース': 'ju-su'};
//const hiragana = {'あめ': 'ame', 'いぬ': 'inu', 'うま': 'uma', 'えんぴつ': 'enpitsu', 'おにぎり': 'onigiri'};
//const katakana = {'ニャニィニュニェニョン': 'nyanixinyunyenyon', 'ジェットコースター': 'jettoko-suta-'};

document.addEventListener('DOMContentLoaded', function() {
    const correctPassword = '0124';  
    let enteredPassword = prompt('マリカちゃんのローマ字練習へようこそ！\n\nPassword');

    if (enteredPassword !== correctPassword) {
        window.location.reload(); // Reload the page for invalid input
    } else {

        let choice = prompt('選んでください:\n\n h = ひらがな    ||     k = カタカナ');
        if (choice.toLowerCase() === 'h') {
            document.getElementById('wrapper').style.display = 'flex'; 
            setupGame(hiragana);
        } else if (choice.toLowerCase() === 'k') {
            document.getElementById('wrapper').style.display = 'flex';
            setupGame(katakana); 
        } else {
            window.location.reload(); // Reload the page for invalid input
        }
    }
});

let newRandomList = [];
let originalListLength;
let wrongCount = 0;
let currentWord = '';
let currentMap = {}; 

function setupGame(characterMap) {
    currentMap = characterMap;
    newRandomList = shuffle(Object.keys(characterMap));
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
    document.getElementById('kanaWord').textContent = currentWord;
    document.getElementById('userInput').value = '';
    document.getElementById('userInput').focus();
    wrongCount = 0;
    updateScoreBoard();
    updateProgress();
}

function checkAnswer() {
    const userInput = document.getElementById('userInput').value.trim().toLowerCase();
    const correctReading = currentMap[currentWord];
    const resultElement = document.getElementById('result');

    if (userInput === correctReading) {
        resultElement.textContent = correctReading;
        resultElement.style.color = 'black';
        setTimeout(() => {
            displayNextWord();
            updateProgress();  
        }, 2400);
        
    } else {
        wrongCount++;
        updateScoreBoard();
        if (wrongCount === 3) {
            resultElement.textContent = correctReading;
            resultElement.style.color = 'green';
            setTimeout(() => {
                displayNextWord();
                updateProgress();  
            }, 2400);
           
        } else {
            resultElement.textContent = '⛔';
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
            event.preventDefault(); 
            checkAnswer();
        }
    });
}

