var imgs = ['img/christmas.png', 'img/clown.png', 'img/girl.png', 'img/lion.png', 'img/bird.png', 'img/bear.png'];
var rightAudio = new Audio('img/right.wav');
var wrongAudio = new Audio('img/wrong.wav');
var main = document.getElementById('main');
var allDivs = document.getElementsByTagName('div');
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
function drawImgs() {
    shuffleArray(imgs)
    for (var i = 0; i < imgs.length; i++) {
        main.innerHTML += '<div class="card"><img src="' + imgs[i] + '"></div>';
    }
}
// function drawImgsre() {
//     for (var i = imgs.length - 1; i >= 0; i--) {
//         main.innerHTML += '<div class="card"><img src="' + imgs[i] + '"></div>';
//     }
// }
drawImgs();
drawImgs();
// drawImgsre();
var flg = true;
var arr = [];
var matchedPairs = 0;
for (var i = 0; i < allDivs.length; i++) {
    allDivs[i].addEventListener('click', function () {
        //console.log(this);
        if (flg) {
            this.firstChild.style.opacity = '1';
            if (arr.length == 0) {
                arr[0] = this;
            } else if (arr.length == 1) {
                arr[1] = this;
            }
            if (arr.length == 2) {
                flg = false;
                setTimeout(checkImg, 200);
            }
        } else {
            return;
        }

    })
    function checkImg() {
        if (arr[0].firstChild.getAttribute('src') == arr[1].firstChild.getAttribute('src')) {
            //alert('okay');
            rightAudio.play();
            matchedPairs++;
            if(matchedPairs==imgs.length)
            {
                alert("Congratulations! You finished the game!");
            }
        } else {
            arr[0].firstChild.style.opacity = 0;
            arr[1].firstChild.style.opacity = 0;
            wrongAudio.play();
        }
        arr = [];
        flg = true;
    }
}