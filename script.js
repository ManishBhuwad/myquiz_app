const questions = [
    {
        que: "what is the capital of India",
        a: "delhi",
        b: "gujrat",
        c: "Mumbai",
        d: "Hyderabad",
        ans: "a"
    },
    {
        que: "‘मला हा डोगरं चढवतो.’ या वाक्याचा प्रयोग ओळखा",
        a: "भावे",
        b: "कर्मणी",
        c: "कर्तरी",
        d: "नवीन कर्मणी",
        ans: "b"
    },
    {
        que: "सरासरी काढा 98 65 78 98 86 & 79 ",
        a: "98",
        b: "84",
        c: "56",
        d: "85",
        ans: "b"
    },
    {
        que: `Choose the option that best punctuates the given sentence:
            What are you saying, Meeta said to her friend Dolly.`,
        a: "what are you saying? Meeta said to her friend Dolly",
        b: "“What are you saying,” Meeta said to her friend Dolly",
        c: "“ What are you saying, “ Meeta said to her friend, Doll",
        d: "“What are you saying?” Meeta said to her friend, Dolly.",
        ans: "d"
    },
    {
        que: "भारतातील पहिली कृत्रिम बुद्धिमत्ता संस्था येथे स्थापन केली गेली आहे",
        a: "पुणे",
        b: "हैदराबाद",
        c: "मुंबई",
        d: "चेन्नई",
        ans: "c"
    },
    {
        que: "मालिकेतून वगळलेली संख्या शोधा 224, 195, 168, ______, 120",
        a: "144",
        b: "145",
        c: "143",
        d: "146",
        ans: "c"
    },
    {
        que: "जर 100 लोक 100 दिवसात 100 कामे करतात, तर 1 माणूस 1 काम किती दिवसात करू शकतो?",
        a: "1 दिवस",
        b: "100 दिवस",
        c: "50 दिवस",
        d: "10 दिवस",
        ans: "b"
    },
    {
        que: "मितभाषी म्हणजे काय?",
        a: "कमी भाषा बोलणारा",
        b: "मोजके बोलणारा",
        c: "भाष्य करणारा",
        d: "अजिबात न बोलणारा",
        ans: "b"
    },
    {
        que: "The couple doesn't have_______money but they are extremely happy with each other",
        a: "much",
        b: "little",
        c: "plenty",
        d: "many",
        ans: "a"
    },
    
    {
        que: "what is fulform of the HTML",
        a: "Hypertext Machine Language",
        b: "High Machine Language",
        c: "Hyper text markup language",
        d: "hypertext motion language",
        ans: "c"
    },
    
    

]

let ques = document.querySelector(".ques");
let inputs = document.querySelectorAll('input')
let para = document.querySelectorAll('p')
let popup = document.querySelector('.popup')
let okbtn = document.querySelector('#okbtn');
let container = document.querySelector('.container')
let scorediv = document.querySelector('.score');
let btnclose = document.querySelector('#btnclose')
let music = document.createElement('audio');

console.log(scorediv)
// let opta = document.querySelector('.opta');
// let optb = document.querySelector('.optb');
// let optc = document.querySelector('.optc');
// let optd = document.querySelector('.optd');

let index = 0;
let right=0;
let total = 0;



function generateQuestion(){
    inputs.forEach((e)=>{
        e.checked=false
    })
    ques.innerText=`${index+1}] ${questions[index].que}`
    para[0].textContent = `${questions[index].a}`
    para[1].textContent = `${questions[index].b}`
    para[2].textContent = `${questions[index].c}`
    para[3].textContent = `${questions[index].d}`
    
}

function checkAnswer(){
  const answer = getAnswer()
  if(answer==questions[index].ans){
    right++;
    winnerPopUp();
    
  }else{
    looserPopUp()
  }
  total= index+1
  index++
}

function getAnswer(){
    let ans;
    inputs.forEach((e)=>{
        if(e.checked){
            ans = e.value
        }
    })
    return ans
}





function winnerPopUp(){
    const msg = document.createElement('h2')
    const image = document.createElement("img")
    msg.innerText="Congratulations 🥳 Correct answer"
    popup.appendChild(msg)
    popup.appendChild(image)
    image.classList="popImg"
    image.setAttribute('src',"images/winner_sticker.webp")
    popup.classList.add('togglePop');
    container.style.visibility="hidden"
    music.setAttribute("src","images/upbeat-ukulele-fun-pop-kids-logo-160610.mp3")
    music.play();

    okbtn.addEventListener('click',function(){
        console.log("btn is clicked")
        popup.classList.remove('togglePop');
        music.pause()
        music.removeAttribute('src');

        if(index==questions.length){
          displayScore()
        }else{
            msg.parentNode.removeChild(msg)
            image.parentNode.removeChild(image) 
            container.style.visibility="visible"
            generateQuestion();
        }
       
    })
}


function looserPopUp(){
    let answer = questions[index].ans
    const msg = document.createElement('h2')
    const msg2 = document.createElement('h2')
    const image = document.createElement("img")
    msg.innerText="Oppps 🤨💀 Wrong answer "
    msg2.innerText=`correct ans: ${questions[index][answer]}`
    popup.appendChild(msg2)
    popup.appendChild(msg)
    popup.appendChild(image)
    image.classList="popImg"
    image.setAttribute('src',"images/baby-angry.gif")
    popup.classList.add('togglePop')
    container.style.visibility="hidden"
    // music.setAttribute('src',"")
    
    okbtn.addEventListener('click',function(){
        console.log("btn is clicked")
        popup.classList.remove('togglePop');

        if(index==questions.length){
           displayScore();
        }else{
            msg.parentNode.removeChild(msg)
            msg2.parentNode.removeChild(msg2)
            image.parentNode.removeChild(image)
            container.style.visibility="visible"
            generateQuestion();
        }
        
    })
}


function displayScore(){
    let a = document.querySelector('.resultdiv').lastElementChild   
    a.innerText=`योग्य उत्तरे: ${right}/${total}`

    scorediv.style.transform=`translate(0, 0%) scale(1)`
    btnclose.addEventListener('click',function(){
        scorediv.style.transform=`translate(0, 100%) scale(0)`
    })
}




generateQuestion();







