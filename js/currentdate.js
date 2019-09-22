        const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
        document.getElementById("activedate").textContent = new Date().toLocaleDateString('en-US', options);
        const todaysdate = new Date();