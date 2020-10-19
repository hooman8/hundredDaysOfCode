const bttn = document.querySelector('button');
bttn.addEventListener("click", bgcolor);
colorArr = ["back", "blue", "red", "yellow"];
function bgcolor(event){
  let randNumber = Math.floor(Math.random() * colorArr.length);
  document.body.style.backgroundColor = colorArr[randNumber];
  console.log(colorArr[randNumber]);
}