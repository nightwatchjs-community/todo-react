# todo-react
Sample todo app built with the Vue3+Vite. For the accompanying documentation, see MDN article
[Understanding client-side JavaScript frameworks : React tutorials](https://wiki.developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks#React_tutorials).

This project uses [ES Modules](https://nodejs.org/api/esm.html). Node 12+ required. For the live version, see https://mdn.github.io/todo-vue/dist/.

## Project setup
```
npm install
```

### Run locally
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://vitejs.dev/config/).

## Run tests
Tests are written using [Nightwatch 2](https://nightwatchjs.org/) and cover both component testing and end-to-end testing.

For component testing, the new [vite-plugin-nightwatch](https://www.npmjs.com/package/vite-plugin-nightwatch) plugin is used.

Before running the tests, make sure the `Vite` dev server is running and that the localhost url matches that which is set in the `.env` file. By default it is set to `http://localhost:3000`.

### Start the Vite dev server:

```
npm run dev
```

### Run component tests
This will run a sample component test for the `src/components/Form.jsx` component in Chrome:

```
npm test
```

To run it in headless mode:
```
npm test -- --headless
```

### Run end-to-end tests
This will run the end-to-end tests in Chrome:

```
npm run test-e2e
```

To run it in headless mode:
```
npm run test-e2e -- --headless
```
