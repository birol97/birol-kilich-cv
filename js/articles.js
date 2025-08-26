// Articles Management for DesignHub Blog

// Sample articles data
const articlesData = [
    {
        id: 1,
        title: "The Future of UI Design: Embracing Minimalism and Micro-interactions",
        excerpt: "Discover how minimalist design principles combined with thoughtful micro-interactions are shaping the future of user interface design.",
        category: "UI Design",
        author: "Sarah Chen",
        date: "2024-01-15",
        readTime: "8 min read",
        views: 1247,
        likes: 89,
        content: `
            <h2>The Evolution of UI Design</h2>
            <p>In recent years, we've witnessed a significant shift in UI design philosophy. The trend is moving away from complex, feature-heavy interfaces toward clean, minimalist designs that prioritize user experience above all else.</p>
            
            <h3>Key Principles of Modern UI Design</h3>
            <ul>
                <li><strong>Clarity:</strong> Every element serves a purpose</li>
                <li><strong>Hierarchy:</strong> Clear visual organization</li>
                <li><strong>Consistency:</strong> Unified design language</li>
                <li><strong>Accessibility:</strong> Inclusive design for all users</li>
            </ul>
            
            <blockquote>
                "Good design is actually a lot harder to notice than poor design, in part because good designs fit our needs so well that the design is invisible."
                <cite>- Don Norman</cite>
            </blockquote>
        `
    },
    {
        id: 2,
        title: "UX Research Methods: From User Interviews to A/B Testing",
        excerpt: "A comprehensive guide to essential UX research methods that will help you understand your users and create better products.",
        category: "UX Research",
        author: "Michael Rodriguez",
        date: "2024-01-12",
        readTime: "12 min read",
        views: 2156,
        likes: 156,
        content: `
            <h2>Understanding Your Users</h2>
            <p>UX research is the foundation of user-centered design. It helps us understand user needs, behaviors, and motivations, enabling us to create products that truly serve their intended audience.</p>
            
            <h3>Qualitative Research Methods</h3>
            <h4>1. User Interviews</h4>
            <p>One-on-one conversations with users provide deep insights into their thoughts, feelings, and experiences.</p>
            
            <h4>2. Usability Testing</h4>
            <p>Observing users as they interact with your product reveals pain points and opportunities for improvement.</p>
            
            <blockquote>
                "The best research is the research that actually gets used to make decisions."
                <cite>- Erika Hall</cite>
            </blockquote>
        `
    },
    {
        id: 3,
        title: "Prototyping Best Practices: From Low-Fidelity to High-Fidelity",
        excerpt: "Learn the essential prototyping techniques and tools that will help you iterate quickly and validate your design ideas effectively.",
        category: "Prototyping",
        author: "Emma Thompson",
        date: "2024-01-10",
        readTime: "10 min read",
        views: 1893,
        likes: 134,
        content: `
            <h2>The Prototyping Process</h2>
            <p>Prototyping is an iterative process that allows designers to explore ideas, test assumptions, and gather feedback before investing in full development.</p>
            
            <h3>Low-Fidelity Prototypes</h3>
            <p>Start with simple, quick prototypes to explore concepts and gather early feedback.</p>
            
            <h4>Paper Prototypes</h4>
            <ul>
                <li>Fast and inexpensive</li>
                <li>Easy to modify</li>
                <li>Encourages collaboration</li>
                <li>Focuses on functionality over aesthetics</li>
            </ul>
            
            <blockquote>
                "Prototyping is the conversation you have with your ideas."
                <cite>- Tom Wujec</cite>
            </blockquote>
        `
    },
    {
        id: 4,
        title: "Accessibility in Design: Creating Inclusive Digital Experiences",
        excerpt: "Explore the importance of accessibility in design and learn practical techniques to make your digital products usable by everyone.",
        category: "Accessibility",
        author: "David Kim",
        date: "2024-01-08",
        readTime: "15 min read",
        views: 3421,
        likes: 234,
        content: `
            <h2>Why Accessibility Matters</h2>
            <p>Accessibility is not just a legal requirement—it's a fundamental aspect of good design. When we design for accessibility, we create better experiences for everyone.</p>
            
            <h3>Understanding Disabilities</h3>
            <p>Digital accessibility addresses various types of disabilities:</p>
            
            <h4>Visual Disabilities</h4>
            <ul>
                <li>Blindness</li>
                <li>Low vision</li>
                <li>Color blindness</li>
                <li>Photosensitivity</li>
            </ul>
            
            <blockquote>
                "The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect."
                <cite>- Tim Berners-Lee</cite>
            </blockquote>
        `
    },
    {
        id: 5,
        title: "Design Systems: Building Consistent and Scalable Interfaces",
        excerpt: "Learn how to create and maintain a comprehensive design system that ensures consistency across your digital products.",
        category: "UI Design",
        author: "Lisa Wang",
        date: "2024-01-05",
        readTime: "14 min read",
        views: 2765,
        likes: 198,
        content: `
            <h2>What is a Design System?</h2>
            <p>A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications.</p>
            
            <h3>Core Components of a Design System</h3>
            <h4>1. Design Tokens</h4>
            <p>Design tokens are the atomic elements of your design system:</p>
            <ul>
                <li>Colors</li>
                <li>Typography</li>
                <li>Spacing</li>
                <li>Border radius</li>
                <li>Shadows</li>
                <li>Animations</li>
            </ul>
            
            <blockquote>
                "A design system is only as good as the people who use it."
                <cite>- Brad Frost</cite>
            </blockquote>
        `
    },
    {
        id: 6,
        title: "User Journey Mapping: Visualizing the Customer Experience",
        excerpt: "Master the art of user journey mapping to understand your users' experiences and identify opportunities for improvement.",
        category: "UX Research",
        author: "Alex Johnson",
        date: "2024-01-03",
        readTime: "11 min read",
        views: 1987,
        likes: 145,
        content: `
            <h2>Understanding User Journey Mapping</h2>
            <p>User journey mapping is a powerful tool that helps visualize the complete experience a user has with your product or service over time.</p>
            
            <h3>What is a User Journey Map?</h3>
            <p>A user journey map is a visual representation of a user's experience with your product, showing their actions, thoughts, emotions, and pain points throughout their interaction.</p>
            
            <h4>Key Elements of a Journey Map</h4>
            <ul>
                <li><strong>Persona:</strong> The user you're mapping for</li>
                <li><strong>Timeline:</strong> The sequence of events</li>
                <li><strong>Touchpoints:</strong> Points of interaction</li>
                <li><strong>Emotions:</strong> User feelings at each stage</li>
                <li><strong>Pain Points:</strong> Problems and frustrations</li>
                <li><strong>Opportunities:</strong> Areas for improvement</li>
            </ul>
            
            <blockquote>
                "A journey map is only as good as the insights it generates and the actions it inspires."
                <cite>- Jim Kalbach</cite>
            </blockquote>
        `
    }
];

