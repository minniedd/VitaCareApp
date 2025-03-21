using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace VitaCare_API.Migrations
{
    /// <inheritdoc />
    public partial class patientid_to_appointmentid : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "PatientId",
                table: "File",
                newName: "AppointmentId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "AppointmentId",
                table: "File",
                newName: "PatientId");
        }
    }
}
