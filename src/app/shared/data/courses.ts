import { Course } from "../models/course.model";

export const COURSES: Course[] = [
    {
        id: 1,
        name: 'HTML',
        level: 'Easy',
        description: 'Estructura de websites',
        image: 'https://pixelmechanics.com.sg/wp-content/uploads/2019/06/html5-logo-for-web-development.png',
        price: 'Q300',
        content: [
            'Introducción al HTML.',
            'Estructura básica de un documento.',
            'Etiquetas comunes: encabezados, párrafos, listas.',
            'Enlaces e imágenes.',
            'Formularios básicos.'
        ],
        duration: '2h 15min',
        requirements: ['Ninguno, ideal para principiantes'],
        instructor: 'Alberto Morales',
        language: 'Español',
        rating: 4.7
    },
    {
        id: 2,
        name: 'HTML',
        level: 'Medium',
        description: 'Estructura avanzada de websites',
        image: 'https://pixelmechanics.com.sg/wp-content/uploads/2019/06/html5-logo-for-web-development.png',
        price: 'Q400', content: [
            'Uso semántico de etiquetas avanzadas',
            'Formularios avanzados: validación nativa, nuevos input types',
            'SEO técnico básico: estructura para mejorar el posicionamiento web',
            'Accesibilidad: atributos aria, orden lógico, roles',
            'Integración de contenido multimedia '
        ],
        duration: '5h 30min',
        requirements: ['Conocimiento básico'],
        instructor: 'Juan Pérez',
        language: 'Español e Ingles',
        rating: 4.85
    },
    {
        id: 3,
        name: 'CSS3',
        level: 'Medium',
        description: 'Introducción a estilos en cascada',
        image: 'assets/CSS.png',
        price: 'Q450',
        content: [
            'Selectores básicos y combinadores',
            'Box model completo',
            'Colores, unidades y tipografía',
            'Estilizado de elementos de formulario (inputs, selects, botones)',
            'Transiciones básicas y pseudoclases'
        ],
        duration: '2h 15min',
        requirements: ['Ninguno, ideal para principiantes'],
        instructor: 'Barbara Montero',
        language: 'Español',
        rating: 4.7
    },
    {
        id: 4,
        name: 'CSS3',
        level: 'Hard',
        description: 'Estilos avanzados',
        image: 'assets/CSS.png',
        price: 'Q500',
        content: [
            'Flexbox y Grid en profundidad',
            'Animaciones CSS completas',
            'Custom properties (variables CSS) y cómo usarlas dinámicamente',
            'Media Queries avanzadas y diseño mobile-first',
            'Técnicas modernas de responsive design y resolución de conflictos de estilos'
        ],
        duration: '4h 15min',
        requirements: ['Haber completado curso anterios', 'Conocimiento basico de CSS'],
        instructor: 'Barbara Montero',
        language: 'Español e Ingles',
        rating: 4.7
    },
    {
        id: 5,
        name: 'JavaScript',
        level: 'Medium',
        description: 'Manipulación del DOM',
        image: 'https://delta-dev-software.fr/wp-content/uploads/2024/02/efe020c3-cfc2-41f9-be41-ad581ffc9969.jpg',
        price: 'Q450',
        content: [
            'Selección y modificación de elementos DOM',
            'Eventos del DOM: click, input, submit, change y delegación de eventos',
            'Manipulación de atributos, clases y estilos',
            'Creación y eliminación dinámica de nodos',
            'Timers y manejo básico del tiempo '
        ],
        duration: '6h 15min',
        requirements: ['Conocimiento previo de HTML', 'Conocimiento previo de CSS'],
        instructor: 'Juan Pérez',
        language: 'Español',
        rating: 4.9
    },
    {
        id: 6,
        name: 'JavaScript',
        level: 'Hard',
        description: 'Programación orientada a objetos',
        image: 'https://delta-dev-software.fr/wp-content/uploads/2024/02/efe020c3-cfc2-41f9-be41-ad581ffc9969.jpg',
        price: 'Q550',
        content: [
            'Creación de clases y objetos con ES6',
            'Herencia prototípica y herencia con extends',
            'Encapsulamiento y métodos privados (#propiedades)',
            'Uso de getters y setters para control de propiedades',
            'Aplicación práctica OOP en proyectos: ejemplo de una app de tareas, carrito de compras, etc.'
        ],
        duration: '10h 30min',
        requirements: ['Conocimiento de HTML5 y CSS3', 'Conocimiento medio de JavaScript'],
        instructor: 'Juan Pérez',
        language: 'Español',
        rating: 4.9
    }
]

