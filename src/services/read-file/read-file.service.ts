import readXlsxFile, { ParsedObjectsResult } from 'read-excel-file';
import { from, map, Observable, tap } from 'rxjs';

import { ErrorResponse, RadarDot } from '../../models';
import { Injectable } from '../../utils';
import { HttpService } from '../http/http.service';
import { schema } from './file.schema';

@Injectable()
export class ReadFileService {
    constructor(private httpService: HttpService) {}

    /**
     * Get Radar file.
     * @returns {Observable<ParsedObjectsResult<RadarDot>>}
     */
    public onReadRadarFile(): Observable<any> {
        return this.httpService
            .requestFile('/assets/radar.xlsx')
            .pipe(map((response: Blob | ErrorResponse) => from(readXlsxFile<RadarDot>(response as Blob, { schema }))));
    }
}
