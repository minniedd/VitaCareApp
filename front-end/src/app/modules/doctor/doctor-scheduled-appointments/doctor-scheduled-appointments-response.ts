export interface DoctorScheduledAppointmentsResponse {
  appointments: DoctorScheduledAppointmentsResponseDoctor[];
  totalCount: number;
}

export interface DoctorScheduledAppointmentsResponseDoctor {
  appointmentID: number;
  patient: string;
  examination: string;
  doctor: string;
  appointmentDateTime: string;
  notes: string;
  isDeleted:boolean;
}
