import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
//add .ts extension
const extensions = [".js", ".jsx", ".ts", ".tsx"];
const babelConfigFile = path.join(__dirname, "../babel.config.cjs");

const config = {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.mjs",
      format: "es",
    },
    {
      file: "dist/index.cjs",
      format: "cjs",
    },
  ],
  plugins: [
    replace({
      preventAssignment: true,
      __buildDate__: () => JSON.stringify(new Date()),
      __buildVersion: 15,
      __DEV__: process.env.NODE_ENV === "development",
    }),

    resolve({
      jsnext: true,
      extensions: extensions,
    }),
    commonjs(),
    json(),
    babel({ babelHelpers: "bundled", extensions, configFile: babelConfigFile }),
    // strip({ include: /src\/.*\.[mc]?[jt]sx?$/ }),
  ],
  external: [
    "react",
    "react-dom",
    "react/jsx-runtime",
    "react-dom/client",
    "picomatch",
    "lodash",
    "npmlog",
    "resolve",
    "qs",
    /@yuejs\//,
    /@babel\//,
    /@rollup\//,
    /@zkbridge\//,
    "@coinbase/wallet-sdk",
    /@particle-network\//,
    /@binance\//,
    /@walletconnect\//,
    "@cyberlab/cyber-app-sdk",
    "react-router-dom",
    "axios",
    "qs",
    "numeral",
    "antd",
    "tslib",
    "ethers",
    "dayjs",
    "dayjs/plugin/utc",
  ],
};

export default config;
