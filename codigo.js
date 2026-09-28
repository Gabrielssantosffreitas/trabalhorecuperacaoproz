const form = document.getElementById('formulario');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const idade = document.getElementById('idade').value;
    const cidade = document.getElementById('cidade').value 
alert(`Nome: ${name}\nIdade: ${idade}\nCidade: ${cidade}`);
});