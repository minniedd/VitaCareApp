using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VitaCare_API.Data;

namespace VitaCare_API.Endpoints.MedicalWorker.AppointmentsEndpoints.Details
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentDetailsGetAllEndpoint : Controller
    {
        private readonly ApplicationDbContext _applicationDbContext;

        public AppointmentDetailsGetAllEndpoint(ApplicationDbContext applicationDbContext)
        {
            _applicationDbContext = applicationDbContext;
        }

        [HttpGet]
        public IActionResult GetAppointmentDetailsByID(int id)
        {
            var appointment = _applicationDbContext.Appointment.Include(s=>s.Doctor).Include(s=>s.Examination).Include(s=>s.Patient).FirstOrDefault(x=>x.AppointmentID == id);

            if (appointment == null)
            {
                return NotFound();
            }

            var response = new
            {
                appointmentID = appointment.AppointmentID,
                patient = appointment.Patient.FirstName + " " + appointment.Patient.LastName,
                birthDate = appointment.Patient.PatientBirthDate.ToShortDateString(),
                telephoneNumber = appointment.Patient.PhoneNumber,
                address = appointment.Patient.PatientAddress,
                country = appointment.Patient.Country,
                allergy = appointment.Patient.PatientAllergies,
                emergencyContact = appointment.Patient.EmergencyContact,
                doctor = "dr." + appointment.Doctor.FirstName + " " + appointment.Doctor.LastName, 
                examination = appointment.Examination.ExaminationName,
                appointmentDateTime = appointment.AppointmentDate.ToString("d") + " " + appointment.Time,
                appointmentNotes = appointment.AppointmentNotes,
            };

            return Ok(response);
        }
    }
}
