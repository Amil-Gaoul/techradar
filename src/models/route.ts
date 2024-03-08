export interface Route {
    /*
     * App route.
     */
    route: string;
    /**
     * Page title.
     */
    title: string;
    /**
     * Template url.
     */
    templateUrl: string;
    /**
     * Load page.
     */
    load: () => void;
}
