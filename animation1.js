count1 = 0;   // 何個の円を描いたかを示す
count2 = 0;   // 10 個の円の描画を何回行ったかを示す
r = 10;   // 円の半径の初期値
canvas = null;   // キャンバス
ctx = null;   // コンテキスト
timerID = -1;   // タイマー
//
// 開始
//
function start() {
    canvas = document.getElementById('canvas_e');   // キャンバス要素の取得
    ctx = canvas.getContext('2d');   // キャンバスからコンテキストを取得
    timerID = setInterval('draw()', 100);
}
//
// 描画
//
function draw() {
    count1++;
    if (count1 > 10) {
        count2++;
        if (count2 > 4)
            stop();
        else {
            r = 10;
            count1 = 1;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }
    ctx.beginPath();
    ctx.arc(0, 0, r, Math.PI * 1.5, Math.PI * 2, true);
    ctx.stroke();
    r = 1.5 * r;   // r *= 1.5; でも可
}
//
// 停止
//
function stop() {
    clearInterval(timerID);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    timerID = -1;
}
