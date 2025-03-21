using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace VitaCare_API.Migrations
{
    /// <inheritdoc />
    public partial class change_to_file : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Appointment_Doctor_DoctorID",
                table: "Appointment");

            migrationBuilder.DropForeignKey(
                name: "FK_Appointment_MedicalExaminations_ExaminationID",
                table: "Appointment");

            migrationBuilder.DropForeignKey(
                name: "FK_Appointment_Patient_PatientID",
                table: "Appointment");

            migrationBuilder.DropForeignKey(
                name: "FK_ClinicReview_Patient_PatientID",
                table: "ClinicReview");

            migrationBuilder.DropForeignKey(
                name: "FK_Doctor_User_UserID",
                table: "Doctor");

            migrationBuilder.DropForeignKey(
                name: "FK_DoctorReview_Doctor_DoctorID",
                table: "DoctorReview");

            migrationBuilder.DropForeignKey(
                name: "FK_DoctorReview_Patient_PatientID",
                table: "DoctorReview");

            migrationBuilder.DropForeignKey(
                name: "FK_MedicalWorker_User_UserID",
                table: "MedicalWorker");

            migrationBuilder.DropForeignKey(
                name: "FK_Patient_Gender_GenderID",
                table: "Patient");

            migrationBuilder.DropTable(
                name: "Report");

            migrationBuilder.CreateTable(
                name: "File",
                columns: table => new
                {
                    FileId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PatientId = table.Column<int>(type: "int", nullable: false),
                    FileName = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    FilePath = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    UploadDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_File", x => x.FileId);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Appointment_Doctor_DoctorID",
                table: "Appointment",
                column: "DoctorID",
                principalTable: "Doctor",
                principalColumn: "DoctorID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Appointment_MedicalExaminations_ExaminationID",
                table: "Appointment",
                column: "ExaminationID",
                principalTable: "MedicalExaminations",
                principalColumn: "ExaminationID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Appointment_Patient_PatientID",
                table: "Appointment",
                column: "PatientID",
                principalTable: "Patient",
                principalColumn: "PatientID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ClinicReview_Patient_PatientID",
                table: "ClinicReview",
                column: "PatientID",
                principalTable: "Patient",
                principalColumn: "PatientID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Doctor_User_UserID",
                table: "Doctor",
                column: "UserID",
                principalTable: "User",
                principalColumn: "UserID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_DoctorReview_Doctor_DoctorID",
                table: "DoctorReview",
                column: "DoctorID",
                principalTable: "Doctor",
                principalColumn: "DoctorID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_DoctorReview_Patient_PatientID",
                table: "DoctorReview",
                column: "PatientID",
                principalTable: "Patient",
                principalColumn: "PatientID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_MedicalWorker_User_UserID",
                table: "MedicalWorker",
                column: "UserID",
                principalTable: "User",
                principalColumn: "UserID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Patient_Gender_GenderID",
                table: "Patient",
                column: "GenderID",
                principalTable: "Gender",
                principalColumn: "GenderID",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Appointment_Doctor_DoctorID",
                table: "Appointment");

            migrationBuilder.DropForeignKey(
                name: "FK_Appointment_MedicalExaminations_ExaminationID",
                table: "Appointment");

            migrationBuilder.DropForeignKey(
                name: "FK_Appointment_Patient_PatientID",
                table: "Appointment");

            migrationBuilder.DropForeignKey(
                name: "FK_ClinicReview_Patient_PatientID",
                table: "ClinicReview");

            migrationBuilder.DropForeignKey(
                name: "FK_Doctor_User_UserID",
                table: "Doctor");

            migrationBuilder.DropForeignKey(
                name: "FK_DoctorReview_Doctor_DoctorID",
                table: "DoctorReview");

            migrationBuilder.DropForeignKey(
                name: "FK_DoctorReview_Patient_PatientID",
                table: "DoctorReview");

            migrationBuilder.DropForeignKey(
                name: "FK_MedicalWorker_User_UserID",
                table: "MedicalWorker");

            migrationBuilder.DropForeignKey(
                name: "FK_Patient_Gender_GenderID",
                table: "Patient");

            migrationBuilder.DropTable(
                name: "File");

            migrationBuilder.CreateTable(
                name: "Report",
                columns: table => new
                {
                    ReportID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AppointmentID = table.Column<int>(type: "int", nullable: false),
                    DoctorID = table.Column<int>(type: "int", nullable: false),
                    PatientID = table.Column<int>(type: "int", nullable: false),
                    Note = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Prescription = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Report", x => x.ReportID);
                    table.ForeignKey(
                        name: "FK_Report_Appointment_AppointmentID",
                        column: x => x.AppointmentID,
                        principalTable: "Appointment",
                        principalColumn: "AppointmentID");
                    table.ForeignKey(
                        name: "FK_Report_Doctor_DoctorID",
                        column: x => x.DoctorID,
                        principalTable: "Doctor",
                        principalColumn: "DoctorID");
                    table.ForeignKey(
                        name: "FK_Report_Patient_PatientID",
                        column: x => x.PatientID,
                        principalTable: "Patient",
                        principalColumn: "PatientID");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Report_AppointmentID",
                table: "Report",
                column: "AppointmentID");

            migrationBuilder.CreateIndex(
                name: "IX_Report_DoctorID",
                table: "Report",
                column: "DoctorID");

            migrationBuilder.CreateIndex(
                name: "IX_Report_PatientID",
                table: "Report",
                column: "PatientID");

            migrationBuilder.AddForeignKey(
                name: "FK_Appointment_Doctor_DoctorID",
                table: "Appointment",
                column: "DoctorID",
                principalTable: "Doctor",
                principalColumn: "DoctorID");

            migrationBuilder.AddForeignKey(
                name: "FK_Appointment_MedicalExaminations_ExaminationID",
                table: "Appointment",
                column: "ExaminationID",
                principalTable: "MedicalExaminations",
                principalColumn: "ExaminationID");

            migrationBuilder.AddForeignKey(
                name: "FK_Appointment_Patient_PatientID",
                table: "Appointment",
                column: "PatientID",
                principalTable: "Patient",
                principalColumn: "PatientID");

            migrationBuilder.AddForeignKey(
                name: "FK_ClinicReview_Patient_PatientID",
                table: "ClinicReview",
                column: "PatientID",
                principalTable: "Patient",
                principalColumn: "PatientID");

            migrationBuilder.AddForeignKey(
                name: "FK_Doctor_User_UserID",
                table: "Doctor",
                column: "UserID",
                principalTable: "User",
                principalColumn: "UserID");

            migrationBuilder.AddForeignKey(
                name: "FK_DoctorReview_Doctor_DoctorID",
                table: "DoctorReview",
                column: "DoctorID",
                principalTable: "Doctor",
                principalColumn: "DoctorID");

            migrationBuilder.AddForeignKey(
                name: "FK_DoctorReview_Patient_PatientID",
                table: "DoctorReview",
                column: "PatientID",
                principalTable: "Patient",
                principalColumn: "PatientID");

            migrationBuilder.AddForeignKey(
                name: "FK_MedicalWorker_User_UserID",
                table: "MedicalWorker",
                column: "UserID",
                principalTable: "User",
                principalColumn: "UserID");

            migrationBuilder.AddForeignKey(
                name: "FK_Patient_Gender_GenderID",
                table: "Patient",
                column: "GenderID",
                principalTable: "Gender",
                principalColumn: "GenderID");
        }
    }
}
