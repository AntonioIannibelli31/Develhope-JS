function repeatHello(callback) {
  let id = setInterval(() => {
    console.log(callback);
  }, 1000);
  setTimeout(() => {
    clearInterval(id);
  }, 1000);
}

repeatHello("Hello");

// Usiamo una arrow function poichè essendo una funzione semplice ne semplifichiamo la scittura
