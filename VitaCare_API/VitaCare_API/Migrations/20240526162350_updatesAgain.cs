using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace VitaCare_API.Migrations
{
    /// <inheritdoc />
    public partial class updatesAgain : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Country",
                table: "Patient",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Country",
                table: "Patient");
        }
    }
}
