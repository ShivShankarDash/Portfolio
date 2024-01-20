function toggleMenu(){
    const menu  = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}

const roles = ["Software Developer","Program Manager", "Gamer", "ML Rookie", "Persistent Learner"]
let currentIndex = 0;
function changeText(){
  const textContainer = document.getElementById("pro_role");
  textContainer.style.opacity = 0;
  
  setTimeout(()=>{
    textContainer.textContent = roles[currentIndex];
    currentIndex = (currentIndex + 1)%roles.length;
    textContainer.style.opacity = 1;
  },500)


}

setInterval(changeText,1500);