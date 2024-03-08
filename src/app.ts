import '@fontsource/inter';
import './styles/index.scss';
import { AppRouter } from './app.router';

console.log('Hello World');

class App {
    private router: AppRouter;
    constructor() {
        this.router = new AppRouter();
        window.addEventListener('DOMContentLoaded', this.handleRouteChanging.bind(this));
        window.addEventListener('popstate', this.handleRouteChanging.bind(this));
    }

    private handleRouteChanging(): void {
        // this.router.openRoute();
    }
}

new App();
