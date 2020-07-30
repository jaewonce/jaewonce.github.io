var inputBar = document.getElementById("comment-input");
var rootDiv = document.getElementById("comments");
var btn = document.getElementById("submit");
var mainCommentCount = document.getElementById('count');
//全体のコメントの数. 

//時間設定
function generateTime() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var wDate = date.getDate();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var time = year + '-' + month + '-' + wDate + ' ' + hour + ':' + min + ':' + sec;
    return time;
}

//名前は匿名性保証保障 
function generateUserName() {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var makeUsername = '';
    for (let i = 0; i < 4; i++) {
        let index = Math.floor(Math.random(10) * alphabet.length);
        makeUsername += alphabet[index];
    }
    for (let j = 0; j < 4; j++) {
        makeUsername += "*";
    }
    return makeUsername;
}



function deleteComments(event) {
    var btn = event.target;
    var list = btn.parentNode.parentNode;
    //commentList 
    rootDiv.removeChild(list);

    if (mainCommentCount.innerHTML <= '0') {
        mainCommentCount.innerHTML = 0;
    } else {
        mainCommentCount.innerHTML--;
    }
}
//コメントを見せる 
function showComment(comment) {
    var userName = document.createElement('div');
    var inputValue = document.createElement('span');
    var showTime = document.createElement('div');
    
    var countSpan = document.createElement('span');

    var commentList = document.createElement('div');

    //削除ボタン作成
    var delBtn = document.createElement('button');
    delBtn.className = "deleteComment";
    delBtn.innerHTML = "削除";
    commentList.className = "eachComment";
    userName.className = "name";
    inputValue.className = "inputValue";
    showTime.className = "time";

    //名前を呼び出し
    userName.innerHTML = generateUserName();
    userName.appendChild(delBtn);
    //入力値を渡す
    inputValue.innerText = comment;
    //時間 
    showTime.innerHTML = generateTime();
    countSpan.innerHTML = 0;



    commentList.appendChild(userName);
    commentList.appendChild(inputValue);
    commentList.appendChild(showTime);

    rootDiv.prepend(commentList);

    delBtn.addEventListener("click", deleteComments);
    console.dir(rootDiv);
}
//入力確認または入力値伝達
function pressbtn() {

    var currentVal = inputBar.value;
    if (currentVal.length == 0) {
        alert("入力してから登録できます。");
    } else {
        showComment(currentVal);
        mainCommentCount.innerHTML++;
        inputBar.value = '';
    }
}
