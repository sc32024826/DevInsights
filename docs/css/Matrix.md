<canvas id="canvas"/>



<script setup>
import { onMounted } from 'vue'
let ctx, cvs, columnCount, charIndex
const fontSize = 12
onMounted(() => {
    cvs = document.querySelector('#canvas')
    ctx = cvs.getContext('2d')
    cvs.width = 1000
    cvs.height = 800
    ctx.font = `${fontSize}px Roboto Mono`
    columnCount = Math.floor(cvs.width / fontSize)
    charIndex = new Array(columnCount).fill(0)
    draw()
    setInterval(draw, 50);
})


function getRandomChar() {
    const str = '0123456789abcdefghijklmnopqrstuvwxyz'
    return str[Math.floor(Math.random() * str.length)]
}
function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
    ctx.fillRect(0, 0, cvs.width, cvs.height)
    ctx.fillStyle = '#6BE445'
    ctx.textBaseline = 'top'
    for (let i = 0; i < columnCount; i++) {
        const text = getRandomChar()
        const x = i * fontSize
        const y = charIndex[i] * fontSize
        ctx.fillText(text, x, y)
        if(y > cvs.height && Math.random() > 0.95){
            charIndex[i] = 0
        }else{
            charIndex[i] ++
        }
    }

}

</script>
