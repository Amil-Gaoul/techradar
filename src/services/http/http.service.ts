import { catchError, Observable, of } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';

import { ErrorResponse } from '../../models';
import { Injectable } from '../../utils';

type MethodType = 'GET' | 'POST' | 'PUT' | 'DELETE';

function error<T>(): (source: Observable<T>) => Observable<T | ErrorResponse> {
    return function (source: Observable<T>) {
        return source.pipe(
            catchError((err) => {
                console.error(err);
                return of<ErrorResponse>({ error: true, message: err.message });
            })
        );
    };
}

@Injectable()
export class HttpService {
    public requestFile(url: string, method: MethodType = 'GET'): Observable<Blob | ErrorResponse> {
        return fromFetch<Blob>(url, {
            method,
            mode: 'cors',
            credentials: 'include',
            selector: (response: Response) => response.blob()
        }).pipe(error<Blob>());
    }

    /**
     * Http-request.
     * @param url
     * @param method {MethodType}
     * @returns {Observable<T | ErrorResponse>}
     */
    public request<T = unknown>(url: string, method: MethodType = 'GET'): Observable<T | ErrorResponse> {
        return fromFetch<T>(url, {
            method,
            mode: 'cors',
            credentials: 'include',
            selector: (response: Response) => response.json()
        }).pipe(error<T>());
    }
}
