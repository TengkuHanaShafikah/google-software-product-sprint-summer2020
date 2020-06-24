/**
 * Fetches the comments and builds the UI.
 */
function getComments() {
  fetch("/data")
    .then(response => response.json())
    .then(comments => {
      const commentsListElement = document.getElementById("comments-list");
      commentsListElement.innerHTML = "";
      comments.forEach(line => {
        commentsListElement.appendChild(createListElement(line));
      });
    });
}

/** Creates an <li> element containing comment data.*/
function createListElement(comment) {
  const commentElement = document.createElement('li');
  commentElement.className = 'comment';

  const nameElement = document.createElement('b');
  nameElement.innerText = comment.name + ": ";

  const textElement = document.createElement('span');
  textElement.innerText = comment.text;

  const timeElement = document.createElement('span');
  timeElement.innerText = "   (" + comment.date + ")";
  
  commentElement.appendChild(nameElement);
  commentElement.appendChild(textElement);
  commentElement.appendChild(timeElement);

  return commentElement;
}