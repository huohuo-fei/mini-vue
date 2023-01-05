- 测试驱动开发

### setup 环境集成 包含 ts jest 环境

- 集成 TS 环境 使用到 `tsc --init`,初始化 ts 配置文件
- 下载安装 jest 以及 jest 中自带的 type `npm i jest  @types/jest --save-dev`
- 配置 tsconfig 中的 types `// "types": ["jest"], ` types 中包含其他包的类型
- 设置 package.json 中的 script 命令 `"test":"jest"`,运行 npm run test 执行 jest
- 配置 babel 使得代码可以使用 ESModule `npm install --save-dev babel-jest @babel/core @babel/preset-env`
- 再安装 babel 下的 ts 包 `npm install --save-dev @babel/preset-typescript`
- babel.config.js 的内容
- ```js
  module.exports = {
    presets: [
      ["@babel/preset-env", { targets: { node: "current" } }],
      "@babel/preset-typescript",
    ],
  };
  ```

### effect

- 首先要明白 依赖收集和触发依赖的时机：当执行某个 effect 时
- 06
