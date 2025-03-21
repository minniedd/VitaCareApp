namespace VitaCare_API.Endpoints.MedicalWorker.AppointmentsEndpoints.Add
{
    public class AppointmentAddRequest
    {
        // personal patient information
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime BirthDate { get; set; }
        public int GenderID { get; set; }
        public string? TelephoneNumber { get; set; }
        public string? Address { get; set; }
        public string? Country { get; set; }
        public string? Allegries { get; set; }
        public string? EmergencyContact { get; set; }
        // appointment information
        public int ExaminationID { get; set; }
        public DateTime AppointmentDate { get; set; }
        public string? Time { get; set; }
        public int DoctorID { get; set; }
        public string? Notes { get; set; }
        public string? AppointmentStatusInfo { get; set; }
    }
}
