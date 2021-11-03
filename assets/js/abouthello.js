var typed2 = new Typed('#abouthello', {
  strings: [
    'hello',
    'hi',
    'hey',
    "g'day",
    'bonjour',
    'yo',
    'namaste',
    'hola',
    'مرحبا',
    'morning!',
    'hallo',
    'ciao',
    '&#128075;',
    'hoi',
    "m'athchomaroon",
    'hiya',
    'Привет',
    'you got a sec?',
    'greetings!',
    'aloha',
    'こんにちは',
    'buenos dias',
    'nuqneH',
    'heya',
    'olà',
    'apipoulaï',
    'j0',
    'howdy',
    'שלום',
    'yooooooooooo!',
    '你好',
    'you there?',
    'fraeslis',
    '여보세요',
    'sul sul',
    '0110100001100101011011000110110001101111',
    'achuta',
    'ਸਤ ਸ੍ਰੀ ਅਕਾਲ',
    'ping',
    '(68 65 6C 6C 6F)16',
    'Χαίρετε',
  ],
  typeSpeed: 80,
  backSpeed: 60,
  smartBackspace: false,
  loop: true,
  shuffle: false,
  backDelay: 2000,
  startDelay: 3000,
});

// force the start of cursor animation while the `startDelay` is ticking
if (typed2.cursor != null) {
  // can't use `toggleBlinking(true)` here, as it has some extra checks
  // whether animation has started...which defeats the purpose
  typed2.cursor.classList.add('typed-cursor--blink');
}

document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  document.querySelector('#year').innerHTML = year.toString(10);
});
