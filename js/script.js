// Mobile menu toggle
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");
if(menuIcon && navbar){
    menuIcon.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
}

// Keyword Form
const keywordForm = document.querySelector('.keyword-form');
if(keywordForm){
    keywordForm.addEventListener('submit', e => {
        e.preventDefault();
        const input = keywordForm.querySelector('input');
        const keyword = input.value.trim();
        const resultsBox = document.querySelector('.results-box ul');

        if(keyword === ''){
            alert('Please enter a keyword');
            return;
        }

        // Mock results
        resultsBox.innerHTML = `
            <li><strong>Search Volume:</strong> 1,200</li>
            <li><strong>Competition:</strong> Medium</li>
            <li><strong>Related Keywords:</strong> seo tools, keyword analysis, smart seo</li>
        `;

        input.value = '';
    });
}

// SEO Form
const seoForm = document.querySelector('.seo-form');
if(seoForm){
    seoForm.addEventListener('submit', e => {
        e.preventDefault();

        const textarea = seoForm.querySelector('textarea');
        const keywordInput = seoForm.querySelector('input');
        const keyword = keywordInput.value.trim();
        const content = textarea.value.trim();

        if(content === '' || keyword === ''){
            alert('Please enter both content and keyword');
            return;
        }

        // --- Simple mock logic ---
        const wordCount = content.split(/\s+/).length;
        const keywordCount = (content.toLowerCase().match(new RegExp(keyword.toLowerCase(), "g")) || []).length;
        const density = ((keywordCount / wordCount) * 100).toFixed(2);

        // Mock SEO score
        const score = 70 + Math.floor(Math.random() * 30);

        // Fill in results
        document.getElementById("seoScore").textContent = `${score}/100`;
        document.getElementById("keywordDensity").textContent = `${density}%`;
        document.getElementById("readability").textContent = "Good"; // placeholder
        document.getElementById("metaTags").textContent = "Missing description"; // placeholder

        // Suggestions
        let suggestion = "";
        if(density < 1){
            suggestion = "Add your keyword more frequently.";
        } else if(density > 3){
            suggestion = "Reduce keyword usage to avoid stuffing.";
        } else {
            suggestion = "Perfect keyword density 👍";
        }
        document.getElementById("suggestions").textContent = `💡 Suggestion: ${suggestion}`;

        // Show results box + smooth scroll
        const resultsBox = document.getElementById("seoResults");
        resultsBox.style.display = "block";
        resultsBox.scrollIntoView({ behavior: "smooth" });

        // Reset form
        textarea.value = '';
        keywordInput.value = '';
    });
}


// Dashboard: Populate recent analyses
const dashboardContainer = document.querySelector('.dashboard-container');
if(dashboardContainer){
    const recentKeywords = ['smart seo', 'keyword tool', 'seo audit'];
    const recentSEO = ['Article 1', 'Blog Post SEO', 'Landing Page'];

    const keywordBox = dashboardContainer.querySelector('.results-box:nth-child(2) ul');
    if(keywordBox){
        keywordBox.innerHTML = recentKeywords.map(k => `<li>${k}</li>`).join('');
    }

    const seoBox = dashboardContainer.querySelector('.results-box:nth-child(3) ul');
    if(seoBox){
        seoBox.innerHTML = recentSEO.map(s => `<li>${s}</li>`).join('');
    }
}
