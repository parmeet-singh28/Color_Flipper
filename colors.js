const color = document.getElementById('color')
const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
let bg = '#f1f5f8'
const btn = document.getElementById('btn');
btn.addEventListener('pointerover',function () {
    btn.style.backgroundColor = 'black';
    btn.style.color = 'white';
});
btn.addEventListener('mouseleave',function () {
    btn.style.backgroundColor = bg;
    btn.style.color = 'black';
})


function getRandomNum() {
    return Math.floor(Math.random()*hex.length);
}
function changeColor() {
    val = '#';
    for (let i=0;i<6;i++) {
        val += hex[getRandomNum()]
    }
    color.textContent = val;
    document.body.style.backgroundColor = val;
    bg = val;
}
