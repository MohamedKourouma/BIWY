
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person, PersonResult, PersonViewResult } from 'src/models/Person';
import { PresenceResult } from 'src/models/Presence';

const personApi = '/api/persons';

@Injectable({
    providedIn: 'root'
})
export class PersonService {

    constructor(private httpClient: HttpClient) { }

    getOne(personId: number): Observable<PersonResult> {
        return this.httpClient.get<PersonResult>(personApi + '/' + personId);
    }

    getLast(): Observable<PersonResult> {
        return this.httpClient.get<PersonResult>(personApi + '/latest');
    }

    getAll(): Observable<PersonViewResult> {
        return this.httpClient.get<PersonViewResult>(personApi);
    }

    addOne(person: Person): Observable<PersonResult> {
        return this.httpClient.post<PersonResult>(personApi, person);
    }

    getAllByCheckpoint(checkpointId: number) {
        return this.httpClient.get<PresenceResult>(personApi + '/checkpoint/' + checkpointId);
    }

    removeOne(personId: number): Observable<PersonResult>  {
        return this.httpClient.delete<PersonResult>(personApi + '/' + personId);
    }

    addImage(formData: FormData) {
        return this.httpClient.post(personApi + '/upload', formData);
    }
}
