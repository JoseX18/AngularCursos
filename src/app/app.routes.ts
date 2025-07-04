import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router'
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Courses } from './pages/courses/courses';
import { NotFound } from './core/not-found/not-found';
import { CourseDetail } from './pages/courses/course-detail/course-detail';


export const routes: Routes = [
    { path: '', component: Home },
    { path: 'home', component: Home },
    { path: 'courses', component: Courses },
    { path: 'courseDetail/:id', component: CourseDetail },
    { path: '**', component: NotFound }
];

