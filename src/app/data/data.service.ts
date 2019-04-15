import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Person, PersonResult } from 'src/models/Person';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

const personApi = '/api/persons';

@Injectable()
export class DataService {

    modalPersonData: Person;

    constructor(private httpClient: HttpClient) { }

    getLatest(): Observable<PersonResult> {
        return this.httpClient.get<PersonResult>(personApi + '/latest');
    }

    getPersons(): Observable<PersonResult> {
        return this.httpClient.get<PersonResult>(personApi);
    }

    addPerson(person: Person): Observable<PersonResult> {
        return this.httpClient.post<PersonResult>(personApi, person);
    }
}
