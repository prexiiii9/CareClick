/**
 * Switches between login, signup, and forgot password views
 * @param {string} viewId - The ID of the card to display
 */
function toggleView(viewId) {
    // Hide all elements with the class 'card'
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.classList.add('hidden');
    });

    // Reveal the selected card
    const activeCard = document.getElementById(viewId);
    if (activeCard) {
        activeCard.classList.remove('hidden');
    }

    // Scroll to top for a better user experience on mobile devices
    window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
    });
}