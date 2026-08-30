// JeevanDarpan - Vedic Astrology Kundli Calculator
// Foundational structure for Kundli calculation
// Note: Actual planetary calculations require a dedicated ephemeris engine

// Zodiac signs (Rashis)
const RASHIS = [
    'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
    'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

// Planets in Vedic Astrology
const PLANETS = {
    'Sun': '☉',
    'Moon': '☽',
    'Mercury': '☿',
    'Venus': '♀',
    'Mars': '♂',
    'Jupiter': '♃',
    'Saturn': '♄',
    'Rahu': 'Rahu',
    'Ketu': 'Ketu'
};

// Local storage key
const STORAGE_KEY = 'jeevan_darpan_cache';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculate-btn');
    calculateBtn.addEventListener('click', calculateKundli);
    
    // Load cached data if available
    loadCachedData();
});

function calculateKundli() {
    const name = document.getElementById('name').value.trim();
    const birthDate = document.getElementById('birth-date').value;
    const birthTime = document.getElementById('birth-time').value;
    const birthPlace = document.getElementById('birth-place').value.trim();

    // Validation
    if (!name || !birthDate || !birthTime || !birthPlace) {
        showError('Please fill all fields');
        return;
    }

    try {
        // Parse input
        const date = new Date(birthDate);
        const [hours, minutes] = birthTime.split(':').map(Number);
        
        // Create birth data object
        const birthData = {
            name,
            date: date.toISOString(),
            hours,
            minutes,
            place: birthPlace,
            timestamp: Date.now()
        };

        // Calculate Kundli (placeholder for actual ephemeris engine)
        const kundli = generateKundliPlaceholder(birthData);

        // Display results
        displayKundli(kundli, birthData);

        // Cache the result
        cacheKundli(birthData, kundli);

    } catch (error) {
        console.error('Error calculating Kundli:', error);
        showError('Error processing birth data. Please check and try again.');
    }
}

function generateKundliPlaceholder(birthData) {
    // This is a placeholder for Kundli calculation
    // Actual implementation requires ephemeris data and complex astronomical calculations
    
    const kundli = {
        ascendant: Math.floor(Math.random() * 12), // 0-11 for 12 rashis
        houses: [],
        planets: {}
    };

    // Initialize 12 houses
    for (let i = 0; i < 12; i++) {
        kundli.houses[i] = {
            house: i + 1,
            rashi: RASHIS[(kundli.ascendant + i) % 12],
            degree: Math.random() * 30
        };
    }

    // Assign planets to houses (placeholder logic)
    Object.keys(PLANETS).forEach((planet, idx) => {
        const houseIndex = Math.floor((idx + kundli.ascendant) % 12);
        if (!kundli.planets[houseIndex]) {
            kundli.planets[houseIndex] = [];
        }
        kundli.planets[houseIndex].push({
            name: planet,
            symbol: PLANETS[planet],
            degree: Math.random() * 30
        });
    });

    return kundli;
}

function displayKundli(kundli, birthData) {
    // Display Kundli grid
    for (let i = 1; i <= 12; i++) {
        const planetsContainer = document.getElementById(`planets-${i}`);
        const houseIndex = i - 1;
        const planets = kundli.planets[houseIndex] || [];
        
        planetsContainer.innerHTML = '';
        
        // Add rashi information
        const rashibg = document.createElement('div');
        rashibg.className = 'rashi-info';
        rashibg.innerHTML = `<strong>${kundli.houses[houseIndex].rashi}</strong>`;
        planetsContainer.appendChild(rashibg);
        
        // Add planets
        planets.forEach(planet => {
            const planetEl = document.createElement('div');
            planetEl.className = 'planet';
            planetEl.title = `${planet.name} at ${planet.degree.toFixed(1)}°`;
            planetEl.innerHTML = `${planet.symbol}`;
            planetsContainer.appendChild(planetEl);
        });
    }

    // Display birth details
    const birthDetailsEl = document.getElementById('birth-details');
    const birthDate = new Date(birthData.date);
    birthDetailsEl.innerHTML = `
        <div class="detail-item">
            <div class="detail-label">Name</div>
            <div class="detail-value">${birthData.name}</div>
        </div>
        <div class="detail-item">
            <div class="detail-label">Birth Date</div>
            <div class="detail-value">${birthDate.toDateString()}</div>
        </div>
        <div class="detail-item">
            <div class="detail-label">Birth Time</div>
            <div class="detail-value">${String(birthData.hours).padStart(2, '0')}:${String(birthData.minutes).padStart(2, '0')}</div>
        </div>
        <div class="detail-item">
            <div class="detail-label">Birth Place</div>
            <div class="detail-value">${birthData.place}</div>
        </div>
        <div class="detail-item">
            <div class="detail-label">Ascendant (Lagna)</div>
            <div class="detail-value">${RASHIS[kundli.ascendant]}</div>
        </div>
        <div class="detail-item">
            <div class="detail-label">Calculation Date</div>
            <div class="detail-value">${new Date().toLocaleString()}</div>
        </div>
    `;

    // Show result section
    document.getElementById('result-section').style.display = 'block';
    document.querySelector('.input-section').style.display = 'none';
    
    // Scroll to results
    setTimeout(() => {
        document.getElementById('result-section').scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

function resetForm() {
    document.getElementById('name').value = '';
    document.getElementById('birth-date').value = '';
    document.getElementById('birth-time').value = '';
    document.getElementById('birth-place').value = '';
    document.getElementById('result-section').style.display = 'none';
    document.querySelector('.input-section').style.display = 'block';
    document.querySelector('.input-section').scrollIntoView({ behavior: 'smooth' });
}

function showError(message) {
    const section = document.querySelector('.input-section');
    let errorEl = section.querySelector('.error');
    if (!errorEl) {
        errorEl = document.createElement('div');
        errorEl.className = 'error';
        section.insertBefore(errorEl, section.firstChild);
    }
    errorEl.textContent = message;
    setTimeout(() => {
        errorEl.remove();
    }, 5000);
}

function cacheKundli(birthData, kundli) {
    try {
        const cache = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        cache.push({
            birthData,
            kundli,
            cachedAt: new Date().toISOString()
        });
        // Keep only last 10 entries
        if (cache.length > 10) {
            cache.shift();
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cache));
    } catch (e) {
        console.warn('Failed to cache Kundli:', e);
    }
}

function loadCachedData() {
    try {
        const cache = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        if (cache.length > 0) {
            console.log(`Found ${cache.length} cached Kundli calculations`);
        }
    } catch (e) {
        console.warn('Failed to load cached data:', e);
    }
}
