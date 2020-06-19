/**
 * Shows the following greeting: "Hello Hana!"
 */
async function getGreeting() {
  const response = await fetch('/data');
  const greeting = await response.text();
  document.getElementById('greeting-container').innerText = greeting;
}