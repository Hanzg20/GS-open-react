export type Locale = 'en' | 'zh';

export interface Translations {
  // Navigation
  nav: {
    home: string;
    platform: string;
    solutions: string;
    products: string;
    industries: string;
    technology: string;
    about: string;
    contact: string;
  };

  // Common
  common: {
    learnMore: string;
    getStarted: string;
    contactUs: string;
    readMore: string;
    viewAll: string;
  };

  // Home Page
  home: {
    hero: {
      badge: string;
      title1: string;
      title2: string;
      title3: string;
      description1: string;
      description2: string;
      description3: string;
      talkToUs: string;
      explorePlatform: string;
    };
    platform: {
      title: string;
      subtitle: string;
      applications: string;
      smartFactory: string;
      smartRetail: string;
      smartCommunity: string;
      manufacturingSolutions: string;
      commerceSolutions: string;
      serviceSolutions: string;
    };
    capabilities: {
      title: string;
      subtitle: string;
      pillar1: {
        title: string;
        subtitle: string;
        description: string;
        feature1: string;
        feature2: string;
        feature3: string;
        feature4: string;
      };
      pillar2: {
        title: string;
        subtitle: string;
        description: string;
        feature1: string;
        feature2: string;
        feature3: string;
        feature4: string;
      };
      pillar3: {
        title: string;
        subtitle: string;
        description: string;
        feature1: string;
        feature2: string;
        feature3: string;
        feature4: string;
      };
    };
    solutions: {
      title: string;
      subtitle: string;
      factory: {
        title: string;
        description: string;
        feature1: string;
        feature2: string;
        feature3: string;
        feature4: string;
      };
      retail: {
        title: string;
        description: string;
        feature1: string;
        feature2: string;
        feature3: string;
        feature4: string;
      };
      community: {
        title: string;
        description: string;
        feature1: string;
        feature2: string;
        feature3: string;
        feature4: string;
      };
      learnMore: string;
    };
    cta: {
      title: string;
      description: string;
      talkToUs: string;
      requestDemo: string;
      stat1Value: string;
      stat1Label: string;
      stat2Value: string;
      stat2Label: string;
      stat3Value: string;
      stat3Label: string;
    };
  };

  // About Page
  about: {
    hero: {
      title: string;
      subtitle: string;
    };
    company: {
      name: string;
      nameChinese: string;
      founded: string;
      tagline: string;
    };
    offices: {
      title: string;
      ottawa: string;
      beijing: string;
      harbin: string;
    };
  };

  // Contact Page
  contact: {
    hero: {
      title: string;
      subtitle: string;
    };
    offices: {
      title: string;
      ottawa: {
        city: string;
        country: string;
        address: string;
        phone: string;
        email: string;
      };
      beijing: {
        city: string;
        country: string;
        address: string;
        phone: string;
        email: string;
      };
      harbin: {
        city: string;
        country: string;
        address: string;
        phone: string;
        email: string;
      };
    };
    social: {
      title: string;
      linkedin: string;
      xiaohongshu: string;
      tiktok: string;
    };
  };

  // Footer
  footer: {
    company: {
      title: string;
      description: string;
    };
    links: {
      platform: string;
      solutions: string;
      products: string;
      industries: string;
      technology: string;
      about: string;
      contact: string;
    };
    social: {
      title: string;
    };
    copyright: string;
  };
}

