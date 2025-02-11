document.addEventListener("DOMContentLoaded", function () {
    let portfolioForm = document.getElementById("portfolio-form");

    if (!portfolioForm) return;

    portfolioForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Form yuborilishini to‘xtatish

        // Form ma'lumotlarini olish
        let portfolioTitle = document.getElementById("portfolio-title").value;
        let portfolioCategory = document.getElementById("portfolio-category").value;
        let portfolioImage = document.getElementById("portfolio-image").value;

        // Portfolio obyektini yaratish
        let newPortfolioItem = {
            title: portfolioTitle,
            category: portfolioCategory,
            image: portfolioImage
        };

        // Oldingi portfolio itemlarni olish va yangisini qo‘shish
        let portfolioItems = JSON.parse(localStorage.getItem("portfolioItems")) || [];
        portfolioItems.push(newPortfolioItem);
        localStorage.setItem("portfolioItems", JSON.stringify(portfolioItems));

        // Formni tozalash
        portfolioForm.reset();

        alert("Portfolio item added successfully! Go to portfolio page to see it.");
    });
});
