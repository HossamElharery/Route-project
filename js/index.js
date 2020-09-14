let imgs = Array.from(document.getElementsByClassName("img-item"));
let lightBoxContainer = document.getElementById("lightbox-container");
let lightBoxItem = document.getElementById("lightboxItem");
let closeBtn = document.getElementById("close");
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
let currentSlideIndex = 0;
for(let i = 0;i < imgs.length;i++)
{
    imgs[i].addEventListener("click",openLightBox)
}
function openLightBox(eventInfo)
{
    currentSlideIndex = imgs.indexOf(eventInfo.target);
    let imgSrc = eventInfo.target.src;
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
    lightBoxContainer.style.display = "flex";
}
closeBtn.addEventListener("click",closeLightBox)
function closeLightBox()
{
    lightBoxContainer.style.display = "none";
}
nextBtn.addEventListener("click",nextSlide)
function nextSlide()
{
    currentSlideIndex++;
    if(currentSlideIndex == imgs.length)
    {
        currentSlideIndex = 0;
    }
    let imgSrc = imgs[currentSlideIndex].src;
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
}
prevBtn.addEventListener("click",prevSlide)
function prevSlide()
{
    currentSlideIndex--;
    if(currentSlideIndex < 0)
    {
        currentSlideIndex = imgs.length - 1;
    }
    let imgSrc = imgs[currentSlideIndex].src;
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
}
document.addEventListener("keydown",function(eventInfo){
    if(eventInfo.keyCode == 39)  // press arrow right on the keyboard
    {
        nextSlide();
    }
    else if(eventInfo.keyCode == 37) // press arrow left on the keyboard
    {
        prevSlide();
    }
    else if(eventInfo.keyCode == 27)  // press the Esc on the keyboard
    {
        closeLightBox();
    }
})