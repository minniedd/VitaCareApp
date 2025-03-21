namespace VitaCare_API.Endpoints.MedicalWorker.AppointmentsEndpoints.GetAll
{
    public class AppointmentGetAllResponse
    {
        public List<AppointmentGetAllResponseAppointment> Appointments { get; set; }
    }

    public class AppointmentGetAllResponseAppointment
    {
        public int AppointmentID { get; set; }
        public string Patient { get; set; }
        public string Examination { get; set; }
        public string Doctor { get; set; }
        public string AppointmentDateTime { get; set; }
        public string? Notes { get; set; }
    }
}
