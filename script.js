document.addEventListener("DOMContentLoaded", function () {
    
    // 1. Loading Screen Outro
    const loader = document.getElementById("loading-screen");
    window.addEventListener("load", function () {
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
        }, 500); // Swift reveal for fast logistics feel
    });

    // 2. Mobile Hamburger Menu Engine
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    function toggleMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

    hamburger.addEventListener("click", toggleMenu);

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if(navMenu.classList.contains("active")) {
                toggleMenu();
            }
        });
    });

    // 3. High Performance Scroll Animations (Intersection Observer)
    const elementsToReveal = document.querySelectorAll(".scroll-reveal");
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -30px 0px"
    });

    elementsToReveal.forEach(el => revealObserver.observe(el));

    // 4. Multi-Language Engine (English / German Translation Maps)
    const langButtons = document.querySelectorAll("[data-lang-btn]");
    const translatableElements = document.querySelectorAll(".data-lang");

    const dictionary = {
        en: {
            "Home": "Home",
            "Services": "Services",
            "Pricing": "Pricing",
            "Areas": "Areas",
            "Dispatch Now": "Dispatch Now",
            "24/7 Moves | Same Day Delivery": "24/7 Moves | Same Day Delivery",
            "Move On-Demand. Fast, Affordable & 100% Reliable.": "Move On-Demand. Fast, Affordable & 100% Reliable.",
            "We are not just another van service. We are your premium logistics team operating across London. Urgent jobs sorted.": "We are not just another van service. We are your premium logistics team operating across London. Urgent jobs sorted.",
            "Man & Van Hire From £25": "Man & Van Hire From £25",
            "Vans available right now in Hackney and surrounding boroughs. Short notice bookings accepted.": "Vans available right now in Hackney and surrounding boroughs. Short notice bookings accepted.",
            "Book via WhatsApp": "Book via WhatsApp",
            "Call 07349 992484": "Call 07349 992484",
            "Comprehensive Moving Solutions": "Comprehensive Moving Solutions",
            "From single item pickups to full property clearances, we handle it all with precision.": "From single item pickups to full property clearances, we handle it all with precision.",
            "Home & Flat Moves": "Home & Flat Moves",
            "Seamless relocation services for apartments, homes, and student accommodations across the UK.": "Seamless relocation services for apartments, homes, and student accommodations across the UK.",
            "Retail & Store Pickups": "Retail & Store Pickups",
            "Fast collection and delivery for oversized items from IKEA, B&Q, eBay, and independent retailers.": "Fast collection and delivery for oversized items from IKEA, B&Q, eBay, and independent retailers.",
            "Commercial & Office Moves": "Commercial & Office Moves",
            "Minimal downtime office relocations and secure storage transfers for your business assets.": "Minimal downtime office relocations and secure storage transfers for your business assets.",
            "Clearance & Waste Removal": "Clearance & Waste Removal",
            "Licensed waste removal, end-of-tenancy clearouts, and environmentally responsible junk disposal.": "Licensed waste removal, end-of-tenancy clearouts, and environmentally responsible junk disposal.",
            "Transparent Pricing, Zero Hidden Fees": "Transparent Pricing, Zero Hidden Fees",
            "We believe in straightforward logistics. Choose from short wheelbase or long wheelbase vans, with the option of one or two professional movers depending on your requirements.": "We believe in straightforward logistics. Choose from short wheelbase or long wheelbase vans, with the option of one or two professional movers depending on your requirements.",
            "All standard quotes cover a 2-hour window for ground floor operations. Nationwide deliveries and complex multi-floor jobs are quoted individually to ensure fair pricing.": "All standard quotes cover a 2-hour window for ground floor operations. Nationwide deliveries and complex multi-floor jobs are quoted individually to ensure fair pricing.",
            "Starting Rate": "Starting Rate",
            "Availability": "Availability",
            "Verified Drivers": "Verified Drivers",
            "Hidden Costs": "Hidden Costs",
            "Operating Across London & Beyond": "Operating Across London & Beyond",
            "And Nationwide Deliveries.": "And Nationwide Deliveries.",
            "It's Not Just A Move. It's Your Move.": "It's Not Just A Move. It's Your Move.",
            "Message us now for an immediate fixed-rate quote. We guarantee prompt service and professional handling of all your goods.": "Message us now for an immediate fixed-rate quote. We guarantee prompt service and professional handling of all your goods.",
            "Dispatch Line": "Dispatch Line",
            "Operating Base": "Operating Base",
            "Book Your Van Today": "Book Your Van Today",
            "Click to Call Dispatch": "Click to Call Dispatch",
            "Instant Message": "Instant Message",
            "Terms: Quotes for 2 hours (under 50 miles) on ground floors. Customer is responsible for item protection. Payment required before unloading.": "Terms: Quotes for 2 hours (under 50 miles) on ground floors. Customer is responsible for item protection. Payment required before unloading.",
            "Call Dispatch": "Call Dispatch"
        },
        de: {
            "Home": "Startseite",
            "Services": "Leistungen",
            "Pricing": "Preise",
            "Areas": "Einsatzgebiete",
            "Dispatch Now": "Jetzt Anfragen",
            "24/7 Moves | Same Day Delivery": "24/7 Umzüge | Lieferung am selben Tag",
            "Move On-Demand. Fast, Affordable & 100% Reliable.": "Umzüge auf Abruf. Schnell, Günstig & 100% Zuverlässig.",
            "We are not just another van service. We are your premium logistics team operating across London. Urgent jobs sorted.": "Wir sind nicht nur ein weiterer Transporter-Service. Wir sind Ihr Premium-Logistik-Team für ganz London. Dringende Aufträge werden sofort erledigt.",
            "Man & Van Hire From £25": "Transporter & Fahrer ab 25£",
            "Vans available right now in Hackney and surrounding boroughs. Short notice bookings accepted.": "Transporter jetzt in Hackney und den umliegenden Bezirken verfügbar. Kurzfristige Buchungen werden akzeptiert.",
            "Book via WhatsApp": "Über WhatsApp Buchen",
            "Call 07349 992484": "Anrufen 07349 992484",
            "Comprehensive Moving Solutions": "Umfassende Umzugslösungen",
            "From single item pickups to full property clearances, we handle it all with precision.": "Vom Einzeltransport bis zur kompletten Haushaltsauflösung – wir erledigen alles mit Präzision.",
            "Home & Flat Moves": "Haus- & Wohnungs-Umzüge",
            "Seamless relocation services for apartments, homes, and student accommodations across the UK.": "Reibungslose Umzugsdienste für Wohnungen, Häuser und Studentenunterkünfte in ganz Großbritannien.",
            "Retail & Store Pickups": "Einzelhandel & Möbelabholung",
            "Fast collection and delivery for oversized items from IKEA, B&Q, eBay, and independent retailers.": "Schnelle Abholung und Lieferung von sperrigen Artikeln von IKEA, B&Q, eBay und unabhängigen Einzelhändlern.",
            "Commercial & Office Moves": "Büro- & Firmenumzüge",
            "Minimal downtime office relocations and secure storage transfers for your business assets.": "Büroumzüge mit minimaler Ausfallzeit und sicherer Transport Ihrer Geschäftsausstattung.",
            "Clearance & Waste Removal": "Entrümpelung & Abfallentsorgung",
            "Licensed waste removal, end-of-tenancy clearouts, and environmentally responsible junk disposal.": "Lizenzierte Abfallentsorgung, Wohnungsauflösungen und umweltgerechte Entsorgung von Sperrmüll.",
            "Transparent Pricing, Zero Hidden Fees": "Transparente Preise, Keine Versteckten Kosten",
            "We believe in straightforward logistics. Choose from short wheelbase or long wheelbase vans, with the option of one or two professional movers depending on your requirements.": "Wir glauben an unkomplizierte Logistik. Wählen Sie zwischen Transportern mit kurzem oder langem Radstand, mit einem oder zwei professionellen Helfern.",
            "All standard quotes cover a 2-hour window for ground floor operations. Nationwide deliveries and complex multi-floor jobs are quoted individually to ensure fair pricing.": "Alle Standardangebote umfassen ein 2-Stunden-Fenster für das Erdgeschoss. Bundesweite Lieferungen und komplexe Einsätze werden individuell kalkuliert.",
            "Starting Rate": "Startpreis",
            "Availability": "Verfügbarkeit",
            "Verified Drivers": "Geprüfte Fahrer",
            "Hidden Costs": "Versteckte Kosten",
            "Operating Across London & Beyond": "Einsatzgebiete in London & Umgebung",
            "And Nationwide Deliveries.": "Und Bundesweite Lieferungen.",
            "It's Not Just A Move. It's Your Move.": "Es ist nicht nur ein Umzug. Es ist Ihr Umzug.",
            "Message us now for an immediate fixed-rate quote. We guarantee prompt service and professional handling of all your goods.": "Schreiben Sie uns jetzt für ein sofortiges Festpreisangebot. Wir garantieren schnellen Service und professionelle Handhabung all Ihrer Güter.",
            "Dispatch Line": "Zentrale",
            "Operating Base": "Hauptsitz",
            "Book Your Van Today": "Buchen Sie Ihren Transporter Heute",
            "Click to Call Dispatch": "Zentrale Anrufen",
            "Instant Message": "Sofortnachricht",
            "Terms: Quotes for 2 hours (under 50 miles) on ground floors. Customer is responsible for item protection. Payment required before unloading.": "Bedingungen: Angebote für 2 Stunden (unter 50 Meilen) im Erdgeschoss. Kunde ist für den Schutz der Gegenstände verantwortlich. Zahlung vor dem Entladen erforderlich.",
            "Call Dispatch": "Zentrale Anrufen"
        }
    };

    function switchLanguage(lang) {
        langButtons.forEach(btn => {
            if (btn.getAttribute("data-lang-btn") === lang) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });

        translatableElements.forEach(el => {
            const key = el.getAttribute("data-en");
            if (dictionary[lang] && dictionary[lang][key]) {
                el.textContent = dictionary[lang][key];
            }
        });
    }

    langButtons.forEach(button => {
        button.addEventListener("click", function() {
            const selectedLang = this.getAttribute("data-lang-btn");
            switchLanguage(selectedLang);
        });
    });
});
