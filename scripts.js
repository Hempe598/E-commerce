let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');
const progressBar = document.querySelector('.progress-bar .progress');
const productDisplayCount = 6; // Exibe 6 produtos de uma vez (3 na parte superior, 3 na parte inferior)



// Atualiza a barra de progresso do carrossel
function updateProgressBar() {
    if (!progressBar || slides.length === 0) return;
    const progress = ((currentSlide + 1) / slides.length) * 100;
    progressBar.style.width = progress + '%';
}

// Função para alternar o menu hambúrguer no mobile
function toggleMenu() {
    const mobileNav = document.getElementById('mobileNav');
    if (mobileNav) {
        mobileNav.classList.toggle('active');
    }
}

// Função para alternar o menu hambúrguer para o novo design
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

  

// Mostra a slide atual
function showSlide(index) {
    if (slides.length === 0) return;
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    updateProgressBar();
}

// Navega para a próxima slide
function nextSlide() {
    if (slides.length === 0) return;
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Navega para a slide anterior
function prevSlide() {
    if (slides.length === 0) return;
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}



// Exibe produtos em grupos de 6 (3 na parte superior, 3 na parte inferior) com animação
function showProducts(products, startIndex, displayCount) {
    if (!products || products.length === 0) return;

    // Transição de saída animada
    products.forEach((product) => {
        product.style.opacity = '0';
        product.style.transform = 'scale(0.95)';
    });

    setTimeout(() => {
        products.forEach((product, i) => {
            product.style.display = (i >= startIndex && i < startIndex + displayCount) ? 'block' : 'none';
            product.style.opacity = (i >= startIndex && i < startIndex + displayCount) ? '1' : '0';
            product.style.transform = (i >= startIndex && i < startIndex + displayCount) ? 'scale(1)' : 'scale(0.95)';
        });
    }, 300); // Atraso para a animação de saída antes de mostrar o novo conjunto
}

// Configura o carrossel de produtos com navegação de setas
function setupProductCarousel(sectionSelector) {
    const productItems = document.querySelectorAll(`${sectionSelector} .product-item`);
    const leftArrow = document.querySelector(`${sectionSelector} .left-arrow`);
    const rightArrow = document.querySelector(`${sectionSelector} .right-arrow`);
    let currentIndex = 0;

    if (productItems.length === 0 || !leftArrow || !rightArrow) return;

    const displayCount = productDisplayCount;

    function updateVisibleProducts() {
        showProducts(productItems, currentIndex, displayCount);
    }

    function nextProducts() {
        if (currentIndex + displayCount < productItems.length) {
            currentIndex += displayCount;
            updateVisibleProducts();
        } else {
            currentIndex = 0; // Reseta para o início quando chegar ao fim
            updateVisibleProducts();
        }
    }

    function previousProducts() {
        if (currentIndex - displayCount >= 0) {
            currentIndex -= displayCount;
            updateVisibleProducts();
        } else {
            currentIndex = Math.floor((productItems.length - 1) / displayCount) * displayCount; // Salta para o último conjunto
            updateVisibleProducts();
        }
    }

    // Eventos de clique nas setas
    leftArrow.addEventListener('click', previousProducts);
    rightArrow.addEventListener('click', nextProducts);

    // Exibe o primeiro grupo de produtos na carga da página
    updateVisibleProducts();
}

// Inicializa o carrossel automático do slide
if (slides.length > 0) setInterval(nextSlide, 5000); // Ajustado para maior tempo entre slides

document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-now-button');
    if (startButton) {
        startButton.addEventListener('click', () => {
            alert('Botão Start Now clicado!');
        });
    }

    // Configura o carrossel de produtos para a seção principal
    setupProductCarousel('.product-list'); // Certifique-se de que este seletor corresponda ao contêiner correto
    setupProductCarousel('.additional-product-grid .product-listing'); // Exemplo para outra seção de produto
});

// Additional responsive JavaScript
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const hero = document.querySelector('.hero');
    if (width <= 768) {
        hero.style.flexDirection = 'column';
    } else {
        hero.style.flexDirection = 'row';
    }
});



// Seleciona todas as seções de "Bestseller Products"
const bestsellerSections = document.querySelectorAll(".product-categories-wrapper1");

bestsellerSections.forEach(section => {
    const categories = section.querySelectorAll(".product-categories a");
    const leftArrow = section.querySelector(".category-arrows .left-arrow");
    const rightArrow = section.querySelector(".category-arrows .right-arrow");

    let currentCategoryIndex = 0;

    // Função para atualizar a categoria ativa
    function updateActiveCategory(index) {
        categories.forEach((category, i) => {
            category.classList.toggle("active", i === index);
        });
    }

    // Evento para a seta da esquerda
    leftArrow.addEventListener("click", () => {
        currentCategoryIndex = (currentCategoryIndex - 1 + categories.length) % categories.length;
        updateActiveCategory(currentCategoryIndex);
    });

    // Evento para a seta da direita
    rightArrow.addEventListener("click", () => {
        currentCategoryIndex = (currentCategoryIndex + 1) % categories.length;
        updateActiveCategory(currentCategoryIndex);
    });

    // Evento para clique direto nas categorias
    categories.forEach((category, index) => {
        category.addEventListener("click", (event) => {
            event.preventDefault(); // Evita o comportamento padrão do link
            currentCategoryIndex = index;
            updateActiveCategory(currentCategoryIndex);
        });
    });

    // Inicializa a primeira categoria como ativa
    updateActiveCategory(currentCategoryIndex);
});





// Seleciona todas as seções de "Bestseller Products"
const bestsellerSections2 = document.querySelectorAll(".product-categories-wrapper2");

bestsellerSections2.forEach(section2 => {
    const categories2 = section2.querySelectorAll(".product-categories a");
    const leftArrow2 = section2.querySelector(".category-arrows .left-arrow");
    const rightArrow2 = section2.querySelector(".category-arrows .right-arrow");

    let currentCategoryIndex2 = 0;

    // Função para atualizar a categoria ativa
    function updateActiveCategory(index2) {
        categories2.forEach((category2, i) => {
            category2.classList.toggle("active", i === index2);
        });
    }

    // Evento para a seta da esquerda
    leftArrow2.addEventListener("click", () => {
        currentCategoryIndex2 = (currentCategoryIndex2 - 1 + categories2.length) % categories2.length;
        updateActiveCategory(currentCategoryIndex2);
    });

    // Evento para a seta da direita
    rightArrow2.addEventListener("click", () => {
        currentCategoryIndex2 = (currentCategoryIndex2 + 1) % categories2.length;
        updateActiveCategory(currentCategoryIndex2);
    });

    // Evento para clique direto nas categorias
    categories2.forEach((category2, index2) => {
        category2.addEventListener("click", (event2) => {
            event2.preventDefault(); // Evita o comportamento padrão do link
            currentCategoryIndex2 = index2;
            updateActiveCategory(currentCategoryIndex2);
        });
    });

    // Inicializa a primeira categoria como ativa
    updateActiveCategory(currentCategoryIndex2);
});



















































