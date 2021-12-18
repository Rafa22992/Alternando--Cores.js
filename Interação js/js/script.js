var r = window.document.getElementById('botao-vm')
var d_r = window.document.getElementById('vermelha')
r.addEventListener('mouseenter',r_clicar)
r.addEventListener('mouseout',r_tirar)
function r_clicar(){
    r.innerHTML = 'PURPLE'
    r.style.background = 'rgb(133, 69, 111)';
    d_r.style.background ='rgb(124, 26, 124)';
}
function r_tirar(){
    r.innerHTML = 'RED'
    r.style.background ='rgb(173, 31, 31)';
    d_r.style.background = 'rgb(172, 50, 50)';
}
var b = window.document.getElementById('botao-r')
var d_b = window.document.getElementById ('roxa')
b.addEventListener('mouseenter',b_clicar)
b.addEventListener('mouseout',b_tirar)

function b_clicar(){
    b.innerHTML = 'RED'
    b.style.background ='rgb(173, 31, 31)';
    d_b.style.background = 'rgb(172, 50, 50)';
}
function b_tirar(){
    b.innerHTML = 'PURPLE';
    b.style.background = 'rgb(133, 69, 111)';
    d_b.style.background = 'rgb(124, 26, 124)';
     
}
var g = window.document.getElementById('botao-v')
var d_g = window.document.getElementById('verde')
g.addEventListener('mouseenter',g_clicar)
g.addEventListener('mouseout',g_tirar)

function g_clicar(){
    g.innerHTML = 'YELLOW'
    g.style.background = 'rgb(219, 216, 23)';
    d_g.style.background = 'rgb(209, 209, 13)';
}
function g_tirar(){
    g.innerHTML = 'GREEN'
    g.style.background = 'rgb(46, 153, 46)';
    d_g.style.background = 'rgb(49, 177, 49)';
}
var y = window.document.getElementById('botao-a')
var d_y = window.document.getElementById('amarelo')
y.addEventListener('mouseenter',y_clicar)
y.addEventListener('mouseout',y_tirar)

function y_clicar(){
    y.innerHTML = 'GREEN'
    y.style.background = 'rgb(46, 153, 46)';
    d_y.style.background = 'rgb(49, 177, 49)';
}
function y_tirar(){
    y.innerHTML = 'YELLOW'
    y.style.background = 'rgb(219, 216, 23)';
    d_y.style.background = 'rgb(209, 209, 13)';
}