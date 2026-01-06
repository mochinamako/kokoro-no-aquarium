console.log('hello');

// アイテムをマウスで掴んでスクロールさせられる
const container = document.getElementById('scrollContainer');

let isDown = false;
let startX;
let scrollLeft;

container.addEventListener('mousedown', (e) => {
    isDown = true;
    container.classList.add('active'); // クラスを追加してcssで見た目を一括管理！
    e.preventDefault(); // ブラウザ標準のドラッグ動作を防止
    startX = e.pageX - container.offsetLeft; // クリックした位置のX座標
    scrollLeft = container.scrollLeft; // 現在のスクロール位置を記憶
});

//マウスを離した瞬間（ドラッグ終了）
window.addEventListener('mouseup', () => {
    container.classList.remove('active'); // 「パッ」と開いた手に戻す
});
//上のコメントアウトしてるコードと合わせて使ってみても、クリックしても開いた状態から何も変わらなかった。別のjsファイル使って試さなきゃかも。

container.addEventListener('mouseleave', () => {
    isDown = false;
});

container.addEventListener('mouseup', () => {
    isDown = false;
});

container.addEventListener('mousemove', (e) => {
    if (!isDown) return; // マウスを押していない時は何もしない
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    // 動かした距離（2を入れたら2倍速、3を入れたら3倍速で動く）
    const walk = (x - startX) * 1; // 数字を大きくするとスクロールが速くなる
    container.scrollLeft = scrollLeft - walk;
});
