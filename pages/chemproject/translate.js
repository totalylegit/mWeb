const translations = {
    en: {
        title: 'Isomers',
        content: `
            <h3>Introduction</h3>
            <p>Isomers are compounds that have the same molecular formula but different arrangements of atoms in space. This difference in arrangement can lead to variations in physical and chemical properties. There are two main types of isomers: constitutional (structural) isomers and stereoisomers.</p>
            <br><hr><br>
            <h3>Constitutional (Structural) Isomers</h3>
            <div style="display:flex; flex-wrap:wrap;">
                <div style="flex:0 1 250px; min-width:200px; padding-left:32px;">
                    <p>Isomers are compounds with the same molecular formula but different structural shape. For example, you can have pentane in a straight line, corner, or even like a cross.</p>
                </div>
                <div style="flex:1 1 250px; min-width:200px; display:flex; align-items:center; justify-content:center; padding-right:32px;">
                    <img src="../../img/isomers.png" alt="Isomers" style="width:100%;max-width:600px">
                </div>
            </div>
            <h3>Stereoisomers</h3>
            <p>These different structures can lead to different properties, such as boiling points and melting points. For example, the straight-chain isomer of pentane has a higher boiling point than its branched isomers due to increased surface area and stronger intermolecular forces.</p>
            <p>Stereoisomers are compounds where the molecular formula and chains are the same but the 3D configuration is different. </p>
            <br><hr><br>
            <div style="display:flex; flex-wrap:wrap;">
                <div style="flex:1 1 350px; min-width:250px; padding-left:32px;">
                    <h4>Diastereoisomers</h4>
                    <p>Diastereoisomer are stereoisomers based on double bonds. diastereoisomers can be only formed in cases where the carbon atom are joined by a double bond, are then joined to different groupes of atoms.</p>
                </div>
                <div style="flex:1 1 250px; min-width:200px; display:flex; align-items:center; justify-content:center; padding-right:32px;">
                    <img src="../../img/pentene_isomers.png" alt="Pentane Isomers" style="width:100%;max-width:600px">
                </div>
                <div style="flex:1 1 350px; min-width:250px; padding-left:32px;">
                    <h4>Enantiomers</h4>
                    <p>Enantiomers are stereoisomers that are mirror images of each other. An enatiomer requires at least 4 different atoms attached to a carbon atom. </p>
                </div>
                <div style="flex:1 1 250px; min-width:200px; display:flex; align-items:center; justify-content:center; padding-right:32px;">
                    <img src="../../img/enantiomers.png" alt="Enantiomers" style="width:100%;max-width:600px">
                </div>
            </div>
        `,
        buttonText: 'Afficher en français'
    },
    fr: {
        title: 'Isomères',
        content: `
            <h3>Introduction</h3>
            <p>Les isomères sont des composés qui ont la même formule moléculaire mais des arrangements d'atomes différents dans l'espace. Cette différence d'arrangement peut entraîner des variations des propriétés physiques et chimiques. Il existe deux principaux types d'isomères : les isomères constitutionnels (structurels) et les stéréoisomères.</p>
            <br><hr><br>
            <h3>Isomères Constitutionnels (Structurels)</h3>
            <div style="display:flex; flex-wrap:wrap;">
                <div style="flex:0 1 250px; min-width:200px; padding-left:32px;">
                    <p>Les isomères sont des composés ayant la même formule moléculaire mais une forme structurelle différente. Par exemple, vous pouvez avoir du pentane en ligne droite, en coin ou même en forme de croix (image ci-dessous).</p>
                </div>
                <div style="flex:1 1 250px; min-width:200px; display:flex; align-items:center; justify-content:center; padding-right:32px;">
                    <img src="../../img/isomers.png" alt="Isomères" style="width:100%;max-width:600px">
                </div>
            </div>
            <h3>Stéréoisomères</h3>
            <p>Ces différentes structures peuvent entraîner des propriétés différentes, telles que les points d'ébullition et de fusion. Par exemple, l'isomère en chaîne droite du pentane a un point d'ébullition plus élevé que ses isomères ramifiés en raison de la surface accrue et des forces intermoléculaires plus fortes.</p>
            <p>Les stéréoisomères sont des composés où la formule moléculaire et les chaînes sont les mêmes, mais la configuration 3D est différente.</p>
            <br><hr><br>
            <div style="display:flex; flex-wrap:wrap;">
                <div style="flex:1 1 350px; min-width:250px; padding-left:32px;">
                    <h4>Diastéréoisomères</h4>
                    <p>Les diastéréoisomères sont des stéréoisomères basés sur des doubles liaisons. Les diastéréoisomères ne peuvent être formés que dans les cas où les atomes de carbone sont joints par une double liaison, puis reliés à différents groupes d'atomes.</p> 
                </div>
                <div style="flex:1 1 250px; min-width:200px; display:flex; align-items:center; justify-content:center; padding-right:32px;">
                    <img src="../../img/pentene_isomers.png" alt="Isomères de Pentène" style="width:100%;max-width:600px">
                </div>
                <div style="flex:1 1 350px; min-width:250px; padding-left:32px;">
                    <h4>Énantiomères</h4>
                    <p>Les énantiomères sont des stéréoisomères qui sont des images miroir l'un de l'autre. Un énantiomère nécessite au moins 4 atomes différents attachés à un atome de carbone.</p>
                </div>
                <div style="flex:1 1 250px; min-width:200px; display:flex; align-items:center; justify-content:center; padding-right:32px;">
                    <img src="../../img/enantiomers.png" alt="Énantiomères" style="width:100%;max-width:600px">
                </div>
            </div>
        `,
        buttonText: 'Show in English'
    }
};

function toggleLanguage(config) {
    const { buttonId, elements, languages, defaultLang = 'en' } = config;
    const button = document.getElementById(buttonId);
    
    if (!button || !elements || !languages) {
        console.error('Invalid configuration: missing button, elements, or languages');
        return;
    }

    // Initialize language if not set
    if (!button.dataset.lang) {
        button.dataset.lang = defaultLang;
    }

    // Toggle to the next language
    const currentLang = button.dataset.lang;
    const nextLang = languages[(languages.indexOf(currentLang) + 1) % languages.length];
    
    // Update all specified elements
    elements.forEach(({ id, property, key }) => {
        const element = document.getElementById(id);
        if (element) {
            element[property] = translations[nextLang][key] || '';
        } else {
            console.warn(`Element with ID "${id}" not found`);
        }
    });

    // Update button text and language state
    button.textContent = translations[nextLang].buttonText || 'Toggle Language';
    button.dataset.lang = nextLang;
}

function initializeTranslation(config) {
    const { buttonId, defaultLang = 'en' } = config;
    const button = document.getElementById(buttonId);
    
    if (!button) {
        console.error(`Button with ID "${buttonId}" not found`);
        return;
    }

    // Set initial language
    button.dataset.lang = defaultLang;
    button.textContent = translations[defaultLang].buttonText || 'Toggle Language';
    
    // Add click event listener
    button.addEventListener('click', () => toggleLanguage(config));
}

// Example configuration for the isomers page
const isomersConfig = {
    buttonId: 'isomers-toggle-btn',
    elements: [
        { id: 'isomers-title', property: 'textContent', key: 'title' },
        { id: 'isomers-content', property: 'innerHTML', key: 'content' }
    ],
    languages: ['en', 'fr'],
    defaultLang: 'en'
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeTranslation(isomersConfig);
});