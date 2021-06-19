if (localStorage.getItem("theme") == "stroked"){
    setTheme("stroked");
}else{
    setTheme("filled");
}

function toggleTheme() {
  if (localStorage.getItem("theme") == "stroked") {
    setTheme("filled");
  } else {
    setTheme("stroked");
  }
}

function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
document.body.className = themeName;
}
