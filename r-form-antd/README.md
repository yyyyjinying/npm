# webpack安装
- 本地安装 
- yarn add webpack webpack-cli -D

# 手工配置webpack
- 默认配置文件 webpack.config.js
- package.json script配置，"start": "npx webpack --config ./build/dev.config.js",
```json
"scripts": {
    "test": "jest",
    "dev": "npx webpack-dev-server --config ./build/dev.config.js",
    "start": "npx webpack --config ./build/dev.config.js",
    "prod": "npx webpack --config ./build/prod.config.js"
},
```

# 配置typescript

# npm 发布新包
- 先本地打包
- - npm run build
- 包上传
- - nrm ls
- - nrm use npm
- - npm login // 输入npm的账号密码和邮箱1020066395@qq.com
- - npm publish

# npm 包删除
- npm unpublish --force //强制删除
- npm unpublish packageName@1.0.0 //指定版本号
- npm deprecate //某些情况
- npm unpublish packageName --force //npm撤销（24小时内可以撤销

# 项目工程
### 本地执行
- npm run dev
### 本地打包
- npm run build
  
