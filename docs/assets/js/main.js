/* =========================================================
   Portfólio Digital — Andrea Ferreira Turibio
   JavaScript puro (sem bibliotecas externas).

   >>> PARA ATUALIZAR O PORTFÓLIO, EDITE APENAS A LISTA ABAIXO. <<<

   Campos de cada projeto:
     categoria  : "academico" | "profissional" | "pessoal"
     nome       : título do projeto
     semestre   : ex. "1DSM – 1º Sem. 2026"  (obrigatório nas ABPs)
     descricao  : o que o projeto é / resolve
     contribuicao: O QUE VOCÊ FEZ  (item mais importante da avaliação)
     tecnologias: lista de tecnologias
     link       : URL do repositório  (use "" se não houver)
   ========================================================= */

const PROJETOS = [

  /* ---------- ACADÊMICOS — ABP (Projeto Integrador) ---------- */
  {
    categoria: "academico",
    nome: "ScrumFlow — Portal de Certificação em Metodologias Ágeis (ABP 1DSM)",
    semestre: "1DSM – 1º Sem. 2026",
    descricao: "Projeto Integrador desenvolvido para a Fatec Jacareí: portal web em que o usuário se cadastra, realiza avaliações progressivas em módulos de dificuldade crescente e recebe um certificado digital validável por hash público. Desenvolvido pela equipe DEVassos em três sprints, sob a metodologia Scrum.",
    contribuicao: "Atuei como desenvolvedora nas três sprints, com 46 commits e 32 pull requests. No front-end implementei a máscara de CPF do cadastro, a responsividade da navbar, as páginas \'O que é Scrum\' e o realce dos princípios do Manifesto Ágil, a estrutura das páginas de questões e de módulos, a padronização do rodapé em todo o portal e as animações de transição. No banco de dados, criei a coluna de pontuação da tabela de exames e a migration SQL correspondente. Também desenvolvi a validação pública do certificado, produzi todo o manual do usuário e reorganizei a documentação do repositório.",
    tecnologias: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express", "PostgreSQL", "JWT", "Git Flow", "Scrum"],
    link: "https://github.com/DEVassos/scrum-flow-abp"
  },
  /* ---- ABP do 2DSM: descomente e preencha quando o projeto começar ----
  {
    categoria: "academico",
    nome: "ABP 2DSM — nome do projeto integrador",
    semestre: "2DSM – 2º Sem. 2026",
    descricao: "Descrição do problema, do parceiro acadêmico e da solução entregue.",
    contribuicao: "Sua contribuição individual, com o máximo de especificidade possível.",
    tecnologias: ["tecnologia 1", "tecnologia 2"],
    link: ""
  },
  ------------------------------------------------------------------- */

  /* ---------- ACADÊMICOS — Atividades de disciplina ---------- */
  {
    categoria: "academico",
    nome: "Clima & Tempo — previsão do tempo para cidades brasileiras",
    semestre: "2DSM – 2º Sem. 2026",
    descricao: "Aplicação web em React com TypeScript que busca cidades brasileiras e exibe a previsão do tempo, consumindo a API pública do CPTEC/INPE pela BrasilAPI. Empacotada em contêiner Docker com Nginx servindo a build de produção.",
    contribuicao: "Desenvolvi o projeto individualmente. Estruturei a aplicação em camadas (componentes, contextos, hooks, providers, serviços e tipos), implementei a camada de serviço que consome a API do CPTEC com tratamento de erros e tipagem em TypeScript, e configurei o empacotamento com Dockerfile e Nginx para servir a aplicação em produção.",
    tecnologias: ["React", "TypeScript", "Vite", "Docker", "Nginx", "BrasilAPI / CPTEC"],
    link: "https://github.com/DeaTuribio/Clima_Tempo"
  },
  {
    categoria: "academico",
    nome: "Cadastro de usuários com Node.js e PostgreSQL",
    semestre: "2DSM – 2º Sem. 2026",
    descricao: "Aplicação web para cadastro, listagem e exclusão de usuários, com front-end estático e back-end conectado a banco relacional, publicada em ambiente de nuvem.",
    contribuicao: "Desenvolvi a aplicação completa: as telas em HTML/CSS/JavaScript, as rotas da API em Express, a modelagem e a conexão com o PostgreSQL, e realizei o deploy em nuvem.",
    tecnologias: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express", "PostgreSQL"],
    link: "https://github.com/DeaTuribio/atividade_3"
  },
  {
    categoria: "academico",
    nome: "Consulta de concursos da Mega-Sena",
    semestre: "2DSM – 2º Sem. 2026",
    descricao: "Aplicação Node.js com Express para consulta de resultados de concursos da Mega-Sena, com tratamento e exibição dos dados retornados.",
    contribuicao: "Implementei o servidor Express, as rotas de consulta e o tratamento dos dados dos concursos até a exibição no cliente.",
    tecnologias: ["JavaScript", "Node.js", "Express"],
    link: "https://github.com/DeaTuribio/atividade-5"
  },
  {
    categoria: "academico",
    nome: "Registro de números da Mega-Sena",
    semestre: "2DSM – 2º Sem. 2026",
    descricao: "Aplicação para registro e conferência de números apostados, exercitando manipulação de arrays, validação de entrada e manipulação do DOM.",
    contribuicao: "Escrevi toda a lógica de registro, validação e conferência dos números, além da interface de interação.",
    tecnologias: ["JavaScript", "HTML5", "CSS3"],
    link: "https://github.com/DeaTuribio/atividade_4"
  },
  {
    categoria: "academico",
    nome: "Fundamentos de front-end — atividades 1DSM",
    semestre: "1DSM – 1º Sem. 2026",
    descricao: "Conjunto de atividades introdutórias de desenvolvimento web: estruturação semântica em HTML, estilização em CSS e primeiras rotinas em JavaScript.",
    contribuicao: "Desenvolvi individualmente todas as atividades, construindo a base de HTML semântico, layout responsivo e lógica de programação.",
    tecnologias: ["HTML5", "CSS3", "JavaScript"],
    link: "https://github.com/DeaTuribio/atividade_1_dsm"
  },

  /* ---------- PROFISSIONAIS ---------- */
  {
    categoria: "profissional",
        nome: "Projeto BIOMAS-BR — PRODES Mata Atlântica / Cerrado — INPE",,
    semestre: "Desde abr. 2026",
    descricao: "Projeto de monitoramento por satélite do desmatamento no bioma Cerrado, seguindo a metodologia PRODES do Instituto Nacional de Pesquisas Espaciais.",
    contribuicao: "Atuo na interpretação de imagens de satélite e na identificação e vetorização de polígonos de desmatamento, aplicando os critérios metodológicos do projeto e realizando o controle de qualidade dos dados produzidos.",
    tecnologias: ["TerraAmazon", "QGIS", "Sensoriamento remoto", "IA", "R", "Python","Análise espacial"],
    link: ""
  },
  {
    categoria: "profissional",
    nome: "Projeto Biomas Brasil — INPE / FUNCATE",
    semestre: "2023 – 2026",
    descricao: "Mapeamento sistemático de uso e cobertura da terra e de mudanças na paisagem dos biomas brasileiros a partir de imagens de satélite.",
    contribuicao: "Interpretei imagens de satélite para classificação de uso e cobertura da terra e de mudanças na paisagem, produzi e validei dados vetoriais, e apliquei técnicas de classificação automática para apoiar a produção do mapeamento.",
    tecnologias: ["QGIS", "ArcGIS", "Google Earth Engine", "Python", "Sensoriamento remoto"],
    link: ""
  },
  {
    categoria: "profissional",
    nome: "Geoprocessamento municipal — Prefeitura de Jacareí",
    semestre: "Desde 2019",
    descricao: "Produção e manutenção de bases cartográficas e análises espaciais de apoio à gestão territorial do município.",
    contribuicao: "Elaboro produtos cartográficos e análises espaciais, organizo e mantenho bases de dados geográficos e apoio o levantamento de campo com GNSS.",
    tecnologias: ["QGIS", "PostgreSQL/PostGIS", "GNSS", "Cartografia"],
    link: ""
  },

  /* ---------- PESSOAIS ---------- */
  {
    categoria: "pessoal",
    nome: "Classificação de uso da terra na Mata Atlântica com R e sits",
    semestre: "2026",
    descricao: "Estudo de classificação de séries temporais de imagens Sentinel-2 (2020–2024) para a Mata Atlântica, usando a biblioteca sits e dados do Brazil Data Cube, com treinamento de modelo Random Forest.",
    contribuicao: "Construí todo o fluxo em R: preparação das amostras em SIRGAS 2000, montagem do cubo de dados a partir do Brazil Data Cube, treinamento e avaliação do modelo Random Forest, e adaptação do fluxo para detecção de cicatrizes de incêndio e análise de recorrência de fogo.",
    tecnologias: ["R", "sits", "Brazil Data Cube", "Sentinel-2", "Random Forest"],
    link: ""
  },
  {
    categoria: "pessoal",
    nome: "Plugin de download de imagens Sentinel-2 para QGIS",
    semestre: "2026",
    descricao: "Ferramenta em Python que consulta a API STAC do INPE, monta rasters virtuais (VRT) da coleção Sentinel-2 S2-16D-2 e carrega as camadas diretamente no QGIS.",
    contribuicao: "Desenvolvi o script Python de consulta à API STAC, a geração dos VRTs e a interface em PyQt5 para seleção e carregamento das camadas no QGIS.",
    tecnologias: ["Python", "PyQt5", "STAC API", "GDAL", "QGIS"],
    link: ""
  }
];

