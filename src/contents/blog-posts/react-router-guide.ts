export const reactRouterGuide = {
  id: "react-router-guide",
  slug: "react-router-guide",
  title:
    "Hướng dẫn tạo dự án React Router (React Router + TypeScript + Tailwindcss + Vite) chuẩn",
  excerpt:
    "Hướng dẫn chi tiết từ A-Z để tạo một dự án React Router với TypeScript, Tailwind CSS và Vite một cách chuẩn chỉnh nhất.",
  content: `# Hướng dẫn tạo dự án React Router (React Router + TypeScript + Tailwindcss + Vite) chuẩn

## 1. Tạo dự án React Router với TypeScript và Vite

Mở terminal, chạy:

\`\`\`bash
npx create-react-router@latest my-react-router-app
\`\`\`

Thay \`my-react-router-app\` bằng tên dự án bạn muốn (chỉ chữ cái tiếng Anh, không dấu cách).

Chọn **Yes** nếu có hỏi.

## 2. Fix lỗi thường gặp

### Lỗi: Error: No route matches URL "/.well-known/appspecific/com.chrome.devtools.json"

Cài thêm plugin devtools cho Vite:

\`\`\`bash
npm install -D vite-plugin-devtools-json
\`\`\`

Thêm vào \`vite.config.ts\`:

\`\`\`typescript
import { defineConfig } from 'vite'
import devtoolsJson from 'vite-plugin-devtools-json'

export default defineConfig({
  plugins: [
    devtoolsJson(),
    // các plugin khác
  ],
})
\`\`\`

### Lỗi hydration mismatch trong React:
Thường do extension trình duyệt gây ra (VD: Urban VPN). Tắt từng extension để kiểm tra.

## 3. Thêm EditorConfig (định dạng code thống nhất)

Cài extension **EditorConfig** cho VS Code.

Tạo file \`.editorconfig\` ở thư mục gốc:

\`\`\`ini
[*]
indent_size = 2
indent_style = space
\`\`\`

## 4. Thêm Prettier để chuẩn hóa định dạng code

Cài extension **Prettier - Code formatter** cho VS Code.

Tạo file \`.prettierrc\` trong thư mục gốc:

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

Tạo file \`.prettierignore\`:

\`\`\`json
node_modules/
dist/
\`\`\`

Cài prettier cho dự án:

\`\`\`bash
npm i prettier -D
\`\`\`

Thêm script vào \`package.json\`:

\`\`\`json
"scripts": {
  "prettier": "prettier --check .",
  "prettier:fix": "prettier --write ."
}
\`\`\`

Dùng lệnh format code:

\`\`\`bash
npm run prettier:fix
\`\`\`

## 5. Thêm ESLint để kiểm soát chất lượng code

Cài extension **ESLint** cho VS Code.

Tạo file \`eslint.config.js\` ở thư mục gốc:

\`\`\`javascript
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'

export default tseslint.config([
  globalIgnores(['dist', 'build', '.react-router']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    rules: {
      'react-refresh/only-export-components': 'off',
      'no-empty-pattern': 'off'
    }
  }
])
\`\`\`

Cài các thư viện:

\`\`\`bash
npm i @eslint/js globals eslint-plugin-react-hooks eslint-plugin-react-refresh typescript-eslint eslint -D
\`\`\`

Thêm script vào \`package.json\`:

\`\`\`json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
}
\`\`\`

Dùng lệnh kiểm tra lint:

\`\`\`bash
npm run lint
\`\`\`

Dùng lệnh fix lỗi tự động:

\`\`\`bash
npm run lint:fix
\`\`\`

## 6. Bật source map CSS khi phát triển (giúp debug CSS dễ hơn)

Thêm vào \`vite.config.ts\`:

\`\`\`typescript
export default defineConfig({
  // ... các config khác
  css: {
    devSourcemap: true
  }
})
\`\`\`

## 7. Các tips giúp code sướng hơn

1.**Kích hoạt Format On Save** trong VS Code.

2.**Bật ưu tiên import alias** trong VS Code:
   - Mở Setting, tìm "import module specifier"
   - Bật cho cả JavaScript và TypeScript.

3.**Nếu muốn chạy client-side rendering (CSR) thuần túy:**
   - Thêm \`ssr: false\` trong file \`react-router.config.ts\`.
   - Thêm script preview production CSR trong \`package.json\`:
     \`\`\`json
     "scripts": {
       "start:csr": "vite preview"
     }
     \`\`\`
   - Build rồi chạy:
     \`\`\`bash
     npm run start:csr
     \`\`\`

## Kết luận

Với những bước trên, bạn đã có một setup React Router hoàn chỉnh với TypeScript, Vite, và các tool cần thiết để phát triển ứng dụng một cách chuyên nghiệp. Hãy nhớ tuân thủ các quy tắc coding và sử dụng các tool đã setup để đảm bảo code quality tốt nhất!`,
  author: "ClowderDev",
  date: "2025-08-07",
  readTime: "8 min read",
  image: "/blogs/react-router-guide.png",
  tags: ["React Router", "TypeScript", "Vite", "Tailwind CSS", "Tutorial"],
  featured: true,
};
