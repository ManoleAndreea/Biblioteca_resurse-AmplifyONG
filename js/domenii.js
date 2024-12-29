const quizData = {
    'fundraising': [
        {
            question: 'Care este primul pas în fundraising?',
            options: ['Identificarea donatorilor', 'Crearea unei strategii', 'Scrierea unui proiect', 'Comunicarea cu sponsorii']
        },
        {
            question: 'Ce înseamnă crowdfunding?',
            options: ['Finanțare de la stat', 'Colectare de fonduri de la public', 'Grant de la o fundație', 'Investiție privată']
        }
    ],
    'proiecte': [
        {
            question: 'Care este elementul cheie al unui proiect bun?',
            options: ['Bugetul', 'Obiectivele clare', 'Lista de activități', 'Echipa de implementare']
        },
        {
            question: 'Ce înseamnă sustenabilitatea unui proiect?',
            options: ['Costul total', 'Impactul pe termen lung', 'Numărul de beneficiari', 'Durata proiectului']
        }
    ],
    'comunicare': [
        {
            question: 'Care este scopul principal al comunicării în ONG?',
            options: ['Strângere de fonduri', 'Informare', 'Marketing', 'Recrutare voluntari']
        },
        {
            question: 'Ce înseamnă comunicarea internă?',
            options: ['Comunicare cu mass-media', 'Comunicare în interiorul organizației', 'Comunicare cu donatorii', 'Comunicare cu beneficiarii']
        }
    ],
    'management': [
        {
            question: 'Care este un principiu cheie al managementului de echipă?',
            options: ['Controlul strict', 'Motivarea membrilor', 'Reducerea costurilor', 'Creșterea numărului de angajați']
        },
        {
            question: 'Ce înseamnă delegarea sarcinilor?',
            options: ['Transferarea completă a responsabilității', 'Distribuirea echitabilă a sarcinilor', 'Reducerea volumului de muncă', 'Automatizarea proceselor']
        }
    ]
};

const domainButtons = document.querySelectorAll('.domain-btn');
const quizContainer = document.getElementById('quiz-container');
const quizContent = document.getElementById('quiz-content');
const submitBtn = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result-container');
const levelResult = document.getElementById('level-result');
const resourcesLink = document.getElementById('resources-link');

let selectedDomain = '';

domainButtons.forEach(button => {
    button.addEventListener('click', () => {
        domainButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        selectedDomain = button.dataset.domain;
        loadQuiz(selectedDomain);
    });
});

function loadQuiz(domain) {
    quizContent.innerHTML = '';
    quizData[domain].forEach((questionData, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('quiz-question');
        questionDiv.innerHTML = `<p>${questionData.question}</p>`;

        const optionsDiv = document.createElement('div');
        optionsDiv.classList.add('quiz-options');

        questionData.options.forEach(option => {
            const optionDiv = document.createElement('div');
            optionDiv.classList.add('quiz-option');
            optionDiv.textContent = option;
            optionDiv.addEventListener('click', () => {
                optionsDiv.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected'));
                optionDiv.classList.add('selected');
            });
            optionsDiv.appendChild(optionDiv);
        });

        questionDiv.appendChild(optionsDiv);
        quizContent.appendChild(questionDiv);
    });

    document.getElementById('domain-selection').classList.add('hidden');
    quizContainer.classList.remove('hidden');
    submitBtn.classList.remove('hidden');
}

submitBtn.addEventListener('click', () => {
    const selectedOptions = quizContent.querySelectorAll('.quiz-option.selected');
    
    if (selectedOptions.length < 2) {
        alert('Te rugăm să răspunzi la toate întrebările!');
        return;
    }

    const correctAnswers = selectedOptions.length;
    let level = '';

    if (correctAnswers === 0) {
        level = 'Începător';
    } else if (correctAnswers === 1) {
        level = 'Intermediar';
    } else {
        level = 'Avansat';
    }

    quizContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    levelResult.textContent = `Nivelul tău: ${level}`;
    
    // Construiește link către resurse bazat pe domeniu și nivel
    resourcesLink.href = `biblioteca.html?domain=${selectedDomain}&level=${level.toLowerCase()}`;
});