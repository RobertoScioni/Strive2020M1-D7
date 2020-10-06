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
        ps=document.querySelectorAll("div > p")
        for (let i = 0; i < ps.length; i++) {
            ps[i].innerText="welcome to the jungle"
        }
    }

//Exercise 5
    
//excercise 1
const load=()=>{
    alert("WELCOME!!!")
    document.querySelector("H1").addEventListener("mouseenter",addClassToTitle)
    document.querySelector("H1").addEventListener("mouseleave",removeClassFromTitle)
}