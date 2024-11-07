# Калькулятор TypeScript і Tailwind

**Jazyk / Languages / Мови**:

- [Česky](README.md)
- [English](README.en.md)
- [Українська](README.uk.md)

<p align="center">
  <img src="./assets/screenshot.png" alt="Calculator Screenshot" width="200">
</p>

Цей проект є простим калькулятором, створеним за допомогою **TypeScript** та **Tailwind CSS**. Додаток дозволяє виконувати базові арифметичні операції та має чистий, мінімалістичний інтерфейс.

🔗 **[Відкрити калькулятор на GitHub Pages](https://mishastryzhka.github.io/Calculator-TypeScript-and-Tailwind/)**

## Особливості

- Створено з використанням **TypeScript** для структурованого та безпечного коду.
- Використано **Tailwind CSS** для швидкої та гнучкої стилізації.
- Інтерактивний інтерфейс з анімацією кнопок.
- Підтримка базових арифметичних операцій:
  - Додавання, віднімання, множення, ділення
  - Відсотки
  - Зміна знаку (позитивне/негативне)

## Структура проекту

Calculator-TypeScript-and-Tailwind

├── dist/ # Скомпільовані файли (JS, CSS, HTML) для продакшн-версії <br>
├── src/ <br>
│ ├── index.ts # Основний TypeScript файл з логікою калькулятора <br>
│ ├── input.css # Вхідний файл для Tailwind CSS <br>
│ └── index.html # Основний HTML файл <br>
├── package.json # npm скрипти та залежності <br>
├── tailwind.config.js # Налаштування Tailwind CSS <br>
└── tsconfig.json # Налаштування TypeScript<br>

## Запуск проекту

### Попередні вимоги

- **Node.js** (версія 12 або вище)
- **npm** (зазвичай встановлюється разом із Node.js)

### Інструкція з встановлення

1. Клонуйте репозиторій:

   ```bash
   git clone https://github.com/MishaStryzhka/Calculator-TypeScript-and-Tailwind.git
   cd Calculator-TypeScript-and-Tailwind

2. Встановіть залежності:

   ```bash
   npm install
   
3. Запустіть проект у режимі розробки:

   ```bash
   npm start

4. Щоб створити продакшн-версію:

   ```bash
   npm run build
   
5. Щоб задеплоїти проект на GitHub Pages:

   ```bash
   npm run deploy

### Технології

- TypeScript — використовується для структурування та підвищення надійності коду.
- Tailwind CSS — швидкий та модульний CSS-фреймворк для стилізації.
- Web Dev Server — для запуску локального сервера з підтримкою оновлення.
- gh-pages — для деплою проекту на GitHub Pages.
- 
### Скрипти npm

- npm start — запускає сервер розробки з автоматичним оновленням та спостереженням за змінами у TypeScript, Tailwind CSS і HTML.
- npm run build — створює продакшн-версію проекту.
- npm run deploy — деплоїть проект на GitHub Pages.
- npm run copy:html — копіює index.html з src у dist (використовується автоматично в інших скриптах).
- 
### Посилання

🔗 **[Демо на GitHub Pages](https://mishastryzhka.github.io/Calculator-TypeScript-and-Tailwind/)**

🔗 **[Репозиторій на GitHub](https://github.com/MishaStryzhka/Calculator-TypeScript-and-Tailwind)**

 ### Ліцензія
Цей проект ліцензовано за ліцензією MIT. Деталі дивіться у файлі LICENSE.
