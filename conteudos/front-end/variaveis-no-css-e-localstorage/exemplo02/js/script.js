const root = document.querySelector(":root");
const toggleButton = document.querySelector("button");

toggleButton.addEventListener("click", () => {
  const currentBgColor = root.style.getPropertyValue("--bg-color");

  if (!currentBgColor || currentBgColor === 'white'){
    root.style.setProperty('--bg-color', 'black');
    root.style.setProperty('--text-color', 'white');
    return
  }  

  root.style.setProperty('--bg-color', 'white');
    root.style.setProperty('--text-color', 'black');

});
