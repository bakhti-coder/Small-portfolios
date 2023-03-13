const indicators = document.querySelector(".indicators");
const show = document.querySelector("#show img");

indicators.addEventListener("click", (event) => {
    let src = event.target.src;
    src && (show.src = src);
});