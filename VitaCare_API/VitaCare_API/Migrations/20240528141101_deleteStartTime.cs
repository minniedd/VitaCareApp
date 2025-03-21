using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace VitaCare_API.Migrations
{
    /// <inheritdoc />
    public partial class deleteStartTime : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AppointmentStartTime",
                table: "Appointment");

            migrationBuilder.AlterColumn<DateTime>(
                name: "AppointmentEndTime",
                table: "Appointment",
                type: "datetime2",
                nullable: true,
                oldClrType: typeof(TimeSpan),
                oldType: "time",
                oldNullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<TimeSpan>(
                name: "AppointmentEndTime",
                table: "Appointment",
                type: "time",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true);

            migrationBuilder.AddColumn<TimeSpan>(
                name: "AppointmentStartTime",
                table: "Appointment",
                type: "time",
                nullable: true);
        }
    }
}
