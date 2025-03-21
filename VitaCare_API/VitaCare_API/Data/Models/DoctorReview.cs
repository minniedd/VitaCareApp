using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace VitaCare_API.Data.Models
{
    public class DoctorReview
    {
        [Key]
        public int DoctorReviewID { get; set; }
        public int PatientID { get; set; }
        public int DoctorID { get; set; }
        public string ReviewCommentDoctor { get; set; }
        public int ReviewRateDoctor { get; set; }

        // Navigation properties
        [ForeignKey(nameof(PatientID))]
        public Patient Patient { get; set; }
        [ForeignKey(nameof(DoctorID))]
        public Doctor Doctor { get; set; }
    }
}
