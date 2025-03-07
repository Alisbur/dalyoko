const form = document.getElementById("form")
form.addEventListener("submit", handleSubmit);

async function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(form);
  let response = await fetch('http://localhost:3000/data', {
    method: 'POST',
    body: formData,
  });

  let result = await response.json();
  console.log(result);
 
}