function renderHome() {
  const container = document.createElement('div');
  container.innerHTML = `
    <section class="hero">
      <h2>Tecnologia a serviço da proteção animal</h2>
      <p>Usamos o poder da comunidade e da tecnologia para resgatar, cuidar e encontrar lares para animais em situação de risco.</p>
      <a href="#ajudar" class="btn">Seja um Voluntário</a>
    </section>

    <section class="sobre">
      <h2>Quem Somos</h2>
      
      <div class="container-img">
        <img 
          src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80" 
          alt="Gato fofo deitado olhando para a câmera sobre um fundo verde"
        >
      </div>

      <p>A <strong>Paws & Code</strong> é uma ONG fictícia criada para unir desenvolvedores, protetores e amantes dos animais. Desenvolvemos soluções tecnológicas abertas para mapeamento de abandono e gestão de abrigos.</p>
      
      <div class="pilares">
        <article>
          <h3>Missão</h3>
          <p>Mapear, resgatar e reabilitar animais de rua através do apoio da comunidade tecnológica.</p>
        </article>
        <article>
          <h3>Visão</h3>
          <p>Criação de redes de apoio inteligentes para diminuir o abandono em áreas urbanas.</p>
        </article>
        <article>
          <h3>Valores</h3>
          <p>Carinho, empatia, inovação social e colaboração open-source.</p>
        </article>
      </div>
    </section>

    <section class="impacto">
      <h2>Nosso Impacto</h2>
      <ul>
        <li><strong>+450</strong> Animais resgatados e adotados</li>
        <li><strong>+12</strong> Projetos de código aberto ativos</li>
        <li><strong>+80</strong> Voluntários engajados</li>
      </ul>
    </section>
  `;
  return container;
}

function renderProjetos() {
  const container = document.createElement('div');
  container.innerHTML = `
    <section class="iniciativas">
      <h2>Nossos Projetos Ativos</h2>
      <p style="margin-bottom: 1.5rem;">Conheça as ações que estão mudando a realidade dos animais resgatados:</p>
      
      <div class="grid-projetos">
        <article class="card-projeto">
          <h3>App AdoteUmPet</h3>
          <p>Aplicativo web simples focado em conectar abrigos locais a adotantes conscientes na região.</p>
          <span class="status em-andamento">Em Andamento</span>
        </article>
        
        <article class="card-projeto">
          <h3>Mutirão de Castração</h3>
          <p>Ação quinzenal com veterinários voluntários para controle populacional ético de gatos e cães.</p>
          <span class="status continuo">Ação Contínua</span>
        </article>

        <article class="card-projeto">
          <h3>Ração Solidária</h3>
          <p>Pontos de arrecadação física e digital para distribuição de alimentos a protetores independentes.</p>
          <span class="status continuo">Ação Contínua</span>
        </article>
      </div>
    </section>
  `;
  return container;
}

// TEMPLATE DE FORMULÁRIO COMPLETO
function renderFormulario() {
  const container = document.createElement('div');
  container.innerHTML = `
    <section class="form-container">
      <h2>Seja um Colaborador</h2>
      <p style="margin-bottom: 1.5rem;">Preencha os dados abaixo para se juntar à nossa rede de voluntários.</p>

      <form id="form-cadastro">
        <fieldset>
          <legend>Identificação Pessoal</legend>

          <div class="field-group">
            <label for="nome">Nome Completo:*</label>
            <input type="text" id="nome" name="nome" required minlength="3" placeholder="Digite seu nome">
          </div>

          <div class="field-group">
            <label for="email">E-mail:*</label>
            <input type="email" id="email" name="email" required placeholder="seuemail@exemplo.com">
          </div>

          <div class="field-group">
            <label for="cpf">CPF:*</label>
            <input 
              type="text" 
              id="cpf" 
              name="cpf" 
              required 
              maxlength="14" 
              inputmode="numeric"
              pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}"
              placeholder="000.000.000-00"
              title="Digite o CPF no formato 000.000.000-00"
            >
          </div>

          <div class="field-group">
            <label for="telefone">Telefone:*</label>
            <input 
              type="tel" 
              id="telefone" 
              name="telefone" 
              required 
              maxlength="15" 
              inputmode="tel"
              pattern="\\(\\d{2}\\) \\d{4,5}-\\d{4}"
              placeholder="(00) 00000-0000"
              title="Digite o telefone no formato (00) 00000-0000"
            >
          </div>
        </fieldset>

        <fieldset>
          <legend>Endereço</legend>

          <div class="field-group">
            <label for="cep">CEP:*</label>
            <input 
              type="text" 
              id="cep" 
              name="cep" 
              required 
              maxlength="9" 
              inputmode="numeric"
              pattern="\\d{5}-\\d{3}"
              placeholder="00000-000"
              title="Digite o CEP no formato 00000-000"
            >
          </div>
        </fieldset>

        <fieldset>
          <legend>Como quer contribuir?</legend>

          <div class="field-group">
            <label for="area">Área de Interesse:*</label>
            <select id="area" name="area" required>
              <option value="">Selecione uma área...</option>
              <option value="resgate">Resgate e Lar Temporário</option>
              <option value="desenvolvimento">Desenvolvimento / TI</option>
              <option value="eventos">Apoio em Eventos / Feiras</option>
              <option value="divulgacao">Redes Sociais e Design</option>
            </select>
          </div>
        </fieldset>

        <button type="submit" class="btn">Enviar Cadastro</button>
      </form>
    </section>
  `;
  return container;
}

const routes = {
  '#home': renderHome,
  '#projetos': renderProjetos,
  '#ajudar': renderFormulario
};

function navigate() {
  const hash = window.location.hash || '#home';
  const renderFn = routes[hash] || renderHome;
  const appContainer = document.querySelector('#app');
  
  if (appContainer) {
    appContainer.innerHTML = '';
    appContainer.appendChild(renderFn());
  }

  document.querySelectorAll('header nav a').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === hash);
  });
}

window.addEventListener('hashchange', navigate);
window.addEventListener('DOMContentLoaded', navigate);