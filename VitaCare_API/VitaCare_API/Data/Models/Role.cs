using System.ComponentModel.DataAnnotations;

namespace VitaCare_API.Data.Models
{
    public class Role
    {
        [Key]
        public int RoleID { get; set; }
        public string RoleName { get; set; }
        public string? Description { get; set; }
        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;
        public DateTime? UpdatedDate { get; set; }
        public ICollection<UserRole> UserRoles { get; set; }
    }
}