// Initialize articles
document.addEventListener('DOMContentLoaded', function() {
    loadArticles();
    setupLoadMore();
});

// Load articles into the grid
function loadArticles(articles = articlesData) {
    const articlesGrid = document.getElementById('articlesGrid');
    if (!articlesGrid) return;

    articlesGrid.innerHTML = '';
    
    articles.forEach(article => {
        const articleCard = createArticleCard(article);
        articlesGrid.appendChild(articleCard);
    });
}

// Create article card element
function createArticleCard(article) {
    const card = document.createElement('article');
    card.className = 'article-card scroll-animate';
    card.setAttribute('data-article-id', article.id);
    
    card.innerHTML = `
        <div class="article-image"></div>
        <div class="article-content">
            <div class="article-meta">
                <span class="article-category">${article.category}</span>
                <span class="article-date">${formatDate(article.date)}</span>
                <span class="article-read-time">${article.readTime}</span>
            </div>
            <h3 class="article-title">${article.title}</h3>
            <p class="article-excerpt">${article.excerpt}</p>
            <div class="article-footer">
                <div class="article-stats">
                    <span class="stat-item">
                        <i class="fas fa-eye"></i>
                        ${article.views}
                    </span>
                    <span class="stat-item">
                        <i class="fas fa-heart"></i>
                        ${article.likes}
                    </span>
                </div>
                <a href="#" class="read-more" onclick="openArticle(${article.id})">
                    Read More <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    `;
    
    // Add click event to entire card
    card.addEventListener('click', function() {
        openArticle(article.id);
    });
    
    return card;
}

// Open article in modal
function openArticle(articleId) {
    const article = articlesData.find(a => a.id === articleId);
    if (!article) return;
    
    const modal = document.getElementById('articleModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <div class="modal-header">
            <h2 class="modal-title">${article.title}</h2>
            <p class="modal-subtitle">
                By ${article.author} • ${formatDate(article.date)} • ${article.readTime}
            </p>
        </div>
        <div class="article-full">
            ${article.content}
        </div>
        <div class="social-share">
            <a href="#" class="share-btn twitter" onclick="shareArticle('${article.title}', 'twitter')">
                <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="share-btn facebook" onclick="shareArticle('${article.title}', 'facebook')">
                <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="share-btn linkedin" onclick="shareArticle('${article.title}', 'linkedin')">
                <i class="fab fa-linkedin-in"></i>
            </a>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Share article on social media
function shareArticle(title, platform) {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(title);
    
    let shareUrl = '';
    
    switch (platform) {
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
            break;
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            break;
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
            break;
    }
    
    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }
}

// Setup load more functionality
function setupLoadMore() {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (!loadMoreBtn) return;
    
    let currentPage = 1;
    const articlesPerPage = 6;
    
    loadMoreBtn.addEventListener('click', function() {
        const startIndex = currentPage * articlesPerPage;
        const endIndex = startIndex + articlesPerPage;
        const moreArticles = articlesData.slice(startIndex, endIndex);
        
        if (moreArticles.length > 0) {
            moreArticles.forEach(article => {
                const articleCard = createArticleCard(article);
                document.getElementById('articlesGrid').appendChild(articleCard);
            });
            
            currentPage++;
            
            if (endIndex >= articlesData.length) {
                loadMoreBtn.style.display = 'none';
            }
        } else {
            loadMoreBtn.style.display = 'none';
        }
    });
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Search and filter functionality
function searchArticles(query) {
    const filteredArticles = articlesData.filter(article => {
        const searchText = `${article.title} ${article.excerpt} ${article.category} ${article.author}`.toLowerCase();
        return searchText.includes(query.toLowerCase());
    });
    
    loadArticles(filteredArticles);
}

// Filter by category
function filterByCategory(category) {
    const filteredArticles = category === 'all' 
        ? articlesData 
        : articlesData.filter(article => article.category.toLowerCase().includes(category.replace('-', ' ')));
    
    loadArticles(filteredArticles);
}

// Export functions for use in main.js
window.Articles = {
    loadArticles,
    openArticle,
    searchArticles,
    filterByCategory,
    shareArticle
}; 