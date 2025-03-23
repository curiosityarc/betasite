// Load header and footer dynamically
document.addEventListener("DOMContentLoaded", function() {
    fetch('../partials/header.html')
        .then(response => response.text())
        .then(data => document.getElementById("header").innerHTML = data);

    fetch('../partials/footer.html')
        .then(response => response.text())
        .then(data => document.getElementById("footer").innerHTML = data);
});

document.addEventListener("DOMContentLoaded", function() {
    let counters = document.querySelectorAll('.counter');
    let speed = 200;

    counters.forEach(counter => {
        let updateCount = () => {
            let target = +counter.getAttribute('data-count');
            let count = +counter.innerText;
            let increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 30);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
});

function openModal(researchId) {
    let modalTitle = document.getElementById("modalTitle");
    let modalBody = document.getElementById("modalBody");

    if (researchId === "research1") {
        modalTitle.innerText = "AI for Climate Change";
        modalBody.innerHTML = "<p>Using AI to predict and mitigate climate disasters.</p>";
    } else if (researchId === "research2") {
        modalTitle.innerText = "Renewable Energy Innovations";
        modalBody.innerHTML = "<p>Exploring new solar panel technologies for higher efficiency.</p>";
    }

    var modal = new bootstrap.Modal(document.getElementById("researchModal"));
    modal.show();
}

