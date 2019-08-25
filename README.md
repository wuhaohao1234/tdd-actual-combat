# tdd-actual-combat
tdd实战训练营

## 初始化框架搭建

`npm init -y`

添加环境变量

.npmrc

registry=http://registry.npm.taobao.org

安装依赖

`npm i typescript ts-jest jest @types/jest`

tsc的配置项tsconfig.json

```
{
  "compilerOptions": {
      /* Basic Options */
      "target":
          "es2015" /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017','ES2018' or 'ESNEXT'. */,
      "module":
          "commonjs" /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */,
      // "lib": [],                             /* Specify library files to be included in the compilation. */
      // "allowJs": true,                       /* Allow javascript files to be compiled. */
      // "checkJs": true,                       /* Report errors in .js files. */
      // "jsx": "preserve",                     /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
      "declaration": true /* Generates corresponding '.d.ts' file. */,
      // "sourceMap": true,                     /* Generates corresponding '.map' file. */
      // "outFile": "./",                       /* Concatenate and emit output to single file. */
      "outDir": "./lib" /* Redirect output structure to the directory. */,
      // "rootDir": "./",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
      // "removeComments": true,                /* Do not emit comments to output. */
      // "noEmit": true,                        /* Do not emit outputs. */
      // "importHelpers": true,                 /* Import emit helpers from 'tslib'. */
      // "downlevelIteration": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
      // "isolatedModules": true,               /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */

      /* Strict Type-Checking Options */
      "strict": true /* Enable all strict type-checking options. */,
      "noImplicitAny": true /* Raise error on expressions and declarations with an implied 'any' type. */,
      "strictNullChecks": true /* Enable strict null checks. */,
      // "strictFunctionTypes": true,           /* Enable strict checking of function types. */
      "strictPropertyInitialization": true /* Enable strict checking of property initialization in classes. */,
      "noImplicitThis": true /* Raise error on 'this' expressions with an implied 'any' type. */,
      "alwaysStrict": true /* Parse in strict mode and emit "use strict" for each source file. */,

      /* Additional Checks */
      "noUnusedLocals": true /* Report errors on unused locals. */,
      // "noUnusedParameters": true,            /* Report errors on unused parameters. */
      "noImplicitReturns": true /* Report error when not all code paths in function return a value. */,
      "noFallthroughCasesInSwitch": true /* Report errors for fallthrough cases in switch statement. */,

      /* Module Resolution Options */
      // "moduleResolution": "node",            /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
      // "baseUrl": "./",                       /* Base directory to resolve non-absolute module names. */
      // "paths": {},                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
      // "rootDirs": [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */
      // "typeRoots": [],                       /* List of folders to include type definitions from. */
      // "types": [],                           /* Type declaration files to be included in compilation. */
      // "allowSyntheticDefaultImports": true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
      "esModuleInterop": true /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
      // "preserveSymlinks": true,              /* Do not resolve the real path of symlinks. */

      /* Source Map Options */
      // "sourceRoot": "./",                    /* Specify the location where debugger should locate TypeScript files instead of source locations. */
      // "mapRoot": "./",                       /* Specify the location where debugger should locate map files instead of generated locations. */
      // "inlineSourceMap": true,               /* Emit a single file with source maps instead of having a separate file. */
      // "inlineSources": true,                 /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */

      /* Experimental Options */
      // "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
      // "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */
  },
  "exclude": ["node_modules", "lib"]
}
```

jest.config.js的配置

```
module.exports = {
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    collectCoverage: true,
    testPathIgnorePatterns: ["/lib/", "/node_modules/"],
};
```

package.json配置

