## Тестовое задание
Необходимо реализовать 2-х страничное новостное SPA приложение, в качестве бэкенда
использовать Guardian API (для получения API ключа требуется регистрация).
Приложение состоит из главной страницы, отображающей карточки новостей, при клике на
какую-либо карточку должна открываться соответствующая страница новости.
В качестве технического стека использовать: Next.js, Typescript, Redux Toolkit, CSS Modules.
Дополнительно можно использовать любые JS библиотеки, которые помогут решить
поставленную задачу.
Требования к верстке: адаптивная (до 320px), кроссбраузерная.
Главная страница:
- Необходимо реализовать функционал поиска новостей по ключевому слову
- Реализовать сортировку результатов поисковой выдачи по релевантности и по дате
новости
- Реализовать настройку количества отображаемых новостей на 1 странице
- При скролле к последней новости на странице реализовать подгрузку новостей со
следующей страницы
- Весь стейт на этой страницы должен храниться в redux, данные с бэкенда
запрашивать через redux async thunk
- Использовать соответствующий эндпойнт для поиска новостей - ссылка на
документацию

Страница новости:
- Данная страница должна отображать текст новости
- Параграфы, заголовки, списки, имеющиеся в тексте новости, должны иметь
соответствующие стили для правильного отображения их на странице (отступы
между элементами, жирное начертание шрифта для заголовков, реализовать стили
для цитат, картинок и других элементов, встречающихся в тексте новости)
- Также данная страница должна содержать дату новости, картинку иллюстрирующую
эту новость (получить с бэкенда), ссылку на оригинальную статью на сайте Guardian,
кнопку для перехода назад на главную страницу
- Данные на этой странице необходимо запрашивать на стороне сервера, для
страницы должен быть реализован Server Side Rendering
- Использовать соответствующий эндпойнт для запроса данных о новости - ссылка на
документацию

## Test task
It is necessary to implement a 2-page SPA news application, as a backend.
Use Guardian API (registration is required to get API key).
The application consists of the main page, displaying news cards, when clicking on
any card should open the corresponding news page.
As a technical stack use: Next.js, Typescript, Redux Toolkit, CSS Modules.
Additionally, you can use any JS libraries that will help to solve
the task at hand.
Layout requirements: adaptive (up to 320px), cross-browser.
Home page:
- It is necessary to implement the functionality of news search by keyword
- Realize sorting of search results by relevance and by date
news
- Realize customization of the number of displayed news on 1 page
- When scrolling to the last news on the page, implement loading of news from the next page.
next page
- All the state on this page should be stored in redux, data from the backend
request via redux async thunk
- Use appropriate endpoint for news search - link to the
documentation


News page:
- This page should display the news text
- Paragraphs, headings, lists present in the text of the news should have
appropriate styles to display them properly on the page (indentation
between elements, bold font for headings, implement styles for quotes, pictures and others
for quotes, pictures and other elements found in the text of the news).
- Also this page should contain the date of the news, a picture illustrating the news (get it from the backend).
the news (get it from the backend), a link to the original article on the Guardian website,
a button to go back to the main page
- The data on this page should be requested on the server side, for the
Server Side Rendering should be implemented for the page
- Use the appropriate endpoint to request news data - link to the
documentation



## Demo on Vercel:
https://ssr-news-website.vercel.app/


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


