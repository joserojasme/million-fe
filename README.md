# Million Properties Frontend

Una aplicación React + TypeScript moderna para la gestión y visualización de propiedades inmobiliarias, construida con las mejores prácticas de desarrollo frontend.

## 🚀 Características

- **Interfaz moderna y responsiva** con TailwindCSS y componentes Shadcn/UI
- **Filtrado avanzado** por nombre, dirección y rango de precios
- **Vista detallada** de propiedades con galería de imágenes
- **Estado global** gestionado con Zustand
- **Navegación** con React Router v6+
- **Testing** con Vitest y React Testing Library
- **TypeScript estricto** para mayor seguridad de tipos

## 🛠️ Tecnologías

- **React 19** con TypeScript
- **Vite** como bundler
- **TailwindCSS** para estilos
- **Zustand** para estado global
- **React Router** para navegación
- **Axios** para peticiones HTTP
- **Vitest** para testing
- **Radix UI** para componentes accesibles

## 📦 Instalación

```bash
# Clonar el repositorio
git clone <repository-url>
cd million-fe

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

## 🧪 Testing

```bash
# Ejecutar tests
npm run test

# Ejecutar tests con UI
npm run test:ui

# Ejecutar tests una vez
npm run test:run
```

## 🏗️ Estructura del Proyecto

```
src/
├── api/
│   └── propertyService.ts        # Servicio para consumir la API
├── components/
│   ├── ui/                       # Componentes base reutilizables
│   ├── PropertyCard.tsx          # Tarjeta de propiedad
│   ├── PropertyList.tsx          # Lista de propiedades
│   ├── FilterBar.tsx             # Barra de filtros
│   └── PropertyDetail.tsx        # Modal de detalles
├── hooks/
│   ├── useProperties.ts          # Hook para manejo de propiedades
│   └── useFilters.ts            # Hook para manejo de filtros
├── pages/
│   └── Home.tsx                  # Página principal
├── store/
│   └── propertyStore.ts          # Store de Zustand
├── types/
│   └── Property.ts               # Interfaces TypeScript
├── lib/
│   └── utils.ts                 # Utilidades y helpers
└── test/
    └── setup.ts                 # Configuración de tests
```

## 🔌 API Endpoint

La aplicación consume el siguiente endpoint:

```bash
GET http://localhost:5099/api/Property?name=nombre&address=direccion&minPrice=1&maxPrice=420000000
```

### Parámetros de consulta:
- `name`: Nombre de la propiedad (opcional)
- `address`: Dirección (opcional)
- `minPrice`: Precio mínimo (opcional)
- `maxPrice`: Precio máximo (opcional)

## 🎨 Componentes Principales

### PropertyCard
Muestra información básica de una propiedad con imagen, precio, dirección y botón para ver detalles.

### FilterBar
Permite filtrar propiedades por nombre, dirección y rango de precios con validación en tiempo real.

### PropertyDetail
Modal que muestra información completa de una propiedad incluyendo galería de imágenes, datos del propietario e historial de transacciones.

### PropertyList
Renderiza la lista de propiedades con estados de carga, error y lista vacía.

## 🧪 Testing

El proyecto incluye tests unitarios para los componentes principales:

- **PropertyCard**: Verifica renderizado y funcionalidad de botones
- **FilterBar**: Prueba filtros y validación de entrada
- **PropertyList**: Estados de carga y manejo de errores

## 🚀 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm run preview` - Preview del build
- `npm run lint` - Linting del código
- `npm run test` - Ejecutar tests
- `npm run test:ui` - Tests con interfaz gráfica

## 📱 Responsive Design

La aplicación está optimizada para:
- **Desktop**: Grid de 4 columnas
- **Tablet**: Grid de 2-3 columnas
- **Mobile**: Grid de 1 columna

## 🎯 Próximas Mejoras

- [ ] Paginación para grandes volúmenes de datos
- [ ] Filtros adicionales (año, tipo de propiedad)
- [ ] Modo oscuro
- [ ] Favoritos de propiedades
- [ ] Comparador de propiedades
- [ ] Mapas integrados
- [ ] Notificaciones push

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.