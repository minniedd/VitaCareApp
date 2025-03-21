using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace VitaCare_API.Data.Models
{
    public class Appointment
    {
        [Key]
        public int AppointmentID { get; set; }
        public int PatientID { get; set; }
        public int DoctorID { get; set; }
        public int ExaminationID { get; set; }
        public DateTime AppointmentDate { get; set; }
        public string Time { get; set; }
        public string? AppointmentStatusInfo { get; set; }
        public string? AppointmentNotes { get; set; }
        public bool isDeleted { get; set; }

        // Navigation properties
        [ForeignKey(nameof(PatientID))]
        public Patient Patient { get; set; }
        [ForeignKey(nameof(DoctorID))]
        public Doctor Doctor { get; set; }
        [ForeignKey(nameof(ExaminationID))]
        public MedicalExamination Examination { get; set; }
    }
}
