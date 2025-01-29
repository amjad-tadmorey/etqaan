const openBtn = document.getElementById('open-btn')
const closeBtn = document.getElementById('close-btn')
const links = document.getElementById('links')
const animationTarget1 = document.getElementById('animation-target-1')
const animationTarget2 = document.getElementById('animation-target-2')
const card1 = document.querySelector('.card-1')
const card2 = document.querySelector('.card-2')
const card3 = document.querySelector('.card-3')

openBtn.addEventListener('click', () => {
    links.classList.add('opened')
    links.classList.remove('closed')
})
closeBtn.addEventListener('click', () => {
    links.classList.add('closed')
    links.classList.remove('opened')
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const sectionId = entry.target.id;

        if (entry.isIntersecting) {
            // Section enters the viewport
            console.log(`Entered: ${sectionId}`);

            if (sectionId === 'section-1') {
                document.querySelector('#animation-target-1').classList.add('reveal');
            } else if (sectionId === 'section-2') {
                card1.classList.add('go-down')
                card2.classList.add('go-down')
                card3.classList.add('go-down')
                document.querySelector('#animation-target-2').classList.add('reveal');
                document.querySelectorAll('.card').forEach(card => card.classList.add('go-down'));
            } else if (sectionId === 'section-3') {
                console.log('You have reached Section 3');
            }
        } else {
            // Section exits the viewport
            console.log(`Exited: ${sectionId}`);

            if (sectionId === 'section-1') {
                document.querySelector('#animation-target-1').classList.remove('reveal');
            } else if (sectionId === 'section-2') {
                card1.classList.remove('go-down')
                card2.classList.remove('go-down')
                card3.classList.remove('go-down')
                document.querySelector('#animation-target-2').classList.remove('reveal');
                document.querySelectorAll('.card').forEach(card => card.classList.remove('go-down'));
            } else if (sectionId === 'section-3') {
                console.log('Left Section 3');
            }
        }
    });
}, {
    threshold: 0.5 // Triggers when 50% of the section is visible
});

// Observe all sections dynamically
document.querySelectorAll('section').forEach(section => observer.observe(section));

const footer = document.querySelector('.section-4');
const contact = document.querySelector('.contact')

const observer_footer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            console.log('Footer is visible on screen');
            contact.classList.add('hide-contact')
        } else {
            console.log('Footer is NOT visible on screen');
            contact.classList.remove('hide-contact')
        }
    });
}, {
    threshold: 0.01 // Detects even 1% of the footer
});

observer_footer.observe(footer);