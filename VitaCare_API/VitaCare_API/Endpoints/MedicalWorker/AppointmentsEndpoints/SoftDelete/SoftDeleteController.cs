using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using VitaCare_API.Data;

namespace VitaCare_API.Endpoints.MedicalWorker.AppointmentsEndpoints.SoftDelete
{
    [Route("api/[controller]")]
    [ApiController]
    public class SoftDeleteController : ControllerBase
    {
        private readonly ApplicationDbContext _applicationDbContext;

        public SoftDeleteController(ApplicationDbContext applicationDbContext)
        {
            _applicationDbContext = applicationDbContext;
        }

        [HttpPost]
        public IActionResult SoftDelete (int appointmentID)
        {
            var appointment = _applicationDbContext.Appointment.FirstOrDefault(a => a.AppointmentID == appointmentID);

            if (appointment == null)
            {
                return NotFound("Appointment has not been found!");
            }

            appointment.isDeleted = true;
            _applicationDbContext.SaveChanges();

            return Ok();
        }

    }
}
