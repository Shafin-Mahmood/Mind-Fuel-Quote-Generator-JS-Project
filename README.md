# Mind Fuel – Quote Generator

**Mind Fuel** is a simple web app that generates inspirational quotes based on a topic entered by the user. It uses the **FreeAPI Quotes API** to fetch quotes in real-time and displays both the quote text and the author.

## ✨ Features

* Enter a keyword/topic (e.g., *love*, *life*, *success*) to get quotes.
* Displays the **quote** and **author**.
* Handles errors when no quotes are found.
* Clean and responsive UI.

## 🛠️ Technologies Used

* **HTML5** – structure of the app
* **CSS3** – styling and layout
* **JavaScript (ES6)** – fetch API, DOM manipulation, error handling
* **FreeAPI Quotes API** – public API for fetching quotes

## 🚀 How It Works

1. User types a keyword (e.g., “love”) in the input box.
2. App calls the **FreeAPI endpoint**:

   ```
   https://api.freeapi.app/api/v1/public/quotes?page=1&limit=1&query=<keyword>
   ```
3. A random quote with author is displayed on the screen.

