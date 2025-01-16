# Nuxt.js Project

A dynamic e-commerce platform built with Nuxt.js, optimized for SEO and performance.

## Features

- **Dynamic Routing & SSR**: Ensures fast and SEO-friendly page rendering.
- **SEO Optimization**: Dynamic titles, meta descriptions, and keywords for better search engine ranking.
- **Loading Indicator**: Displays a loading spinner until data is fetched.
- **API Integration**: Fetches and displays data from APIs.
- **Responsive Design**: Works seamlessly across devices.

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

## SEO Implementation


### Dynamic Meta Tags


```javascript
export default {
  head() {
    return {
      title: `Product Listings | ${this.pageTitle}`,
      meta: [
        { name: 'description', content: this.pageDescription },
        { name: 'keywords', content: 'Nuxt, SEO' },
      ],
    };
  },
};


## Usage

Start the server:

```bash
npm run dev
```

Access the app at [http://localhost:3000](http://localhost:3000).

## Loading Indicator


```vue
<template>
  <div v-if="loading">Loading...</div>
  <div v-else>Data loaded.</div>
</template>
```
