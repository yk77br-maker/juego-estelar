//🔹 Uso emojis para reforzar el tema: 🧠 para cultura, 🔭 para ciencia, 🎨 para arte, 🐉 para mitología…
const preguntas = [
  {
    pregunta: "¿Cuál es la capital de Marruecos? 🕌",
    opciones: ["Fez", "Casablanca", "Rabat", "Marrakech"],
    correcta: "Rabat"
  },
  {
    pregunta: "¿Qué país tiene forma de bota? 👢",
    opciones: ["España", "Italia", "Grecia", "Portugal"],
    correcta: "Italia"
  },
  {
    pregunta: "¿En qué continente está Egipto? 🌍",
    opciones: ["Asia", "Europa", "África", "Oceanía"],
    correcta: "África"
  },
  {
    pregunta: "¿Cuál es el idioma oficial de Brasil? 🗣️",
    opciones: ["Español", "Portugués", "Francés", "Inglés"],
    correcta: "Portugués"
  },
  {
    pregunta: "¿Qué moneda se usa en Japón? 💴",
    opciones: ["Yuan", "Won", "Yen", "Dólar"],
    correcta: "Yen"
  },
  {
    pregunta: "¿Qué ciudad es famosa por la Torre Eiffel? 🗼",
    opciones: ["Londres", "París", "Roma", "Berlín"],
    correcta: "París"
  },
  {
    pregunta: "¿Cuál es el océano más grande? 🌊",
    opciones: ["Atlántico", "Índico", "Pacífico", "Ártico"],
    correcta: "Pacífico"
  },
  {
    pregunta: "¿Qué país tiene más habitantes? 👥",
    opciones: ["India", "China", "Estados Unidos", "Indonesia"],
    correcta: "China"
  },
  {
    pregunta: "¿Qué instrumento tiene teclas blancas y negras? 🎹",
    opciones: ["Guitarra", "Piano", "Violín", "Flauta"],
    correcta: "Piano"
  },
  {
    pregunta: "¿Qué animal es símbolo de sabiduría? 🦉",
    opciones: ["León", "Águila", "Búho", "Serpiente"],
    correcta: "Búho"
  },
  {
  pregunta: "¿Qué planeta es conocido como el planeta rojo? 🔴",
  opciones: ["Venus", "Marte", "Júpiter", "Saturno"],
  correcta: "Marte"
},
{
  pregunta: "¿Qué gas respiramos principalmente en la atmósfera? 🌬️",
  opciones: ["Oxígeno", "Nitrógeno", "Dióxido de carbono", "Helio"],
  correcta: "Nitrógeno"
},
{
  pregunta: "¿Qué animal pone huevos y amamanta a sus crías? 🦘",
  opciones: ["Ornitorrinco", "Canguro", "Delfín", "Murciélago"],
  correcta: "Ornitorrinco"
},
{
  pregunta: "¿Cuál es el órgano más grande del cuerpo humano? 🧍",
  opciones: ["Hígado", "Piel", "Pulmones", "Intestino"],
  correcta: "Piel"
},
{
  pregunta: "¿Qué fenómeno natural se mide con la escala de Richter? 🌍",
  opciones: ["Huracanes", "Terremotos", "Tormentas", "Erupciones"],
  correcta: "Terremotos"
},
{
  pregunta: "¿Qué tipo de energía proviene del Sol? ☀️",
  opciones: ["Eólica", "Solar", "Geotérmica", "Hidráulica"],
  correcta: "Solar"
},
{
  pregunta: "¿Qué animal tiene la lengua más larga en proporción a su cuerpo? 👅",
  opciones: ["Camaleón", "Jirafa", "Hormiga", "Serpiente"],
  correcta: "Camaleón"
},
{
  pregunta: "¿Qué parte de la planta realiza la fotosíntesis? 🌿",
  opciones: ["Raíz", "Flor", "Hoja", "Tallo"],
  correcta: "Hoja"
},
{
  pregunta: "¿Qué metal es líquido a temperatura ambiente? 💧",
  opciones: ["Mercurio", "Plomo", "Hierro", "Cobre"],
  correcta: "Mercurio"
},
{
  pregunta: "¿Qué fuerza mantiene a los planetas girando alrededor del Sol? 🌀",
  opciones: ["Magnetismo", "Gravedad", "Presión", "Inercia"],
  correcta: "Gravedad"
},
{
  pregunta: "¿Qué dios griego es conocido como el mensajero de los dioses? 🕊️",
  opciones: ["Apolo", "Hermes", "Ares", "Zeus"],
  correcta: "Hermes"
},
{
  pregunta: "¿Qué criatura mitológica tiene cuerpo de león y cabeza humana? 🦁",
  opciones: ["Minotauro", "Quimera", "Esfinge", "Grifo"],
  correcta: "Esfinge"
},
{
  pregunta: "¿Qué símbolo representa el infinito? ♾️",
  opciones: ["Triángulo", "Círculo", "Lazo", "Ocho acostado"],
  correcta: "Ocho acostado"
},
{
  pregunta: "¿Qué ave es símbolo de renacimiento en muchas culturas? 🔥",
  opciones: ["Águila", "Fénix", "Búho", "Cisne"],
  correcta: "Fénix"
},
{
  pregunta: "¿Qué dios egipcio tiene cabeza de chacal y guía a los muertos? ⚰️",
  opciones: ["Ra", "Anubis", "Osiris", "Horus"],
  correcta: "Anubis"
},
{
  pregunta: "¿Qué planeta está asociado con el dios romano de la guerra? 🪐",
  opciones: ["Venus", "Marte", "Júpiter", "Saturno"],
  correcta: "Marte"
},
{
  pregunta: "¿Qué símbolo se usa para representar el equilibrio entre opuestos? ☯️",
  opciones: ["Yin Yang", "Pentagrama", "Mandala", "Cruz celta"],
  correcta: "Yin Yang"
},
{
  pregunta: "¿Qué criatura mitológica tiene cuerpo de caballo y torso humano? 🐎",
  opciones: ["Centauro", "Sirena", "Hidra", "Tritón"],
  correcta: "Centauro"
},
{
  pregunta: "¿Qué dios nórdico es conocido por su sabiduría y sacrificio? 🧠",
  opciones: ["Thor", "Loki", "Odin", "Freyr"],
  correcta: "Odin"
},
{
  pregunta: "¿Qué símbolo representa protección en muchas culturas antiguas? 🛡️",
  opciones: ["Espiral", "Ojo", "Mano de Fátima", "Runa Algiz"],
  correcta: "Mano de Fátima"
},
{
  pregunta: "¿Quién pintó la Mona Lisa? 🖼️",
  opciones: ["Miguel Ángel", "Leonardo da Vinci", "Van Gogh", "Picasso"],
  correcta: "Leonardo da Vinci"
},
{
  pregunta: "¿Qué instrumento usa el escultor para moldear arcilla? 🧱",
  opciones: ["Cincel", "Espátula", "Pincel", "Torno"],
  correcta: "Espátula"
},
{
  pregunta: "¿Qué movimiento artístico usaba sueños y símbolos ocultos? 🌙",
  opciones: ["Cubismo", "Surrealismo", "Impresionismo", "Realismo"],
  correcta: "Surrealismo"
},
{
  pregunta: "¿Qué color se asocia con la calma y la profundidad? 🌊",
  opciones: ["Rojo", "Amarillo", "Azul", "Verde"],
  correcta: "Azul"
},
{
  pregunta: "¿Qué poeta escribió 'Puedo escribir los versos más tristes esta noche'? 📜",
  opciones: ["Federico García Lorca", "Pablo Neruda", "Octavio Paz", "Jorge Luis Borges"],
  correcta: "Pablo Neruda"
},
{
  pregunta: "¿Qué técnica pictórica usa agua como base? 💧",
  opciones: ["Óleo", "Acuarela", "Tempera", "Pastel"],
  correcta: "Acuarela"
},
{
  pregunta: "¿Qué símbolo representa la creatividad en muchas culturas? ✨",
  opciones: ["Espiral", "Estrella", "Fuego", "Mano"],
  correcta: "Espiral"
},
{
  pregunta: "¿Qué arquitecto diseñó la Sagrada Familia en Barcelona? 🏗️",
  opciones: ["Frank Gehry", "Antoni Gaudí", "Le Corbusier", "Zaha Hadid"],
  correcta: "Antoni Gaudí"
},
{
  pregunta: "¿Qué danza se originó en Andalucía y expresa pasión y fuerza? 💃",
  opciones: ["Tango", "Samba", "Flamenco", "Bolero"],
  correcta: "Flamenco"
},
{
  pregunta: "¿Qué arte combina palabras, ritmo y expresión corporal? 🎤",
  opciones: ["Rap", "Ópera", "Teatro", "Poesía"],
  correcta: "Rap"
},
{
  pregunta: "¿Quién escribió 'Cien años de soledad'? 🌳",
  opciones: ["Mario Vargas Llosa", "Gabriel García Márquez", "Isabel Allende", "Julio Cortázar"],
  correcta: "Gabriel García Márquez"
},
{
  pregunta: "¿Qué figura literaria consiste en atribuir cualidades humanas a objetos? 🗣️",
  opciones: ["Metáfora", "Personificación", "Hipérbole", "Aliteración"],
  correcta: "Personificación"
},
{
  pregunta: "¿Qué novela comienza con 'Llámame Ismael'? 🌊",
  opciones: ["Moby Dick", "La Odisea", "El viejo y el mar", "Robinson Crusoe"],
  correcta: "Moby Dick"
},
{
  pregunta: "¿Qué símbolo representa el viaje interior en muchas narrativas? 🛤️",
  opciones: ["Camino", "Espejo", "Puerta", "Laberinto"],
  correcta: "Laberinto"
},
{
  pregunta: "¿Qué poeta escribió 'No te detengas'? 🔥",
  opciones: ["Mario Benedetti", "Jorge Luis Borges", "Octavio Paz", "Rumi"],
  correcta: "Mario Benedetti"
},
{
  pregunta: "¿Qué autor creó el personaje de Don Quijote? 🐴",
  opciones: ["Lope de Vega", "Miguel de Cervantes", "Calderón de la Barca", "Tirso de Molina"],
  correcta: "Miguel de Cervantes"
},
{
  pregunta: "¿Qué tipo de narrador conoce los pensamientos de todos los personajes? 🧠",
  opciones: ["Testigo", "Protagonista", "Omnisciente", "Limitado"],
  correcta: "Omnisciente"
},
{
  pregunta: "¿Qué símbolo representa transformación en cuentos clásicos? 🦋",
  opciones: ["Rosa", "Mariposa", "Luna", "Fénix"],
  correcta: "Mariposa"
},
{
  pregunta: "¿Qué obra de Shakespeare habla de dos amantes de familias rivales? 💔",
  opciones: ["Hamlet", "Romeo y Julieta", "Macbeth", "Otelo"],
  correcta: "Romeo y Julieta"
},
{
  pregunta: "¿Qué género mezcla hechos reales con elementos mágicos? ✨",
  opciones: ["Realismo mágico", "Fantasía épica", "Ciencia ficción", "Fábula"],
  correcta: "Realismo mágico"
},
{
  pregunta: "¿Cuál es la estrella más cercana a la Tierra después del Sol? 🌟",
  opciones: ["Sirius", "Proxima Centauri", "Betelgeuse", "Vega"],
  correcta: "Proxima Centauri"
},
{
  pregunta: "¿Qué planeta tiene un sistema de anillos visible desde la Tierra? 💍",
  opciones: ["Júpiter", "Saturno", "Urano", "Neptuno"],
  correcta: "Saturno"
},
{
  pregunta: "¿Qué instrumento se usa para observar estrellas y planetas? 🔭",
  opciones: ["Microscopio", "Telescopio", "Radar", "Sismógrafo"],
  correcta: "Telescopio"
},
{
  pregunta: "¿Qué nombre recibe el camino aparente del Sol en el cielo? ☀️",
  opciones: ["Eclíptica", "Órbita", "Horizonte", "Zodiaco"],
  correcta: "Eclíptica"
},
{
  pregunta: "¿Qué planeta es el más grande del sistema solar? 🪐",
  opciones: ["Saturno", "Júpiter", "Neptuno", "Urano"],
  correcta: "Júpiter"
},
{
  pregunta: "¿Qué constelación tiene forma de cazador y es visible en invierno? 🏹",
  opciones: ["Orión", "Leo", "Escorpio", "Tauro"],
  correcta: "Orión"
},
{
  pregunta: "¿Qué satélite natural orbita la Tierra? 🌕",
  opciones: ["Luna", "Fobos", "Europa", "Titán"],
  correcta: "Luna"
},
{
  pregunta: "¿Qué misión llevó al primer humano a la Luna? 🚀",
  opciones: ["Apollo 11", "Sputnik", "Voyager 1", "Gemini 4"],
  correcta: "Apollo 11"
},
{
  pregunta: "¿Qué fenómeno ocurre cuando la Luna tapa el Sol? 🌘",
  opciones: ["Eclipse lunar", "Eclipse solar", "Solsticio", "Equinoccio"],
  correcta: "Eclipse solar"
},
{
  pregunta: "¿Qué planeta es conocido por su color azul intenso? 🔵",
  opciones: ["Urano", "Neptuno", "Venus", "Tierra"],
  correcta: "Neptuno"
},
{
  pregunta: "¿Qué civilización construyó las pirámides de Giza? 🏜️",
  opciones: ["Mesopotámica", "Egipcia", "Romana", "Persa"],
  correcta: "Egipcia"
},
{
  pregunta: "¿Quién fue el primer emperador del Imperio Romano? 👑",
  opciones: ["Julio César", "Augusto", "Nerón", "Trajano"],
  correcta: "Augusto"
},
{
  pregunta: "¿Qué civilización inventó la escritura cuneiforme? ✍️",
  opciones: ["Egipcia", "Griega", "Mesopotámica", "China"],
  correcta: "Mesopotámica"
},
{
  pregunta: "¿Qué filósofo griego fue maestro de Platón? 🧠",
  opciones: ["Sócrates", "Aristóteles", "Epicuro", "Pitágoras"],
  correcta: "Sócrates"
},
{
  pregunta: "¿Qué ciudad fue famosa por su biblioteca en la antigüedad? 📚",
  opciones: ["Atenas", "Alejandría", "Roma", "Cartago"],
  correcta: "Alejandría"
},
{
  pregunta: "¿Qué civilización adoraba a Quetzalcóatl? 🐍",
  opciones: ["Inca", "Maya", "Azteca", "Olmeca"],
  correcta: "Azteca"
},
{
  pregunta: "¿Qué imperio construyó la Gran Muralla? 🧱",
  opciones: ["Mongol", "Chino", "Japonés", "Coreano"],
  correcta: "Chino"
},
{
  pregunta: "¿Qué cultura usaba jeroglíficos como sistema de escritura? 🔡",
  opciones: ["Egipcia", "Griega", "Romana", "Fenicia"],
  correcta: "Egipcia"
},
{
  pregunta: "¿Qué líder cruzó los Alpes con elefantes para atacar Roma? 🐘",
  opciones: ["Alejandro Magno", "Aníbal", "César", "Atila"],
  correcta: "Aníbal"
},
{
  pregunta: "¿Qué civilización construyó Machu Picchu? 🏔️",
  opciones: ["Maya", "Inca", "Azteca", "Tolteca"],
  correcta: "Inca"
},
{
  pregunta: "¿Quién dijo 'Solo sé que no sé nada'? 🌀",
  opciones: ["Platón", "Sócrates", "Aristóteles", "Descartes"],
  correcta: "Sócrates"
},
{
  pregunta: "¿Qué filósofo escribió 'Así habló Zaratustra'? 🔥",
  opciones: ["Nietzsche", "Kant", "Hegel", "Spinoza"],
  correcta: "Nietzsche"
},
{
  pregunta: "¿Qué símbolo representa el eterno retorno? ♾️",
  opciones: ["Espiral", "Círculo", "Reloj de arena", "Ouroboros"],
  correcta: "Ouroboros"
},
{
  pregunta: "¿Qué escuela filosófica busca la ausencia de dolor y placer moderado? 🌿",
  opciones: ["Estoicismo", "Epicureísmo", "Existencialismo", "Idealismo"],
  correcta: "Epicureísmo"
},
{
  pregunta: "¿Qué filósofo planteó el 'mito de la caverna'? 🕳️",
  opciones: ["Platón", "Aristóteles", "Heráclito", "Kant"],
  correcta: "Platón"
},
{
  pregunta: "¿Qué concepto representa la unidad de opuestos en el taoísmo? ☯️",
  opciones: ["Mandala", "Yin Yang", "Dharma", "Karma"],
  correcta: "Yin Yang"
},
{
  pregunta: "¿Qué filósofo afirmaba 'Pienso, luego existo'? 🧠",
  opciones: ["Descartes", "Leibniz", "Kant", "Spinoza"],
  correcta: "Descartes"
},
{
  pregunta: "¿Qué símbolo representa la transformación interior en muchas tradiciones? 🦋",
  opciones: ["Fénix", "Mariposa", "Luna", "Espejo"],
  correcta: "Mariposa"
},
{
  pregunta: "¿Qué filósofo hablaba del 'camino del medio' como vía de sabiduría? 🛤️",
  opciones: ["Confucio", "Buda", "Lao-Tsé", "Zhuangzi"],
  correcta: "Buda"
},
{
  pregunta: "¿Qué corriente filosófica afirma que el ser precede a la esencia? 🌌",
  opciones: ["Existencialismo", "Idealismo", "Materialismo", "Racionalismo"],
  correcta: "Existencialismo"
},
{
  pregunta: "¿Qué fenómeno natural fue visible en Cantabria en octubre de 2025? 🌌",
  opciones: ["Eclipse solar", "Aurora boreal", "Lluvia de meteoros", "Halo lunar"],
  correcta: "Aurora boreal"
},
{
  pregunta: "¿Qué tipo de rocas se forman a partir de residuos humanos? 🪨",
  opciones: ["Rocas fósiles", "Rocas antropoclásticas", "Rocas volcánicas", "Rocas sedimentarias"],
  correcta: "Rocas antropoclásticas"
},
{
  pregunta: "¿Qué herramienta se usa para ejecutar comandos en Windows? 💻",
  opciones: ["CMD", "Paint", "Word", "Excel"],
  correcta: "CMD"
},
{
  pregunta: "¿Qué tipo de creatividad combina memoria, imagen y afecto? 🖼️",
  opciones: ["Scrapbooking digital", "Diseño gráfico", "Collage urbano", "Fotografía documental"],
  correcta: "Scrapbooking digital"
},
{
  pregunta: "¿Qué símbolo representa el cuidado colectivo en tu blog? 🌸",
  opciones: ["Círculo", "Estrella", "Mano", "Lazo"],
  correcta: "Círculo"
},
{
  pregunta: "¿Qué actitud se destaca como base de tu acompañamiento creativo? ✨",
  opciones: ["Empatía", "Competencia", "Ambición", "Neutralidad"],
  correcta: "Empatía"
},
{
  pregunta: "¿Qué red social se cuestiona como espacio de trabajo o vagancia? 📱",
  opciones: ["Instagram", "TikTok", "Redes sociales en general", "LinkedIn"],
  correcta: "Redes sociales en general"
},
{
  pregunta: "¿Qué tipo de bienvenida se propone para el canal de Telegram? 🚀",
  opciones: ["Formal", "Estelar", "Automática", "Silenciosa"],
  correcta: "Estelar"
},
{
  pregunta: "¿Qué elemento se asocia con el ritual de memoria en tus fotos? 📷",
  opciones: ["Agua", "Luz", "Vínculo", "Color"],
  correcta: "Vínculo"
},
{
  pregunta: "¿Qué metáfora usas para describir el desarrollo personal? 🌱",
  opciones: ["Camino", "Semilla", "Puerta", "Espejo"],
  correcta: "Semilla"
}
];

