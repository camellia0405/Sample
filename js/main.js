
//スクロール時にアニメーション
const targetElement = document.querySelectorAll(".animationTrigger");
console.log("画面の高さ, Window.innerHeight")
document.addEventListener("scroll", function(){
    for(let i = 0; i < targetElement.length; i++){
        const getElementDistance = targetElement[i].
        getBoundingClientRect().top +targetElement[i].clientHeight * 0.4
        if (window.innerHeight > getElementDistance){
            targetElement[i].classList.add("fadeIn");
        }
}});

//ハンバーガーメニューのクリック動作
$(".hamburgerMenuButton").click(function () {
    $(this).toggleClass('active');
        $("#spMenu").toggleClass("openactive");
});

$("#spMenu a").click(function(){
    $(".hamburgerMenuButton").removeClass("active");
        $("#spMenu").removeClass("openactive");
});
