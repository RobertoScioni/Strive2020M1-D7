send=()=>{
    message=document.createTextNode(document.querySelector("#message").value)
    document.querySelector("#message").value=""
    line=document.createElement("p")
    line.appendChild(message)
    document.querySelector("#chat").appendChild(line)
}

eEgg=()=>{
    document.querySelector("h1").innerText="One Store to rule them all, One Store to find them, One Store to bring them all, and in the darkness bind them"    
}

pgBg=(color)=>{
    document.querySelector("body").style.backgroundColor=color
}

maskAddress=()=>{
    if (document.querySelector("#MAP")!==null) {
        document.querySelector("address").innerText="4626  Stonepot Road,Belle Mead"
        document.querySelector("#MAP").remove()        
    }

}