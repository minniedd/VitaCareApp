using Microsoft.EntityFrameworkCore;
using VitaCare_API.Data.Models;

namespace VitaCare_API.Data
{
    public class ApplicationDbContext (DbContextOptions options):DbContext(options)
    {
        public DbSet<Appointment> Appointment { get; set; }
        public DbSet<ClinicReview> ClinicReview { get; set; }
        public DbSet<Doctor> Doctor { get; set; }
        public DbSet<DoctorReview> DoctorReview { get; set; }
        public DbSet<MedicalExamination> MedicalExaminations { get; set; }
        public DbSet<MedicalWorker> MedicalWorker { get; set; }
        public DbSet<Patient> Patient { get; set; }
        public DbSet<User> User { get; set; }
        public DbSet<Gender> Gender { get; set; }
        public DbSet<Models.File>File { get; set; }
        public DbSet<Role> Role { get; set; }
        public DbSet<UserRole> UserRole { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserRole>()
                .HasKey(ur => new { ur.UserId, ur.RoleId });

            modelBuilder.Entity<Role>().HasData(
                new Role { RoleID = 1, RoleName = "Doctor" },
                new Role { RoleID = 2, RoleName = "MedWorker" }
            );
        }
    }
}
