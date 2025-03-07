const form = document.getElementById("form")
form.addEventListener("submit", handleSubmit);

async function handleSubmit(e) {
  e.preventDefault();
  let response = await fetch('http://localhost:3000/data', {
    method: 'POST',
    body: new FormData(form),
  });

  let result = await response.json();
  console.log(result);
}