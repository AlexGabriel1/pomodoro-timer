const $temporizador = document.querySelector(".text");
const $container = document.querySelector(".container");
const $title = document.querySelector(".title");

const worktime = 1500;
const breaktime = 300;

let timer = worktime;   
let tempo = conversor(timer);
$temporizador.innerText = `${tempo}`; 
let pomodoro = setInterval(() => {
    let tempo = conversor(timer);
    timer--;
    $temporizador.innerText = `${tempo}`;   
}, 1000); 
clearInterval(pomodoro);

function conversor(tempoAtual) {
    tempoAtual = Number(tempoAtual);
    let m = Math.floor(tempoAtual % 3600 / 60);
    let s = Math.floor(tempoAtual % 3600 % 60);
    if (s<10 && m>10) {
        return m+':0'+s
    }else if (m<10 && s>9){
        return '0'+m+':'+s
    }else if (m<10 && s<10) {
        return '0'+m+':0'+s
    }else if (m<10 && s>10) {
        return '0'+m+':'+s
    }else if (m>10 && s<10) {
        return m+':0'+s
    }
    return m+':'+s;
}

function reset(){
    timer = worktime;
    clearInterval(pomodoro);
    let tempo = conversor(timer);
    $temporizador.innerText = `${tempo}`;
}

function pause(){
    clearInterval(pomodoro);
}

function play(){
    clearInterval(pomodoro);
    $title.innerText = 'Work Time';
    pomodoro = setInterval(() => {
        let tempo = conversor(timer);
        timer--;
        $temporizador.innerText = `${tempo}`;
        if (timer<1) {
            descansar();
        }   
    }, 1000);  
}

function descansar(){
    clearInterval(pomodoro);
    timer = breaktime;
    $title.innerText = 'Break Time';
    pomodoro = setInterval(() => {
        let tempo = conversor(timer);
        timer--;
        $temporizador.innerText = `${tempo}`;
            if (timer<1) {
                play();
                timer=worktime;
            } 
    }, 1000);
}


    
    

