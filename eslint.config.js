// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");
const eslintPluginImport = require("eslint-plugin-import");
const configPrettier = require("eslint-config-prettier/flat");

module.exports = tseslint.config(
  {
    // Игнорируем служебные и сгенерированные каталоги
    ignores: ["dist/", "out-tsc/", ".angular/", "public/", "node_modules/"],
  },
  {
    // Правила для TypeScript-файлов
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
      // Смягчаем для учебного проекта: any разрешён, но подсвечивается
      "@typescript-eslint/no-explicit-any": "warn",
      // Границы слоёв (архитектура проекта, см. README.md в каждой папке слоя)
      "import/no-restricted-paths": [
        "error",
        {
          zones: [
            // shared — нижний слой: не знает никого из приложения
            { target: "./src/app/shared", from: "./src/app/core" },
            { target: "./src/app/shared", from: "./src/app/features" },
            { target: "./src/app/shared", from: "./src/app/layouts" },
            // core — инфраструктура: не знает фичи и каркасы
            { target: "./src/app/core", from: "./src/app/features" },
            { target: "./src/app/core", from: "./src/app/layouts" },
            // layouts — каркасы: shared + core-сервисы (AuthService и т. п.), но не фичи
            { target: "./src/app/layouts", from: "./src/app/features" },
            // features — домены: не знают каркасы
            // TODO: фича не должна импортировать другие фичи — добавить зоны
            // для каждой фичи по мере их появления (patterns: "./src/app/features/*")
            { target: "./src/app/features", from: "./src/app/layouts" },
          ],
        },
      ],
    },
    plugins: {
      import: eslintPluginImport,
    },
    settings: {
      // Резолв путей для import/no-restricted-paths: учим node-resolver понимать TS
      "import/resolver": {
        node: {
          extensions: [".js", ".mjs", ".ts", ".tsx", ".d.ts"],
        },
      },
    },
  },
  {
    // Правила для шаблонов Angular (файлы .html и inline)
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {
      // Смягчённые правила доступности — не блокируют, а предупреждают
      "@angular-eslint/template/label-has-associated-control": "warn",
      "@angular-eslint/template/valid-aria": "warn",
      "@angular-eslint/template/click-events-have-key-events": "warn",
      "@angular-eslint/template/mouse-events-have-key-events": "warn",
    },
  },
  // Отключаем правила ESLint, конфликтующие с форматированием Prettier
  configPrettier
);
