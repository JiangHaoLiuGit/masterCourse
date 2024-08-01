var h1 = document.getElementById("master")
var btn = document.getElementById("btn")
// 这是一个非常神奇的死循环函数,怎么神奇呢?因为他优先级很高,会让浏览器直接宕机的函数,在你看在浏览器宕机3秒,浏览器:其实我在执行任务,不是宕机!!!
function delay(duration){
    var start = new Date()
    while(new Date() - start < duration){}
}

btn.onclick = function(){
    // 为什么会让浏览器先宕机3秒?
    h1.innerHTML = "江浩真帅"
    delay(3000)
}


// 示例一

// setTimeout(()=>{
//     console.log(1)
// },0)

// delay(2000)

// console.log(2)



// 这个例子其实能证明浏览器其实有三个任务队列,能证明存在交互队列,并且证明交互队列的优先级比宏任务优先级高
// w3c明确说了三个
// 微任务队列(最高)(promise)
// 交互任务队列(高)(用户点击事件)
// 宏任务队列(中)(setTimeout)


let interaction = document.getElementById("interaction")
let begin = document.getElementById("begin")
function addDelay(){
    console.log("添加延时队列")
    setTimeout(()=>{
        console.log("延时队列执行")
    },100)
    delay(4000);
}


function addInter(){
    console.log("网络队列")
    fetch('').then((res)=>{
        console.log("网络队列执行");
    });
    delay(2000);
}

function addInteraction(){
    console.log("添加交互队列")
    interaction.onclick =  ()=>{
        console.log("交互队列执行")
    }
    delay(4000);
}

begin.onclick = () =>{
    addDelay();
    addInteraction();
    console.log("============")
}

