
### Yesenia Molina | Software Engineer Web | Coding Challenge


## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)
- [Documentation](#docs)

## 🧐 About <a name = "about"></a>
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This project is my solution to the Blinkist coding challenge.
It's a blog that features various articles (previously created by content creators). These articles can have different variations in sections like the content, title, CTA text, etc. The variations should be presented to the end user as A/B Tests and multiple tests can run in a single article.


## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on deploying the project on a live system.

### Prerequisites

```
yarn
Node.js >= 14.6.0
```

### Installing

Cloning the repository

```
git clone https://github.com/yeseniamolinab/ab-test-blog.git
```

Install packages

```
yarn 
```

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## 🚀 Deployment <a name = "deployment"></a>

Vercel for GitHub automatically deploys with Vercel, providing Preview Deployment URLs and automatic Custom Domain updates.

## 🚦 CI/CD <a name = "ci_cd"></a>

To see the GitHub Actions workflows visit this [link](https://github.com/yeseniamolinab/ab-test-blog/blob/main/.github/workflows/lint-and-build.yml)

**Pull Requests**

Every open PR will run the linter and build.

**Merges into main**

Any merges into the default branch will run linter and build and deploy the changes to vercel to which I have set up a custom subdomain (blog.yesimolina.dev).

## ✍️ Contributors <a name = "authors"></a>

- [@yeseniamolinab](https://github.com/yeseniamolinab)

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- This app uses some of the components from [shadcn/ui](https://ui.shadcn.com/) to get the advantage of beautiful, accessible, and customizable components.
- [next-themes](https://github.com/pacocoursey/next-themes) for adding dark mode effortlessly

## 📝 Documentation <a name = "docs"></a>

- See my [notion note](https://mud-lantana-33b.notion.site/Blinkist-Software-Engineer-Web-Coding-Challenge-b44b64b501e1440f994942970d16ef03) for information about the proposed solution
