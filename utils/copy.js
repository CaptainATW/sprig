function isSafari() {

  var is_safari = navigator.userAgent.toLowerCase().indexOf('safari/') > -1;
  return is_safari;

}

// Copy a string into the user's clipboard
export default function copy(str) {


  const inp = document.createElement("input");
  document.body.appendChild(inp);
  inp.value = str;
  inp.select();
  document.execCommand("copy", false);
  inp.remove();


  console.log("adding button")

  if (!isSafari()) return;

  const button = document.createElement("button");
  document.body.appendChild(button);
  button.addEventListener("click", () => {
    navigator.clipboard.writeText(str);
    console.log("safari copy");
  })
  button.click();
  button.remove();
}
