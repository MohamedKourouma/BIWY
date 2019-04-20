import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CPResult, Checkpoint } from 'src/models/Checkpoint';

const checkpointApi = '/api/checkpoints';

@Injectable({
    providedIn: 'root'
})
export class CheckpointService {

    constructor(private httpClient: HttpClient) { }

    getLast() {
        return this.httpClient.get<CPResult>(checkpointApi + '/latest');
    }

    getAll(): Observable<CPResult> {
        return this.httpClient.get<CPResult>(checkpointApi);
    }

    addOne(checkpoint: Checkpoint): Observable<CPResult> {
        return this.httpClient.post<CPResult>(checkpointApi, checkpoint);
    }

    removeOne(checkpointId: number): Observable<CPResult> {
        return this.httpClient.delete<CPResult>(checkpointApi + '/' + checkpointId);
    }
}
