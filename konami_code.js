const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0;

function onKeyDownHandler(e) {
  const keyName = parseInt(e.detail || e.which);
  console.log(keyName);
}

function init() {
  document.body.addEventListener('keydown', (event) => {
    
  })

  if (keyName === code[index]) {
    index++;

    if (index === code.length) {
      alert("You've cracked the code!");

      index = 0;
    }
  } else {
    index = 0;
  }
}
