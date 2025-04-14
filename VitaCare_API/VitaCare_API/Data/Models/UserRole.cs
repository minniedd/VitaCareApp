using System.Data;

namespace VitaCare_API.Data.Models
{
    public class UserRole
    {
        public int UserRolesId { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }

        public int RoleId { get; set; }
        public Role Role { get; set; }
    }
}