/* =========================================================
   Daqui para baixo é o funcionamento do site — não precisa mexer.
   ========================================================= */

const SELO = { academico:"Acadêmico", profissional:"Profissional", pessoal:"Pessoal" };
const CLASSE = { academico:"", profissional:"prof", pessoal:"pess" };

function escapar(t){
  return String(t).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
}

function cartao(p){
  const tags = p.tecnologias.map(t => `<li>${escapar(t)}</li>`).join("");
  const link = p.link
    ? `<a class="proj-link" href="${escapar(p.link)}" target="_blank" rel="noopener">Ver repositório &rarr;</a>`
    : `<span class="proj-link off">Projeto sem repositório público</span>`;

  return `
    <article class="proj" data-cat="${p.categoria}">
      <div class="proj-top">
        <h3>${escapar(p.nome)}</h3>
        <span class="selo ${CLASSE[p.categoria]}">${SELO[p.categoria]}</span>
      </div>
      <p class="sem">${escapar(p.semestre)}</p>
      <p class="desc">${escapar(p.descricao)}</p>
      <div class="contrib">
        <b>Minha contribuição</b>
        <p>${escapar(p.contribuicao)}</p>
      </div>
      <ul class="tags">${tags}</ul>
      ${link}
    </article>`;
}

function render(cat){
  const lista = document.getElementById("listaProjetos");
  const itens = cat === "todos" ? PROJETOS : PROJETOS.filter(p => p.categoria === cat);
  lista.innerHTML = itens.map(cartao).join("");
}

document.addEventListener("DOMContentLoaded", function(){

  render("todos");

  document.querySelectorAll(".filtro").forEach(function(btn){
    btn.addEventListener("click", function(){
      document.querySelectorAll(".filtro").forEach(b => b.classList.remove("is-on"));
      btn.classList.add("is-on");
      render(btn.dataset.cat);
    });
  });

  // menu mobile
  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("nav");
  menuBtn.addEventListener("click", function(){
    const aberto = nav.classList.toggle("aberto");
    menuBtn.setAttribute("aria-expanded", aberto);
  });
  nav.addEventListener("click", function(e){
    if(e.target.tagName === "A") nav.classList.remove("aberto");
  });

  // destaque do item de menu da seção visível
  const secoes = document.querySelectorAll("section[id]");
  const obs = new IntersectionObserver(function(entradas){
    entradas.forEach(function(en){
      if(!en.isIntersecting) return;
      document.querySelectorAll(".nav a").forEach(function(a){
        a.classList.toggle("ativo", a.getAttribute("href") === "#" + en.target.id);
      });
    });
  }, { rootMargin:"-40% 0px -55% 0px" });
  secoes.forEach(s => obs.observe(s));

});
