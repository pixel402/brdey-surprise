 // Used on index.html - "Open Your Gift" button
function goNext() {
    window.location.href = "password.html";
}

// Used on letter.html - envelope open animation
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letterText");
const nextBtn = document.getElementById("nextBtn");

if (envelope) {
    envelope.addEventListener("click", () => {
        envelope.classList.toggle("open");

        setTimeout(() => {
            if (letter) {
                letter.classList.add("show");
                letter.classList.remove("hidden");
            }
            if (nextBtn) {
                nextBtn.classList.add("show");
            }
        }, 1000);
    });
}