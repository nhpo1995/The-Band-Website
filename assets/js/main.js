const slides = [
    {
        image: "/assets/img/chicago.jpg",
        heading: "Chicago",
        description: "Thank you, Chicago - A night we won't forget.",
    },
    {
        image: "/assets/img/ny.jpg",
        heading: "New York",
        description: "The atmosphere in New York is lorem ipsum.",
    },
    {
        image: "/assets/img/la.jpg",
        heading: "Los Angeles",
        description: "We had the best time playing at Venice Beach!.",
    },
];

let index = 0;

function changeBackground() {
    index = (index + 1) % slides.length;
    document.getElementById(
        "slider"
    ).style.backgroundImage = `url('${slides[index].image}')`;
    document.querySelector(".text-heading").textContent = slides[index].heading;
    document.querySelector("text-description").textContent =
        slides[index].description;
}

// Tự động đổi ảnh mỗi 3 giây
setInterval(changeBackground, 3000);

// Buy tickets

const buyBtns = document.querySelectorAll(".js-buy-ticket");
const modalCloses = document.querySelectorAll(".js-modal-close");
const modal = document.querySelector(".js-modal");
const modalContainer = document.querySelector(".js-modal-container");

function closeModal() {
    modal.classList.remove("modal-open");
}

function openModal() {
    modal.classList.add("modal-open");
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener("click", openModal);
}

for (const modalClose of modalCloses) {
    modalClose.addEventListener("click", closeModal);
}

modal.addEventListener("click", function (event) {
    if (!modalContainer.contains(event.target)) {
        closeModal();
    }
});