export const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      home: 'Home',
      platform: 'Platform',
      solutions: 'Solutions',
      products: 'Products',
      industries: 'Industries',
      technology: 'Technology',
      about: 'About',
      contact: 'Contact',
    },
    common: {
      learnMore: 'Learn More',
      getStarted: 'Get Started',
      contactUs: 'Contact Us',
      readMore: 'Read More',
      viewAll: 'View All',
    },
    home: {
      hero: {
        badge: 'Platform-First • Engineering-Driven • Industry-Focused',
        title1: 'Building the',
        title2: 'Unified Technology Platform',
        title3: 'for Smart Industries',
        description1: 'One platform. Multiple industries. Infinite possibilities.',
        description2: 'From Smart Factory to Smart Retail to Community Services —',
        description3: 'GoldSky Technologies delivers modular, scalable solutions that transform how industries operate.',
        talkToUs: 'Talk to Us',
        explorePlatform: 'Explore Platform',
      },
      platform: {
        title: 'Platform Architecture',
        subtitle: 'A unified foundation that powers diverse industry solutions',
        applications: 'Applications',
        smartFactory: 'Smart Factory',
        smartRetail: 'Smart Retail',
        smartCommunity: 'Smart Community',
        manufacturingSolutions: 'Manufacturing Solutions',
        commerceSolutions: 'Commerce Solutions',
        serviceSolutions: 'Service Solutions',
      },
      capabilities: {
        title: 'Three Pillars of Innovation',
        subtitle: 'A comprehensive ecosystem that transforms industries',
        pillar1: {
          title: 'Platform Foundation',
          subtitle: 'Nestus Core',
          description: 'Enterprise-grade infrastructure with multi-tenant architecture, secure data isolation, and scalable microservices.',
          feature1: 'Multi-tenant',
          feature2: 'Microservices',
          feature3: 'API Gateway',
          feature4: 'Security Layer',
        },
        pillar2: {
          title: 'Industry Solutions',
          subtitle: 'Vertical Integration',
          description: 'Pre-built modules for Manufacturing, Retail, and Community Services with industry-specific workflows and compliance.',
          feature1: 'Smart Factory',
          feature2: 'Smart Retail',
          feature3: 'Smart Community',
          feature4: 'Custom Solutions',
        },
        pillar3: {
          title: 'Applications & Products',
          subtitle: 'Ready to Deploy',
          description: 'Production-ready applications including MES, Device Monitoring, Jinkoo messaging, and JinBean community platform.',
          feature1: 'SmartFactory MES',
          feature2: 'Device Monitor',
          feature3: 'Jinkoo',
          feature4: 'JinBean',
        },
      },
      solutions: {
        title: 'Industry Solutions',
        subtitle: 'Tailored solutions built on our unified platform',
        factory: {
          title: 'Smart Factory',
          description: 'Transform manufacturing with real-time monitoring, predictive maintenance, and intelligent production planning.',
          feature1: 'MES Integration',
          feature2: 'IoT Monitoring',
          feature3: 'Quality Control',
          feature4: 'Production Analytics',
        },
        retail: {
          title: 'Smart Retail',
          description: 'Revolutionize retail operations with intelligent inventory, customer insights, and omnichannel experiences.',
          feature1: 'Inventory Management',
          feature2: 'Customer Analytics',
          feature3: 'POS Integration',
          feature4: 'Marketing Automation',
        },
        community: {
          title: 'Community Services',
          description: 'Build connected communities with integrated service platforms, local commerce, and resident engagement.',
          feature1: 'Service Platform',
          feature2: 'Local Commerce',
          feature3: 'Community Engagement',
          feature4: 'Resource Management',
        },
        learnMore: 'Learn More',
      },
      cta: {
        title: 'Ready to Transform Your Industry?',
        description: 'Join leading enterprises leveraging GoldSky\'s unified platform to drive innovation, efficiency, and growth across their operations.',
        talkToUs: 'Talk to Us',
        requestDemo: 'Request Demo',
        stat1Value: '10+',
        stat1Label: 'Years of Engineering Excellence',
        stat2Value: '3',
        stat2Label: 'Industry Verticals',
        stat3Value: '∞',
        stat3Label: 'Scalability Potential',
      },
    },
    about: {
      hero: {
        title: 'About GoldSky Technologies',
        subtitle: 'Innovation, Excellence, Global Impact',
      },
      company: {
        name: 'GoldSky Technologies',
        nameChinese: '金宏天科技',
        founded: 'Founded in 2011',
        tagline: 'Building the unified technology platform for Smart Factory, Smart Retail, and Community Services.',
      },
      offices: {
        title: 'Global Presence',
        ottawa: 'Ottawa, Canada',
        beijing: 'Beijing, China',
        harbin: 'Harbin, China',
      },
    },
    contact: {
      hero: {
        title: 'Get in Touch',
        subtitle: 'Connect with our global team',
      },
      offices: {
        title: 'Our Global Offices',
        ottawa: {
          city: 'Ottawa',
          country: 'Canada',
          address: 'Innovation Centre, Kanata North',
          phone: '+1 613 555 1234',
          email: 'ottawa@goldsky.tech',
        },
        beijing: {
          city: 'Beijing',
          country: 'China',
          address: 'Technology Hub, Haidian District',
          phone: '+86 10 1234 5678',
          email: 'beijing@goldsky.tech',
        },
        harbin: {
          city: 'Harbin',
          country: 'China',
          address: 'Tech Park, Nangang District',
          phone: '+86 451 1234 5678',
          email: 'harbin@goldsky.tech',
        },
      },
      social: {
        title: 'Follow Us',
        linkedin: 'LinkedIn',
        xiaohongshu: 'Xiaohongshu (Little Red Book)',
        tiktok: 'TikTok',
      },
    },
    footer: {
      company: {
        title: 'GoldSky Technologies',
        description: 'Building the unified technology platform for Smart Factory, Smart Retail, and Community Services.',
      },
      links: {
        platform: 'Platform',
        solutions: 'Solutions',
        products: 'Products',
        industries: 'Industries',
        technology: 'Technology',
        about: 'About',
        contact: 'Contact',
      },
      social: {
        title: 'Follow Us',
      },
      copyright: '© 2024 GoldSky Technologies. All rights reserved.',
    },
  },
  zh: {
    nav: {
      home: '首页',
      platform: '平台',
      solutions: '解决方案',
      products: '产品',
      industries: '行业',
      technology: '技术',
      about: '关于我们',
      contact: '联系我们',
    },
    common: {
      learnMore: '了解更多',
      getStarted: '开始使用',
      contactUs: '联系我们',
      readMore: '阅读更多',
      viewAll: '查看全部',
    },
    home: {
      hero: {
        badge: '平台优先 • 工程驱动 • 行业聚焦',
        title1: '构建',
        title2: '统一技术平台',
        title3: '赋能智能产业',
        description1: '一个平台，多个行业，无限可能。',
        description2: '从智能工厂到智能零售再到社区服务——',
        description3: '金宏天科技提供模块化、可扩展的解决方案，变革行业运营模式。',
        talkToUs: '联系我们',
        explorePlatform: '探索平台',
      },
      platform: {
        title: '平台架构',
        subtitle: '支撑多元行业解决方案的统一基础',
        applications: '应用层',
        smartFactory: '智能工厂',
        smartRetail: '智能零售',
        smartCommunity: '智慧社区',
        manufacturingSolutions: '制造业解决方案',
        commerceSolutions: '商业解决方案',
        serviceSolutions: '服务解决方案',
      },
      capabilities: {
        title: '创新三大支柱',
        subtitle: '变革行业的全面生态系统',
        pillar1: {
          title: '平台基础',
          subtitle: 'Nestus核心',
          description: '企业级基础设施，提供多租户架构、安全数据隔离和可扩展微服务。',
          feature1: '多租户',
          feature2: '微服务',
          feature3: 'API网关',
          feature4: '安全层',
        },
        pillar2: {
          title: '行业解决方案',
          subtitle: '垂直整合',
          description: '为制造业、零售业和社区服务预构建模块，提供行业特定工作流和合规性。',
          feature1: '智能工厂',
          feature2: '智能零售',
          feature3: '智慧社区',
          feature4: '定制方案',
        },
        pillar3: {
          title: '应用与产品',
          subtitle: '即刻部署',
          description: '生产就绪的应用程序，包括MES、设备监控、Jinkoo消息平台和JinBean社区平台。',
          feature1: 'SmartFactory MES',
          feature2: '设备监控',
          feature3: 'Jinkoo',
          feature4: 'JinBean',
        },
      },
      solutions: {
        title: '行业解决方案',
        subtitle: '基于统一平台打造的定制化解决方案',
        factory: {
          title: '智能工厂',
          description: '通过实时监控、预测性维护和智能生产计划改造制造业。',
          feature1: 'MES集成',
          feature2: '物联网监控',
          feature3: '质量控制',
          feature4: '生产分析',
        },
        retail: {
          title: '智能零售',
          description: '通过智能库存、客户洞察和全渠道体验革新零售运营。',
          feature1: '库存管理',
          feature2: '客户分析',
          feature3: 'POS集成',
          feature4: '营销自动化',
        },
        community: {
          title: '社区服务',
          description: '通过集成服务平台、本地商务和居民参与构建互联社区。',
          feature1: '服务平台',
          feature2: '本地商务',
          feature3: '社区参与',
          feature4: '资源管理',
        },
        learnMore: '了解更多',
      },
      cta: {
        title: '准备好变革您的行业了吗？',
        description: '加入领先企业，利用金宏天统一平台推动创新、提升效率、促进业务增长。',
        talkToUs: '联系我们',
        requestDemo: '申请演示',
        stat1Value: '10+',
        stat1Label: '年工程卓越',
        stat2Value: '3',
        stat2Label: '个行业垂直领域',
        stat3Value: '∞',
        stat3Label: '可扩展潜力',
      },
    },
    about: {
      hero: {
        title: '关于金宏天科技',
        subtitle: '创新、卓越、全球影响力',
      },
      company: {
        name: '金宏天科技',
        nameChinese: 'GoldSky Technologies',
        founded: '成立于2011年',
        tagline: '为智能工厂、智能零售和社区服务构建统一技术平台。',
      },
      offices: {
        title: '全球布局',
        ottawa: '加拿大渥太华',
        beijing: '中国北京',
        harbin: '中国哈尔滨',
      },
    },
    contact: {
      hero: {
        title: '联系我们',
        subtitle: '与我们的全球团队取得联系',
      },
      offices: {
        title: '全球办事处',
        ottawa: {
          city: '渥太华',
          country: '加拿大',
          address: 'Kanata North 创新中心',
          phone: '+1 613 555 1234',
          email: 'ottawa@goldsky.tech',
        },
        beijing: {
          city: '北京',
          country: '中国',
          address: '海淀区科技园',
          phone: '+86 10 1234 5678',
          email: 'beijing@goldsky.tech',
        },
        harbin: {
          city: '哈尔滨',
          country: '中国',
          address: '南岗区科技园',
          phone: '+86 451 1234 5678',
          email: 'harbin@goldsky.tech',
        },
      },
      social: {
        title: '关注我们',
        linkedin: '领英',
        xiaohongshu: '小红书',
        tiktok: '抖音国际版',
      },
    },
    footer: {
      company: {
        title: '金宏天科技',
        description: '为智能工厂、智能零售和社区服务构建统一技术平台。',
      },
      links: {
        platform: '平台',
        solutions: '解决方案',
        products: '产品',
        industries: '行业',
        technology: '技术',
        about: '关于我们',
        contact: '联系我们',
      },
      social: {
        title: '关注我们',
      },
      copyright: '© 2024 金宏天科技 版权所有',
    },
  },
};
