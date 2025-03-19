/*// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Next To Me-Imagine Dragons", time: 4 },
  { text: "Something about the way that you", time: 22 },
  { text: "Walked into my living room", time: 24 },
  { text: "Casually and confident", time: 26 },
  { text: "Looking at the mess I am", time: 29 },
  { text: "But still you, still you want me", time: 31 },
  { text: "Stress lines and cigarettes", time: 39 },
  { text: "Politics and deficits", time: 42 },
  { text: "Late bills and overage", time: 44 },
  { text: "Screaming and hollering", time: 46 },
  { text: "But still you, still you want me", time: 48 },
  { text: "Oh, I always let you down", time: 57 },
  { text: "You're shattered on the ground", time: 64 },
  { text: "But still I find you there", time: 106 },
  { text: "Next to me", time: 109 },
  { text: "And oh, stupid things I do", time: 114 },
  { text: "I'm far from good, it's true", time: 121 },
  { text: "But still I find you", time: 124 },
  { text: "Next to me", time: 126 },
  { text: "There's something about the way that you", time: 131 },
  { text: "Always see the pretty view", time: 134 },
  { text: "Overlook the blooded mess", time: 135 },
  { text: "Always looking effortless", time: 137 },
  { text: "And still you, still you want me", time: 102 },
  { text: "I got no innocence", time: 176 },
  { text: "Faith ain't no privilege", time: 183 },
  { text: "I am a deck of cards", time: 188 },
  { text: "Vice or a game of hearts", time: 140 },
  { text: "And still you, still you want me", time: 140 },
  { text: "Oh, I always let you down", time: 140 },
  { text: "You're shattered on the ground", time: 140 },
  { text: "But still I find you there", time: 140 },
  { text: "Next to me", time: 140 },
  { text: "And oh, stupid things I do", time: 140 },
  { text: "I'm far from good, it's true", time: 140 },
  { text: "But still I find you", time: 140 },
  { text: "Next to me", time: 140 },
  { text: "So thank you", time: 140 },
  { text: "For taking a chance on me", time: 140 },
  { text: "I know it isn't easy", time: 140 },
  { text: "But I hope to be worth it (oh)", time: 140 },
  { text: "So thank you", time: 140 },
  { text: "For taking a chance on me", time: 140 },
  { text: "I know it isn't easy", time: 140 },
  { text: "But I hope to be worth it (oh)", time: 140 },
  { text: "Oh, I always let you down (I always let you down)", time: 140 },
  { text: "You're shattered on the ground (shattered on the ground)", time: 140 },
  { text: "But still I find you there (yeah)", time: 140 },
  { text: "Next to me", time: 140 },
  { text: "And oh, stupid things I do (stupid things I do)", time: 140 },
  { text: "I'm far from good, it's true", time: 140 },
  { text: "But still I find you", time: 140 },
  { text: "Next to me (next to me)", time: 235 },

];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
/*setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
//tTimeout(ocultarTitulo, 216000);