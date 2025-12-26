# GoldSky Technologies - 配色方案指南

## LOGO 色彩分析

基于 GoldSky LOGO 的设计元素，提取了以下主色系：

### 主色调 (Primary Colors)
- **金黄色** `#FFD700` ~ `#F5B800` - 代表创新、光明、天空
- **棕橙色** `#D4922A` ~ `#C17817` - 代表大地、根基、稳定
- **科技蓝** `#5BA3E8` ~ `#4A90E2` - 代表科技、数字化

### LOGO 设计寓意
1. **金黄色弧形（上部）** - "GoldSky" 的 "Sky"，象征天空、创新、突破
2. **棕橙色弧形（下部）** - 代表根基、稳定性、可靠性
3. **蓝色几何图形（右侧）** - 科技感、数字化转型、未来感
4. **整体圆形** - 完整的平台生态系统、天地贯通

---

## 网站配色应用指南

### 1. 主要行动按钮 (Primary CTA)
**渐变金橙色**
```css
bg-gradient-to-r from-yellow-500 to-orange-500
hover:from-yellow-600 hover:to-orange-600
```
**应用场景：**
- Header "Talk to Us" 按钮
- 页面主要 CTA 按钮
- 表单提交按钮
- 重要功能入口

### 2. 次要按钮 (Secondary Buttons)
**边框样式**
```css
border-2 border-gray-300 bg-white text-gray-700
hover:border-gray-400 hover:bg-gray-50
```
或使用棕橙色变体：
```css
border-2 border-orange-400 bg-white text-orange-600
hover:bg-orange-50
```

### 3. 链接和导航 (Links & Navigation)
**默认状态：** `text-gray-700`
**Hover 状态：** `hover:text-yellow-600`

**应用场景：**
- Header 导航链接
- Footer 所有链接
- 文内超链接
- 面包屑导航

### 4. 标题渐变效果 (Gradient Headings)
**金黄渐变文字**
```css
bg-gradient-to-r from-yellow-600 via-yellow-500 to-orange-500
bg-clip-text text-transparent
```
**应用场景：**
- Header LOGO 文字
- Footer LOGO 文字
- 重要标题强调
- Hero 区域标题

### 5. 背景渐变 (Background Gradients)
**浅金色背景**
```css
bg-gradient-to-br from-gray-50 to-yellow-50
```
或
```css
bg-gradient-to-br from-yellow-50 to-orange-50
```

**Hero 区域深色背景**
```css
bg-gradient-to-br from-yellow-600 to-orange-700
```

### 6. 卡片和强调色 (Cards & Accents)
**浅金色卡片背景**
```css
bg-yellow-50 border-yellow-200
```

**图标和徽章**
```css
bg-yellow-100 text-yellow-800
```

**分隔线和边框**
```css
border-yellow-300
```

---

## 已完成的颜色更新

### ✅ Header (components/ui/header-goldsky.tsx)
- [x] LOGO: 使用真实 goldsky-logo.png
- [x] LOGO 文字: 金黄渐变 (from-yellow-600 via-yellow-500 to-orange-500)
- [x] 导航链接 hover: text-yellow-600
- [x] CTA 按钮: 金橙渐变 (from-yellow-500 to-orange-500)
- [x] 移动端链接: text-yellow-600

### ✅ Footer (components/ui/footer-goldsky.tsx)
- [x] LOGO: 使用真实 goldsky-logo.png
- [x] LOGO 文字: 金黄渐变 (from-yellow-400 via-yellow-300 to-orange-400)
- [x] 所有链接 hover: hover:text-yellow-400
- [x] 社交媒体图标 hover: hover:text-yellow-400

### 🔄 待更新的页面组件

#### Hero Sections (所有页面的 Hero 区域)
- [ ] 将 `bg-gradient-to-br from-gray-50 to-blue-50` 改为 `from-gray-50 to-yellow-50`
- [ ] 将所有蓝色按钮改为金橙渐变

#### CTA Sections (所有 CTA 区域)
- [ ] 将 `from-blue-600 to-indigo-700` 改为 `from-yellow-600 to-orange-700`
- [ ] 按钮从白色调整为金橙渐变

#### Cards & Badges (卡片和徽章)
- [ ] 将 `bg-blue-100 text-blue-800` 改为 `bg-yellow-100 text-yellow-800`
- [ ] 将 `border-blue-600` 改为 `border-yellow-600`

#### Links (所有内部链接)
- [ ] 将 `text-blue-600 hover:text-blue-700` 改为 `text-yellow-600 hover:text-yellow-700`

---

## 颜色对照表

| 元素类型 | 原色（蓝色系） | 新色（金黄系） |
|---------|---------------|--------------|
| 主按钮背景 | `bg-blue-600` | `bg-gradient-to-r from-yellow-500 to-orange-500` |
| 主按钮 hover | `hover:bg-blue-700` | `hover:from-yellow-600 hover:to-orange-600` |
| 链接颜色 | `text-blue-600` | `text-yellow-600` |
| 链接 hover | `hover:text-blue-700` | `hover:text-yellow-700` |
| 徽章背景 | `bg-blue-100` | `bg-yellow-100` |
| 徽章文字 | `text-blue-800` | `text-yellow-800` |
| Hero 背景 | `from-gray-50 to-blue-50` | `from-gray-50 to-yellow-50` |
| CTA 背景 | `from-blue-600 to-indigo-700` | `from-yellow-600 to-orange-700` |
| 图标颜色 | `text-blue-500` | `text-yellow-500` |
| 边框强调 | `border-blue-600` | `border-yellow-600` |

---

## Tailwind 配色扩展建议

如果需要在 `tailwind.config.js` 中添加自定义颜色：

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        goldsky: {
          50: '#FFFBEB',
          100: '#FFF3CD',
          200: '#FFE69C',
          300: '#FFD966',
          400: '#FFCC33',
          500: '#FFD700',  // 主金黄色
          600: '#F5B800',  // 深金色
          700: '#D4922A',  // 棕橙色
          800: '#C17817',  // 深棕色
          900: '#8B5A00',  // 超深棕色
        },
        techblue: {
          400: '#5BA3E8',  // 科技蓝
          500: '#4A90E2',  // 深科技蓝
          600: '#3A7BC8',
        }
      }
    }
  }
}
```

---

## 品牌一致性检查清单

在更新所有页面后，请确认：

- [ ] 所有主 CTA 按钮使用金橙渐变
- [ ] 所有链接 hover 状态为黄色系
- [ ] Header 和 Footer 显示真实 LOGO
- [ ] Hero 区域使用浅金色或金橙渐变背景
- [ ] 卡片和徽章使用黄色系而非蓝色系
- [ ] 保持灰色系用于文本和中性元素
- [ ] 科技蓝仅用于特定科技感强调（可选）

---

生成日期: 2025-12-26
版本: 1.0
