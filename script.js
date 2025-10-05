document.addEventListener("DOMContentLoaded", () => {
  const input_info = document.getElementById("quote-input");
  const button = document.getElementById("get-quote-btn");
  const quote_info = document.getElementById("quote_info");
  const quote = document.getElementById("quote");
  const author = document.getElementById("author");
  const error = document.getElementById("error-message");

  button.addEventListener("click", async () => {
    const myquote = input_info.value.trim();
    if (!myquote) return;

    try {
      const quote_data = await fetch_quote(myquote);
      display_quote(quote_data);
    } catch (err) {
      console.error(err);
      showError();
    }
  });

  async function fetch_quote(myquote) {
    const url = `https://api.freeapi.app/api/v1/public/quotes?page=1&limit=1&query=${myquote}`;
    const response = await fetch(url, { method: "GET" });

    if (!response.ok) {
      throw new Error("Quote not found");
    }

    const data = await response.json();
    return data;
  }
function display_quote(data) {
  console.log("API Response:", data);

  let quoteText, authorName;




 
    quoteText = data.data.data[0].content;
    authorName = data.data.data[0].author;
  

  if (!quoteText || !authorName) {
    showError("No quote found.");
    return;
  }

  quote.textContent = `"${quoteText}"`;
  author.textContent = `Author: ${authorName}`;

  quote_info.classList.remove("hidden");
  error.classList.add("hidden");
}


  function showError() 
  
  {
    quote_info.classList.add("hidden");
    error.classList.remove("hidden");
  }
});
