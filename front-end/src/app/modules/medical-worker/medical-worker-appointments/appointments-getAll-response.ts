export interface AppointmentsGetAllResponse {
  appointments:AppointmentsGetAllResponse[]
}

export interface AppointmentsGetAllResponseAppointment {
  appointmentID: number;
  patient: string;
  examination: string;
  doctor: string;
  appointmentDateTime: string;
  notes: string;
  appointmentStatusInfo:string;
}
