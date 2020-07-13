# IBM Cloud Functions Webpack sample

Install all dependencies locally
```
npm install
```

Build the bundle files
```
npm run build
```

Deploy the actions
```
npm run deploy:one
npm run deploy:two
```

Invoke the actions

```
ibmcloud fn action invoke my-action-one -r

ibmcloud fn action invoke my-action-two -r
```
