const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init(){

  // Write your JavaScript code inside the init() function

  document.body.addEventListener('keydown',  function(e) {
    let index = 0;
    const key = parseInt(e.key || e.which || e.char);

    if (key === code[index]) {
      index++;

      if (index === code.length) {
        window.alert("Hurray!");
        index = 0;
      }
  } else {
    index = 0;
    }
  });
}
