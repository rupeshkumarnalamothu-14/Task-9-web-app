async function getQuote() {
    const quoteText = document.getElementById("quote");
    const authorText = document.getElementById("author");

    quoteText.textContent = "Loading...";
    authorText.textContent = "";

    try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();

        quoteText.textContent = `"${data.content}"`;
        authorText.textContent = `— ${data.author}`;
    } catch (error) {
        quoteText.textContent = "Failed to load quote 😢";
    }
}
