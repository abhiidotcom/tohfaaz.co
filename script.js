document.addEventListener('DOMContentLoaded', function() {
    // Typing effect
    const typedTextSpan = document.getElementById('typed-text');
    if (typedTextSpan) {
        const textArray = ["Tohfaaz.co", "Gift", "Customize", "Create"];
        const typingDelay = 100;
        const erasingDelay = 50;
        const newTextDelay = 2000;
        let textArrayIndex = 0;
        let charIndex = 0;

        function type() {
            if (charIndex < textArray[textArrayIndex].length) {
                typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingDelay);
            } else {
                setTimeout(erase, newTextDelay);
            }
        }

        function erase() {
            if (charIndex > 0) {
                typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
                charIndex--;
                setTimeout(erase, erasingDelay);
            } else {
                textArrayIndex++;
                if (textArrayIndex >= textArray.length) textArrayIndex = 0;
                setTimeout(type, typingDelay + 1100);
            }
        }

        setTimeout(type, newTextDelay + 250);
    }

    // Modal functionality
    const profileBtn = document.getElementById('profile-btn');
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementById('close-btn');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const formContents = document.querySelectorAll('.form-content');

    if (profileBtn && modal && closeBtn) {
        function openModal() {
            modal.style.display = 'block';
        }

        function closeModal() {
            modal.style.display = 'none';
        }

        function showForm(formId) {
            formContents.forEach(form => {
                if (form.id === formId) {
                    form.classList.add('active');
                } else {
                    form.classList.remove('active');
                }
            });
            tabButtons.forEach(button => {
                if (button.dataset.tab === formId.replace('-form', '')) {
                    button.classList.add('active');
                } else {
                    button.classList.remove('active');
                }
            });
        }

        profileBtn.addEventListener('click', openModal);
        closeBtn.addEventListener('click', closeModal);
        
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const formId = button.dataset.tab + '-form';
                showForm(formId);
            });
        });

        // Display login form by default
        showForm('login-form');
    }
});


const banner = document.querySelector('.banner');
const slides = document.querySelectorAll('.banner-slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentSlideIndex = 0;

function scrollToNextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    banner.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
}

function scrollToPrevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    banner.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
}

nextButton.addEventListener('click', scrollToNextSlide);
prevButton.addEventListener('click', scrollToPrevSlide);

// Optional: Add automatic scrolling
setInterval(scrollToNextSlide, 3000); // scroll every 3 seconds