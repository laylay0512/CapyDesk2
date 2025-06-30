document.addEventListener("DOMContentLoaded", () => {
  // Botão hamburguer
  const hamburguer = document.getElementById("hamburguer");
  const menu = document.getElementById("menu");

  hamburguer.addEventListener("click", () => {
    menu.classList.toggle("show");
    hamburguer.innerHTML = menu.classList.contains("show") ? "✖" : "☰";
  });

  const servicos = document.querySelectorAll(".item");
  const textarea = document.querySelector("textarea[name='descricao']");
  const pedidoSection = document.getElementById("pedido");

  servicos.forEach(item => {
    item.addEventListener("click", () => {
      const servicoSelecionado = item.getAttribute("data-servico");
      textarea.value = `Olá, gostaria de solicitar: ${servicoSelecionado}`;
      pedidoSection.scrollIntoView({ behavior: "smooth" });
    });
  });

  const container = document.createElement('div');
  container.id = 'emoji-fogos';
  document.body.appendChild(container);

  const emojis = ['📖', '📙'];
  const quantidade = 60;

  for (let i = 0; i < quantidade; i++) {
    const emoji = document.createElement('div');
    emoji.classList.add('emoji-fogo');
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    emoji.style.left = Math.random() * 100 + 'vw';

    const tamanho = 20 + Math.random() * 30;
    emoji.style.fontSize = tamanho + 'px';

    emoji.style.animationDelay = (Math.random() * 1.5) + 's';

    container.appendChild(emoji);

    emoji.addEventListener('animationend', () => {
      emoji.remove();
    });
  }
});
