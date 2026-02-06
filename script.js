// Menu Mobile
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(n =>
    n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    })
);

// Formulário de Orçamento
document.getElementById('formOrcamento').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const servico = document.getElementById('servico').value;
    const quantidade = document.getElementById('quantidade').value;
    const mensagem = document.getElementById('mensagem').value;

    // Formatar mensagem para WhatsApp
    const texto = `Olá! Gostaria de um orçamento para bordados:

Nome: ${nome}
Telefone: ${telefone}
Serviço: ${servico}
Quantidade: ${quantidade}
Detalhes: ${mensagem}`;

    // Codificar para URL
    const textoCodificado = encodeURIComponent(texto);

    // Número do WhatsApp
    const numeroWhatsApp = '5511999999999';

    // Redirecionar para WhatsApp
    window.open(
        `https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`,
        '_blank'
    );
});

// Formulário de Cadastro
document.getElementById('formCadastro').addEventListener('submit', function (e) {
    e.preventDefault();

    alert('Cadastro realizado com sucesso! Entraremos em contato em breve.');

    // Limpar formulário
    this.reset();
});

// Scroll suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Atualizar dashboard financeiro (exemplo)
function atualizarDashboard() {
    const dataAtual = new Date();
    const opcoes = { month: 'long', year: 'numeric' };

    document.querySelector('.finance-section h2').innerHTML =
        `Área Financeira - ${dataAtual.toLocaleDateString('pt-BR', opcoes)}`;
}

// Inicializar
document.addEventListener('DOMContentLoaded', function () {
    atualizarDashboard();

    // Adicionar classe active ao item do menu conforme scroll
    window.addEventListener('scroll', function () {
        let current = '';
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }

            // ===== FILTRO PORTFÓLIO =====
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remover active de todos os botões
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Adicionar active ao botão clicado
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filterValue === 'all') {
                // No filtro "Todos", mostrar apenas os itens sem display: none inicial
                if (item.style.display === 'none') {
                    // Manter escondidos os itens que devem aparecer apenas em categorias específicas
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                } else {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                }
            } else if (filterValue === 'uniformes') {
                // No filtro "Bordados em Kimono", mostrar TODOS os itens dessa categoria
                if (item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            } else {
                // Para outras categorias, comportamento normal
                if (item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            }
        });
    });
});
        });
    });
});
