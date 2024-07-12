document.addEventListener('DOMContentLoaded', function () {
    // Exibir formulário de e-mail ao clicar no botão
    var emailButton = document.getElementById('emailButton');
    var emailForm = document.getElementById('emailForm');

    emailButton.addEventListener('click', function () {
        emailForm.style.display = 'block';
        emailButton.style.display = 'none';
    });

    // Redirecionar após enviar o formulário
    var form = document.getElementById('emailForm');
    form.addEventListener('submit', function () {
        // Adicione aqui a URL para redirecionamento após enviar o formulário
        window.location.href = 'https://docs.google.com/forms/d/1gGVGhSKoHzdkLDPiIGti2YV2KczuYQVQrgASOP4rn-Q/edit?pli=1';
    });
});
