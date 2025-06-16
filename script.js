document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navList = document.querySelector('.nav-list');
    const dropdowns = document.querySelectorAll('.dropdown');

    // Funcionalidade para o menu hambúrguer
    hamburgerMenu.addEventListener('click', function() {
        navList.classList.toggle('active');
        hamburgerMenu.classList.toggle('active'); // Adiciona classe para animação do hambúrguer
    });

    // Funcionalidade para os dropdowns em modo responsivo
    dropdowns.forEach(dropdown => {
        const dropbtn = dropdown.querySelector('.dropbtn');
        dropbtn.addEventListener('click', function(event) {
            // Previne o comportamento padrão do link, se houver
            event.preventDefault(); 
            // Alterna a classe 'active' no pai (dropdown)
            dropdown.classList.toggle('active');
        });
    });

    // Fechar menu hambúrguer ao clicar fora (opcional)
    document.addEventListener('click', function(event) {
        if (!navList.contains(event.target) && !hamburgerMenu.contains(event.target)) {
            navList.classList.remove('active');
            hamburgerMenu.classList.remove('active');
            // Fechar todos os dropdowns também
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
});