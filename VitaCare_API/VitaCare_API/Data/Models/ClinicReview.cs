using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace VitaCare_API.Data.Models
{
    public class ClinicReview
    {
        [Key]
        public int ClinicReviewID { get; set; }
        public int PatientID { get; set; }
        public string ClinicalReviewComment { get; set; }
        public int ClinicalReviewRate { get; set; }

        // Navigation property
        [ForeignKey(nameof(PatientID))]
        public Patient Patient { get; set; }
    }
}
