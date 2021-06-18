# Next.js with ESLint and Prettier
## Next.js template repository with eslint and prettier configurations to my preference. 
I made this guide for my own use, but have a go at it if you find it useful.
I use WebStorm as my preferred editor, so the steps below are written reflecting the steps I have to take when I create a new project in WebStorm, but you can enable ESLint and Prettier very easily in other code editors as well with a quick Google.

## Installation
1. Clone repository
2. Run Next.js installer 
```bash
npx create-next-app
```
3. (OPTIONAL)Move every file from the subdirectory created by Next.js to the parent directory
4. Install dev dependencies for ESLint and Prettier
```bash
npm i --save-dev eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks prettier
```
5. Make sure that .eslintrc.js and .prettierrc files are in the root directory of the project
6. Open WebStorm settings: Ctrl+Alt+S; Look for ESLint settings and select "Automatic ESLint Configuration" and check the "Fix on save" checkbox
7. Still in the setting menu, look for the Prettier section and check the checkboxes: On code reformat and On save options