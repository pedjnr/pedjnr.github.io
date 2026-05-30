export const projects = [
  {
    id: 2,
    title: 'Testes de API',
    type: 'Contratos e Serviços',
    description:
      'Validação de endpoints, contratos, autenticação, cenários negativos e consistência das respostas.',
    accent: 'red',
    tabs: [
      {
        id: 'postman',
        label: 'Postman',
        title: 'Projetos Postman',
        description:
          'Coleções funcionais para validar APIs REST com variáveis, ambientes, scripts de teste, Newman e evidências publicadas.',
        stack: ['Postman', 'Newman', 'Node.js', 'GitHub Actions'],
        repo: '#',
        highlights: [
          'Coleções versionadas no repositório',
          'Execução local e em pipeline',
          'Relatórios HTML com Newman htmlextra',
          'Documentação de cenários e rastreabilidade'
        ],
        projects: [
          {
            id: 'serverest-postman',
            title: 'ServeRest API Postman Functional Tests',
            description:
              'Suíte funcional da API ServeRest com Postman e Newman, cobrindo login, usuários, produtos e carrinhos com documentação, rastreabilidade e relatório HTML publicado.',
            stack: ['Postman', 'Newman', 'Node.js', 'GitHub Actions', 'GitHub Pages'],
            repo: 'https://github.com/pedjnr/serverest-api-postman-functional-tests',
            highlights: [
              'Fluxos de login, usuários, produtos e carrinhos',
              'Cenários positivos, negativos, smoke e regressão',
              'Matriz de rastreabilidade e documentação técnica',
              'Pipeline CI/CD com relatório Newman no GitHub Pages'
            ]
          }
        ]
      },
      {
        id: 'restassured',
        label: 'RestAssured',
        title: 'Projetos RestAssured',
        description:
          'Suítes de automação de APIs em Java, organizadas por domínio, contrato, cenários positivos e negativos, evidências técnicas e execução em CI.',
        stack: ['RestAssured', 'Java', 'JUnit 5', 'Allure Reports', 'GitHub Actions'],
        repo: '#',
        highlights: [
          'Projetos separados por contexto de negócio',
          'Validações de contrato, payload e mensagens',
          'Relatórios Allure e artefatos de execução',
          'Pipelines CI/CD para execução automatizada'
        ],
        projects: [
          {
            id: 'sicredi-api',
            title: 'Sicredi API Test Automation',
            description:
              'Suíte de automação para APIs de restrições e simulações de crédito, com validação de regras de negócio, cenários negativos e evidências em Allure Reports.',
            stack: ['RestAssured', 'Java', 'JUnit 5', 'Allure Reports'],
            repo: 'https://github.com/pedjnr/sicredi-api-test-automation',
            highlights: [
              'Endpoints de restrições e simulações',
              'Status code, payload, mensagens e contrato',
              'Cenários positivos, negativos e regras de negócio',
              'Pipeline CI/CD com publicação de relatório Allure'
            ]
          },
          {
            id: 'serverest-api',
            title: 'ServeRest API Test Automation',
            description:
              'Automação da API ServeRest cobrindo fluxos de login, usuários, produtos e carrinhos, com schemas JSON, mocks HTTP e relatório Allure publicado via GitHub Pages.',
            stack: ['RestAssured', 'Java 21', 'JUnit 5', 'WireMock', 'Allure Reports'],
            repo: 'https://github.com/pedjnr/serverest-api-test-automation',
            highlights: [
              'Fluxos de login, usuários, produtos e carrinhos',
              'Validação de status codes, mensagens e schemas JSON',
              'Mocks HTTP com WireMock para testes isolados',
              'GitHub Actions com relatório Allure no GitHub Pages'
            ]
          }
        ]
      },
      {
        id: 'api-jmeter',
        label: 'JMeter',
        title: 'Projetos JMeter para APIs',
        description:
          'Suítes funcionais de API com JMeter e Taurus, organizadas para execução em pipeline, evidências e relatórios publicados.',
        stack: ['JMeter', 'Taurus', 'Java', 'GitHub Actions'],
        repo: '#',
        highlights: [
          'Execução funcional com JMeter e Taurus',
          'API ServeRest iniciada no pipeline',
          'Relatório HTML funcional customizado',
          'Documentação de cenários e rastreabilidade'
        ],
        projects: [
          {
            id: 'serverest-jmeter-functional',
            title: 'ServeRest API JMeter Functional Tests',
            description:
              'Suíte funcional da API ServeRest com Apache JMeter e Taurus, cobrindo login, usuários, produtos e carrinhos com rastreabilidade, evidências e relatório HTML publicado.',
            stack: ['JMeter', 'Taurus', 'Java 21', 'GitHub Actions', 'GitHub Pages'],
            repo: 'https://github.com/pedjnr/serverest-api-jmeter-functional-tests',
            highlights: [
              'Fluxos de login, usuários, produtos e carrinhos',
              'Cenários positivos, negativos, smoke e regressão',
              'Matriz de rastreabilidade e documentação técnica',
              'Pipeline CI/CD com relatório funcional no GitHub Pages'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'Testes de Performance',
    type: 'Carga e estabilidade',
    description:
      'Validações não funcionais para observar estabilidade, tempo de resposta, throughput e comportamento sob diferentes perfis de uso.',
    accent: 'yellow',
    tabs: [
      {
        id: 'jmeter-performance',
        label: 'JMeter',
        title: 'Projetos JMeter Performance',
        description:
          'Planos de performance com JMeter e Taurus para observar carga, estabilidade, tempo de resposta, throughput, percentis e taxa de erro.',
        stack: ['JMeter', 'Taurus', 'BlazeMeter', 'GitHub Actions'],
        repo: '#',
        highlights: [
          'Perfis smoke, baseline, load, stress e spike',
          'Massa criada no setup e limpa no teardown',
          'Métricas de resposta, throughput e taxa de erro',
          'Relatório BlazeMeter publicado via GitHub Pages'
        ],
        projects: [
          {
            id: 'serverest-jmeter-performance',
            title: 'ServeRest API JMeter Performance Tests',
            description:
              'Projeto de performance da API ServeRest com Apache JMeter e Taurus, usando perfis de carga para medir estabilidade, tempo de resposta, throughput, percentis e taxa de erro.',
            stack: ['JMeter', 'Taurus', 'Java 21', 'BlazeMeter', 'GitHub Pages'],
            repo: 'https://github.com/pedjnr/serverest-api-jmeter-performance-tests',
            highlights: [
              'Perfis smoke, baseline, load, stress e spike',
              'Distribuição de carga entre usuários, produtos, login e carrinhos',
              'Massa de dados preparada antes da carga principal',
              'Pipeline CI/CD com relatório público de performance'
            ]
          }
        ]
      }
    ]
  }
];

export const skillShowcase = [
  {
    label: 'Testes Manuais',
    context: 'Cenários e evidências',
    iconUrl: '/stack-icons/manual-testing.svg',
    iconFallback: 'TM'
  },
  {
    label: 'Automação de Testes',
    context: 'Web e regressão',
    iconUrl: '/stack-icons/test-automation.svg',
    iconFallback: 'AT'
  },
  {
    label: 'Testes de API',
    context: 'REST/SOAP',
    iconUrl: '/stack-icons/api-testing.svg',
    iconFallback: 'API'
  },
  {
    label: 'Metodologia Ágil',
    context: 'Scrum e colaboração',
    iconUrl: '/stack-icons/agile-methodology.svg',
    iconFallback: 'Ag'
  },
  {
    label: 'Documentação',
    context: 'Evidências',
    iconUrl: '/stack-icons/qa-documentation.svg',
    iconFallback: 'Doc'
  },
  {
    label: 'Selenium',
    context: 'WebDriver',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg',
    iconFallback: 'Se'
  },
  {
    label: 'Java',
    context: 'Código',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
    iconFallback: 'Ja'
  },
  {
    label: 'Postman',
    context: 'API REST',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
    iconFallback: 'Pm'
  },
  {
    label: 'JMeter',
    context: 'Performance',
    iconUrl: 'https://jmeter.apache.org/images/jmeter_square.svg',
    iconFallback: 'Jm'
  },
  {
    label: 'CI/CD',
    context: 'Pipelines de testes',
    iconUrl: '/stack-icons/ci-cd.svg',
    iconFallback: 'CI'
  },
  {
    label: 'Git',
    context: 'Versionamento',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    iconFallback: 'Git'
  },
  {
    label: 'Jira',
    context: 'Gestão de tarefas',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg',
    iconFallback: 'Ji'
  }
];

export const skills = skillShowcase.map((skill) => skill.label);
