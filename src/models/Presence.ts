

export interface PresenceView {
  presence_id_person: number;
  presence_id_checkpoint: number;
  person_first_name: string;
  person_last_name: string;
  person_phone: string;
  presence_check_time: string;
}

export interface PresenceResult {
  status: string;
  data: PresenceView[];
  message: string;
}
