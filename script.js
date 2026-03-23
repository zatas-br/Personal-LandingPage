document.addEventListener("DOMContentLoaded", function () {
    // Observer para animações de scroll
    const btnWhatsapp = document.getElementById('btn-whatsapp-flutuante');


    if (btnWhatsapp) {
        btnWhatsapp.addEventListener('click', (event) => {
            event.preventDefault(); // Evita que a página role para o topo ao clicar no link vazio

            // 1. Defina o número de destino (Apenas números, inclua DDI e DDD)
            const numeroDestino = "+5516997333787";

            // 2. Escreva sua frase livremente
            const mensagem = "Olá! Quero transformar meu físico e atingir meu verdadeiro potencial. Como funciona o seu acompanhamento?";

            // 3. O JavaScript converte os espaços e acentos automaticamente para URL
            const mensagemCodificada = encodeURIComponent(mensagem);

            // 4. Monta o link final e abre em uma nova aba
            const urlFinal = `https://wa.me/${numeroDestino}?text=${mensagemCodificada}`;
            window.open(urlFinal, '_blank');
        });
    }



    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                }
            });
        },
        {
            threshold: 0.1, // A animação começa quando 10% do elemento está visível
        }
    );

    const revealables = document.querySelectorAll(".revealable");
    revealables.forEach((el) => {
        observer.observe(el);
    });

    // Lógica do Menu Mobile
    const menuBtn = document.getElementById("menu-btn");
    const menuOverlay = document.getElementById("menu-overlay");
    const menuLinks = document.querySelectorAll("#menu-overlay .menu-link");

    menuBtn.addEventListener("click", () => {
        menuOverlay.classList.toggle("hidden");
    });

    // Fecha o menu mobile ao clicar em um link
    menuLinks.forEach((link) => {
        link.addEventListener("click", () => {
            menuOverlay.classList.add("hidden");
        });
    });
});