# Content -> Code -> Figma (Free)

Этот набор делает две вещи из контента:

- `web/AuthPage.tsx`: страница `Вход/Регистрация` на React + MUI.
- `web/TrainingDashboardPage.tsx`: экран обучения (как на вашем скрине) на React + MUI.
- `figma-plugin/*`: бесплатный Development Plugin для Figma, который создает редактируемый макет экрана обучения.

## Что уже готово

- Контент для auth в `content/auth.json`.
- Контент для экрана обучения в `content/training.json`.
- Компонент auth: `web/AuthPage.tsx`.
- Компонент обучения: `web/TrainingDashboardPage.tsx`.
- Figma plugin в текущей версии создает editable frame `Screen/Learning Dashboard` (one-click).

## Важно про токен

Вы прислали PAT в переписке. Считайте его скомпрометированным и сразу перевыпустите:

1. Удалите старый токен в Figma.
2. Создайте новый при необходимости.

Для этого решения PAT **не нужен**, потому что используется локальный Development Plugin.

## Как получить editable макет в Figma

1. Откройте Figma Desktop.
2. `Plugins` -> `Development` -> `Import plugin from manifest...`
3. Выберите файл:
   `auth-figma-sync/figma-plugin/manifest.json`
4. Запустите плагин `Learning System Builder`.
5. Плагин сразу создаст макет (без дополнительных кнопок/UI).

Результат: на странице Figma появится редактируемый фрейм `Screen/Learning Dashboard`.

## Как использовать код страницы

В любом React-проекте с MUI добавьте:

- `web/AuthPage.tsx`
- `content/auth.json`
- `web/TrainingDashboardPage.tsx`
- `content/training.json`

Минимальные зависимости:

- `react`
- `@mui/material`
- `@emotion/react`
- `@emotion/styled`

## Как масштабировать на новые страницы

1. Добавляете новый контент в JSON.
2. Обновляете React-компоненты под этот JSON.
3. Обновляете генератор в `figma-plugin/code.js` (или добавляете новый блок генерации).
4. Запускаете plugin снова и получаете новый editable макет.
