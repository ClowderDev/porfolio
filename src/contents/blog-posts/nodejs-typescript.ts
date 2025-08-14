export const nodejsTypescriptGuide = {
  id: "nodejs-typescript-guide",
  slug: "nodejs-typescript-guide",
  title:
    "Hướng dẫn setup dự án Node.js với TypeScript, ESLint và Prettier (2025)",
  excerpt:
    'Giờ mà bạn còn code Node.js với JavaScript thuần thì hơi… lạc hậu rồi đấy! 😅 TypeScript giờ gần như là tiêu chuẩn "bất khả kháng" khi làm dự án liên quan đến JS. ',
  content: `# Hướng dẫn setup dự án Node.js với TypeScript, ESLint và Prettier (2025)


## ESLint & Prettier là gì?

**ESLint**: Giúp bạn chuẩn hóa code, tránh lỗi và duy trì style code nhất quán.

**Prettier**: Định dạng code đẹp, đồng bộ tự động.

Khi bạn làm việc nhóm, mọi người code không đồng nhất sẽ rất dễ gây rối. ESLint + Prettier sẽ là "cứu tinh" giúp team bạn giữ code sạch và đẹp.

## Cấu trúc thư mục dự án mình thường dùng như sau:

\`\`\`json
nodejs-typescript
 ┣ dist/          # Code build ra (JavaScript)
 ┣ src/           # Code nguồn (TypeScript)
 ┃ ┣ constants/   # Hằng số, enum
 ┃ ┣ controllers/ # Xử lý request, gọi service
 ┃ ┣ middlewares/ # Middleware (validate, auth,...)
 ┃ ┣ models/      # Model, database
 ┃ ┣ routes/      # Route API
 ┃ ┣ services/    # Logic, gọi DB
 ┃ ┣ utils/       # Hàm tiện ích (email, crypto,...)
 ┃ ┣ index.ts     # Entry point
 ┃ ┗ type.d.ts    # Global types
 ┣ .eslintrc      # Cấu hình ESLint
 ┣ .prettierrc    # Cấu hình Prettier
 ┣ .editorconfig  # Chuẩn editor
 ┣ nodemon.json   # Config nodemon (dev)
 ┣ package.json
 ┣ tsconfig.json  # Cấu hình TypeScript
\`\`\`

## Bắt đầu tạo dự án

\`\`\`bash
mkdir nodejs-typescript
cd nodejs-typescript
npm init -y
npm install typescript @types/node --save-dev
\`\`\`

## Cài ESLint

\`\`\`bash
npm init @eslint/config@latest
\`\`\`

Chọn như sau:

- Use ESLint to check syntax and find problems
- Module type: JavaScript modules (import/export)
- Framework: None
- TypeScript: Yes
- Run on Node environment

Cài thêm:

\`\`\`bash
npm install prettier eslint-config-prettier eslint-plugin-prettier tsx tsc-alias rimraf nodemon --save-dev
\`\`\`

## Cấu hình tsconfig.json
Lưu ý: tạo file type.d.ts trống trong src để tránh lỗi
\`\`\`json
{
  "compilerOptions": {
    "module": "NodeNext",
    "target": "ES2023",
    "outDir": "dist",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true,
    "baseUrl": ".",
    "paths": {
      "~/*": ["src/*"]
    }
  },
  "files": ["src/type.d.ts"],
  "include": ["src/**/*"]
}
\`\`\`

## Cấu hình ESLint (eslint.config.mjs)

\`\`\`javascript
import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintPluginPrettier from 'eslint-plugin-prettier'

export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: { prettier: eslintPluginPrettier },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'prettier/prettier': ['warn', {
        arrowParens: 'always',
        semi: false,
        trailingComma: 'none',
        tabWidth: 2,
        endOfLine: 'auto',
        useTabs: false,
        singleQuote: true,
        printWidth: 120,
        jsxSingleQuote: true
      }]
    },
    ignores: ['**/node_modules/', '**/dist/']
  }
]
\`\`\`

## Cấu hình Prettier (.prettierrc)

\`\`\`json
{
  "arrowParens": "always",
  "semi": false,
  "trailingComma": "none",
  "tabWidth": 2,
  "endOfLine": "auto",
  "useTabs": false,
  "singleQuote": true,
  "printWidth": 120,
  "jsxSingleQuote": true
}
\`\`\`

## Tạo .prettierignore

\`\`\`json
node_modules/
dist/
\`\`\`

## Một số file config hỗ trợ khác

- **.editorconfig**: chuẩn hóa indent size, style (dùng cho nhiều editor)
- **.gitignore**: bỏ qua node_modules/, dist/ khỏi git
- **nodemon.json**: tự động restart server khi code thay đổi

\`\`\`json
{
  "watch": ["src", ".env"],
  "ext": ".ts,.js",
  "exec": "tsx ./src/index.ts"
}
\`\`\`

## Script trong package.json

\`\`\`json
"scripts": {
  "dev": "npx nodemon",
  "build": "rimraf ./dist && tsc && tsc-alias",
  "start": "node dist/index.js",
  "lint": "eslint .",
  "lint:fix": "eslint . --fix",
  "prettier": "prettier --check .",
  "prettier:fix": "prettier --write ."
}
\`\`\`

## Test nhanh

Tạo file \`src/index.ts\`

\`\`\`typescript
const name: string = 'ClowderDev'
console.log(name)
\`\`\`

Chạy dev:

\`\`\`bash
npm run dev
\`\`\`

Build:

\`\`\`bash
npm run build
npm run start
\`\`\`

## Một vài lưu ý nhỏ

1.Nếu dùng thư viện JS, nhớ cài thêm \`@types/\` tương ứng nếu có

2.Dự án vẫn chạy CommonJS, nên khi dùng thư viện ES Module phải import theo dạng động:

\`\`\`typescript
const lib = (await import('lib')).default
\`\`\`

3. Luôn cài extension ESLint và Prettier cho VS Code để tự động check, format code`,
  author: "ClowderDev",
  date: "2025-08-12",
  readTime: "12 min read",
  image: "/blogs/nodejs-typescript.png",
  tags: ["Node.js", "TypeScript", "ESLint", "Prettier", "Setup Guide"],
  featured: false,
};
