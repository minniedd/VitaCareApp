using System.ComponentModel.DataAnnotations;

namespace VitaCare_API.Data.Models
{
    public class MedicalExamination
    {
        [Key]
        public int ExaminationID { get; set; }
        public string ExaminationName { get; set; }
        public int ExaminationDuration { get; set; }
        public decimal ExaminationPrice { get; set; }
        public string ExaminationNotes { get; set; }
    }
}
