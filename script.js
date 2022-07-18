function getcookie() {
  let x = document.cookie;
  alert(x);
}

function setcookie() {
  document.cookie = "email=abc@gmail.com; expires=Thu, 18 Dec 2022 12:00:00 UTC";
}
function clipboard(){
    let ctext = await navigator.clipboard.readText();
    console.log('Pasted content: ', ctext);
}
