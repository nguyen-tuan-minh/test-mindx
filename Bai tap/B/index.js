x=document.getElementById("number")
result=document.getElementById("result")
button=document.getElementById("button")
button2=document.getElementById("button2")
winner=document.getElementById("winner")
rule=document.getElementById("rule")

count=0
finished=true
result.innerHTML="Press start to begin"
function generate() {
    return Math.floor(Math.random()*99+1)
}
a=button.addEventListener("click",function start() {
    result.innerHTML=""
    winner.innerHTML=""
    rule.innerHTML="Choose a number between 1 and 100 in three times"
    if (finished){
        count=0
        finished=false
        a=generate()
        console.log(a)
        button2.disabled=false
        button2.style.color="black"
        return a
    } else {
        result.innerHTML="Please choose your number"
    }
})
button2.addEventListener("click",function guess() {
    result.style.color="black"
    rule.innerHTML=""
    b=x.value
    if(b<=0 || b>100){
        result.innerHTML="Please choose a number between 1 and 100"
        x.value=1
    }else{
        count+=1
        result.innerHTML=""
        if (count<=3){
            if(b==a){
                result.innerHTML="Congratulation! Press start to play again."
                result.style.color="green"
                winner.innerHTML=a
                button2.disabled=true
                button2.style.color="grey"
                finished=true
            } else {
                if(count<3){
                    result.innerHTML="Try again. " + (3-count)+" try left"
                } else {
                    result.innerHTML="Better luck next time. Winner number"
                    result.style.color="red"
                    winner.innerHTML=a
                    button2.disabled=true
                    button2.style.color="grey"
                    finished=true
                }
            }
        }
    }
})