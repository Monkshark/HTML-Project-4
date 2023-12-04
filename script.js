let currentNumber = 5;
const squares = document.querySelectorAll("div");

let observer;
observer = new IntersectionObserver(
    (squares) => {
        squares.forEach(squares => {
            if (squares.isIntersecting) {
                squares.target.classList.add("visible");
                squares.target.classList.remove("invisible");
            } else {
                squares.target.classList.remove("visible");
                squares.target.classList.add("invisible");
            }
        });
    }, {
        threshold: 0.5
    }
);

squares.forEach(square => {
    observer.observe(square);
});

function appendMoreDiv(num) {
    for (let i = 0; i < num; i++) {
        const div = document.createElement("div");
        currentNumber += 1;
        div.textContent = currentNumber;
        document.body.appendChild(div);
        observer.observe(div);
    }
}

window.addEventListener("scroll", function () {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        appendMoreDiv(1);
    }
});
