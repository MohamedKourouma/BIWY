export interface Checkpoint {
  checkpoint_id: number;
  checkpoint_id_position: number;
  checkpoint_description: string;
  checkpoint_start_date: string;
  checkpoint_end_date: string;
  checkpoint_created_when: string,
  checkpoint_updated_when: string,
  checkpoint_enabled: boolean
}

export interface CPResult {
  status: string,
  data: Checkpoint[],
  message: string
}
