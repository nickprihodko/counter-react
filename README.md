# counter-react 

**[ https://prihodkonick.github.io/counter-react/ ]**

Very simple app "Counter" on React

How to deploy react app to Github Pages

1. Install `gh-pages` package

```
npm install -D gh-pages
```

2. Create remote repository

3. Edit `package.json`

   - add homepage key in `main`

   ```
   "homepage": "http://PrihodkoNick.github.io/counter-react",
   ```

   - add new scripts in `scripts`

   ```
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build",
   ```

4. Run script 

   ```
   npm run deploy
   ```

   

