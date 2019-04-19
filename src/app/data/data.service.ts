import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Person, PersonResult, PersonViewResult } from 'src/models/Person';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Checkpoint, CPResult} from "../../models/Checkpoint";

const personApi = '/api/persons';
const checkpointApi = '/api/checkpoints';

@Injectable()
export class DataService {

    modalPersonData: Person;


    constructor(private httpClient: HttpClient) { }


    getLatestPerson(): Observable<PersonResult> {
        return this.httpClient.get<PersonResult>(personApi + '/latest');
    }

    getLatestCheckpoint(): Observable<CPResult> {
      return this.httpClient.get<CPResult>(checkpointApi + '/latest');
    }

    getPersons(): Observable<PersonViewResult> {
        return this.httpClient.get<PersonViewResult>(personApi);
    }

    getCheckpoints(): Observable<CPResult> {
      return this.httpClient.get<CPResult>(checkpointApi);
    }

    addPerson(person: Person): Observable<PersonResult> {
        return this.httpClient.post<PersonResult>(personApi, person);
    }

    removePerson(itemId: any): Observable<PersonResult> {
        return this.httpClient.delete<PersonResult>(personApi + '/' + itemId);
    }

    addCheckpoint(cp: Checkpoint): Observable<CPResult> {
      return this.httpClient.post<CPResult>(checkpointApi, cp);
    }

    removeCheckpoint(itemId: any): Observable<CPResult> {
        return this.httpClient.delete<CPResult>(checkpointApi + '/' + itemId);
    }
    getPersonsByCheckpoint(checkpointId: number){
      return this.httpClient.get<PersonViewResult>(personApi + '/checkpoint/' + checkpointId);
    }

}
