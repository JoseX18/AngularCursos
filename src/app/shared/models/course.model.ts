// Modelo para los cursos
export interface Course {
    id: number;
    name: string;
    level: string;
    description: string;
    image: string;
    price: string;
    content: string[];
    duration: string;
    requirements: string[];
    instructor: string;
    language: string;
    rating: number;
}
