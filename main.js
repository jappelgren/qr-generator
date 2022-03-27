const form = document.getElementById('generate-form');
const paragraph = document.getElementById('paragraph');
const input = document.getElementById('string-input');

let qrCode;
const preventRefresh = async (e) => {
  if (input.value) {
    e.preventDefault();

    const result = await (
      await fetch(`http://localhost:??/get-qr-code`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ stringToConvert: input.value }),
      })
    ).json();

    const qr = result.body.qr;

    let elem = document.createElement('pre');
    let code = document.createTextNode(qr);
    elem.append(code);

    let container = document.querySelector('#container');

    if (container) {
      container.appendChild(elem);
      input.value = ''
    }
    return;
  }
  window.alert('Put something in the box.');
};

form.addEventListener('submit', preventRefresh);

// █▀▀▀▀▀█ █  ▄▄ █▀▀▀▀▀█
// █ ███ █ ▀ █▄  █ ███ █
// █ ▀▀▀ █ ▄▀▀█▄ █ ▀▀▀ █
// ▀▀▀▀▀▀▀ █ █ █ ▀▀▀▀▀▀▀
// ▄▄▀▀█▄▀ ▀ ▄▄▄██▀ ▄▀▀█
// ▄▄ ▄█▀▀▀ ▀▄▄  █▀ █▄█▄
//  ▀▀  ▀▀▀█▀▄▀█ ▀█ █▄█▄
// █▀▀▀▀▀█  █ █▀▄▄▄█▀▄█▄
// █ ███ █ ███▀▀█▄ ▀▄▀
// █ ▀▀▀ █ ▀▀█ ▀▄█▀ ▄
// ▀▀▀▀▀▀▀    ▀ ▀ ▀  ▀▀
