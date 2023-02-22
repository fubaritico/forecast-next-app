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

for my commit editing, I chose nano.

```sh
git config --global core.editor nano
```

*_NOTE_*: All these installation process will probably be outdated based on the compatibility between packages<br>

For all possible type, scope and subject, go to [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/)

```sh
# type, subject
fix: My awesome commit

# Long description
Some long description (100 chars max)

# For change log (not mandatory)
BREAKING CHANGE: `extends` key in config file is now used for extending other config files

Reviewed-by: Some colleague
Refs: #123 (tickets)
Closes: #123 (tickets)
```

### Releases

TODO
- Semantic release [https://github.com/semantic-release/git](https://github.com/semantic-release/git)

## UX design

#### Styled Components

- Useful link to integrate styled components in Next. As well font flashing issue. [See](https://dev.to/dharmi/adding-fonts-in-nextjs-local-fonts-along-with-styled-components-2cdd)
- [styled components integration in Next.js](https://dev.to/dharmi/setting-up-styled-components-with-nextjs-952-3khf)
- Theme in next [https://www.jonathan-harrell.com/blog/system-based-theming-with-styled-components/](https://www.jonathan-harrell.com/blog/system-based-theming-with-styled-components/)

#### Fonts

- Next fonts API reference [https://nextjs.org/docs/api-reference/next/font](https://nextjs.org/docs/api-reference/next/font)
- Google web font generator [https://gwfh.mranftl.com/fonts](https://gwfh.mranftl.com/fonts)
- Load fonts in next [See](https://stackoverflow.com/questions/60841540/flash-of-unstyled-text-fout-on-reload-using-next-js-and-styled-components)

#### Layout grid system

- React grid system [https://www.npmjs.com/package/react-grid-system](https://www.npmjs.com/package/react-grid-system)
- React grid system documentation [https://sealninja.github.io/react-grid-system/](https://sealninja.github.io/react-grid-system/)
- React grid layout (top nocth version for industry) [Github site](https://github.com/react-grid-layout/react-grid-layout)
- react-grid-layout example [Code sandbox 1](https://codesandbox.io/examples/package/react-grid-layout)
- react-grid-layout example - Dashboard [Code sandbox dashboard](https://codesandbox.io/s/dashboard-39vxx)

#### Storybook (v6)

Install Webpack 5 and plugins, edit your storybook config, typescript and other needs.<br>
TODO: Storybook config exposes a Vite entry, replace webpack with Vite.

- Approach for writing stories for Next.js [https://dev-yakuza.posstree.com/en/react/nextjs/storybook/start/](https://dev-yakuza.posstree.com/en/react/nextjs/storybook/start/)
- Storybook with TypScript (webpack & vite) [https://stackoverflow.com/questions/66444895/how-to-resolve-aliases-in-storybook](https://stackoverflow.com/questions/66444895/how-to-resolve-aliases-in-storybook)
- Decorators (v5 then v6) [https://github.com/storybookjs/storybook/issues/8531](https://github.com/storybookjs/storybook/issues/8531)
- next/image decorator [https://dev.to/jonasmerlin/how-to-use-the-next-js-image-component-in-storybook-1415](https://dev.to/jonasmerlin/how-to-use-the-next-js-image-component-in-storybook-1415)
- Mocks with MSW

#### Miscellaneous Links - the main inspiration

- [Codepen for gradients](https://codepen.io/stefcot/pen/QWBGEQV)
- [The Secret of Great Gradient](https://uxplanet.org/the-secret-of-great-gradient-2f2c49ef3968)
- [Sky-inspired Weather App Concept](https://uxplanet.org/sky-inspired-weather-app-concept-4f1775ce4571)
- [Using Vue.js To Create An Interactive Weather Dashboard With APIs](https://www.smashingmagazine.com/2019/02/interactive-weather-dashboard-api-vue-js/)

#### The thing - color extraction
- Fucking wicked tool online to extract image colors [https://10015.io/tools/image-color-extractor](https://10015.io/tools/image-color-extractor)
- NPM package to do the trick of color image extraction [https://www.npmjs.com/package/extract-colors](https://www.npmjs.com/package/extract-colors)
- Maybe more affordable [https://dev.to/producthackers/creating-a-color-palette-with-javascript-44ip](https://dev.to/producthackers/creating-a-color-palette-with-javascript-44ip)
- And the key solution [https://github.com/Namide/extract-colors](https://github.com/Namide/extract-colors)

## TESTING

### Mocking fucking SVGs in jest

Due to jest rules in next/jest, all moduleNameMapperShit are not taken into account, so you have to do this work around:<br>
[https://github.com/vercel/next.js/issues/35634#issuecomment-1080942525](https://github.com/vercel/next.js/issues/35634#issuecomment-1080942525)

## React

Loading SVGs in Next and React 18<br>
- complicated:  [https://codesandbox.io/s/react-dynamic-svg-import-ts-forked-q7r0vk?file=/src/App.tsx](https://codesandbox.io/s/react-dynamic-svg-import-ts-forked-q7r0vk?file=/src/App.tsx)
- simple: [https://ryanhutzley.medium.com/dynamic-svg-imports-in-create-react-app-d6d411f6d6c6](https://ryanhutzley.medium.com/dynamic-svg-imports-in-create-react-app-d6d411f6d6c6)

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

See documentation: [Field Descriptions](https://www.weatherbit.io/api/weather-current)

## Miscellaneous

### TODO.md

Conventions to manage issues & enhancements to implement: [on Github](https://github.com/todomd/todo.md)

### CI/CD

Simple continuous integration with CircleCI: [https://github.com/whoisryosuke/next-styled-storybook-starter](https://github.com/whoisryosuke/next-styled-storybook-starter)

### Code documentation

- TypeDoc [https://typedoc.org/tags/returns/](https://typedoc.org/tags/returns/)