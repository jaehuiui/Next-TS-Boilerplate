# Nextjs Boilerplate

> Next.js 12+ with Typescript, Sass and Redux

## Documents

- 디자인 & 스타일 관련 문서 [Design Document](docs/2-Design.md)

## Features

- [Next.js](https://nextjs.org) SSR React Framework
- Strict Type Checking [Typescript (kr)](https://typescript-kr.github.io/) 4+ with React 17
- PostCSS with [Sass(Scss)](https://sass-lang.com/)
- Code Formatting with Prettier
- Linter with ESLint
- Lighthouse Score
- Use Cookie with react-cookies, next-cookie

## How to Start

Run the following command on your local environment

```
git clone --depth=1 https://github.com/jaehuiui/Next-TS-Boilerplate.git my-proj
cd my-proj
npm install
```

Run locally in development mode with live reload  
Open _http://localhost:3000_ with any browser

```
npm run dev
```

## Project Structure

### Components

Based on **Atomic Design Pattern**  
`components/*`

```
|── components
│   ├── atoms               # Basic Building Blocks (Html Tags)
│   ├── molecules           # Combination of Atoms
│   └── organisms           # Unit of molecules for function
|
├── templates               # Page-level objects
└── pages                   # Instances of Templates
```

If you are interested in **Atomic Design Pattern**,  
check my design document [here](docs/2-Design.md)

### MISC

utilites, services are implemented in `lib/utils`, `lib/services`

## Customize

1. Change favicon at `public/favicon.ico`
