const load = () => {
    let logo = document.querySelector(".BK")
    logo.classList.toggle("BK-spin")

 
      
     

  


    setTimeout(function(){
        let footer = document.querySelector("footer")
        footer.classList.toggle("hidden-footer")
    }, 2000)
}

let body = document.querySelector("body")
let redScheme = document.querySelector("#red")





redScheme.addEventListener("click", function(){
    let choice = 0
    let moonIcon = document.querySelector("#red i")
    moonIcon.classList.toggle("fa-sun")
    
    let colorArray = ["background-color-change-red", "background-color-change-dark", "background-color-change-blue"]
    

    if (choice > colorArray.length - 1){
        choice === 0
    }
    else {
        choice++
        body.classList.toggle(colorArray[choice])
    }
    
    
    
    
    
    
})
