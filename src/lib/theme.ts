import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const userTheme = browser && localStorage.getItem('theme');

export const theme = writable(userTheme || 'Auto');


export function toggleTheme() {
    theme.update(currentTheme => {
        if (currentTheme === 'Auto') {
            currentTheme = browser && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        return newTheme;
    })
}