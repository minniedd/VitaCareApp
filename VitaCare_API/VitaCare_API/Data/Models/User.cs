using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace VitaCare_API.Data.Models
{
    public class User
    {
        [Key]
        public int UserID { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string? ProfilePhoto { get; set; }
      /*  public string FirstName { get; set; }
        public string LastName { get; set; }*/

        /*[ForeignKey(nameof(Role))]
        public int RoleId { get; set; }
        public Role? Role { get; set; }*/

        //public List<Role> Roles { get; set; } = new List<UserRole>();



        /*        public bool IsAdmin { get; set; }
                public bool IsPatient { get; set; }
                public bool IsDoctor { get; set; }
                public bool IsNurse { get; set; }*/
    }
}
