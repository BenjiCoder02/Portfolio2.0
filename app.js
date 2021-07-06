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

let darkMode = localStorage.getItem("darkMode")

const enableDarkMode = () => {
    body.classList.add("background-color-change-dark")
    localStorage.setItem("darkMode", "enabled")
}

const disableDarkMode = () => {
    body.classList.remove("background-color-change-dark")
    localStorage.setItem("darkMode", null)
}

if (darkMode == "enabled"){
    enableDarkMode()
}

redScheme.addEventListener("click", function(){
    darkMode = localStorage.getItem("darkMode")

    if (darkMode !== "enabled"){
        enableDarkMode()
    }
    else {
        disableDarkMode()
    }

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

