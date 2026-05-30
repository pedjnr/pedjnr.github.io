export const profile = {
  name: 'Pedro Carvalho',
  email: 'ped.jnr@gmail.com',
  location: 'Mogi Guaçu - SP',
  githubUrl: 'https://github.com/pedjnr',
  linkedinUrl: 'https://www.linkedin.com/in/pedro-carvalho-jnr/',
  resumeUrl: '/curriculo-pedro-carvalho.pdf',
  resumeDownloadName: 'Pedro-Carvalho-CV.pdf'
};

export const navigation = [
  { label: 'Projetos', href: '#projetos' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experiências', href: '#experiencias' }
];

export const socialLinks = [
  {
    type: 'github',
    label: 'GitHub',
    href: profile.githubUrl,
    external: true
  },
  {
    type: 'linkedin',
    label: 'LinkedIn',
    href: profile.linkedinUrl,
    external: true
  },
  {
    type: 'email',
    label: 'E-mail',
    href: `mailto:${profile.email}`,
    external: false
  }
];

export const heroContent = {
  eyebrow: 'Pedro Carvalho · Analista de qualidade',
  title: 'Analista de qualidade dedicado a construir software mais confiável.',
  description:
    'Sou um profissional de engenharia de software em evolução, com foco em qualidade de software trabalhando com testes manuais, automação, APIs e performance. Gosto de entender como as coisas funcionam, ver como as engrenagens se conectam e os resultados que os esforços trazem.',
  primaryCta: {
    label: 'Ver projetos',
    href: '#projetos'
  },
  secondaryCta: {
    label: 'Download CV',
    href: profile.resumeUrl,
    download: profile.resumeDownloadName
  }
};

export const heroProfileCard = {
  avatar: '/avatar-pedro-pixel.png',
  name: 'Pedro Carvalho',
  role: 'Analista de qualidade',
  description:
    'Experiência prática em projetos corporativos de QA, com validações funcionais, APIs REST/SOAP, automação e rastreabilidade técnica.',
  flow: ['Analisar', 'Testar', 'Evidenciar', 'Automatizar'],
  highlights: [
    'Atuação em projetos corporativos de migração e modernização',
    'Validação de APIs REST/SOAP, testes funcionais e documentação de evidências',
    'Automação, versionamento e apoio a pipelines CI/CD em contexto ágil'
  ],
  summary: [
    {
      icon: 'check',
      title: 'Testes',
      description: 'Manuais e automatizados'
    },
    {
      icon: 'code',
      title: 'APIs',
      description: 'REST/SOAP'
    },
    {
      icon: 'workflow',
      title: 'CI/CD',
      description: 'GitLab/GitHub'
    },
    {
      icon: 'workflow',
      title: 'Metodologias ágeis',
      description: 'Scrum/Kanban'
    }
  ]
};

export const sectionContent = {
  projects: {
    eyebrow: 'Vitrine técnica',
    title: 'Áreas de prática em QA',
    description:
      'Alguns projetos práticos em QA, separados por tipos de teste e ferramentas utilizadas.'
  },
  skills: {
    eyebrow: 'Stack de QA',
    title: 'Competências e ferramentas',
    description:
      'Ferramentas e conhecimentos que fazem parte da minha rotina e evolução como QA.'
  }
};

export const experienceContent = {
  eyebrow: 'Experiências anteriores',
  title: 'Trajetória em QA, automação e projetos corporativos.',
  description:
    'Um resumo da minha trajetória até aqui, com experiências, formação e certificações que ajudam a contar como venho construindo minha base em QA.',
  timeline: [
    {
      period: '08/2024 - 05/2025',
      role: 'Desenvolvedor de Automação de Testes',
      company: 'Compass UOL',
      type: 'Junior Test Automation Developer',
      description:
        'Atuação em projeto de migração e modernização para AWS, com validações funcionais, automação, APIs, performance e rastreabilidade de testes em contexto ágil.',
      highlights: [
        'Participação em migração de 86 módulos IBM WebSphere On-Premises para Wildfly na AWS.',
        'Apoio na rearquitetura de 12 módulos monolíticos para microsserviços.',
        'Testes REST/SOAP com Postman, SoapUI e JMeter, além de performance com JMeter e Taurus.',
        'Automação front-end com Robot Framework, Playwright e Selenium, com gestão de cenários no Zephyr Scale.'
      ],
      tags: ['AWS Migration', 'REST/SOAP', 'JMeter', 'Robot Framework', 'Zephyr Scale']
    },
    {
      period: '02/2024 - 07/2024',
      role: 'Estagiário em qualidade de software',
      company: 'Compass UOL',
      type: 'QA Internship',
      description:
        'Experiência inicial em time Scrum, com foco em testes de APIs, automação em Java, versionamento, documentação e acompanhamento de bugs.',
      highlights: [
        'Execução de testes CRUD em APIs REST com Postman.',
        'Automação de APIs com Java, JUnit, POO, JSON Schema Validation e WireMock.',
        'Registro e acompanhamento de testes e defeitos no Jira.',
        'Versionamento com Git/GitLab e execução de pipelines CI/CD com Docker.'
      ],
      tags: ['Postman', 'Java', 'JUnit', 'GitLab CI/CD', 'Jira']
    }
  ],
  supporting: [
    {
      title: 'Formação',
      items: ['Engenharia de Software - UNINTER', 'Bacharelado em andamento desde 04/2022']
    },
    {
      title: 'Certificações',
      items: ['AWS Certified Cloud Practitioner', 'Cybersecurity Essentials - Cisco', 'EF SET English Certificate C1']
    }
  ]
};

export const footerContent = {
  copyright: '© Pedro Carvalho'
};
