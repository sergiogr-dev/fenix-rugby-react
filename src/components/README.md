# Estructura de Atomic Design - Fénix Rugby Club

Esta aplicación sigue el patrón de **Atomic Design** para organizar los componentes de manera escalable y mantenible.

## 📁 Estructura de Carpetas

```
src/
├── components/
│   ├── atoms/           # Componentes básicos e indivisibles
│   ├── molecules/       # Combinaciones simples de átomos
│   ├── organisms/       # Componentes complejos
│   └── templates/       # Layouts de páginas
├── pages/               # Páginas completas con lógica de negocio
└── data/                # Datos iniciales y constantes
```

## 🔬 Niveles de Atomic Design

### Atoms (Átomos)
Componentes básicos que no se pueden dividir más. Son los bloques de construcción fundamentales.

**Ubicación:** `src/components/atoms/`

- **Button** - Botones con variantes (primary, secondary, outline)
- **Card** - Contenedor base con sombra y bordes redondeados
- **SectionTitle** - Títulos de sección con estilo consistente
- **Input** - Campo de entrada de texto
- **Select** - Lista desplegable
- **Badge** - Etiquetas pequeñas con colores
- **IconButton** - Botones solo con iconos
- **Textarea** - Campo de texto multilínea

### Molecules (Moléculas)
Grupos simples de átomos que funcionan juntos como una unidad.

**Ubicación:** `src/components/molecules/`

- **PlayerCard** - Tarjeta completa de jugador
- **FeaturedPlayerCard** - Tarjeta compacta de jugador destacado
- **MatchCard** - Diferentes variantes de tarjetas de partidos
  - UpcomingMatchCard
  - PlayedMatchCard
  - RecentMatchItem
  - UpcomingMatchItem
- **ContactInfo** - Información de contacto con iconos
- **TrainingSchedule** - Horarios de entrenamiento
- **HallOfFameEntry** - Entrada individual del salón de la fama
- **SelectionBadge** - Contenedor de badges de selección

### Organisms (Organismos)
Componentes complejos que combinan moléculas y/o átomos para formar secciones completas.

**Ubicación:** `src/components/organisms/`

- **Navbar** - Barra de navegación con menú responsive
- **Footer** - Pie de página con información del club
- **HallOfFameSection** - Sección completa del salón de la fama
- **Banner** - Banner hero de la página principal
- **MatchesSummary** - Resumen de partidos recientes y próximos
- **PlayersGrid** - Grid de tarjetas de jugadores
- **FeaturedPlayers** - Sección de jugadores destacados

### Templates (Plantillas)
Layouts que organizan organismos y definen la estructura de las páginas.

**Ubicación:** `src/components/templates/`

- **MainLayout** - Layout principal que contiene Navbar, contenido y Footer

### Pages (Páginas)
Instancias específicas de templates con datos reales y lógica de negocio.

**Ubicación:** `src/pages/`

- **HomePage** - Página de inicio
- **AboutPage** - Página de información del club
- **TeamPage** - Página del equipo con filtros por categoría
- **MatchesPage** - Página de partidos
- **JoinPage** - Página de contacto y ubicación
- **AdminPage** - Panel administrativo

## 🎯 Principios de Uso

### 1. Reutilización
Los componentes se construyen para ser reutilizables en diferentes contextos.

```jsx
// ✅ Correcto
<Button variant="primary" onClick={handleClick}>
  Guardar
</Button>

// ✅ También correcto
<Button variant="outline" className="w-full">
  Cancelar
</Button>
```

### 2. Props vs Composición
Los átomos y moléculas reciben props para configuración, mientras que organismos pueden usar composición.

```jsx
// Molécula con props
<PlayerCard player={playerData} />

// Organismo con composición
<MainLayout>
  <HomePage />
</MainLayout>
```

### 3. Responsabilidad Única
Cada componente debe tener una responsabilidad clara y específica.

### 4. Flujo de Datos
Los datos fluyen de arriba hacia abajo (top-down):
```
App.jsx → Pages → Organisms → Molecules → Atoms
```

## 📝 Convenciones de Nombres

- **Archivos:** PascalCase (`PlayerCard.jsx`)
- **Componentes:** PascalCase (`PlayerCard`)
- **Props:** camelCase (`playerData`, `onClick`)
- **Carpetas:** camelCase (`atoms`, `molecules`)

## 🔄 Importaciones

Cada nivel tiene un archivo `index.js` para facilitar las importaciones:

```jsx
// ❌ Evitar
import Button from './components/atoms/Button';
import Card from './components/atoms/Card';

// ✅ Preferir
import { Button, Card } from './components/atoms';
```

## 🚀 Ventajas de esta Estructura

1. **Escalabilidad:** Fácil agregar nuevos componentes sin afectar los existentes
2. **Mantenibilidad:** Componentes pequeños y enfocados son más fáciles de mantener
3. **Reutilización:** Los componentes pueden usarse en múltiples contextos
4. **Testing:** Componentes pequeños son más fáciles de probar
5. **Documentación:** La estructura es autodocumentada y fácil de entender
6. **Colaboración:** Múltiples desarrolladores pueden trabajar en diferentes niveles sin conflictos

## 📚 Recursos Adicionales

- [Atomic Design by Brad Frost](https://atomicdesign.bradfrost.com/)
- [React Component Patterns](https://reactpatterns.com/)
