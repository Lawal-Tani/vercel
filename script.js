let min = document.getElementById('min')
let sec = document.getElementById('sec')
let holder = document.getElementById('holder')

let mins = 30
let time = mins * 60


function colorRan() {
    
    let colors = [
        'red' , 'green' ,'blue' , 'blue' , 'blueviolet'
    ]
    let color = colors[Math.floor(Math.random() * colors.length)]
    console.log(color);
}
function countDown() {
    let sMin = Math.floor(time/60) 
    let sSec = time % 60
    
    min.textContent = sMin
    sec.textContent = sSec
   time--

   if (sec.textContent >= 40 && sec.textContent <= 50) {
    holder.style.backgroundColor = `${color}`
   }
   else if (sec.textContent >= 30 && sec.textContent <= 39) {
    holder.style.backgroundColor = `${color}`
   }
   else if (sec.textContent >= 20 && sec.textContent <= 30) {
    holder.style.backgroundColor = `${color}`
   }
   else{
    holder.style.backgroundColor = ''
   }
}

setInterval(countDown ,1000)