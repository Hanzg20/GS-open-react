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
      title: string;
      subtitle: string;
      description: string;
      primaryCTA: string;
      secondaryCTA: string;
    };
    features: {
      title: string;
      subtitle: string;
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
        title: 'Building the Future of Smart Technology',
        subtitle: 'GoldSky Technologies',
        description: 'Unified technology platform for Smart Factory, Smart Retail, and Community Services',
        primaryCTA: 'Get Started',
        secondaryCTA: 'Learn More',
      },
      features: {
        title: 'Our Solutions',
        subtitle: 'Comprehensive technology platform for modern businesses',
      },
    },
    about: {
      hero: {
        title: 'About GoldSky Technologies',
        subtitle: 'Innovation, Excellence, Global Impact',
      },
      company: {
        name: 'GoldSky Technologies',
        nameChinese: '金鸿天科技',
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
        title: '构建智能技术的未来',
        subtitle: '金鸿天科技',
        description: '为智能工厂、智能零售和社区服务提供统一技术平台',
        primaryCTA: '开始使用',
        secondaryCTA: '了解更多',
      },
      features: {
        title: '我们的解决方案',
        subtitle: '为现代企业提供全面的技术平台',
      },
    },
    about: {
      hero: {
        title: '关于金鸿天科技',
        subtitle: '创新、卓越、全球影响力',
      },
      company: {
        name: '金鸿天科技',
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
        title: '金鸿天科技',
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
      copyright: '© 2024 金鸿天科技 版权所有',
    },
  },
};
