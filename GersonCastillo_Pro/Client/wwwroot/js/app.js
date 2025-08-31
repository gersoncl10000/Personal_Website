// Función para actualizar meta tags dinámicamente
window.updatePageMeta = (title, description) => {
    if (title) {
        document.title = title;
    }
    
    if (description) {
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.name = 'description';
            document.head.appendChild(metaDescription);
        }
        metaDescription.content = description;
    }
};

// Función para inicializar tooltips
window.initializeTooltips = () => {
    try {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
        return tooltipList;
    } catch (e) {
        console.warn('Bootstrap tooltips not available');
        return [];
    }
};

// Función para limpiar tooltips
window.disposeTooltips = () => {
    try {
        const tooltips = document.querySelectorAll('.tooltip');
        tooltips.forEach(tooltip => tooltip.remove());
    } catch (e) {
        console.warn('Error disposing tooltips');
    }
};

// Función para enfocar elementos por ID
window.focusOnElementbyId = (elementId) => {
    try {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            element.focus();
        }
    } catch (e) {
        console.warn('Error focusing element:', elementId);
    }
};

