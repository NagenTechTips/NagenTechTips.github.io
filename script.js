document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("contactModal");
    const contactLink = document.getElementById("contact-form");
    const closeModalBtn = document.getElementById("close-modal");
    const backToTopBtn = document.getElementById("backToTop");

    if (!modal || !contactLink || !closeModalBtn || !backToTopBtn) return;

    // Scroll to top function (button is always visible)
    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Modal Functions
    const openModal = (e) => {
        e.preventDefault();
        modal.style.display = "block";
    };

    const closeModal = () => {
        modal.style.display = "none";
    };

    contactLink.addEventListener("click", openModal);
    closeModalBtn.addEventListener("click", closeModal);
});
