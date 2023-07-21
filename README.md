# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

## `npm install`

Install dependencies by running `npm install`.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### API

This application is using [gutendex API](https://gutendex.com/) for fetching book lists.
Since this api doesn't support the categorizing the book lists, the frontend creates dummy data with fetched lists.

# `Library Choice`

-[MUI](https://mui.com/)
This application uses MUI for the theme and styling.
The library supports custom themes and nice reusable components, which can speed up development.

-[React Query/TanStack Query](https://tanstack.com/query)
This application is using React Query for server-side state management. This library provides with a lot of useful features for optimization and performance including caching.

-Client Side State Management
Since this is a really small scale project, I didn't see the need for global state management library. React built-in context is enough to manage the entire state.

-[React Swiper](https://swiperjs.com/)
This carousel library is a popular open source library that supports responsiveness and easy customization.

# `Architectural Decision`

## Design Choice

Since this is book ordring web application, I chose to go with simple design and use the reusable components that are supported by MUI to increase the development speed. The application is responsive as well.

## Searching book

Because the current API doesn't support search by genre, the search only works when a user searches by author or title.
It is using useDebounce hook for optimization purposes. So that it doesn't make an API call everytime a user types.

## Folder Structure

In src folder, there are main 3 folders except page folder, which are hooks, contexts and components. These folders contain reusuable hooks and components that can be used across the application. Inside the page folder, it is following the same structure.

## Testing

The root src folder has test-utils folder, in which set up the reusabled test functions.
Testing is done for main pages which are dashboard, detail and reservation.
Since detail page is quietly simple, snapshotting testing is effective for this page.

## Reservation Process

Reservation logic is handled by reservation context.

# `Things To Be Improved`

## Auth

Currently, this application does not have auth functionality, because it was not there in the requirement. This can be added in the future.
