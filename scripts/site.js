document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('color-scheme-toggle');
    const body = document.body;

    // Function to apply dark mode based on preference
    const applyDarkModePreference = () => {
        const darkModePreference = localStorage.getItem('darkMode');
        const preferenceTimestamp = localStorage.getItem('darkModeTimestamp');
        const now = new Date().getTime();

        // Check if the stored preference is older than 5 seconds (5000 milliseconds)
        if (preferenceTimestamp && (now - preferenceTimestamp) > 5000) {
            localStorage.removeItem('darkMode');
            localStorage.removeItem('darkModeTimestamp');
            body.classList.remove('dark-mode', 'light-mode');
        } else {
            if (darkModePreference === 'enabled') {
                body.classList.add('dark-mode');
                body.classList.remove('light-mode');
            } else if (darkModePreference === 'disabled') {
                body.classList.add('light-mode');
                body.classList.remove('dark-mode');
            } else {
                body.classList.remove('dark-mode', 'light-mode');
            }
        }
    };

    // Apply preference on load
    applyDarkModePreference();

    // Toggle dark mode on button click
    toggleButton.addEventListener('click', () => {
        const now = new Date().getTime();
        if (body.classList.contains('dark-mode')) {
            body.classList.add('light-mode');
            body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
            localStorage.setItem('darkModeTimestamp', now);
        } else {
            body.classList.add('dark-mode');
            body.classList.remove('light-mode');
            localStorage.setItem('darkMode', 'enabled');
            localStorage.setItem('darkModeTimestamp', now);
        }
    });

    /* switching steps in process */
    /*
    const switchingSteps = document.querySelector(".process-steps");
    const switchingDivs = document.querySelectorAll(".process-steps div");
    let activeSwitchIndex = 0;
    let interval;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCycling();
            } else {
                stopCycling();
            }
        });
    }, { threshold: 0.1 });

    observer.observe(switchingSteps);

    function startCycling() {
        if (!interval) {
            interval = setInterval(() => {
                switchingDivs[activeSwitchIndex].classList.remove("active");
                activeSwitchIndex = (activeSwitchIndex + 1) % switchingDivs.length;
                switchingDivs[activeSwitchIndex].classList.add("active");
            }, 2000);
        }
    }

    function stopCycling() {
        if (interval) {
            clearInterval(interval);
            interval = null;
        }
    }

    switchingDivs[activeSwitchIndex].classList.add("active");
    */
});
