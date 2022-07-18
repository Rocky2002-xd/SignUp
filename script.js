function getcookie() {
  let x = document.cookie;
  alert(x);
}

function setcookie() {
  document.cookie = "email=abc@gmail.com; expires=Thu, 18 Dec 2022 12:00:00 UTC";
}
function clipboard(){
    navigator.clipboard.readText()
    .then(text => {
      console.log('Pasted content: ', text);
  })
    .catch(err => {
      console.error('Failed to read clipboard contents: ', err);
    });
  
}
