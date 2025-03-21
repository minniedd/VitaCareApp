using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VitaCare_API.Data;

namespace VitaCare_API.Endpoints.MedicalWorker.AppointmentsEndpoints.GetTimeRange
{
    [Route("api/[controller]")]
    [ApiController]
    public class GetTimeRangeEndpoint : ControllerBase
    {
        private readonly ApplicationDbContext _applicationDbContext;

        public GetTimeRangeEndpoint(ApplicationDbContext applicationDbContext)
        {
            _applicationDbContext = applicationDbContext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<TimeSlot>>> GetAvailableTimeSlots (DateTime date)
        {
            var timeSlots = new List<TimeSlot>()
            {
                 new TimeSlot { TimeRange = "08:00 - 09:00"},
                new TimeSlot { TimeRange = "09:00 - 10:00" },
                new TimeSlot { TimeRange = "10:00 - 11:00" },
                new TimeSlot { TimeRange = "12:00 - 13:00" },
                new TimeSlot { TimeRange = "13:00 - 14:00" },
                new TimeSlot { TimeRange = "14:00 - 15:00" },
                new TimeSlot { TimeRange = "15:00 - 16:00" },
                new TimeSlot { TimeRange = "16:00 - 17:00" }
            };

            var appointments = await _applicationDbContext.Appointment
                               .Where(x => x.AppointmentDate == date.Date && x.AppointmentStatusInfo != "Reject")
                               .ToListAsync();

            foreach (var timeslot in timeSlots)
            {
                timeslot.IsAvailable = !appointments.Any(x => x.Time == timeslot.TimeRange);
            }

            return Ok(timeSlots);
        }
    }
}
