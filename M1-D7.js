//Exercise 2
    const changeTitle = (newTitle)=> {
        document.querySelector("title").innerText="A wizard is never late, nor is he early, he arrives precisely when he means to."
    };
//Exercise 3 a
    const addClassToTitle=()=>{
        document.querySelector("H1").classList.add("red-color")
    };
//Exercise 3 b
    const removeClassFromTitle=()=>{
        document.querySelector("H1").classList.remove("red-color")
    }
 
//exercise 4
    const changeP=()=>{
        let ps=document.querySelectorAll("div > p")
        for (let i = 0; i < ps.length; i++) {
            ps[i].innerText="welcome to the jungle"
        }
    }

//Exercise 5
    const changeListTitle=()=>{
        document.querySelector("#listTitle").innerText=document.querySelector("#newTitle").value
    }
//Exercise 6
    const addToTheSecond=()=>{
        let message=document.createTextNode(document.querySelector("#newElement").value)
        let nuovo= document.createElement("li")
        console.log(nuovo)
        console.log(message)
        nuovo.appendChild(message)
        console.log(nuovo)
        document.querySelector("#secondList").appendChild(nuovo)
        
    }
//Exercise 7
    const firstUlDisappear=()=>{
        document.querySelector("ul").style.display="none"
    }
//exercise 8
    const paintItGreen=()=>{
        list=document.querySelectorAll("ul")
        for (let i = 0; i < list.length; i++) {
            list[i].style.background="green"
        }
    }
//exercise 9
    const zoomOn=(node)=>{
        node.srcElement.style.fontSize="xxx-large"
    }
    const zoomOff=(node)=>{
        node.srcElement.style.fontSize=""
    }
    const makeThemMagnifiable=()=>{
        cells=document.querySelectorAll("td,bestPhone")
        for (let i = 0; i < cells.length; i++) {
            cells[i].id="cell"+i
            
            cells[i].addEventListener("mouseenter",zoomOn)
            cells[i].addEventListener("mouseleave",zoomOff)
        }
    }

//excercise 10
 const toggleShowImages=()=>{
     pics=document.querySelectorAll("img")
     let visibility=pics[0].style.display==="none"?"":"none"
     console.log(visibility)
     for (let i = 0; i < pics.length; i++) {
        pics[i].style.display=visibility       
     }
 }
//excercise 11
    const makeItClickable=()=>{
        document.querySelector("h1").addEventListener("click",rndColor)
    }
    const rndColor=(e)=>{
        e.srcElement.style.color=Math.round(Math.random()*16777215).toString(16)
    }
//excercise 1
const load=()=>{
   // alert("WELCOME!!!")
    makeThemMagnifiable()
    makeItClickable()
    document.querySelector("H1").addEventListener("mouseenter",addClassToTitle)
    document.querySelector("H1").addEventListener("mouseleave",removeClassFromTitle)
}