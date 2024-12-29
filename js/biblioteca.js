const resources = [
    {
        title: "Ghid Complet de Fundraising",
        type: "articol",
        domain: "fundraising",
        level: "incepator",
        description: "Introducere comprehensivă în fundraising pentru organizații nonprofit",
        tags: ["Strategie", "Finanțare"]
    },
    {
        title: "Comunicare Eficientă în ONG-uri",
        type: "video",
        domain: "comunicare",
        level: "intermediar",
        description: "Tehnici avansate de comunicare pentru profesioniști",
        tags: ["Comunicare", "Relații Publice"]
    },
    {
        title: "Template Scriere Proiect pentru Granturi",
        type: "document",
        domain: "proiecte",
        level: "avansat",
        description: "Model detaliat pentru elaborarea propunerilor de finanțare",
        tags: ["Proiecte", "Finanțare"]
    },
    {
        title: "Leadership și Management de Echipă",
        type: "articol",
        domain: "management",
        level: "intermediar",
        description: "Strategii moderne de conducere a echipelor nonprofit",
        tags: ["Leadership", "Echipă"]
    }
    
];

const resourcesGrid = document.getElementById('resources-grid');
const searchInput = document.getElementById('search-input');
const domainFilters = document.querySelectorAll('#domain-filters .filter-btn');
const levelFilters = document.querySelectorAll('#level-filters .filter-btn');
const noResultsDiv = document.getElementById('no-results');

function renderResources(filteredResources) {
    resourcesGrid.innerHTML = '';
    
    if (filteredResources.length === 0) {
        noResultsDiv.style.display = 'block';
        return;
    }

    noResultsDiv.style.display = 'none';

    filteredResources.forEach(resource => {
        const card = document.createElement('div');
        card.classList.add('resource-card');
        card.innerHTML = `
            <h3>${resource.title}</h3>
            <p>${resource.description}</p>
            <div class="tags">
                <span class="tag">${resource.type}</span>
                <span class="tag">${resource.domain}</span>
                <span class="tag">${resource.level}</span>
            </div>
        `;
        resourcesGrid.appendChild(card);
    });
}

function filterResources() {
    const searchTerm = searchInput.value.toLowerCase();
    const activeDomainFilter = document.querySelector('#domain-filters .filter-btn.active')?.dataset.filter;
    const activeLevelFilter = document.querySelector('#level-filters .filter-btn.active')?.dataset.filter;

    const filteredResources = resources.filter(resource => {
        const matchesSearch = resource.title.toLowerCase().includes(searchTerm) || 
                              resource.description.toLowerCase().includes(searchTerm);
        const matchesDomain = !activeDomainFilter || resource.domain === activeDomainFilter;
        const matchesLevel = !activeLevelFilter || resource.level === activeLevelFilter;

        return matchesSearch && matchesDomain && matchesLevel;
    });

    renderResources(filteredResources);
}

searchInput.addEventListener('input', filterResources);

[...domainFilters, ...levelFilters].forEach(btn => {
    btn.addEventListener('click', function() {
        const filterGroup = this.closest('.filter-group');
        filterGroup.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        filterResources();
    });
});

// Initial render
renderResources(resources);