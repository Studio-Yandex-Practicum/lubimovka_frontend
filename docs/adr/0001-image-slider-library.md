# Библиотека для слайдера изображений

* Статус: принято
* Участники: Илья Бородулин, Родион Костюченко
* Дата: 16.09.2021

## Контекст и постановка проблемы

Для компонента слайдера изображений необходимо использовать готовую библиотеку слайдера.

При выборе опирался на этот стайлгайд:
https://github.com/fullstack-development/front-end-best-practices/blob/master/JS/README.md#%D0%B1%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B8

## Факторы принятия решения

* Поддержка TypeScript
* Поддержка SSR

## Рассмотренные варианты решения

* [Swiper](https://www.npmjs.com/package/swiper)
* [react-multi-carousel](https://www.npmjs.com/package/react-multi-carousel)
* [keen-slider](https://www.npmjs.com/package/keen-slider)
* [embla-carousel](https://www.npmjs.com/package/embla-carousel)

## Результат принятия решения

Решено использовать  "keen-slider", потому что

* Применяет react-hooks, из-за чего гибко настраивается
* Можно использовать кастомные компоненты управления
* Совместима с TypeScript
* Совместима с SSR
* Есть документация, достаточно примеров использования
* Маленький вес (4.6К), что намного меньше того же Swiper
* Используется командой Vercel в проекте Next.js Commerce
