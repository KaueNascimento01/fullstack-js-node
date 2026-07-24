const courseCatalog = [
  {
    id: "html-c01",
    title: "Introdução ao HTML5",
    category: "html",
    type: "conceitos",
    description: "Estrutura básica de um documento HTML5, tags de cabeçalho (h1, h2), parágrafos e primeiras noções de estilo CSS inline e interno.",
    tags: ["HTML5", "Sintaxe Básica", "Estilos CSS"],
    files: {
      html: "curso/HTML/conceitos/aula_01.html"
    }
  },
  {
    id: "html-c02",
    title: "Formatação de Texto e Títulos",
    category: "html",
    type: "conceitos",
    description: "Trabalhando com hierarquia de títulos, tags de ênfase de texto e estruturação básica de conteúdo textual.",
    tags: ["HTML Semântico", "Títulos", "Parágrafos"],
    files: {
      html: "curso/HTML/conceitos/aula_02.html"
    }
  },
  {
    id: "html-c03",
    title: "Citações, Imagens e Hiperlinks",
    category: "html",
    type: "conceitos",
    description: "Inserção de citações curtas e longas (blockquote/q), carregamento de imagens com textos alternativos e criação de hiperlinks para sites externos.",
    tags: ["Links", "Imagens", "Citações", "Atributos"],
    files: {
      html: "curso/HTML/conceitos/aula_03.html"
    }
  },
  {
    id: "html-c04",
    title: "Elementos Block vs Inline e Listas",
    category: "html",
    type: "conceitos",
    description: "Compreensão da diferença entre elementos em bloco (block) e em linha (inline). Criação de listas ordenadas (ol) e não ordenadas (ul).",
    tags: ["Block", "Inline", "Listas Ordenadas", "Listas Não Ordenadas"],
    files: {
      html: "curso/HTML/conceitos/aula_04.html"
    }
  },
  {
    id: "html-c05",
    title: "Listas de Definição e Âncoras",
    category: "html",
    type: "conceitos",
    description: "Uso de listas de definição (dl/dt/dd) para termos e glossários, além da criação de links de âncora internos para navegação na mesma página.",
    tags: ["Listas de Definição", "Links Internos", "Âncoras"],
    files: {
      html: "curso/HTML/conceitos/aula_05.html"
    }
  },
  {
    id: "html-c06",
    title: "Tabelas HTML Básicas",
    category: "html",
    type: "conceitos",
    description: "Estruturação de dados tabulares utilizando as tags clássicas de tabela (table, tr, td, th) com estilos básicos.",
    tags: ["Tabelas", "Dados Tabulares", "Estruturação"],
    files: {
      html: "curso/HTML/conceitos/aula_06.html"
    }
  },
  {
    id: "html-c07",
    title: "Tabelas Complexas (Colspan/Rowspan)",
    category: "html",
    type: "conceitos",
    description: "Criação de layouts de tabelas avançadas utilizando os atributos rowspan e colspan para mesclar linhas e colunas.",
    tags: ["Tabelas Avançadas", "Colspan", "Rowspan"],
    files: {
      html: "curso/HTML/conceitos/aula_07.html"
    }
  },
  {
    id: "html-c08",
    title: "Formulários e Inputs em HTML5",
    category: "html",
    type: "conceitos",
    description: "Criação de formulários de captura de dados com campos de texto, e-mail, senha, datas e botões de envio.",
    tags: ["Formulários", "Inputs", "Validação Básica"],
    files: {
      html: "curso/HTML/conceitos/aula_08.html"
    }
  },
  {
    id: "html-c09",
    title: "CSS Seletores e Combinadores",
    category: "html",
    type: "conceitos",
    description: "Uso avançado de seletores CSS: encadeamento (chaining), seletores de filhos, irmãos adjacentes e o conceito de aninhamento (nesting).",
    tags: ["CSS", "Seletores", "Combinadores", "Estilização"],
    files: {
      html: "curso/HTML/conceitos/aula_09.html",
      css: "curso/HTML/conceitos/css/aula09_style.css"
    }
  },
  {
    id: "html-c10",
    title: "Modos de Display (Block/Inline)",
    category: "html",
    type: "conceitos",
    description: "Exploração prática do comportamento de fluxo de página através dos modos de exibição display: block, inline e inline-block.",
    tags: ["CSS Layout", "Display", "Fluxo de Caixa"],
    files: {
      html: "curso/HTML/conceitos/aula_10.html",
      css: "curso/HTML/conceitos/css/aula10_style.css"
    }
  },
  {
    id: "html-c11",
    title: "CSS Box Model",
    category: "html",
    type: "conceitos",
    description: "Entendimento do modelo de caixas do CSS: margin, border, padding, largura e altura, e o uso de box-sizing: border-box.",
    tags: ["CSS Core", "Box Model", "Padding", "Margin", "Border-box"],
    files: {
      html: "curso/HTML/conceitos/aula_11.html",
      css: "curso/HTML/conceitos/css/aula11_style.css"
    }
  },
  {
    id: "html-c12",
    title: "Unidades de Medida em CSS",
    category: "html",
    type: "conceitos",
    description: "Diferença entre unidades absolutas (px) e relativas (%, em, rem, vw, vh) e suas aplicações em design flexível.",
    tags: ["CSS Responsivo", "Unidades Relativas", "rem", "em", "Viewport"],
    files: {
      html: "curso/HTML/conceitos/aula_12.html",
      css: "curso/HTML/conceitos/css/aula12_style.css"
    }
  },
  {
    id: "html-c13",
    title: "Sistemas de Cores no CSS",
    category: "html",
    type: "conceitos",
    description: "Formas de declarar cores no CSS: nomes, RGB, RGBA (com canal alfa para transparência), Hexadecimal e o sistema HSL.",
    tags: ["Design Visual", "Cores", "RGBA", "HSL", "Transparência"],
    files: {
      html: "curso/HTML/conceitos/aula_13.html",
      css: "curso/HTML/conceitos/css/aula13_style.css"
    }
  },
  {
    id: "html-c14",
    title: "Tipografia e Google Fonts",
    category: "html",
    type: "conceitos",
    description: "Trabalhando com fontes no CSS, importação de fontes externas via Google Fonts, font-family, pesos e estilos tipográficos.",
    tags: ["Design", "Tipografia", "Google Fonts", "Estilo de Texto"],
    files: {
      html: "curso/HTML/conceitos/aula_14.html",
      css: "curso/HTML/conceitos/css/aula14_style.css"
    }
  },
  {
    id: "html-c15",
    title: "CSS Position",
    category: "html",
    type: "conceitos",
    description: "Compreensão aprofundada de posicionamento: static, relative, absolute, fixed e suas relações de coordenadas na viewport.",
    tags: ["CSS Position", "Layout", "Coordenadas", "Fixed", "Absolute"],
    files: {
      html: "curso/HTML/conceitos/aula_15.html",
      css: "curso/HTML/conceitos/css/aula15_style.css"
    }
  },
  {
    id: "html-c16",
    title: "Introdução ao Flexbox",
    category: "html",
    type: "conceitos",
    description: "Princípios do Flexbox: flex direction, alinhamento no eixo principal (justify-content) e no transversal (align-items), além de quebras de linha.",
    tags: ["Flexbox", "Layout Unidimensional", "Alinhamento"],
    files: {
      html: "curso/HTML/conceitos/aula_16.html",
      css: "curso/HTML/conceitos/css/aula16_style.css"
    }
  },
  {
    id: "html-c17",
    title: "Introdução ao CSS Grid",
    category: "html",
    type: "conceitos",
    description: "Criação de layouts bidimensionais complexos usando CSS Grid. Definição de linhas, colunas, espaçamentos e mesclagem de células.",
    tags: ["CSS Grid", "Layout Bidimensional", "Grid Templates"],
    files: {
      html: "curso/HTML/conceitos/aula_17.html",
      css: "curso/HTML/conceitos/css/aula17_style.css"
    }
  },
  {
    id: "html-c18",
    title: "Design Responsivo com Media Queries",
    category: "html",
    type: "conceitos",
    description: "Adaptação de layouts para diferentes larguras de tela usando @media queries e a filosofia Mobile-First.",
    tags: ["Responsividade", "Media Queries", "Mobile-First"],
    files: {
      html: "curso/HTML/conceitos/aula_18.html",
      css: "curso/HTML/conceitos/css/aula18_style.css"
    }
  },
  {
    id: "html-c20",
    title: "Transições e Transformações CSS",
    category: "html",
    type: "conceitos",
    description: "Adicionando dinamismo à página usando propriedades de transform (scale, rotate, translate) combinadas com transition para animações suaves.",
    tags: ["Animações CSS", "Transitions", "Transforms", "Micro-interações"],
    files: {
      html: "curso/HTML/conceitos/aula_20.html",
      css: "curso/HTML/conceitos/css/aula20_style.css"
    }
  },
  {
    id: "html-c22",
    title: "Pseudo-classes e Pseudo-elementos",
    category: "html",
    type: "conceitos",
    description: "Estilização de estados especiais de elementos (:hover, :focus, :active) e inserção de conteúdo dinâmico com ::before e ::after.",
    tags: ["Pseudo-classes", "Pseudo-elementos", "Estilos Dinâmicos"],
    files: {
      html: "curso/HTML/conceitos/aula_22.html",
      css: "curso/HTML/conceitos/css/aula22_style.css"
    }
  },
  {
    id: "html-c23",
    title: "Gradientes de Cores CSS",
    category: "html",
    type: "conceitos",
    description: "Criação de fundos complexos e transições de cores suaves usando gradientes lineares (linear-gradient) e radiais (radial-gradient).",
    tags: ["CSS Gradientes", "Design Visual", "Backgrounds"],
    files: {
      html: "curso/HTML/conceitos/aula_23.html",
      css: "curso/HTML/conceitos/css/aula23_style.css"
    }
  },
  {
    id: "html-c24",
    title: "Variáveis CSS e Herança",
    category: "html",
    type: "conceitos",
    description: "Definição e uso de propriedades customizadas (variáveis CSS) para criar temas de cores centralizados e organizados.",
    tags: ["Variáveis CSS", "Custom Properties", "Clean Code"],
    files: {
      html: "curso/HTML/conceitos/aula_24.html",
      css: "curso/HTML/conceitos/css/aula24_style.css"
    }
  },
  {
    id: "html-c25",
    title: "Reset CSS e Boas Práticas",
    category: "html",
    type: "conceitos",
    description: "Aplicação de Reset CSS para uniformizar a renderização entre navegadores e estruturação semântica final para melhor SEO.",
    tags: ["Reset CSS", "Boas Práticas", "Semântica", "SEO"],
    files: {
      html: "curso/HTML/conceitos/aula_25.html",
      css: "curso/HTML/conceitos/css/aula25_style.css"
    }
  },
  {
    id: "html-d19",
    title: "Desafio: Layout Flexível e Responsivo",
    category: "html",
    type: "desafios",
    description: "Construção de uma página web completa e responsiva que se adapta perfeitamente do smartphone ao desktop usando Media Queries e Flexbox.",
    tags: ["Desafio", "Responsividade", "Flexbox", "Layout Real"],
    files: {
      html: "curso/HTML/desafios/aula_19.html",
      css: "curso/HTML/desafios/CSS/aula19_style.css"
    }
  },
  {
    id: "html-d21",
    title: "Desafio: Animações e Cards Visuais",
    category: "html",
    type: "desafios",
    description: "Criação de um grid de cards interativos com efeitos ricos de sombra, rotação 3D e zoom de imagem ao passar o mouse.",
    tags: ["Desafio", "Transições", "Efeitos Hover", "Cards"],
    files: {
      html: "curso/HTML/desafios/aula_21.html",
      css: "curso/HTML/desafios/CSS/aula21_style.css"
    }
  },
  {
    id: "js-c01",
    title: "Comandos de Entrada e Saída",
    category: "javascript",
    type: "conceitos",
    description: "Interações nativas básicas do navegador: caixas de alerta (alert), caixas de confirmação (confirm) e prompt de digitação.",
    tags: ["Alert", "Confirm", "Prompt", "Primeiros Passos"],
    files: {
      html: "curso/JAVASCRIPT/conceitos/HTML/aula_01.html",
      js: "curso/JAVASCRIPT/conceitos/JS/aula_01.js"
    }
  },
  {
    id: "js-c02",
    title: "Variáveis e Tipos Primitivos",
    category: "javascript",
    type: "conceitos",
    description: "Introdução ao armazenamento de dados na memória do computador, tipos primitivos como Number, String e Boolean.",
    tags: ["Variáveis", "Tipos Primitivos", "Declaração de Dados"],
    files: {
      html: "curso/JAVASCRIPT/conceitos/HTML/aula_02.html",
      js: "curso/JAVASCRIPT/conceitos/JS/aula_02.js"
    }
  },
  {
    id: "js-c03",
    title: "Operações e Operadores Básicos",
    category: "javascript",
    type: "conceitos",
    description: "Expressões matemáticas básicas em JS utilizando operadores aritméticos (+, -, *, /, %, **) e atribuições.",
    tags: ["Operadores Aritméticos", "Atribuições", "Expressões"],
    files: {
      html: "curso/JAVASCRIPT/conceitos/HTML/aula_03.html",
      js: "curso/JAVASCRIPT/conceitos/JS/aula_03.js"
    }
  },
  {
    id: "js-c04",
    title: "Formatação de Strings e Números",
    category: "javascript",
    type: "conceitos",
    description: "Uso de Template Literals/Strings, formatação de casas decimais com toFixed(), substituição de caracteres e conversão monetária brasileira com toLocaleString().",
    tags: ["Strings", "Formatação de Números", "Template Literals", "Moeda"],
    files: {
      html: "curso/JAVASCRIPT/conceitos/HTML/aula_04.html",
      js: "curso/JAVASCRIPT/conceitos/JS/aula_04.js"
    }
  },
  {
    id: "js-c05",
    title: "Operadores Lógicos e Relacionais",
    category: "javascript",
    type: "conceitos",
    description: "Trabalhando com comparações lógicas (maior que, menor que, igualdade estrita) e operadores booleanos (E, OU, NÃO).",
    tags: ["Operadores Lógicos", "Operadores Relacionais", "Comparações"],
    files: {
      html: "curso/JAVASCRIPT/conceitos/HTML/aula_05.html",
      js: "curso/JAVASCRIPT/conceitos/JS/aula_05.js",
      css: "curso/JAVASCRIPT/conceitos/CSS/aula_05.css"
    }
  },
  {
    id: "js-c06",
    title: "Introdução à Manipulação do DOM",
    category: "javascript",
    type: "conceitos",
    description: "Primeiros passos no controle do HTML e CSS através do JavaScript. Seleção de elementos com querySelector e getElementById.",
    tags: ["DOM", "Seleção de Elementos", "Eventos Simples"],
    files: {
      html: "curso/JAVASCRIPT/conceitos/HTML/aula_06.html",
      js: "curso/JAVASCRIPT/conceitos/JS/aula_06.js",
      css: "curso/JAVASCRIPT/conceitos/CSS/aula_06.css"
    }
  },
  {
    id: "js-c12",
    title: "Estruturas de Repetição (While e For)",
    category: "javascript",
    type: "conceitos",
    description: "Criação de fluxos de repetição de código controlados por condições com o laço while e com o laço for.",
    tags: ["Console", "Laços de Repetição", "While", "For", "Estruturas de Controle"],
    files: {
      js: "curso/JAVASCRIPT/conceitos/JS/aula_12.js"
    }
  },
  {
    id: "js-c15",
    title: "Vetores e Arrays em JS",
    category: "javascript",
    type: "conceitos",
    description: "Armazenamento e manipulação de listas ordenadas de valores. Uso dos métodos push() para adicionar itens, sort() para ordenar e iterações em listas.",
    tags: ["Console", "Arrays", "Vetores", "Ordenação", "Métodos de Array"],
    files: {
      js: "curso/JAVASCRIPT/conceitos/JS/aula_15.js"
    }
  },
  {
    id: "js-c16",
    title: "Funções e Recursividade",
    category: "javascript",
    type: "conceitos",
    description: "Definição de sub-rotinas reutilizáveis: parâmetros de entrada, valores de retorno, atribuição a variáveis e funções recursivas.",
    tags: ["Console", "Funções", "Parâmetros", "Recursividade", "Escopo"],
    files: {
      js: "curso/JAVASCRIPT/conceitos/JS/aula_16.js"
    }
  },
  {
    id: "js-d07",
    title: "Desafio: Eventos Interativos do Mouse",
    category: "javascript",
    type: "desafios",
    description: "Construção de uma área sensível ao cursor (div) que altera dinamicamente seus textos e estilos de fundo ao clicar, entrar ou sair com o mouse.",
    tags: ["Eventos de Mouse", "onclick", "onmouseenter", "onmouseout"],
    files: {
      html: "curso/JAVASCRIPT/desafios/HTML/aula_07.html",
      js: "curso/JAVASCRIPT/desafios/JS/aula_07.js",
      css: "curso/JAVASCRIPT/desafios/CSS/aula_07.css"
    }
  },
  {
    id: "js-d08",
    title: "Desafio: Somador Numérico Dinâmico",
    category: "javascript",
    type: "desafios",
    description: "Calculadora simples que captura a entrada de dois campos numéricos HTML, realiza a conversão de tipo (String para Number) e renderiza a soma no DOM.",
    tags: ["Formulário", "Conversão de Tipos", "Manipulação DOM"],
    files: {
      html: "curso/JAVASCRIPT/desafios/HTML/aula_08.html",
      js: "curso/JAVASCRIPT/desafios/JS/aula_08.js",
      css: "curso/JAVASCRIPT/desafios/CSS/aula_08.css"
    }
  },
  {
    id: "js-d09",
    title: "Desafio: Verificador de Velocidade e Multas",
    category: "javascript",
    type: "desafios",
    description: "Formulário que recebe a velocidade de um carro e aplica uma lógica condicional simples para determinar se o condutor foi multado ou não.",
    tags: ["Condicionais", "Validação de Dados", "Feedback Dinâmico"],
    files: {
      html: "curso/JAVASCRIPT/desafios/HTML/aula_09.html",
      js: "curso/JAVASCRIPT/desafios/JS/aula_09.js",
      css: "curso/JAVASCRIPT/desafios/CSS/aula_09.css"
    }
  },
  {
    id: "js-d10",
    title: "Desafio: Dinâmica da Hora do Dia",
    category: "javascript",
    type: "desafios",
    description: "Página que detecta a hora do sistema do usuário e muda o tema da página (imagem do topo e cor de fundo do body) de acordo com o período do dia (manhã, tarde ou noite).",
    tags: ["Date API", "Estilos Dinâmicos", "Manipulação de Imagens"],
    files: {
      html: "curso/JAVASCRIPT/desafios/HTML/aula_10.html",
      js: "curso/JAVASCRIPT/desafios/JS/aula_10.js",
      css: "curso/JAVASCRIPT/desafios/CSS/aula_10.css"
    }
  },
  {
    id: "js-d11",
    title: "Desafio: Verificador de Idade e Gênero",
    category: "javascript",
    type: "desafios",
    description: "Aplicação interativa que calcula a idade baseando-se no ano informado, valida os dados contra o ano corrente e exibe a imagem correspondente à faixa etária e gênero do usuário.",
    tags: ["Date API", "Imagens Dinâmicas", "Validação de Formulários", "Condicionais"],
    files: {
      html: "curso/JAVASCRIPT/desafios/HTML/aula_11.html",
      js: "curso/JAVASCRIPT/desafios/JS/aula_11.js",
      css: "curso/JAVASCRIPT/desafios/CSS/aula_11.css"
    }
  },
  {
    id: "js-d13",
    title: "Desafio: Super Contador com Passo",
    category: "javascript",
    type: "desafios",
    description: "Um contador completo que recebe os valores iniciais, finais e o passo do intervalo (incremento/decremento), gerando a sequência numérica correspondente com formatação amigável.",
    tags: ["Laços de Repetição", "For Loop", "Arrays", "Controle de Fluxo"],
    files: {
      html: "curso/JAVASCRIPT/desafios/HTML/aula_13.html",
      js: "curso/JAVASCRIPT/desafios/JS/aula_13.js",
      css: "curso/JAVASCRIPT/desafios/CSS/aula_13.css"
    }
  },
  {
    id: "js-d14",
    title: "Desafio: Tabuada Dinâmica",
    category: "javascript",
    type: "desafios",
    description: "Gerador de tabuada automática de qualquer número inserido. A tabuada é renderizada dentro de um elemento <select> usando a criação dinâmica de tags <option> via JS.",
    tags: ["DOM Avançado", "Loops", "createElement", "Select Option"],
    files: {
      html: "curso/JAVASCRIPT/desafios/HTML/aula_14.html",
      js: "curso/JAVASCRIPT/desafios/JS/aula_14.js",
      css: "curso/JAVASCRIPT/desafios/CSS/aula_14.css"
    }
  },
  {
    id: "js-d17",
    title: "Desafio: Analisador Numérico",
    category: "javascript",
    type: "desafios",
    description: "Adiciona números de 1 a 100 em uma lista (vetor), validando se o número está no intervalo e se não é repetido, exibindo os itens dinamicamente.",
    tags: ["Arrays", "Validação de Inputs", "Estrutura de Dados"],
    files: {
      html: "curso/JAVASCRIPT/desafios/HTML/aula_17.html",
      js: "curso/JAVASCRIPT/desafios/JS/aula_17.js",
      css: "curso/JAVASCRIPT/desafios/CSS/aula_17.css"
    }
  }
];
