# Wallet

Wallet — учебное приложение на Angular для учёта личных финансов.

Проект создан с помощью [Angular CLI](https://github.com/angular/angular-cli) версии 19.2.27.

## Требования

- Node.js `^22.0.0` (зафиксировано в `.nvmrc` — `22.16.0`)
- npm `>=10 <11`

При использовании [nvm](https://github.com/nvm-sh/nvm) переключитесь на нужную версию:

```bash
nvm use
```

## Установка

```bash
npm install
```

## Разработка

Запуск dev-сервера:

```bash
npm start
# или
ng serve
```

Приложение доступно на `http://localhost:4200/` и автоматически перезагружается при изменениях исходников.

## Сборка

```bash
npm run build
```

Production-сборка сохраняется в каталог `dist/ps-wallet`.

## Проверка кода

В проекте настроены ESLint и Prettier.

- `npm run lint` — проверка кода ESLint
- `npm run lint:fix` — проверка с автоматическим исправлением
- `npm run format` — форматирование кода Prettier
- `npm run format:check` — проверка форматирования

В VS Code линтер и форматтер запускаются автоматически при сохранении файла (см. `.vscode/settings.json`).

## Генерация кода

Создание компонента:

```bash
ng generate component component-name
```

Тестовые файлы (`.spec.ts`) не создаются — это настроено в `angular.json` (`skipTests` для всех генераторов).

Полный список генераторов:

```bash
ng generate --help
```
