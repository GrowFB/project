
(function(){
const spanel = document.querySelector("main h2 span");
const txtArr = ['Web Publisher', 'Front-End Developer', 'Web UI Designer', 'UX Designer' ,'Back-End Developer'];

let index = 0;
let currentTxt = txtArr[index].split("");
// 문자열 단위로 배열을 쪼개기 위한 split
console.log(currentTxt)

function writeTxt(){
  spanel.textContent += currentTxt.shift();
  if(currentTxt.length !==0){
  setTimeout(writeTxt, Math.floor(Math.random()*100));
}else{
  currentTxt = spanel.textContent.split("");
  setTimeout(deleteTxt,3000);
}
//여기서 1000은 1초
}

function deleteTxt(){
  currentTxt.pop();
  spanel.textContent = currentTxt.join("");
  if(currentTxt.length !==0){
    setTimeout(deleteTxt, Math.floor(Math.random()*100));
  }else{
    index = (index + 1) % txtArr.length;
    currentTxt = txtArr[index].split("");
    writeTxt();
  }
 

}

writeTxt();
}
)()

//즉시 실행함수를 사용함으로 써 위의 코드가 최고 1회 사용되고 메모리 상에서 사라지게 됨

// 수직 스크롤이 발생하면 헤더 태그에 active 태그 추가 및 삭제


const headel = document.querySelector("header");
window.addEventListener("scroll", function(){
  requestAnimationFrame(scrollCheck);
//윈도우에 스크롤이 이벤트가 발생하면 스크롤체크라느 함수를 실행하라는 뜻
});

function scrollCheck(){
  const browserScrollY = window.scrollY ? window.scrollY : window.pageXOffset;
  if(browserScrollY >0){
    headel.classList.add('active');
  }else{
    headel.classList.remove('active');
  }
}



const animationMove = function(selector){
  const target = document.querySelector(selector);
  const browserScrollY = window.scrollY ; 
  const targetscrollY = target.getBoundingClientRect().top + browserScrollY;
  window.scrollTo({top:targetscrollY, behavior:'smooth'});
}


const scrollMoveel = document.querySelectorAll("[data-animation-scroll='true']");
console.log(scrollMoveel);
for(let i = 0 ; i<scrollMoveel.length; i++){
  scrollMoveel[i].addEventListener("click", function(e){
  animationMove(this.dataset.target);
  });
}



