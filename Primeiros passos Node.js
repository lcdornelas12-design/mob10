<!DOCTYPE html>
<!-- saved from url=(0049)https://almeida-cma.github.io/mob10/6-nodejs.html -->
<html lang="pt-BR"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>🎓 Aula: Primeiros Passos com Node.js</title>
<style>
  * { margin:0; padding:0; box-sizing:border-box; }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #090d16 0%, #0f172a 50%, #082f49 100%);
    padding: 20px 14px 90px;
    min-height: 100vh;
    color: #1e293b;
  }
  .container { max-width: 1100px; margin: 0 auto; }

  /* HEADER */
  .header {
    background: linear-gradient(135deg, #16a34a 0%, #0284c7 50%, #7c3aed 100%);
    border-radius: 20px;
    padding: 34px 24px;
    margin-bottom: 22px;
    color: #fff;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0,0,0,.35);
  }
  .header h1 { font-size: 1.9rem; margin-bottom: 10px; }
  .header h1 span { color: #facc15; }
  .header p { opacity: .95; font-size: .98rem; max-width: 820px; margin: 0 auto; line-height: 1.6; }
  .badge-group { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin-top: 16px; }
  .badge {
    background: rgba(255,255,255,.2);
    padding: 5px 14px;
    border-radius: 30px;
    font-size: .74rem;
    font-weight: 700;
    color: #fff;
  }

  /* LAYOUT COM ÍNDICE */
  .layout { display: grid; grid-template-columns: 240px 1fr; gap: 20px; }

  .indice {
    position: sticky;
    top: 20px;
    align-self: start;
    background: #fff;
    border-radius: 16px;
    padding: 18px;
    box-shadow: 0 8px 24px rgba(0,0,0,.12);
    font-size: .86rem;
  }
  .indice h4 {
    color: #0369a1;
    font-size: .78rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 10px;
    border-bottom: 2px solid #e2e8f0;
    padding-bottom: 6px;
  }
  .indice a {
    display: block;
    padding: 7px 10px;
    color: #334155;
    text-decoration: none;
    border-radius: 6px;
    font-weight: 600;
    transition: .15s;
    font-size: .84rem;
  }
  .indice a:hover { background: #f0f9ff; color: #0284c7; }
  .indice a.ativo { background: #0284c7; color: #fff; }

  /* CARDS */
  .card {
    background: #fff;
    border-radius: 18px;
    padding: 26px;
    margin-bottom: 22px;
    box-shadow: 0 8px 24px rgba(0,0,0,.1);
  }
  .card h2 {
    color: #0369a1;
    margin-bottom: 14px;
    border-left: 5px solid #0284c7;
    padding-left: 12px;
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .card h3 {
    color: #0c4a6e;
    margin: 22px 0 10px;
    font-size: 1.02rem;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .card p { color: #334155; line-height: 1.75; font-size: .93rem; margin-bottom: 12px; }
  .card ul, .card ol { color: #334155; line-height: 1.8; margin: 8px 0 14px 22px; font-size: .93rem; }
  .card code {
    background: #e0f2fe;
    color: #0369a1;
    padding: 2px 6px;
    border-radius: 4px;
    font-family: 'Consolas', 'Courier New', monospace;
    font-size: .85rem;
    font-weight: bold;
  }
  .card pre {
    background: #020617;
    color: #93c5fd;
    padding: 14px 16px;
    border-radius: 10px;
    font-family: 'Consolas', 'Courier New', monospace;
    font-size: .82rem;
    line-height: 1.65;
    overflow-x: auto;
    white-space: pre;
    margin: 12px 0;
  }

  /* CAIXAS DE DESTAQUE */
  .highlight-box {
    padding: 13px 18px;
    border-radius: 12px;
    margin: 14px 0;
    font-size: .9rem;
    line-height: 1.7;
  }
  .highlight-box.blue { background: #f0f9ff; border-left: 5px solid #0284c7; color: #075985; }
  .highlight-box.green { background: #dcfce7; border-left: 5px solid #16a34a; color: #15803d; }
  .highlight-box.yellow { background: #fffbe8; border-left: 5px solid #f59e0b; color: #854d0e; }
  .highlight-box.purple { background: #faf5ff; border-left: 5px solid #8b5cf6; color: #5b21b6; }
  .highlight-box.red { background: #fee2e2; border-left: 5px solid #dc2626; color: #991b1b; }

  /* TABELAS */
  .tabela {
    width: 100%;
    border-collapse: collapse;
    margin: 12px 0;
    font-size: .86rem;
  }
  .tabela th {
    background: linear-gradient(135deg, #0369a1, #0284c7);
    color: #fff;
    padding: 10px 12px;
    text-align: left;
    font-weight: 600;
  }
  .tabela td {
    padding: 10px 12px;
    border-bottom: 1px solid #e2e8f0;
    color: #334155;
    vertical-align: top;
    line-height: 1.55;
  }
  .tabela tr:hover td { background: #f8fafc; }
  .tabela code {
    background: #e0f2fe;
    color: #0369a1;
    padding: 1px 5px;
    border-radius: 4px;
    font-family: 'Consolas', monospace;
    font-size: .82em;
    font-weight: bold;
  }

  /* ÁRVORE DE PASTAS */
  .arvore {
    background: #020617;
    color: #93c5fd;
    padding: 16px 18px;
    border-radius: 12px;
    font-family: 'Consolas', monospace;
    font-size: .84rem;
    line-height: 1.8;
    margin: 12px 0;
    overflow-x: auto;
  }
  .arvore .pasta { color: #facc15; font-weight: bold; }
  .arvore .arquivo { color: #4ade80; }
  .arvore .nota { color: #64748b; font-style: italic; }

  /* PAINEL DE CÓDIGO COM COPIAR */
  .painel-codigo {
    position: relative;
    background: #020617;
    border-radius: 12px;
    border: 1px solid #334155;
    padding: 14px 16px;
    margin: 12px 0 16px;
  }
  .painel-codigo .nome-arquivo {
    font-size: .74rem;
    color: #38bdf8;
    font-weight: 800;
    letter-spacing: 1px;
    margin-bottom: 8px;
    padding-bottom: 6px;
    border-bottom: 1px dashed #334155;
  }
  .painel-codigo pre {
    color: #93c5fd;
    font-family: 'Consolas', 'Courier New', monospace;
    font-size: .8rem;
    line-height: 1.6;
    overflow-x: auto;
    max-height: 460px;
    white-space: pre;
  }
  .btn-copiar {
    position: absolute;
    top: 10px;
    right: 10px;
    background: #0284c7;
    color: #fff;
    border: none;
    padding: 6px 12px;
    border-radius: 6px;
    cursor: pointer;
    font-size: .72rem;
    font-weight: 800;
    font-family: inherit;
    z-index: 5;
  }
  .btn-copiar:hover { background: #38bdf8; color: #0f172a; }
  .btn-copiar.copiado { background: #16a34a; color: #fff; }

  /* PASSOS NUMERADOS */
  .passo-num {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 10px;
    background: linear-gradient(135deg, #0284c7, #38bdf8);
    color: #fff;
    font-weight: 900;
    font-size: .95rem;
    margin-right: 10px;
    box-shadow: 0 4px 10px rgba(2,132,199,.3);
    flex-shrink: 0;
  }

  /* FLUXOGRAMA VERTICAL */
  .fluxo-vertical {
    background: #f8fafc;
    border-radius: 14px;
    padding: 22px;
    margin: 14px 0;
    border: 2px dashed #cbd5e1;
  }
  .fluxo-etapa {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 12px 14px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,.06);
    border-left: 4px solid #0284c7;
    margin-bottom: 6px;
  }
  .fluxo-etapa.verde { border-left-color: #16a34a; }
  .fluxo-etapa.roxo { border-left-color: #7c3aed; }
  .fluxo-etapa.amarelo { border-left-color: #f59e0b; }
  .fluxo-etapa .emoji {
    font-size: 1.4rem;
    flex-shrink: 0;
    line-height: 1;
  }
  .fluxo-etapa .texto { flex: 1; font-size: .88rem; color: #334155; line-height: 1.6; }
  .fluxo-etapa .texto strong { color: #0f172a; display: block; margin-bottom: 2px; font-size: .92rem; }
  .fluxo-seta-baixo {
    text-align: center;
    color: #0284c7;
    font-size: 1.4rem;
    font-weight: bold;
    line-height: 1;
    margin: 2px 0;
  }

  /* QUIZ */
  .question {
    background: #f8fafc;
    border-radius: 12px;
    padding: 16px 20px;
    margin-bottom: 14px;
    border-left: 4px solid #0284c7;
    border: 1px solid #e2e8f0;
    border-left-width: 4px;
  }
  .question.tf { border-left-color: #8b5cf6; }
  .question-header {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 12px;
    font-weight: 700;
    color: #0f172a;
    font-size: .93rem;
    line-height: 1.5;
  }
  .question-number {
    background: #0284c7;
    color: #fff;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
    flex-shrink: 0;
  }
  .question.tf .question-number { background: #8b5cf6; }
  .options { display: flex; flex-direction: column; gap: 8px; }
  .options.tf { display: grid; grid-template-columns: 1fr 1fr; max-width: 320px; }
  .option {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 14px;
    background: #fff;
    border-radius: 8px;
    border: 2px solid #e2e8f0;
    cursor: pointer;
    transition: .15s;
  }
  .option:hover:not(.disabled) { border-color: #0284c7; background: #f0f9ff; }
  .option input[type="radio"] {
    width: 16px; height: 16px; cursor: pointer; flex-shrink: 0;
    accent-color: #0284c7;
  }
  .option label { font-size: .88rem; cursor: pointer; flex: 1; line-height: 1.4; color: #334155; }
  .option.correct { border-color: #16a34a !important; background: #dcfce7 !important; font-weight: bold; }
  .option.wrong { border-color: #dc2626 !important; background: #fee2e2 !important; }
  .option.disabled { cursor: default; }

  .btn-grupo {
    display: flex; gap: 10px; justify-content: center;
    margin-top: 20px; flex-wrap: wrap;
  }
  .btn {
    background: linear-gradient(135deg, #0284c7, #2563eb);
    color: #fff; border: none; padding: 12px 24px;
    border-radius: 30px; cursor: pointer;
    font-size: .92rem; font-weight: 700;
    transition: .15s; font-family: inherit;
  }
  .btn:hover { transform: translateY(-2px); box-shadow: 0 6px 18px rgba(2,132,199,.35); }
  .btn-secondary { background: #64748b; }

  .result-box {
    background: #f8fafc;
    border-radius: 16px;
    padding: 24px;
    text-align: center;
    border: 3px solid #0284c7;
    display: none;
    margin-top: 24px;
  }
  .score { font-size: 3rem; font-weight: 900; color: #0369a1; }

  .btn-top {
    position: fixed; bottom: 20px; right: 20px;
    background: #0284c7; color: #fff;
    border: none; padding: 10px 18px;
    border-radius: 50px; cursor: pointer;
    font-size: 12px; font-weight: 700;
    box-shadow: 0 4px 15px rgba(0,0,0,.25);
    font-family: inherit; z-index: 100;
  }

  @media (max-width: 900px) {
    .layout { grid-template-columns: 1fr; }
    .indice { position: static; }
    .header h1 { font-size: 1.35rem; }
    .card { padding: 18px 14px; }
    .options.tf { grid-template-columns: 1fr; }
  }
</style>
</head>
<body>

<div class="container" id="inicio">

  <header class="header">
    <h1>🎓 Aula: <span>Primeiros Passos com Node.js</span></h1>
    <p>Crie do zero uma lista de tarefas funcional. Você vai entender o papel do backend, do frontend e como os dois conversam por HTTP — sem instalar nada além do Node.js, sem frameworks.</p>
    <div class="badge-group">
      <span class="badge">🟢 Node.js</span>
      <span class="badge">📄 HTML + JS</span>
      <span class="badge">🔀 Rotas HTTP</span>
      <span class="badge">💾 JSON como banco</span>
      <span class="badge">🔌 Sem frameworks</span>
    </div>
  </header>

  <div class="layout">

    <!-- ÍNDICE -->
    <nav class="indice">
      <h4>Índice da aula</h4>
      <a href="https://almeida-cma.github.io/mob10/6-nodejs.html#sec-conceitos" class="">1. Conceitos básicos</a>
      <a href="https://almeida-cma.github.io/mob10/6-nodejs.html#sec-criando" class="">2. Criando o projeto</a>
      <a href="https://almeida-cma.github.io/mob10/6-nodejs.html#sec-rodando" class="">3. Rodando pela 1ª vez</a>
      <a href="https://almeida-cma.github.io/mob10/6-nodejs.html#sec-usando" class="">4. Usando a lista</a>
      <a href="https://almeida-cma.github.io/mob10/6-nodejs.html#sec-fluxo" class="">5. O caminho do clique</a>
      <a href="https://almeida-cma.github.io/mob10/6-nodejs.html#sec-glossario" class="">6. Glossário</a>
      <a href="https://almeida-cma.github.io/mob10/6-nodejs.html#sec-quiz" class="ativo">7. Quiz de fixação</a>
      <a href="https://almeida-cma.github.io/mob10/6-nodejs.html#sec-proximos">8. Próximos passos</a>
    </nav>

    <div>

      <!-- SEÇÃO 1 -->
      <section class="card" id="sec-conceitos">
        <h2>📖 1. Conceitos básicos</h2>

        <h3>O que é Node.js?</h3>
        <p>Node.js é um programa que executa JavaScript <strong>fora do navegador</strong>. Antes dele, o JavaScript só rodava dentro de páginas web. Com Node, você pode usar JavaScript para:</p>
        <ul>
          <li>Criar servidores</li>
          <li>Ler e escrever arquivos no computador</li>
          <li>Criar APIs, bots, ferramentas de linha de comando</li>
        </ul>

        <h3>Frontend vs Backend</h3>
        <table class="tabela">
          <thead>
            <tr><th></th><th>Frontend</th><th>Backend</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Onde roda</strong></td>
              <td>No navegador do usuário</td>
              <td>No computador/servidor</td>
            </tr>
            <tr>
              <td><strong>O que faz</strong></td>
              <td>Mostra a tela, botões, formulários</td>
              <td>Guarda dados, aplica regras, responde pedidos</td>
            </tr>
            <tr>
              <td><strong>Tecnologias</strong></td>
              <td>HTML, CSS, JavaScript</td>
              <td>Node.js (nesta aula)</td>
            </tr>
          </tbody>
        </table>

        <div class="highlight-box blue">
          🎯 <strong>Na nossa aula vamos construir os dois:</strong> um frontend (a página HTML que você vê) e um backend (o Node.js que guarda as tarefas num arquivo). Eles conversam por <strong>HTTP</strong> — o mesmo protocolo que seu navegador usa para abrir qualquer site.
        </div>
      </section>

      <!-- SEÇÃO 2 -->
      <section class="card" id="sec-criando">
        <h2>🪜 2. Criando o projeto do zero</h2>

        <!-- PASSO 1 -->
        <h3><span class="passo-num">1</span>Criar a pasta do projeto</h3>
        <p>Abra o terminal e rode:</p>
        <div class="painel-codigo">
          <div class="nome-arquivo">💻 Terminal (bash)</div>
          <button class="btn-copiar" onclick="copiar(this, 'term-1')">📋 Copiar</button>
          <pre id="term-1">mkdir todo-local
cd todo-local</pre>
        </div>
        <table class="tabela">
          <thead>
            <tr><th>Comando</th><th>O que faz</th></tr>
          </thead>
          <tbody>
            <tr><td><code>mkdir todo-local</code></td><td>Cria uma pasta chamada <code>todo-local</code></td></tr>
            <tr><td><code>cd todo-local</code></td><td>Entra nessa pasta (todo comando seguinte roda dentro dela)</td></tr>
          </tbody>
        </table>

        <div class="arvore">
          todo-local/        <span class="nota">← pasta vazia, recém-criada</span>
        </div>

        <!-- PASSO 2 -->
        <h3><span class="passo-num">2</span>Criar a pasta <code>public/</code></h3>
        <div class="painel-codigo">
          <div class="nome-arquivo">💻 Terminal</div>
          <button class="btn-copiar" onclick="copiar(this, 'term-2')">📋 Copiar</button>
          <pre id="term-2">mkdir public</pre>
        </div>
        <div class="highlight-box yellow">
          💡 <strong>Por que criar essa pasta?</strong> Por convenção, arquivos que o navegador vai acessar (HTML, CSS, imagens) ficam dentro de uma pasta chamada <code>public</code>. Isso separa claramente <strong>o que o usuário vê</strong> (public/) do <strong>que o servidor faz</strong> (fora de public/).
        </div>
        <div class="arvore">
          todo-local/<br>
          └── <span class="pasta">public/</span>     <span class="nota">← vai receber o HTML</span>
        </div>

        <!-- PASSO 3 -->
        <h3><span class="passo-num">3</span>Criar o arquivo <code>tarefas.json</code></h3>
        <p>Dentro de <code>todo-local/</code>, crie um arquivo chamado <code>tarefas.json</code> com este conteúdo:</p>
        <div class="painel-codigo">
          <div class="nome-arquivo">📄 todo-local/tarefas.json</div>
          <button class="btn-copiar" onclick="copiar(this, 'json-tarefas')">📋 Copiar</button>
          <pre id="json-tarefas">[]</pre>
        </div>
        <div class="highlight-box purple">
          📦 <strong>O que é esse arquivo?</strong> É o nosso "banco de dados". Um arquivo de texto simples onde as tarefas ficam guardadas entre uma sessão e outra. Os <code>[]</code> significam "lista vazia". <strong>JSON</strong> é um formato de texto para representar dados — fácil de ler tanto para humanos quanto para o Node.js.
        </div>
        <div class="arvore">
          todo-local/<br>
          ├── <span class="pasta">public/</span><br>
          └── <span class="arquivo">tarefas.json</span>   <span class="nota">← banco de dados (começa vazio)</span>
        </div>

        <!-- PASSO 4 -->
        <h3><span class="passo-num">4</span>Criar o arquivo <code>public/index.html</code></h3>
        <p>Este arquivo é a <strong>interface visual</strong>: HTML (estrutura), CSS (aparência) e JavaScript (lógica que conversa com o backend), tudo junto.</p>
        <div class="painel-codigo">
          <div class="nome-arquivo">📄 public/index.html</div>
          <button class="btn-copiar" onclick="copiar(this, 'cod-html')">📋 Copiar</button>
          <pre id="cod-html">&lt;!DOCTYPE html&gt;
&lt;html lang="pt-br"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;title&gt;Lista de Tarefas&lt;/title&gt;
  &lt;style&gt;
    body { font-family: sans-serif; max-width: 500px; margin: 40px auto; }
    input { padding: 8px; width: 70%; }
    button { padding: 8px 12px; cursor: pointer; }
    li { margin: 8px 0; display: flex; justify-content: space-between; align-items: center; }
    .feita { text-decoration: line-through; color: gray; }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;📝 Minhas Tarefas&lt;/h1&gt;

  &lt;input id="campo" placeholder="Digite uma tarefa..." /&gt;
  &lt;button onclick="adicionar()"&gt;Adicionar&lt;/button&gt;

  &lt;ul id="lista"&gt;&lt;/ul&gt;

  &lt;script&gt;
    // Busca a lista de tarefas no backend e desenha na tela
    async function carregar() {
      const res = await fetch('/tarefas');
      const tarefas = await res.json();

      const lista = document.getElementById('lista');
      lista.innerHTML = '';

      tarefas.forEach(t =&gt; {
        const li = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = t.titulo;
        if (t.feita) span.className = 'feita';
        span.style.cursor = 'pointer';
        span.onclick = () =&gt; alternar(t.id);

        const btn = document.createElement('button');
        btn.textContent = '🗑️';
        btn.onclick = () =&gt; apagar(t.id);

        li.appendChild(span);
        li.appendChild(btn);
        lista.appendChild(li);
      });
    }

    // Envia uma nova tarefa para o backend
    async function adicionar() {
      const campo = document.getElementById('campo');
      if (!campo.value.trim()) return;

      await fetch('/tarefas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ titulo: campo.value })
      });

      campo.value = '';
      carregar();
    }

    // Marca/desmarca uma tarefa como feita
    async function alternar(id) {
      await fetch('/tarefas/' + id, { method: 'PUT' });
      carregar();
    }

    // Apaga uma tarefa
    async function apagar(id) {
      await fetch('/tarefas/' + id, { method: 'DELETE' });
      carregar();
    }

    // Apertar Enter no campo também adiciona
    document.getElementById('campo').addEventListener('keypress', e =&gt; {
      if (e.key === 'Enter') adicionar();
    });

    carregar();
  &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
        </div>

        <div class="arvore">
          todo-local/<br>
          ├── <span class="pasta">public/</span><br>
          │   └── <span class="arquivo">index.html</span>   <span class="nota">← interface visual (frontend)</span><br>
          └── <span class="arquivo">tarefas.json</span>
        </div>

        <!-- PASSO 5 -->
        <h3><span class="passo-num">5</span>Criar o arquivo <code>server.js</code></h3>
        <p>Este é o <strong>backend — o cérebro da aplicação</strong>. Ele escuta pedidos do navegador (HTTP), lê e escreve no arquivo <code>tarefas.json</code> e devolve respostas.</p>
        <div class="painel-codigo">
          <div class="nome-arquivo">📄 todo-local/server.js</div>
          <button class="btn-copiar" onclick="copiar(this, 'cod-server')">📋 Copiar</button>
          <pre id="cod-server">// ---------- 1. Importar módulos que já vêm no Node ----------
const http = require('http');   // cria servidores web
const fs   = require('fs');     // lê e escreve arquivos
const path = require('path');   // monta caminhos de pastas/arquivos

const ARQUIVO = './tarefas.json';

// ---------- 2. Funções auxiliares ----------
function lerTarefas() {
  return JSON.parse(fs.readFileSync(ARQUIVO, 'utf-8'));
}

function salvarTarefas(tarefas) {
  fs.writeFileSync(ARQUIVO, JSON.stringify(tarefas, null, 2));
}

// ---------- 3. Criar o servidor ----------
const servidor = http.createServer((req, res) =&gt; {

  // Rota 1: entregar a página HTML ao navegador
  if (req.method === 'GET' &amp;&amp; req.url === '/') {
    const html = fs.readFileSync(path.join(__dirname, 'public', 'index.html'));
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(html);
    return;
  }

  // Rota 2: devolver a lista de tarefas (GET /tarefas)
  if (req.method === 'GET' &amp;&amp; req.url === '/tarefas') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(lerTarefas()));
    return;
  }

  // Rota 3: adicionar tarefa (POST /tarefas)
  if (req.method === 'POST' &amp;&amp; req.url === '/tarefas') {
    let corpo = '';
    req.on('data', pedaco =&gt; corpo += pedaco);
    req.on('end', () =&gt; {
      const { titulo } = JSON.parse(corpo);
      const tarefas = lerTarefas();
      tarefas.push({ id: Date.now(), titulo, feita: false });
      salvarTarefas(tarefas);
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: true }));
    });
    return;
  }

  // Rota 4: marcar/desmarcar como feita (PUT /tarefas/:id)
  if (req.method === 'PUT' &amp;&amp; req.url.startsWith('/tarefas/')) {
    const id = Number(req.url.split('/')[2]);
    const tarefas = lerTarefas();
    const tarefa = tarefas.find(t =&gt; t.id === id);
    if (tarefa) tarefa.feita = !tarefa.feita;
    salvarTarefas(tarefas);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ok: true }));
    return;
  }

  // Rota 5: apagar tarefa (DELETE /tarefas/:id)
  if (req.method === 'DELETE' &amp;&amp; req.url.startsWith('/tarefas/')) {
    const id = Number(req.url.split('/')[2]);
    const tarefas = lerTarefas().filter(t =&gt; t.id !== id);
    salvarTarefas(tarefas);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ok: true }));
    return;
  }

  // Rota 6: qualquer outra coisa → 404
  res.writeHead(404);
  res.end('Não encontrado');
});

// ---------- 4. Ligar o servidor na porta 3000 ----------
servidor.listen(3000, () =&gt; {
  console.log('✅ Servidor rodando! Abra: http://localhost:3000');
});</pre>
        </div>

        <div class="arvore">
          <strong>Estrutura final:</strong><br><br>
          todo-local/<br>
          ├── <span class="pasta">public/</span><br>
          │   └── <span class="arquivo">index.html</span>   <span class="nota">← frontend (o que o usuário vê)</span><br>
          ├── <span class="arquivo">server.js</span>        <span class="nota">← backend (o cérebro Node.js)</span><br>
          └── <span class="arquivo">tarefas.json</span>     <span class="nota">← banco de dados (persistência)</span>
        </div>
      </section>

      <!-- SEÇÃO 3 -->
      <section class="card" id="sec-rodando">
        <h2>▶️ 3. Rodando pela primeira vez</h2>

        <p>No terminal, dentro da pasta <code>todo-local</code>, rode:</p>
        <div class="painel-codigo">
          <div class="nome-arquivo">💻 Terminal</div>
          <button class="btn-copiar" onclick="copiar(this, 'term-run')">📋 Copiar</button>
          <pre id="term-run">node server.js</pre>
        </div>

        <h3>O que acontece:</h3>
        <ol>
          <li>O Node.js lê e executa o arquivo <code>server.js</code></li>
          <li>Ele abre a porta 3000 do seu computador e fica "escutando"</li>
          <li>Aparece no terminal: <strong>✅ Servidor rodando! Abra: http://localhost:3000</strong></li>
        </ol>

        <div class="highlight-box yellow">
          ⚠️ <strong>Importante:</strong> o terminal vai ficar "travado" — isso é normal. O servidor está rodando. Para pará-lo, aperte <code>Ctrl + C</code>.
        </div>

        <p>Agora abra o navegador em: <code>http://localhost:3000</code></p>
      </section>

      <!-- SEÇÃO 4 -->
      <section class="card" id="sec-usando">
        <h2>🧪 4. Usando a lista</h2>

        <p>Tente isto e observe o que acontece:</p>
        <ol>
          <li>Digite <strong>Comprar pão</strong> → clique <strong>Adicionar</strong> → aparece na lista.</li>
          <li>Clique no texto da tarefa → ela fica riscada (feita).</li>
          <li>Clique no 🗑️ → ela é apagada.</li>
          <li>Abra o arquivo <code>tarefas.json</code> no editor → veja as tarefas salvas em JSON.</li>
          <li>Feche o navegador, abra de novo, acesse a URL → as tarefas continuam lá.</li>
        </ol>

        <div class="highlight-box green">
          ✅ <strong>O item 5 é a prova da persistência:</strong> os dados não vivem só na tela, eles ficam num arquivo do seu computador. Essa é a diferença entre um site comum e uma aplicação com backend.
        </div>
      </section>

      <!-- SEÇÃO 5 -->
      <section class="card" id="sec-fluxo">
        <h2>🔄 5. O que acontece quando você clica em "Adicionar"</h2>

        <p>Este é o coração da aula. Acompanhe o caminho da informação:</p>

        <div class="fluxo-vertical">
          <div class="fluxo-etapa amarelo">
            <div class="emoji">👤</div>
            <div class="texto">
              <strong>Você digita "Comprar pão" e clica em Adicionar</strong>
              Usuário interage com o navegador.
            </div>
          </div>

          <div class="fluxo-seta-baixo">▼</div>

          <div class="fluxo-etapa">
            <div class="emoji">🌐</div>
            <div class="texto">
              <strong>index.html (frontend, no navegador)</strong>
              Dispara <code>fetch('/tarefas', { method: 'POST', body: {...} })</code>.
            </div>
          </div>

          <div class="fluxo-seta-baixo">▼ <span style="font-size:.7rem;color:#64748b;">viaja pela rede local, protocolo HTTP</span></div>

          <div class="fluxo-etapa verde">
            <div class="emoji">⚙️</div>
            <div class="texto">
              <strong>server.js (backend, no Node.js)</strong>
              ├─ recebe a requisição <code>POST /tarefas</code><br>
              ├─ lê o arquivo <code>tarefas.json</code> com <code>fs.readFileSync</code><br>
              ├─ adiciona a nova tarefa na lista<br>
              └─ salva o arquivo <code>tarefas.json</code> com <code>fs.writeFileSync</code>
            </div>
          </div>

          <div class="fluxo-seta-baixo">▼ <span style="font-size:.7rem;color:#64748b;">responde "ok" para o navegador</span></div>

          <div class="fluxo-etapa roxo">
            <div class="emoji">🔄</div>
            <div class="texto">
              <strong>index.html chama carregar()</strong>
              Faz um novo <code>fetch GET /tarefas</code> para pegar a lista atualizada.
            </div>
          </div>

          <div class="fluxo-seta-baixo">▼</div>

          <div class="fluxo-etapa verde">
            <div class="emoji">⚙️</div>
            <div class="texto">
              <strong>server.js responde com a lista atualizada</strong>
              Devolve o JSON com todas as tarefas atuais.
            </div>
          </div>

          <div class="fluxo-seta-baixo">▼</div>

          <div class="fluxo-etapa amarelo">
            <div class="emoji">👤</div>
            <div class="texto">
              <strong>Você vê a nova tarefa aparecer na tela</strong>
              O ciclo se completa em milissegundos.
            </div>
          </div>
        </div>

        <div class="highlight-box blue">
          💡 <strong>Resumo em uma frase:</strong> o frontend pede, o backend processa e salva, o frontend atualiza a tela.
        </div>
      </section>

      <!-- SEÇÃO 6 -->
      <section class="card" id="sec-glossario">
        <h2>📚 6. Glossário de tudo que apareceu</h2>

        <h3>Pastas e arquivos</h3>
        <table class="tabela">
          <thead>
            <tr><th>Nome</th><th>Tipo</th><th>Para que serve</th></tr>
          </thead>
          <tbody>
            <tr><td><code>todo-local/</code></td><td>pasta</td><td>Raiz do projeto. Tudo fica dentro dela.</td></tr>
            <tr><td><code>public/</code></td><td>pasta</td><td>Arquivos que o navegador pode acessar (HTML, CSS, imagens).</td></tr>
            <tr><td><code>public/index.html</code></td><td>arquivo</td><td>A interface da aplicação (frontend).</td></tr>
            <tr><td><code>server.js</code></td><td>arquivo</td><td>O servidor Node.js (backend).</td></tr>
            <tr><td><code>tarefas.json</code></td><td>arquivo</td><td>Onde as tarefas ficam salvas (persistência).</td></tr>
          </tbody>
        </table>

        <h3>Conceitos</h3>
        <table class="tabela">
          <thead>
            <tr><th>Termo</th><th>Significado</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Node.js</strong></td><td>Programa que executa JavaScript fora do navegador.</td></tr>
            <tr><td><strong>Frontend</strong></td><td>O que o usuário vê (roda no navegador).</td></tr>
            <tr><td><strong>Backend</strong></td><td>O que processa e guarda dados (roda no Node.js).</td></tr>
            <tr><td><strong>HTTP</strong></td><td>Protocolo de comunicação entre frontend e backend.</td></tr>
            <tr><td><strong>Rota</strong></td><td>Um "endereço" que o servidor reconhece (ex.: <code>/tarefas</code>).</td></tr>
            <tr><td><strong>GET / POST / PUT / DELETE</strong></td><td>Verbos HTTP: ler, criar, atualizar, apagar.</td></tr>
            <tr><td><strong>JSON</strong></td><td>Formato de texto para guardar/transportar dados.</td></tr>
            <tr><td><strong>require('http')</strong></td><td>Importa um módulo que já vem embutido no Node.</td></tr>
            <tr><td><strong>fs</strong></td><td>Módulo do Node para ler/escrever arquivos.</td></tr>
            <tr><td><strong>path</strong></td><td>Módulo do Node para montar caminhos de arquivos.</td></tr>
            <tr><td><strong>localhost:3000</strong></td><td>Endereço local do seu servidor na porta 3000.</td></tr>
            <tr><td><strong>fetch()</strong></td><td>Função do navegador para fazer pedidos HTTP.</td></tr>
            <tr><td><strong>Persistência</strong></td><td>Dados que sobrevivem ao fechar o programa.</td></tr>
          </tbody>
        </table>

        <h3>Comandos usados</h3>
        <table class="tabela">
          <thead>
            <tr><th>Comando</th><th>O que faz</th></tr>
          </thead>
          <tbody>
            <tr><td><code>mkdir todo-local</code></td><td>Cria a pasta do projeto</td></tr>
            <tr><td><code>cd todo-local</code></td><td>Entra na pasta</td></tr>
            <tr><td><code>mkdir public</code></td><td>Cria a pasta pública</td></tr>
            <tr><td><code>node server.js</code></td><td>Executa o servidor</td></tr>
            <tr><td><code>Ctrl + C</code></td><td>Para o servidor</td></tr>
          </tbody>
        </table>
      </section>

      <!-- SEÇÃO 7: QUIZ -->
      <section class="card" id="sec-quiz">
        <h2>📝 7. Quiz de fixação (10 questões)</h2>
        <p>Marque as respostas e clique em <strong>Verificar</strong> no final.</p>

        <form id="formQuiz">
          <div class="question" id="q1">
            <div class="question-header">
              <span class="question-number">1</span>
              O que é o Node.js?
            </div>
            <div class="options">
              <div class="option disabled"><input type="radio" name="q1" value="A" disabled=""><label>Um navegador de internet alternativo</label></div>
              <div class="option correct disabled"><input type="radio" name="q1" value="B" disabled=""><label>Um programa que executa JavaScript fora do navegador</label></div>
              <div class="option disabled"><input type="radio" name="q1" value="C" disabled=""><label>Uma linguagem de programação nova, diferente do JavaScript</label></div>
              <div class="option disabled"><input type="radio" name="q1" value="D" disabled=""><label>Um banco de dados relacional</label></div>
            </div>
          </div>

          <div class="question" id="q2">
            <div class="question-header">
              <span class="question-number">2</span>
              Neste projeto, o arquivo <code>index.html</code> pertence ao frontend ou ao backend?
            </div>
            <div class="options">
              <div class="option correct disabled"><input type="radio" name="q2" value="A" disabled=""><label>Frontend, porque roda no navegador e mostra a tela ao usuário</label></div>
              <div class="option disabled"><input type="radio" name="q2" value="B" disabled=""><label>Backend, porque é lido pelo Node.js</label></div>
              <div class="option disabled"><input type="radio" name="q2" value="C" disabled=""><label>Ambos, com o mesmo peso</label></div>
              <div class="option disabled"><input type="radio" name="q2" value="D" disabled=""><label>Nenhum dos dois — é só um arquivo de configuração</label></div>
            </div>
          </div>

          <div class="question" id="q3">
            <div class="question-header">
              <span class="question-number">3</span>
              Qual é o papel do arquivo <code>tarefas.json</code>?
            </div>
            <div class="options">
              <div class="option disabled"><input type="radio" name="q3" value="A" disabled=""><label>Definir a aparência da página</label></div>
              <div class="option correct disabled"><input type="radio" name="q3" value="B" disabled=""><label>Servir como banco de dados simples que guarda as tarefas em texto</label></div>
              <div class="option disabled"><input type="radio" name="q3" value="C" disabled=""><label>Criar o servidor HTTP</label></div>
              <div class="option disabled"><input type="radio" name="q3" value="D" disabled=""><label>Compilar o JavaScript em código nativo</label></div>
            </div>
          </div>

          <div class="question" id="q4">
            <div class="question-header">
              <span class="question-number">4</span>
              Para que serve a pasta <code>public/</code>?
            </div>
            <div class="options">
              <div class="option disabled"><input type="radio" name="q4" value="A" disabled=""><label>Guardar o arquivo <code>server.js</code></label></div>
              <div class="option correct disabled"><input type="radio" name="q4" value="B" disabled=""><label>Conter arquivos que o navegador vai acessar (HTML, CSS, imagens)</label></div>
              <div class="option disabled"><input type="radio" name="q4" value="C" disabled=""><label>Substituir o <code>tarefas.json</code></label></div>
              <div class="option disabled"><input type="radio" name="q4" value="D" disabled=""><label>Ser o banco de dados relacional do projeto</label></div>
            </div>
          </div>

          <div class="question" id="q5">
            <div class="question-header">
              <span class="question-number">5</span>
              Qual verbo HTTP é usado para <strong>criar</strong> uma nova tarefa?
            </div>
            <div class="options">
              <div class="option disabled"><input type="radio" name="q5" value="A" disabled=""><label>GET</label></div>
              <div class="option correct disabled"><input type="radio" name="q5" value="B" disabled=""><label>POST</label></div>
              <div class="option disabled"><input type="radio" name="q5" value="C" disabled=""><label>PUT</label></div>
              <div class="option disabled"><input type="radio" name="q5" value="D" disabled=""><label>DELETE</label></div>
            </div>
          </div>

          <div class="question" id="q6">
            <div class="question-header">
              <span class="question-number">6</span>
              Por que as tarefas continuam lá depois de fechar o navegador?
            </div>
            <div class="options">
              <div class="option disabled"><input type="radio" name="q6" value="A" disabled=""><label>Porque o navegador guarda tudo automaticamente</label></div>
              <div class="option correct disabled"><input type="radio" name="q6" value="B" disabled=""><label>Porque o backend salva os dados no arquivo <code>tarefas.json</code> em disco</label></div>
              <div class="option disabled"><input type="radio" name="q6" value="C" disabled=""><label>Porque a página mantém os dados na memória RAM</label></div>
              <div class="option disabled"><input type="radio" name="q6" value="D" disabled=""><label>Porque o HTML tem persistência embutida</label></div>
            </div>
          </div>

          <div class="question" id="q7">
            <div class="question-header">
              <span class="question-number">7</span>
              Qual módulo do Node é usado para ler e escrever arquivos?
            </div>
            <div class="options">
              <div class="option disabled"><input type="radio" name="q7" value="A" disabled=""><label><code>http</code></label></div>
              <div class="option disabled"><input type="radio" name="q7" value="B" disabled=""><label><code>path</code></label></div>
              <div class="option correct disabled"><input type="radio" name="q7" value="C" disabled=""><label><code>fs</code></label></div>
              <div class="option disabled"><input type="radio" name="q7" value="D" disabled=""><label><code>json</code></label></div>
            </div>
          </div>

          <div class="question" id="q8">
            <div class="question-header">
              <span class="question-number">8</span>
              Se <code>node server.js</code> estiver rodando e você apertar <code>Ctrl + C</code> no terminal, o que acontece?
            </div>
            <div class="options">
              <div class="option disabled"><input type="radio" name="q8" value="A" disabled=""><label>O servidor continua rodando em segundo plano</label></div>
              <div class="option correct disabled"><input type="radio" name="q8" value="B" disabled=""><label>O servidor é encerrado e o site para de responder em <code>localhost:3000</code></label></div>
              <div class="option disabled"><input type="radio" name="q8" value="C" disabled=""><label>O arquivo <code>tarefas.json</code> é apagado</label></div>
              <div class="option disabled"><input type="radio" name="q8" value="D" disabled=""><label>O navegador fecha sozinho</label></div>
            </div>
          </div>

          <div class="question tf" id="q9">
            <div class="question-header">
              <span class="question-number">9</span>
              O mesmo JavaScript pode rodar no navegador (frontend) e no Node.js (backend).
            </div>
            <div class="options tf">
              <div class="option correct disabled"><input type="radio" name="q9" value="V" disabled=""><label>✅ Verdadeiro</label></div>
              <div class="option disabled"><input type="radio" name="q9" value="F" disabled=""><label>❌ Falso</label></div>
            </div>
          </div>

          <div class="question tf" id="q10">
            <div class="question-header">
              <span class="question-number">10</span>
              Para rodar este projeto é necessário instalar frameworks como Express, React ou Angular.
            </div>
            <div class="options tf">
              <div class="option disabled"><input type="radio" name="q10" value="V" disabled=""><label>✅ Verdadeiro</label></div>
              <div class="option correct disabled"><input type="radio" name="q10" value="F" disabled=""><label>❌ Falso</label></div>
            </div>
          </div>

          <div class="btn-grupo">
            <button type="button" class="btn" onclick="corrigirQuiz()">✅ Verificar Respostas</button>
            <button type="button" class="btn btn-secondary" onclick="limparQuiz()">🔄 Limpar Respostas</button>
          </div>
        </form>

        <div class="result-box" id="resultadoQuiz" style="display: block;">
          <h3 style="color:#0369a1;margin-bottom:8px;">📊 Resultado</h3>
          <div class="score" id="pontuacao">10 / 10</div>
          <p id="txtPercentual" style="font-weight:bold;color:#0c4a6e;margin-top:8px;">Aproveitamento: 100%</p>
        </div>
      </section>

      <!-- SEÇÃO 8 -->
      <section class="card" id="sec-proximos">
        <h2>🚀 8. Próximos passos</h2>

        <p>Quando você dominar o que vimos aqui, dá para evoluir:</p>
        <ul>
          <li>Instalar <strong>Express</strong> para escrever rotas de forma mais enxuta</li>
          <li>Adicionar <code>npm init</code> e entender o <code>package.json</code></li>
          <li>Separar o CSS e o JS do HTML (pastas <code>css/</code> e <code>js/</code>)</li>
          <li>Trocar o <code>tarefas.json</code> por um banco real (SQLite, MongoDB)</li>
        </ul>

        <div class="highlight-box green">
          ✅ Mas nada disso antes de o básico acima estar sólido. Você já entendeu o ciclo completo: <strong>frontend pede, backend processa e salva, frontend atualiza a tela</strong>.
        </div>
      </section>

    </div>
  </div>
</div>

<button class="btn-top" onclick="document.getElementById('inicio').scrollIntoView({behavior:'smooth'})">⬆️ Topo</button>

<script>
  /* ============ COPIAR CÓDIGO ============ */
  function copiar(btn, id) {
    const el = document.getElementById(id);
    if (!el) return;

    const decoder = document.createElement('textarea');
    decoder.innerHTML = el.textContent;
    const texto = decoder.value;

    function sucesso() {
      btn.classList.add('copiado');
      const orig = btn.textContent;
      btn.textContent = '✅ Copiado!';
      setTimeout(() => {
        btn.classList.remove('copiado');
        btn.textContent = orig;
      }, 1800);
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(texto).then(sucesso).catch(() => fallback(texto, sucesso));
    } else {
      fallback(texto, sucesso);
    }
  }
  function fallback(texto, cb) {
    const ta = document.createElement('textarea');
    ta.value = texto;
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch(e){}
    document.body.removeChild(ta);
    cb();
  }

  /* ============ ÍNDICE ATIVO NO SCROLL ============ */
  const links = document.querySelectorAll('.indice a');
  const secoes = Array.from(links).map(a => document.querySelector(a.getAttribute('href')));

  function atualizarIndice() {
    let atual = secoes[0];
    const y = window.scrollY + 120;
    secoes.forEach(s => { if (s && s.offsetTop <= y) atual = s; });
    links.forEach(a => a.classList.toggle('ativo', a.getAttribute('href') === '#' + atual.id));
  }
  window.addEventListener('scroll', atualizarIndice);
  document.addEventListener('DOMContentLoaded', atualizarIndice);

  links.forEach(a => {
    a.addEventListener('click', function(e) {
      e.preventDefault();
      const alvo = document.querySelector(this.getAttribute('href'));
      if (alvo) window.scrollTo({ top: alvo.offsetTop - 20, behavior: 'smooth' });
    });
  });

  /* ============ QUIZ ============ */
  const gabarito = {
    q1: 'B', q2: 'A', q3: 'B', q4: 'B', q5: 'B',
    q6: 'B', q7: 'C', q8: 'B', q9: 'V', q10: 'F'
  };
  const TOTAL = 10;

  function corrigirQuiz() {
    let acertos = 0;
    for (let id in gabarito) {
      const sel = document.querySelector('input[name="' + id + '"]:checked');
      const qDiv = document.getElementById(id);
      const opts = qDiv.querySelectorAll('.option');

      opts.forEach(function(opt) {
        const r = opt.querySelector('input[type="radio"]');
        if (r.value === gabarito[id]) opt.classList.add('correct');
        else if (r.checked) opt.classList.add('wrong');
        r.disabled = true;
        opt.classList.add('disabled');
      });

      if (sel && sel.value === gabarito[id]) acertos++;
    }

    const perc = Math.round((acertos / TOTAL) * 100);
    document.getElementById('pontuacao').innerText = acertos + ' / ' + TOTAL;
    document.getElementById('txtPercentual').innerText = 'Aproveitamento: ' + perc + '%';

    const res = document.getElementById('resultadoQuiz');
    res.style.display = 'block';
    res.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function limparQuiz() {
    document.querySelectorAll('input[type="radio"]').forEach(r => {
      r.checked = false; r.disabled = false;
    });
    document.querySelectorAll('.option').forEach(opt => {
      opt.classList.remove('correct', 'wrong', 'disabled');
    });
    document.getElementById('resultadoQuiz').style.display = 'none';
    document.getElementById('sec-quiz').scrollIntoView({ behavior: 'smooth' });
  }

  document.querySelectorAll('.option').forEach(opt => {
    opt.addEventListener('click', function() {
      if (this.classList.contains('disabled')) return;
      const r = this.querySelector('input[type="radio"]');
      if (r) r.checked = true;
    });
  });
</script>


</body></html>