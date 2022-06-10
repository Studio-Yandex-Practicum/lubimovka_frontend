# Фронтенд проекта «Любимовка»

[![design](https://img.shields.io/badge/%D0%BC%D0%B0%D0%BA%D0%B5%D1%82-fligma-green)](https://www.figma.com/file/zpyHTGb3aKiAbpJJoIVqQ2/lubimovka?node-id=422%3A4070)

## Работа с проектом

### Требования к установке

- Node.js 12.22.0+

### Рабочая копия

```
git clone https://github.com/Studio-Yandex-Practicum/lubimovka_frontend.git
cd lubimovka_frontend
```

### Установка зависимостей

```bash
npm install
```

### Запуск окружения разработки

```bash
npm run dev
```
Приложение запустится по адресу: [http://localhost:3000](http://localhost:3000)

### Сборка

```bash
npm run build
```

### Переменные окружения

- `NEXT_PUBLIC_MOCKS` – boolean, включает моки;
- `BASE_URL`;
- `API_BASE_URL`;

[Как добавить переменную окружения локально?](https://nextjs.org/docs/basic-features/environment-variables)

### Базовые команды

#### Проверка кода:

```bash
npm run lint:js
```

```bash
npm run lint:css
```

```bash
npm run type-check
```

#### Storybook:

```bash
npm run storybook
```
Storybook запустится по адресу: [http://localhost:3001](http://localhost:3001)

#### Обновление тайпингов API

```bash
npm run update-typings
```

#### Обновление хуков Git

```bash
npm run update-git-hooks
```
