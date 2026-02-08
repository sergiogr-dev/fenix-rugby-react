export const INITIAL_DATA = {
  general: {
    bannerTitle: "RENACE, RESISTE, VENCE",
    bannerSubtitle: "Más que un equipo, somos una familia. La pasión por el rugby nos une.",
    mission: "Fomentar la práctica del rugby como herramienta de transformación social, promoviendo valores de disciplina, respeto y trabajo en equipo.",
    vision: "Ser el club referente en Antioquia y Colombia por nuestro nivel competitivo y nuestra calidad humana para el año 2030.",
    history: "Fundado en 2006, Fénix Rugby Club nació del sueño de un grupo de amigos universitarios. Desde entonces, hemos ascendido desde la tercera división hasta consolidarnos en la liga mayor.",
    achievements: "Campeones Liga Antioqueña 2018, Subcampeones Nacionales de Clubes 2021, Campeones Torneo Seven de las Flores 2022."
  },
  contact: {
    phone: "+57 300 123 4567",
    email: "contacto@fenixrugby.com",
    address: "Unidad Deportiva de Belén, Medellín",
    trainingSchedule: "Martes y Jueves: 7:00 PM - 9:00 PM | Sábados: 8:00 AM - 11:00 AM",
    trainingLocation: "Cancha Marte #1, Unidad Deportiva Atanasio Girardot",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3!2d-75.59!3d6.24!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTQnMzAuMCJOIDc1wrAzNScwMC4wIlc!5e0!3m2!1ses!2sco!4v1600000000000!5m2!1ses!2sco"
  },
  hallOfFame: [
    { id: 1, year: 2023, best7s: "Santiago 'La Flecha' López", best15s: "Camilo 'El Tanque' Restrepo", coach: "Carlos Méndez", admin: "Marta Gómez" },
    { id: 2, year: 2022, best7s: "Felipe Rios", best15s: "Jorge Velez", coach: "Carlos Méndez", admin: "Claudia Hoyos" }
  ],
  matches: [
    { id: 1, rival: "Gatos RC", date: "2023-10-15", location: "Cancha Castilla", score: "24 - 12", status: "played" },
    { id: 2, rival: "Duendes RC", date: "2023-10-22", location: "Cancha Belén", score: "10 - 35", status: "played" },
    { id: 3, rival: "Espartanos", date: "2023-10-29", location: "Cancha Marte", score: "17 - 15", status: "played" },
    { id: 4, rival: "Carneros", date: "2023-11-12", location: "Estadio Moderno", score: null, status: "upcoming" },
    { id: 5, rival: "Petirrojos", date: "2023-11-19", location: "Cancha Castilla", score: null, status: "upcoming" },
    { id: 6, rival: "Lobos", date: "2023-11-26", location: "Cancha UdeA", score: null, status: "upcoming" }
  ],
  players: [
    { id: 1, name: "Juan Pérez", age: 24, height: 180, weight: 95, position: "Pilar", tenure: "5 años", category: "Masculino", featured: true, achievements: ["Mejor Jugador 2022"], selection: ["Antioquia"] },
    { id: 2, name: "María González", age: 22, height: 165, weight: 65, position: "Medio Scrum", tenure: "3 años", category: "Femenino", featured: true, achievements: ["Try del año"], selection: ["Colombia", "Antioquia"] },
    { id: 3, name: "Carlos Ruiz", age: 19, height: 175, weight: 80, position: "Apertura", tenure: "1 año", category: "Juvenil", featured: false, achievements: [], selection: [] },
    { id: 4, name: "Andrés Henao", age: 28, height: 190, weight: 105, position: "Segunda Línea", tenure: "8 años", category: "Masculino", featured: false, achievements: ["Capitán"], selection: ["Colombia"] },
    { id: 5, name: "Luisa Fernanda", age: 25, height: 170, weight: 70, position: "Centro", tenure: "4 años", category: "Femenino", featured: false, achievements: [], selection: ["Antioquia"] }
  ]
};
