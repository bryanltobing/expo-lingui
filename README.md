### ICU FORMATS

What is icu formats

Plural polyfill

for plural 1 use \_1

# INSTALLATIONS

```sh
yarn add --dev @lingui/cli @babel/core
yarn add --dev @lingui/macro babel-plugin-macros
yarn add @lingui/react
```

Add macros plugin to Babel config (e.g: .babelrc):

```json
{
  "plugins": ["macros"]
}
```

Create lingui.config.js file with LinguiJS configuration in root of your project (next to package.json). Replace src with the directory name where you have source files:

```js
/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
  locales: ["en", "cs", "fr"],
  catalogs: [
    {
      path: "<rootDir>/src/locales/{locale}/messages",
      include: ["src"],
    },
  ],
  format: "po",
};
```

Add following scripts to your package.json:

```json
{
  "scripts": {
    "extract": "lingui extract",
    "compile": "lingui compile"
  }
}
```

Check the installation by running:

```
yarn extract
```

# Caveats

We need to polyfill Intl.plural

```sh
yarn add @formatjs/intl-getcanonicallocales @formatjs/intl-locale @formatjs/intl-pluralrules
```

import it at the app entry point

```tsx
import "@formatjs/intl-getcanonicallocales";
import "@formatjs/intl-locale";
import "@formatjs/intl-pluralrules";
import "@formatjs/intl-pluralrules/locale-data/en";
import "@formatjs/intl-pluralrules/locale-data/id";
```

### INITIALIZATION

```tsx
import { I18nProvider } from "@lingui/react";
i18n.load({
    en: enMessages,
    id: idMessages,
  });
i18n.activate("en");

<I18nProvider i18n={i18n}>
  <App />
</I18nProvider>;
```
