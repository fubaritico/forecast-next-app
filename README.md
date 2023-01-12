This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/[lon].tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Contribution

### Commits
Conventional commitlinting is applied with Commitizen and others tools in this project.<br>
Used packages:
- Commitizen [https://commitizen-tools.github.io/commitizen/](https://commitizen-tools.github.io/commitizen/)
- Commitlint [https://github.com/conventional-changelog/commitlint](https://github.com/conventional-changelog/commitlint)
- Husky hooks [https://github.com/conventional-changelog/commitlint](https://github.com/conventional-changelog/commitlint)
- Lint-staged [https://github.com/okonet/lint-staged](https://github.com/okonet/lint-staged)

#### Commitlint

Read the [documentation](https://github.com/conventional-changelog/commitlint/blob/master/README.md)

#### Husky
```sh
# Install commitlint cli and conventional config
npm install --save-dev @commitlint/{config-conventional,cli}
# For Windows:
npm install --save-dev @commitlint/config-conventional @commitlint/cli

# Configure commitlint to use conventional config
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
```

To lint commits before they are created you can use Husky's commit-msg hook:
```sh
# Install Husky v6
npm install husky --save-dev
# or
yarn add husky --dev

# Activate hooks
npx husky install
# or
yarn husky install
```
Add hook
```sh
npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'
```

#### Git

for my commit editing, I chose nano
```sh
git config --global core.editor nano
```

*_NOTE_*: All these installation process will probably be outdated based on the compatibility between packages

### Releases

TODO

## UX design

#### Links

- [Codepen for gradients](https://codepen.io/stefcot/pen/QWBGEQV)
- [The Secret of Great Gradient](https://uxplanet.org/the-secret-of-great-gradient-2f2c49ef3968)
- [Sky-inspired Weather App Concept](https://uxplanet.org/sky-inspired-weather-app-concept-4f1775ce4571)
- [Using Vue.js To Create An Interactive Weather Dashboard With APIs](https://www.smashingmagazine.com/2019/02/interactive-weather-dashboard-api-vue-js/)

## APIs

Google Maps API key: `AIzaSyAq65YInKMUuOTLhrmCWz7ZoNhLmCfJxXY`

### Google Maps 

In this project, the Google example approach has been chosen,<br>
install `npm i @googlemaps/react-wrapper`<br>
and see: [https://developers.google.com/maps/documentation/javascript/react-map#react-wrapper](https://developers.google.com/maps/documentation/javascript/react-map#react-wrapper)

#### Other solution
install `npm i @googlemaps/js-api-loader`<br>
and see: [3 gotchas of Google Maps API when used with Next.js and eslint](https://medium.com/web-dev-survey-from-kyoto/3-gotchas-of-google-maps-api-when-used-with-next-js-and-eslint-dba627c9657d)

#### Links
- [Next.js environment variables](https://nextjs.org/docs/basic-features/environment-variables)
- [Google Maps Javascript API documentation](https://developers.google.com/maps/documentation/javascript/reference/)

### WeatherBit

See: [Field Decriptions](https://www.weatherbit.io/api/weather-current)