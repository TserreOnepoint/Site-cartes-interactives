
const container = document.getElementById("cardContainer");
const input = document.getElementById("cardCount");

function generateCards(n) {
    container.innerHTML = "";

    const numbers = Array.from({ length: n }, (_, i) => i + 1)
        .sort(() => Math.random() - 0.5);

    for (let i = 0; i < n; i++) {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <img src="assets/card${(i % 4) + 1}.png" alt="Card ${i + 1}" />
                </div>
                <div class="card-back">${numbers[i]}</div>
            </div>
        `;
        card.addEventListener("click", () => {
            if (!card.classList.contains("flipped")) {
                card.classList.add("flipped");
            }else{
                card.classList.remove("flipped");
            
        }});
        container.appendChild(card);
    }
}

input.addEventListener("change", () => {
    const count = parseInt(input.value);
    if (!isNaN(count) && count > 0) {
        generateCards(count);
    }
});

// Initial setup
generateCards(parseInt(input.value));
