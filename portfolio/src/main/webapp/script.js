/**
 * Fetches the comments and builds the UI.
 */
function getComments() {
  fetch("/data")
    .then(response => response.json())
    .then(comments => {
      const commentsListElement = document.getElementById("comments-list");
      commentsListElement.innerHTML = "";
      comments
        .map(createListElement)
        .forEach(line => commentsListElement.appendChild(line));
    });
}

/**
 * Returns HTML smiley emoji based on the sentiment score.
 */
function returnEmoji(score) {
  if (1 >= score && score > 0.6) {
    return `Vibe Check: ${String.fromCodePoint(0x1f600)}\n`; // Very happy
  } else if (0.6 >= score && score > 0.2) {
    return `Vibe Check: ${String.fromCodePoint(0x1f642)}\n`; // Happy
  } else if (0.2 >= score && score >= -0.2) {
    return `Vibe Check: ${String.fromCodePoint(0x1f610)}\n`; // Neutral
  } else if (-0.2 > score && score >= -0.6) {
    return `Vibe Check: ${String.fromCodePoint(0x1f641)}\n`; // Upset
  } else {
    return `Vibe Check: ${String.fromCodePoint(0x1f614)}\n`; // Very Upset
  }
}

/**
 * Creates a list element containing comment data.
 */
function createListElement(comment) {
  const commentElement = document.createElement('li');
  commentElement.className = "comment";

  const nameElement = document.createElement("b");
  nameElement.innerText = `${comment.name}: `;

  const textElement = document.createElement("span");
  textElement.innerText = `${comment.text} \n`;

  const emojiElement = document.createElement("span");
  emojiElement.innerText = returnEmoji(comment.score);

  const timeElement = document.createElement('span');
  timeElement.innerText = ` Date: ${comment.date})`;
  
  commentElement.appendChild(nameElement);
  commentElement.appendChild(textElement);
  commentElement.appendChild(emojiElement);
  commentElement.appendChild(timeElement);

  return commentElement;
}