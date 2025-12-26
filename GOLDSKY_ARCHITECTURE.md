# GoldSky Technologies 官网架构设计

## 项目定位
**技术平台型企业官网** - 工程驱动，非营销导向

## 技术栈（基于现有模板）
- **框架**: Next.js 15 + React 19
- **样式**: Tailwind CSS v4
- **UI组件**: Headless UI
- **动画**: AOS (Animate On Scroll)
- **类型**: TypeScript
- **部署**: Cloudflare Pages（静态导出）

## 信息架构（MVP）

### 一级导航（8个）
```
Home | Platform | Solutions | Products | Industries | Technology | About | Contact
```

### 页面结构
```
/
├── / (首页)
├── /platform (平台架构)
├── /solutions (解决方案)
│   ├── /solutions/smart-factory
│   └── /solutions/smart-retail
├── /products (产品列表)
│   ├── /products/smartfactory-mes
│   ├── /products/device-monitoring
│   ├── /products/jinkoo
│   └── /products/jinbean
├── /industries (行业垂直)
│   ├── /industries/manufacturing
│   ├── /industries/retail
│   └── /industries/community
├── /technology (技术架构)
├── /about (关于我们)
└── /contact (联系我们)
```

## 组件规划

### 全局组件
- `Header` - 导航栏（8个导航项）
- `Footer` - 页脚（链接、版权、社交）
- `CTASection` - 通用CTA模块

### 首页组件
- `Hero` - 英雄区（定位语句）
- `PlatformOverview` - 平台架构可视化
- `CapabilityBlocks` - 三大能力展示
- `SolutionCards` - 解决方案卡片
- `TechStack` - 技术栈展示

### 平台页组件
- `ArchitectureDiagram` - 系统架构图
- `PlatformModule` - 平台模块卡片
- `DesignPrinciples` - 设计原则

### 解决方案组件
- `IndustryPain` - 行业痛点
- `SolutionApproach` - 解决方式
- `ModuleList` - 模块组成
- `UseCases` - 应用场景

### 产品页组件
- `ProductHero` - 产品介绍
- `FeatureList` - 功能列表
- `CustomerTypes` - 适用客户
- `PlatformRelation` - 平台关系

## 设计系统

### 色彩体系
```css
--primary: #0070f3 (科技蓝)
--secondary: #00a86b (生态绿)
--accent: #ff6b35 (动态橙)
--dark: #0a0a0a
--light: #fafafa
--gray: #666666
```

### 字体系统
- 标题: Inter / DM Sans
- 正文: Inter / System Font
- 代码: JetBrains Mono

### 响应式断点
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 内容策略

### 核心信息传递
1. **一句话定位**: "Building the unified technology platform for Smart Factory, Smart Retail, and Community Services"
2. **三大支柱**: Platform Foundation | Industry Solutions | Applications & Products
3. **差异化**: 统一平台支撑多行业，而非单点解决方案

### 品牌语调
- **专业技术**: 工程术语准确
- **可信赖**: 数据支撑，案例说话
- **前瞻性**: 技术愿景，长期主义

## 开发阶段

### Phase 1 - MVP（当前）
- [x] 项目架构设计
- [ ] 基础页面框架
- [ ] 核心内容填充
- [ ] 响应式优化
- [ ] 部署上线

### Phase 2 - 增强
- [ ] 多语言（EN/ZH）
- [ ] 动画优化
- [ ] SEO优化
- [ ] 性能优化

### Phase 3 - 扩展
- [ ] 博客系统
- [ ] 技术文档
- [ ] 客户案例
- [ ] Partner Portal

## 技术实现要点

### SEO优化
- 静态页面生成
- 结构化数据
- Meta tags优化
- Sitemap生成

### 性能优化
- 图片懒加载
- 代码分割
- CDN加速
- 缓存策略

### 可维护性
- 组件化设计
- 类型安全
- 统一样式系统
- 文档完善

## 成功指标
- [ ] 页面加载时间 < 3s
- [ ] Lighthouse得分 > 90
- [ ] 移动端友好
- [ ] 跨浏览器兼容
- [ ] 内容易于更新