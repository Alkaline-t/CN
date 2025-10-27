document.addEventListener('DOMContentLoaded', () => {
    const aboutLink = document.getElementById('about-link-footer');
    const aboutPopup = document.getElementById('about-popup');
    const closeButton = document.querySelector('.popup-content .close-button');

    if (aboutLink && aboutPopup && closeButton) {
        aboutLink.addEventListener('click', (e) => {
            e.preventDefault();
            aboutPopup.style.display = 'flex'; // Use flex to center the popup
        });

        closeButton.addEventListener('click', () => {
            aboutPopup.style.display = 'none';
        });

        // Close the popup if the user clicks anywhere outside of the popup content
        window.addEventListener('click', (e) => {
            if (e.target === aboutPopup) {
                aboutPopup.style.display = 'none';
            }
        });
    }

    const ourTeamLink = document.getElementById('our-team-link');
    const ourTeamPopup = document.getElementById('our-team-popup');
    const ourTeamCloseButton = ourTeamPopup ? ourTeamPopup.querySelector('.close-button') : null;

    if (ourTeamLink && ourTeamPopup && ourTeamCloseButton) {
        ourTeamLink.addEventListener('click', (e) => {
            e.preventDefault();
            ourTeamPopup.style.display = 'flex';
        });

        ourTeamCloseButton.addEventListener('click', () => {
            ourTeamPopup.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === ourTeamPopup) {
                ourTeamPopup.style.display = 'none';
            }
        });
    }

    // Typing animation for tagline and description
    const taglineElement = document.querySelector('.tagline');
    const descriptionElement = document.querySelector('.description');
    const taglineText = "Your Future, Navigated.";
    const descriptionText = "LaunchPad helps you discover roadmaps, experience virtual careers, and connect with experts to guide your journey. Building under the program \"Vocal for Local\".";
    let taglineIndex = 0;
    let descriptionIndex = 0;

    function typeEffect(element, text, index, callback) {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            setTimeout(() => typeEffect(element, text, index + 1, callback), 50);
        } else if (callback) {
            callback();
        }
    }

    function startTypingAnimation() {
        if (taglineElement && descriptionElement) {
            taglineElement.textContent = ''; // Clear content before typing
            descriptionElement.textContent = ''; // Clear content before typing
            typeEffect(taglineElement, taglineText, 0, () => {
                typeEffect(descriptionElement, descriptionText, 0);
            });
        }
    }

    startTypingAnimation();
});
