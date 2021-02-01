div1=document.createElement('div')
button=document.createElement('button')
button.innerText="Click here"
button.onclick=random_bg_color;

button.style.position="absolute"
button.style.top="50%"
button.style.left="47%"
button.style.fontSize= '40px'
button.style.padding= '15px 32px'
button.style.borderRadius="10%"
div1.append(button)
document.body.append(div1)

function random_bg_color() {
var x = Math.floor(Math.random() * 256);
var y = Math.floor(Math.random() * 256);
var z = Math.floor(Math.random() * 256);
var bgColor = "rgb(" + x + "," + y + "," + z + ")";

document.body.style.background = bgColor;
}