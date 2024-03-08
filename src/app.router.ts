import { Route } from './models';
import { ReadFileService } from './services';
import { Injector } from './utils';

export class AppRouter {
    private routes: Route[] = [];
    private readFileService: ReadFileService = Injector.resolve<ReadFileService>(ReadFileService);
    constructor() {
        this.onInit();
    }

    public async openRoute(): Promise<void> {}

    private onInit(): void {
        this.readFileService.onReadRadarFile().subscribe();
    }
}
