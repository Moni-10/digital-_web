$('.owl-carousel').owlCarousel({
    loop: true,
    margin:10,
    nav: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 4
      }
    }
  })


  document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const header = item.querySelector('.faq-header');
        const answer = item.querySelector('.faq-answer');
        const toggle = header.querySelector('.faq-toggle');

        header.addEventListener('click', () => {
            const isOpen = answer.style.display === 'block';

            // Close all other answers
            faqItems.forEach(el => {
                if (el !== item) {
                    el.querySelector('.faq-answer').style.display = 'none';
                    el.querySelector('.faq-toggle').textContent = '+';
                }
            });

            // Toggle current answer
            if (isOpen) {
                answer.style.display = 'none';
                toggle.textContent = '+';
            } else {
                answer.style.display = 'block';
                toggle.textContent = '−'; // Minus sign
            }
        });
    });
});
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.close-icon');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    hamburger.style.display = 'none';
    closeIcon.style.display = 'block';
});

closeIcon.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    closeIcon.style.display = 'none';
    hamburger.style.display = 'block';
});
