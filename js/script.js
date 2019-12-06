window.onload = () => {
const Slider = function(pages, pagination) {
    let slides = [],
        btns = [],
        count = 0,
        current = 0,
        touchstart = 0,
        animation_state = false;

    const init = () => {
    slides = pages.children;
    count = slides.length;
    for(let i = 0; i < count; i++) {
        slides[i].style.bottom = -(i * 100) + '%';
        let btn = document.createElement('li');
        btn.dataset.slide = i;
        btn.addEventListener('click', btnClick)
        btns.push(btn);
        pagination.appendChild(btn);
    }
    btns[0].classList.add('active');
    }

    const gotoNum = (index) => {
    if((index != current) && !animation_state) {
        animation_state = true;
        setTimeout(() => animation_state = false, 500);
        btns[current].classList.remove('active');
        current = index;
        btns[current].classList.add('active');
        for(let i = 0; i < count; i++) {
        slides[i].style.bottom = (current - i) * 100 + '%';
        }
    }
    }

    const gotoNext = () => current < count - 1 ? gotoNum(current + 1) : false;
    const gotoPrev = () => current > 0 ? gotoNum(current - 1) : false;
    const btnClick = (e) => gotoNum(parseInt(e.target.dataset.slide));
    pages.ontouchstart = (e) => touchstart = e.touches[0].screenY;
    pages.ontouchend = (e) => touchstart < e.changedTouches[0].screenY ? gotoPrev() : gotoNext();
    pages.onmousewheel = pages.onwheel = (e) => e.deltaY < 0 ? gotoPrev() : gotoNext();

    init();
}

let pages = document.querySelector('.pages');
let pagination = document.querySelector('.pagination');
let slider = new Slider(pages, pagination)
}

// =======================================================================================================================================

// var slideIndex = 0;

// function showSlide(index) {
//   var slides = document.getElementsByClassName("slide");
//   if (slides.length > 0) {
//     index = index < 0 ? slides.length - 1 : index;
//     index = index > slides.length - 1 ? 0 : index;
//     Array.from(slides).forEach((e, i, a) => (e.style.display = "none"));
//     slides[index].style.display = "block";
//     slideIndex = index;
//   }
// }

// showSlide(slideIndex);

// var leftButton = document.getElementById("left-button");
// var rightButton = document.getElementById("right-button");

// leftButton.addEventListener("click", function() {
//   slideIndex--;
//   showSlide(slideIndex);
// });

// rightButton.addEventListener("click", function() {
//   slideIndex++;
//   showSlide(slideIndex);
// });

// var leftButton2 = document.getElementById("left-button2");
// var rightButton2 = document.getElementById("right-button2");

// leftButton2.addEventListener("click", function() {
//   slideIndex--;
//   showSlide(slideIndex);
// });

// rightButton.addEventListener("click", function() {
//   slideIndex++;
//   showSlide(slideIndex);
// });

var $tabMenu = document.querySelector("#tab-menu");
var $tabMenuEl = $tabMenu.querySelectorAll('a'); //list. [... ... ... ...];
var $tabContent = document.getElementsByClassName('tab-content'); //list [... ... ... ...];
// console.log($tabMenu, $tabMenuEl);
// console.log($tabContent);
for(var i = 0; i < $tabMenuEl.length; i++){
  tabMenuClick(i);
}
function tabMenuClick(index){
  //i 의 순서를 체크할 수 있게 index 의 전달인자로 할당.
  $tabMenuEl[index].addEventListener('click', function(e) {
    e.preventDefault();
    for(var i = 0; i < $tabMenuEl.length; i++){
      //모든 요소에서 .selected 를 삭제.
      $tabMenuEl[i].classList.remove('selected');
      $tabContent[i].classList.remove('selected');
      if(i === index){
        //for 반복문이 실행될 때, 자신의 순서와 i 의 일치 여부를 체크.
        //같은 경우에 .selected 를 요소에 추가.
        $tabMenuEl[i].classList.add('selected');
        $tabContent[i].classList.add('selected');
      }
    }
    // for(var i = 0; i < $tabContent.length; i++){
    //   $tabContent[i].classList.remove('selected');
    //   if(i === index){
    //     $tabContent[i].classList.add('selected');
    //   }
    // }
  });
}

var slideIndex = 0;
var slideIndex2 = 0;
var $leftButton = document.querySelector("#left-button");
var $rightButton = document.querySelector("#right-button");
var $leftButton2 = document.querySelector("#left-button2");
var $rightButton2 = document.querySelector("#right-button2");
var maincontent = document.querySelector("#main_content");
var maincontent2 = document.querySelector("#main_content2");

function showSlide(index) {
  var slides = maincontent.getElementsByClassName("slide");
  if (slides.length > 0) {
    index = index < 0 ? slides.length - 1 : index;
    index = index > slides.length - 1 ? 0 : index;
    Array.from(slides).forEach((e, i, a) => (e.style.display = "none"));
    slides[index].style.display = "block";
    slideIndex = index;
  }
}
function showSlide2(index) {
  var slides = maincontent2.getElementsByClassName("slide2");
  if (slides.length > 0) {
    index = index < 0 ? slides.length - 1 : index;
    index = index > slides.length - 1 ? 0 : index;
    Array.from(slides).forEach((e, i, a) => (e.style.display = "none"));
    slides[index].style.display = "block";
    slideIndex2 = index;
  }
}

showSlide(slideIndex);
showSlide2(slideIndex2);

$leftButton.addEventListener("click", function(e){
  slideIndex--;
  showSlide(slideIndex);
})

$rightButton.addEventListener("click", function(e){
  slideIndex++;
  showSlide(slideIndex);
})

$leftButton2.addEventListener("click", function(e){
  slideIndex2--;
  showSlide2(slideIndex2);
  console.log(slideIndex2);
})

$rightButton2.addEventListener("click", function(e){
  slideIndex2++;
  showSlide2(slideIndex2);
})