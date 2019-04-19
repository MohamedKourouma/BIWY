import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Person, PersonResult, PersonViewResult } from 'src/models/Person';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

const personApi = '/api/persons';

@Injectable()
export class DataService {

    modalPersonData: Person;


    constructor(private httpClient: HttpClient) { }


    getLatest(): Observable<PersonResult> {
        return this.httpClient.get<PersonResult>(personApi + '/latest');
    }

    getPersons(): Observable<PersonViewResult> {
        return this.httpClient.get<PersonViewResult>(personApi);
    }

    addPerson(person: Person): Observable<PersonResult> {
        return this.httpClient.post<PersonResult>(personApi, person);
    }

    removePerson(itemId: any): Observable<PersonResult> {
        return this.httpClient.delete<PersonResult>(personApi + '/' + itemId);
    }

    getPersonsByCheckpoint(checkpointId: number){
      return this.httpClient.get<PersonViewResult>(personApi + '/checkpoint/' + checkpointId);
    }

}
