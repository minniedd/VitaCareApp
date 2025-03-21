using System.ComponentModel.DataAnnotations.Schema;

namespace VitaCare_API.Data.Models
{
    public class Patient
    {
        public int PatientID { get; set; }
        public int? UserID { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? PhoneNumber { get; set; }
        public string? JMBG { get; set; }
        public DateTime PatientBirthDate { get; set; }
        public int GenderID { get; set; }
        public string? Country { get; set; }
        public string? PatientAddress { get; set; }
        public string? PatientAllergies { get; set; }
        public string? EmergencyContact { get; set; }
        public bool? AppointmentReminder { get; set; }
        public DateTime? AppointmentReminderTime { get; set; }

        // Navigation Property
        [ForeignKey(nameof(UserID))]
        public User User { get; set; }
        [ForeignKey(nameof(GenderID))]
        public Gender Gender { get; set; }
    }
}
