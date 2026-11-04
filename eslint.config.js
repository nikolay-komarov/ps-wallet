// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");
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
