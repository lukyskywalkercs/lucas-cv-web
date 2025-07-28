function recommendEmojis() {
  const input = document.getElementById("messageInput").value.toLowerCase();
  const emojiList = document.getElementById("emojiList");
  const results = document.getElementById("results");

  emojiList.innerHTML = ""; // clear

  const suggestions = getSimulatedEmojis(input);
  suggestions.forEach(e => {
    const span = document.createElement("span");
    span.textContent = e;
    emojiList.appendChild(span);
  });

  results.classList.remove("hidden");
}

function getSimulatedEmojis(text) {
  if (!text) return ["🤔", "❓"];

  if (text.includes("amor") || text.includes("te quiero")) {
    return ["❤️", "😍", "😘", "💌"];
  }

  if (text.includes("fiesta") || text.includes("cumple")) {
    return ["🥳", "🎉", "🎂", "🍾"];
  }

  if (text.includes("triste") || text.includes("mal")) {
    return ["😢", "💔", "😞"];
  }

  if (text.includes("feliz") || text.includes("gracias")) {
    return ["😊", "😄", "💖", "🌟"];
  }

  if (text.includes("trabajo") || text.includes("reunión")) {
    return ["💼", "📅", "🧑‍💻"];
  }

  return ["🤖", "🧠", "✨"];
} 