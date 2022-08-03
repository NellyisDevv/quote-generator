const generateBtn = document.getElementById("generate-btn");
const quote = document.getElementById("quote");
const quoteAuthor = document.querySelector(".quote-author");

const quotes = [
  {
    quote:
      "Now to him who is able to do immeasurably more than all we ask or imagine, according to his power that is at work within us.",
    author: "Ephesians 3:20",
  },
  {
    quote:
      "But Jesus looked at them and said, 'With man this is impossible, but with God all things are possible.",
    author: "Matthew 19:26",
  },
  {
    quote:
      "Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.",
    author: "Proverbs 3:5-6",
  },
  {
    quote:
      "Be careful, however, that the exercise of your rights does not become a stumbling block to the weak.",
    author: "1 Corinthians 8:9",
  },
  {
    quote:
      "So, if you think you are standing firm, be careful that you don't fall! ",
    author: "Corinthians 10:12",
  },
  {
    quote:
      " A time to weep and a time to laugh, a time to mourn and a time to dance.",
    author: "Ecclesiastes 3:4",
  },
];

generateBtn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);
  quote.textContent = quotes[random].quote;
  quoteAuthor.textContent = quotes[random].author;
});
