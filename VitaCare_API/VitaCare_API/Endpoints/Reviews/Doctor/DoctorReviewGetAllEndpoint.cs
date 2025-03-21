using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VitaCare_API.Data;
using VitaCare_API.Endpoints.Reviews.Clinic;
using VitaCare_API.Helpers;

namespace VitaCare_API.Endpoints.Reviews.Doctor
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorReviewGetAllEndpoint : MyBaseEndpoint<NoRequest, DoctorReviewGetAllResponse>
    {
        private readonly ApplicationDbContext _applicationDbContext;

        public DoctorReviewGetAllEndpoint(ApplicationDbContext applicationDbContext)
        {
            _applicationDbContext = applicationDbContext;
        }

        [HttpGet]
        public async override Task<DoctorReviewGetAllResponse> Obradi([FromQuery]NoRequest request)
        {
            var data = await _applicationDbContext.DoctorReview.Include(s => s.Patient).Include(s=>s.Doctor).Select(x => new DoctorReviewGetAllResponseDoctor
            {
                patientFullName = x.Patient.FirstName + " " + x.Patient.LastName,
                doctorFullName = "dr. " + x.Doctor.FirstName + " " + x.Doctor.LastName,
                doctorReview = x.ReviewCommentDoctor,
                reviewRate = x.ReviewRateDoctor
            }).ToListAsync();

            return new DoctorReviewGetAllResponse
            {
                DoctorReview = data
            };
        }
    }
}
