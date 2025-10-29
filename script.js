let puntuacion = 0;
let preguntaActual = null;
let preguntasRestantes = [];
const maxPreguntas = 20;

// Iniciar el juego
function iniciarJuego() {
  if (!Array.isArray(preguntas) || preguntas.length === 0) {
    mostrarError("⚠️ No hay preguntas disponibles.");
    return;
  }

  preguntasRestantes = [...preguntas];
  preguntasRestantes.sort(() => Math.random() - 0.5);
  preguntasRestantes = preguntasRestantes.slice(0, maxPreguntas); // Limita a 10 preguntas

  puntuacion = 0;
  actualizarElemento("score", `🌟 Puntuación: ${puntuacion}`);
  ocultarElemento("compartir");
  nextQuestion();
}

// Mostrar siguiente pregunta
function nextQuestion() {
  if (preguntasRestantes.length === 0) {
    mostrarResultadoFinal();
    return;
  }

  preguntaActual = preguntasRestantes.pop();

  actualizarElemento("question", preguntaActual.pregunta, "fade-in");
  actualizarElemento("feedback", "", "");
  limpiarOpciones();

  preguntaActual.opciones.forEach(opcion => {
    const boton = document.createElement("button");
    boton.innerText = opcion;
    boton.className = "opcion";
    boton.setAttribute("tabindex", "0");
    boton.onclick = () => verificarRespuesta(opcion);
    document.getElementById("options").appendChild(boton);
  });
}

// Verificar respuesta
function verificarRespuesta(opcionSeleccionada) {
  const esCorrecta = opcionSeleccionada === preguntaActual.correcta;
  const mensaje = esCorrecta
    ? "✅ ¡Respuesta correcta!"
    : "❌ Respuesta incorrecta";

  if (esCorrecta) puntuacion++;

  actualizarElemento("feedback", mensaje, "fade-in");
  actualizarElemento("score", `🌟 Puntuación: ${puntuacion}`);

  setTimeout(nextQuestion, 1000);
}

// Mostrar resultado final
function mostrarResultadoFinal() {
  let mensaje = "";

  if (puntuacion >= 19) {
    mensaje = "🌟 ¡Sabiduría cósmica desbloqueada!";
  } else if (puntuacion >= 10) {
    mensaje = "✨ Tu constelación brilla con fuerza.";
  } else if (puntuacion >= 6) {
    mensaje = "🔭 Has iniciado tu viaje estelar.";
  } else {
    mensaje = "🌑 Toda estrella comienza en la sombra. Sigue explorando.";
  }

  const resultado = `🧠 Puntuación final: ${puntuacion}/${maxPreguntas}\n${mensaje}\n\nComparte tu resultado en el grupo y reta a otra mente estelar.`;

  actualizarElemento("question", "🌠 Ritual completado");
  limpiarOpciones();
  actualizarElemento("feedback", resultado, "final fade-in");
  mostrarElemento("compartir");
}

// Copiar resultado
function copiarResultado() {
  const texto = document.getElementById("feedback").innerText;
  navigator.clipboard.writeText(texto).then(() => {
    alert("🌠 Resultado copiado. ¡Compártelo en el grupo!");
  }).catch(() => {
    alert("⚠️ No se pudo copiar el resultado.");
  });
}

// Utilidades visuales y de accesibilidad
function actualizarElemento(id, contenido, clase = null) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerText = contenido;
  if (clase !== null) el.className = clase;
}

function limpiarOpciones() {
  const contenedor = document.getElementById("options");
  if (contenedor) contenedor.innerHTML = "";
}

function mostrarElemento(id) {
  const el = document.getElementById(id);
  if (el) el.style.display = "inline-block";
}

function ocultarElemento(id) {
  const el = document.getElementById(id);
  if (el) el.style.display = "none";
}

function mostrarError(mensaje) {
  actualizarElemento("question", "🚫 Error cósmico");
  actualizarElemento("feedback", mensaje, "final");
  limpiarOpciones();
  ocultarElemento("compartir");
}
