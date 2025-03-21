using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using VitaCare_API.Data;

namespace VitaCare_API.Endpoints.Doctor.File
{
    [Route("api/[controller]")]
    [ApiController]
    public class FileEndpoint : ControllerBase
    {
        private readonly IWebHostEnvironment _webHostEnvironment;
        private readonly ApplicationDbContext _applicationDbContext;

        public FileEndpoint(IWebHostEnvironment webHostEnvironment, ApplicationDbContext applicationDbContext)
        {
            _webHostEnvironment = webHostEnvironment;
            _applicationDbContext = applicationDbContext;
        }
        [HttpPost("UploadFile")]
        public async Task<IActionResult> UploadFile(IFormFile file, int appointmentId)
        {
            var appointment = await _applicationDbContext.Appointment.FindAsync(appointmentId);
            if (appointment == null)
            {
                return NotFound("Appointment not found!");
            }

            if (file == null || file.Length == 0)
                return BadRequest("No file was uploaded!");

            var uploadFolder = Path.Combine(_webHostEnvironment.WebRootPath ?? _webHostEnvironment.ContentRootPath, "uploads");
            if (!Directory.Exists(uploadFolder))
                Directory.CreateDirectory(uploadFolder);

            var sanitizedFileName = Path.GetFileName(file.FileName);

            var filePath = Path.Combine(uploadFolder, $"{appointmentId}_{file.FileName}");

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }

            var fileRecord = new Data.Models.File
            {
                AppointmentId = appointment.AppointmentID,
                FileName = file.FileName,
                FilePath = filePath,
                UploadDate = DateTime.Now
            };

            _applicationDbContext.Add(fileRecord);
            await _applicationDbContext.SaveChangesAsync();

            return Ok();
        }
    }
}