```
{
  "name": "tdd-actual-combat",
  "version": "1.0.0",
  "description": "tdd实战训练营",
  "main": "lib/src/index.js",
  "typings": "lib/src/index.d.ts",
  "scripts": {
    "compile": "npx tsc",
    "test": "npx jest"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/wuhaohao1234/tdd-actual-combat.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/wuhaohao1234/tdd-actual-combat/issues"
  },
  "homepage": "https://github.com/wuhaohao1234/tdd-actual-combat#readme",
  "devDependencies": {
    "@types/jest": "^24.0.18",
    "jest": "^24.9.0",
    "ts-jest": "^24.0.2",
    "typescript": "^3.5.3"
  }
}
```

example文件

src/index.js

```
export function sampleFunction(x: string): string {
    return x + x;
}
```

测试文件

__tests/base.spec.ts

```
import { sampleFunction } from "../src";

describe("This is a simple test", () => {
    test("Check the sampleFunction function", () => {
        expect(sampleFunction("hello")).toEqual("hellohello");
    });
});
```

## example1

项目文件:

src/gameNumber.ts

```
/** 
 * @param remainder 判断是否为倍数
 * @description 输入目标值resultNum与倍数，判断是否是倍数,返回值为booleam
*/
export function remainder(resultNum: number, multiple: number): boolean {
    return resultNum % multiple === 0
}
/**
 * @param getNum 判断数字
 * @description 输入目标值,如果是3的倍数，则返回Fizz,是5则返回Buzz,是3或者5的倍数则返回FizzBuzz 
 * */
export function getNum(num: number) {
    if (remainder(num, 3) && remainder(num, 5)) {
        return 'FizzBuzz'
    }
    if (remainder(num, 3)) {
        return 'Fizz'
    }
    if (remainder(num, 5)) {
        return 'Buzz'
    }
    return num
}

/**
 * @param outNumber 输出数字
 * @description 输入相应的目标数目result，输出长度为result的数组
 * */
export function outNumber(result: number): any[] {
    let arr: any[] = []
    for(let i = 1;i < result + 1; i ++) {
        arr.push(getNum(i))
    }
    return arr
}
```

test

```
describe('判断该数是否是传入值的倍数', () => {
    test('是倍数返回true', () => {
        expect(remainder(3,1)).toBe(true)
    })
    test('不是倍数返回false', () => {
        expect(remainder(2,10)).toBe(false)
    })
})

describe('数字测试', () => {
    test('输入1，返回1', () => {
        expect(getNum(1)).toBe(1)
    })
    test('输入3的倍数,返回Fizz', () => {
        expect(getNum(3)).toEqual('Fizz')
    })
    test('输入5的倍数，返回Buzz', () => {
        expect(getNum(5)).toEqual('Buzz')
    })
    test('输入3与5的倍数，返回FizzBuzz', () => {
        expect(getNum(3 * 5)).toEqual('FizzBuzz')
    })
})

describe('数字测试游戏', () => {
    test('输出长度为100的数组', () => {
        expect(outNumber(100).length).toBe(100)
    })
    test('数组第一项为1', () => {
        expect(outNumber(100)[0]).toBe(1)
    })
    test('数组第3项为Fizz', () => {
        expect(outNumber(100)[2]).toEqual('Fizz')
    })
    test('数组第5项为Buzz', () => {
        expect(outNumber(100)[4]).toEqual('Buzz')
    })
    test('数组第15项为FizzBuzz', () => {
        expect(outNumber(100)[14]).toEqual('FizzBuzz')
    })
    test('数组元素全部测试', () => {
        const arr = outNumber(100)
        for(let i = 0;i < arr.length;i ++) {
            if(((i + 1) % 3 === 0) && ((i + 1) % 5 === 0)) {
                expect(arr[i]).toEqual('FizzBuzz')
            }
            if(((i + 1) % 3 === 0) && ((i + 1) % 5 !== 0)) {
                expect(arr[i]).toEqual('Fizz')
            }
            if(((i + 1) % 3 !== 0) && ((i + 1) % 5 === 0)) {
                expect(arr[i]).toEqual('Buzz')
            }
            if(((i + 1) % 3 !== 0) && ((i + 1) % 5 !== 0)) {
                expect(arr[i]).toBe(i + 1)
            }
        }
    })
})
```