// REPLACE WITH YOUR ACTUAL TOKEN
mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

// Initialize Map
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v11',
    center: [120.96, 15.48], 
    zoom: 14
});

let activeMarkers = [];

/**
 * Initiates the SOS Help Request flow
 */
function requestHelp() {
    hideElement('sos-btn');
    showElement('request-panel');
    
    // Simulate a 2-second search before showing locations
    setTimeout(() => {
        const panel = document.getElementById('request-panel');
        if (!panel.classList.contains('hidden')) {
            showLocation();
        }
    }, 2000);
}

/**
 * Places markers on the map and shows the "Location" panel
 */
function showLocation() {
    hideElement('request-panel');
    showElement('location-panel');
    
    // Add mock markers to the map
    const locations = [[120.962, 15.482], [120.958, 15.478]];
    locations.forEach(coord => {
        const marker = new mapboxgl.Marker({ color: '#82d14d' })
            .setLngLat(coord)
            .addTo(map);
        activeMarkers.push(marker);
    });
}

function cancelRequest() {
    resetHome();
}

/**
 * Logic for receiving a request from another user
 */
function receiveIncomingRequest() {
    if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
    hideElement('sos-btn');
    showElement('incoming-modal');
}

function closeModal() {
    hideElement('incoming-modal');
    showElement('sos-btn');
}

function acceptHelp() {
    alert("Help Accepted! Navigating to user...");
    closeModal();
}

/**
 * Resets the UI to the default state and clears markers
 */
function resetHome() {
    hideElement('request-panel');
    hideElement('location-panel');
    hideElement('incoming-modal');
    showElement('sos-btn');
    
    // Remove all active markers
    activeMarkers.forEach(m => m.remove());
    activeMarkers = [];

    // SIMULATION: A request arrives 3 seconds after returning home
    setTimeout(() => {
        receiveIncomingRequest();
    }, 3000);
}

/* Helper Functions */
function hideElement(id) {
    document.getElementById(id).classList.add('hidden');
}

function showElement(id) {
    document.getElementById(id).classList.remove('hidden');
}

function openSearch() {
    alert('Search button clicked!');
    // You can implement the actual search functionality here
}

function goHome() {
    // Example action for home button
    alert('Home button clicked!');
    // You can implement the actual action here, like resetting the page or navigating to the home page
}

