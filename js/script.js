console.log("Lapka Nadii pratsyue!");
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    item.addEventListener("click", () => {
        const answer = item.querySelector(".faq-answer");

        if (answer.style.display === "block") {
            answer.style.display = "none";
            item.querySelector("span").textContent = "\u25BC"; // Стрелка вниз
        } else {
            answer.style.display = "block";
            item.querySelector("span").textContent = "\u25B2"; // Стрелка вверх
        }
    });
});

console.log("Forma podkluchena");
const form = document.querySelector("#contact-form");
const message = document.querySelector("#form-message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = form.querySelector("input[type='text']").value;
    const email = form.querySelector("input[type='email']").value;
    const text = form.querySelector("textarea").value;

   if (name === "" || email === "" || text === "") {
    message.textContent = "Будь ласка, заповніть усі поля.";
} else if (!email.includes("@")) {
    message.textContent = "Введіть правильну електронну адресу.";
} else {
    message.textContent = "Дякуємо! Ваше повідомлення надіслано.";
    form.reset();
}
});

const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    nav.classList.toggle("active");
});

const filterButtons = document.querySelectorAll(".filter-btn");
const pets = document.querySelectorAll(".pet-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter = button.dataset.filter;

        pets.forEach(pet => {
            if (filter === "all" || pet.classList.contains(filter)) {
                pet.style.display = "block";
            } else {
                pet.style.display = "none";
            }
        });

    });
});