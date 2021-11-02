let output = document.querySelector('.output');
let textInput = document.querySelector('.inputText')
let choosePic = false
let photo = new Image();
let h = 600;
let w = 400;
document.querySelector('.rangNum').innerHTML =  document.querySelector('.range').value+' px'

document.querySelector('.go').addEventListener('click',goHandler)

function goHandler (){
  
    let inputText = document.querySelector('.inputText').value;
    inputText = inputText.trim()
    
    if(!choosePic) {
        alert('You should choose photo from your device!')
        document.querySelector('.inputPic').focus()
        return;
    }
    if(inputText.length<1) {
        alert('You should enter a text')
        textInput.value = ''
        textInput.focus()
        return;
    }

    if(!URL.createObjectURL(document.querySelector('.inputPic').files[0])){
        return alert('not ok')
    }
    let range = document.querySelector('.range').value
    output.style.fontSize = `${range}px`

    // output.classList.add('addBG')
    let num = Math.floor(h*w*2.5 / (range * inputText.length/5)) ;
    for (let i = 0; i <= num; i++) {
        inputText += inputText
    
        if(inputText.length >num){
            output.innerHTML = inputText
            output.classList.add('build')
                    return ;};;
            }
    
}
document.querySelector('.range').addEventListener('change',()=>{
    let range = document.querySelector('.range').value
    document.querySelector('.rangNum').textContent = range+' px'
    let photo = new Image()
    photo.src = 'https://rumiani.github.io/rumiani.png'
    let h = photo.height
    let w = photo.width
    output.style.fontSize = `${range}px`
    console.log(range);
    console.log(output.innerHTML.length);
    goHandler()
})

document.querySelector('.inputPic').addEventListener('change',()=>{
    let src = URL.createObjectURL(document.querySelector('.inputPic').files[0]);
    output.style.background = `url(${src}) 100% 100% / contain  no-repeat`
document.querySelector('.inputPic').style.background = 'green'
choosePic = true
})
document.body.addEventListener('click',(e)=>{
    if(e.target.classList.contains('inputText')){
        textInput.style.height = '200px'
    }
    else{
        textInput.style.height = '20px'
    }
})