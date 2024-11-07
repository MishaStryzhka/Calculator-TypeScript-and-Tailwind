# Kalkulačka TypeScript a Tailwind

**Jazyk / Languages / Мови**:

- [Česky](README.md)
- [English](README.en.md)
- [Українська](README.uk.md)

<p align="center">
  <img src="./assets/screenshot.png" alt="Calculator Screenshot" width="200">
</p>

Tento projekt je jednoduchá kalkulačka postavená s použitím **TypeScript** a **Tailwind CSS**. Aplikace umožňuje základní aritmetické operace a má čisté, minimalistické rozhraní.

🔗 **[Otevřít kalkulačku na GitHub Pages](https://mishastryzhka.github.io/Calculator-TypeScript-and-Tailwind/)**

## Funkce

- Postaveno s **TypeScript** pro bezpečnější a strukturovaný kód.
- Použití **Tailwind CSS** pro rychlé a flexibilní stylování.
- Interaktivní rozhraní s animacemi tlačítek.
- Podpora základních aritmetických operací:
  - Sčítání, odčítání, násobení, dělení
  - Procenta
  - Změna znaménka (pozitivní/negativní)

## Struktura projektu

Calculator-TypeScript-and-Tailwind <br> 
├── dist/ # Sestavené soubory (JS, CSS, HTML) pro produkci <br>
├── src/ <br>
│  ├── index.ts # Hlavní TypeScript soubor s logikou kalkulačky <br>
│  ├── input.css # Vstupní soubor pro Tailwind CSS <br>
│  └── index.html # Hlavní HTML soubor <br>
├── package.json # npm skripty a závislosti <br>
├── tailwind.config.js # Konfigurace Tailwind CSS <br>
└── tsconfig.json # Konfigurace TypeScript <br>


## Začínáme

### Předpoklady

- **Node.js** (verze 12 nebo vyšší)
- **npm** (obvykle je součástí instalace Node.js)

### Instalace

1. Klonujte tento repozitář:

   ```bash
   git clone https://github.com/MishaStryzhka/Calculator-TypeScript-and-Tailwind.git
   cd Calculator-TypeScript-and-Tailwind

2. Instalujte závislosti:
   
   ```bash
   npm install

3. Spusťte projekt v režimu vývoje:
   
   ```bash
    npm start

4. Pro vytvoření produkční verze:

    ```bash
    npm run build
    
5. Pro nasazení na GitHub Pages:

   ```bash
   npm run deploy

### Technologie
- TypeScript — používá se pro strukturování a zvýšení spolehlivosti kódu.
- Tailwind CSS — rychlý a modulární CSS framework pro stylování.
- Web Dev Server — pro spuštění lokálního serveru s podporou aktualizace.
- gh-pages — pro nasazení projektu na GitHub Pages.

### npm Skripty
- npm start — spustí vývojový server s automatickou aktualizací a sledováním změn v TypeScript, Tailwind CSS a HTML.
- npm run build — vytvoří produkční verzi projektu.
- npm run deploy — nasadí projekt na GitHub Pages.
- npm run copy:html — zkopíruje index.html ze src do dist (automaticky se používá v jiných skriptech).

### Odkazy

🔗 **[Demo na GitHub Pages](https://mishastryzhka.github.io/Calculator-TypeScript-and-Tailwind/)**

🔗 **[Repozitář na GitHubu](https://github.com/MishaStryzhka/Calculator-TypeScript-and-Tailwind)**

 ### Licence
Tento projekt je licencován pod licencí MIT. Podrobnosti najdete v souboru LICENSE.
