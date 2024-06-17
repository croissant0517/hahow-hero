This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Hahow Hero

專案連結：[https://hahow-hero-pi.vercel.app/heroes](https://hahow-hero-pi.vercel.app/heroes)

![](https://github.com/croissant0517/hahow-hero/blob/main/assets/hahow-hero.gif)

## 如何執行

```bash
$ git clone https://github.com/croissant0517/hahow-hero.git
$ cd hahow-hero
$ npm install
$ npm run build
$ npm start (or using yarn instead)
```

在瀏覽器中打開 [http://localhost:3000](http://localhost:3000) 來查看結果

## 功能簡介

- Hero List Page `/heroes`
  展示各英雄卡片
- Hero Profile Page `/heroes/:heroId`
  英雄能力值頁面，可查看、編輯、儲存英雄能力值

### 使用技術及第三方套件

- create-next-app - 建立專案項目環境
- [React](https://react.dev/) - Function Components + Hooks，建立靈活且可重用的 UI 元件
- [Styled Components](https://styled-components.com/) - CSS-in-JS library，將 CSS 樣式直接與組件結合，提高開發效率
- [Swr]("https://swr.vercel.app) - 用於獲取 api 資料。有資料緩存、自動重新連接和焦點追蹤等功能，能夠解決多分頁資料同步的問題
- [React-hot-toast](https://react-hot-toast.com/) - 用於實現 Toast UI 的輕量級元件庫，向用戶展示網站的當前狀態或者 API 的回應狀況
- [Vercel](https://vercel.com/) - 部署及托管網站

## 專案架構

```
├── src
// 共用元件
│   ├── components
│   │   ├── Button
│   │   │   ├── Button.tsx
│   │   │   └── Button.style.ts
│   │   ├── Error
│   │   │   ├── Error.tsx
│   │   │   └── Error.style.ts
│   │   ├── ErrorBoundary
│   │   │   └── ErrorBoundary.jsx
│   │   ├── HeroCard
│   │   │   ├── HeroCard.style.ts
│   │   │   └── HeroCard.tsx
│   │   └── Layout
│   │       ├── Layout.style.ts
│   │       └── Layout.tsx
// 頁面的主要功能區塊
│   ├── container
│   │   ├── HeroList
│   │   │   ├── HeroList.style.ts
│   │   │   └── HeroList.tsx
│   │   └── HeroProfile
│   │       ├── HeroProfile.style.ts
│   │       └── HeroProfile.tsx
// 所有的頁面，Next.js 會根據這個目錄中的檔案結構來自動生成路由。
│   ├── pages
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   ├── heroes
│   │   │   ├── [heroId].tsx
│   │   │   └── index.tsx
│   │   └── index.tsx
// api endpoint
│   ├── service
│   │   └── api.ts
// 全域及頁面層級樣式
│   └── styles
│       ├── heroes.style.ts
│       └── globals.style.ts
```

### 寫註解的原則 （為個人開發上的想法，但此專案只有遇到第一點）

1. 盡可能試著想像別人來看這份 code 的時候，在沒有註解的情況下哪些地方可能會讓人不清楚的地方來添加註解解釋其行為
2. 一些複雜的邏輯或算法，註解可以幫助其他工程師了解這段程式碼的行為
3. 開發中遇到的一些代辦事項，可能後續會進行修正的程式碼

### 遇到的困難

1. 思考如何在切換 profile 頁面時，不渲染 HeroList，一開始是打算在 HeroList 元件內判斷網址上的`heroId`，接著在 map 時，判斷卡片 id 是否與`heroId`相同，並傳入一個`isActive`給 HeroCard 判斷，但這麼做會使 HeroList 會了取得網址上參數而渲染，最後解法是將判斷移至 HeroCard 內，讓卡片自己知道自己是否被選中
2. 有幾個看文件時的疑惑，藉由在 slack 群組提問得到解答
3. 對 useSwr 的緩存機制不熟悉，一開始有踩了一些坑，後續藉由閱讀文件來一步步釐清
4. 第一次使用 react-hot-toast，對於 api 及使用方式較不熟悉，同樣也藉由仔細閱讀文件，對其使用方式有大致的了解

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
