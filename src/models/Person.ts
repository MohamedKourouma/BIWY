export interface Person {
  person_id: number;
  person_first_name: string;
  person_last_name: string;
  person_phone: string;
  person_mail: string;
  person_update_when: string,
  person_id_position: number,
  person_created_when: string,
  person_enabled : boolean,
  person_be_notify: boolean
}

export interface PersonResult {
  status: string,
  data: Person[],
  message: string
}

export interface Person_add_edit{
  "person_first_name": string,
  "person_last_name": string,
  "person_mail": string,
  "person_phone": string
}
