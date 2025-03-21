using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace VitaCare_API.Data.Models
{
    public class MedicalWorker
    {
        [Key]
        public int NurseID { get; set; }
        public int UserID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string NurseInfo { get; set; }

        // Navigation property
        [ForeignKey(nameof(UserID))]
        public User User { get; set; }
    }
}
