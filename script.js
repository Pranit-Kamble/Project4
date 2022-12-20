let wakeup=document.getElementById("wakeup")
let lunch=document.getElementById("lunch")
let nap=document.getElementById("nap")
let night=document.getElementById("night")
let inputwakeup=document.getElementById("inputwakeup")
let inputlunch=document.getElementById("inputlunch")
let inputnap=document.getElementById("inputnap")
let inputnight=document.getElementById("inputnight")
let setalarm=document.getElementById("setalarm")
let hr=document.getElementById("hr");
let min=document.getElementById("min");
let sec=document.getElementById("sec");
let ampm=document.getElementById("am")
let img=document.getElementById("img")
let text1=document.getElementById("text1")
let text2=document.getElementById("text2")


// To set wakeup time
wakeup.addEventListener("change",function(event){
        // console.log(event.target.value)
        let wake=(event.target.selectedOptions[0].innerText)
        // console.log(wake)
        setalarm.addEventListener("click",function(){
        inputwakeup.innerText=wake
        })
    })

// To set lunch time
lunch.addEventListener("change",function(event){
    // console.log(event.target.value)
    let lunchtext=(event.target.selectedOptions[0].innerText)
    // console.log(wake)
    setalarm.addEventListener("click",function(){
    inputlunch.innerText=lunchtext
})
})

// Set nap time
nap.addEventListener("change",function(event){
    // console.log(event.target.value)
    let napptext=(event.target.selectedOptions[0].innerText)
    // console.log(wake)
    setalarm.addEventListener("click",function(){
    inputnap.innerText=napptext
})
})

// Set night time
night.addEventListener("change",function(event){
    // console.log(event.target.value)
    let nighttext=(event.target.selectedOptions[0].innerText)
    // console.log(wake)
    setalarm.addEventListener("click",function(){
    inputnight.innerText=nighttext
})
})

// Change Set Alarm Text and css property
setalarm.addEventListener("mouseover",function(){
    setalarm.innerText="It's Party Time"
    setalarm.style.color="white"
})
setalarm.addEventListener("mouseleave",function(){
    setalarm.innerText="Set Alarm"
})


// Clock function
function timer(){
    let date=new Date();
    // console.log(date)
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    // console.log(hours,minutes,seconds)

    hr.innerText=hours
    min.innerText=minutes
    sec.innerText=seconds

    // For AM PM
    if(hr.innerText>12){
        ampm.innerText="PM"
    }
    else{
        ampm.innerText="AM"
    }

    // For Text & image Change

    if(6<=hr.innerText && 10>=hr.innerText){
        text1.innerText="GOOD MORNING!! WAKE UP !!"
        text2.innerText="GRAB SOME HEALTHY BREAKFAST!!!"
        text2.style.paddingTop="10px"
        text2.style.lineHeight="40px"
        img.style.backgroundImage="url('Component\ 30\ –\ 1.svg')"
    }
    else if(12<=hr.innerText && 15>=hr.innerText){
        text1.innerText="GOOD AFTERNOON !! TAKE SOME SLEEP"
        text2.innerText="Let's Have Some Lunch"
        img.style.backgroundImage="url('Afternoon.svg')"
    }
    else if(16<=hr.innerText && 19>=hr.innerText){
        text1.innerText="GOOD EVENING !!"
        text2.style.paddingTop="10px"
        text2.style.lineHeight="40px"
        text2.innerText="STOP YAWNING,GET SOME TEA.. Its just evening!"
        img.style.backgroundImage="url('tea.avif')"
        img.style.backgroundSize="cover"
    }
    else if(20<=hr.innerText || 1<=hr.innerText  ){
        text1.innerText="GOOD NIGHT !!"
        text2.style.paddingTop="10px"
        text2.style.lineHeight="40px"
        text2.innerText="CLOSE YOUR EYES AND GO TO SLEEP"
        img.style.backgroundImage="url('night.svg')"
    }
}

// To start clock without button and set 1sec interval time
setInterval(()=>{
    timer()
},1000)

