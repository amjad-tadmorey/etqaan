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


// Create an intersection observer
const observer = new IntersectionObserver((entries, observer) => {
    // Loop through all observed entries (in case there are multiple)
    entries.forEach(entry => {
        // If the target section is in the viewport (intersecting)
        if (entry.isIntersecting) {
            const sectionId = entry.target.id; // Get the ID of the section in view

            // Perform actions based on the section ID
            if (sectionId === 'section-1') {
                animationTarget1.classList.add('reveal')
                // Add additional actions for section 1
            } else if (sectionId === 'section-2') {
                animationTarget2.classList.add('reveal')
                card1.classList.add('go-down')
                card2.classList.add('go-down')
                card3.classList.add('go-down')
                // Add additional actions for section 2
            } else if (sectionId === 'section-3') {
                console.log('You have reached Section 3');
                // Add additional actions for section 3
            }

            // Optionally stop observing once the section is reached (if only the first view matters)
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5, // Trigger when 50% of the element is visible
});

// Observe multiple sections by their IDs
observer.observe(document.getElementById('section-1'));
observer.observe(document.getElementById('section-2'));
observer.observe(document.getElementById('section-3'));
