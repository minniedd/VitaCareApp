using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VitaCare_API.Data;
using VitaCare_API.Endpoints.MedicalWorker.GetAllExaminations;
using VitaCare_API.Helpers;

namespace VitaCare_API.Endpoints.Reviews.Clinic
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClinicReviewGetAllEndpoint : MyBaseEndpoint<NoRequest, ClinicReviewGetAllResponse>
    {
        private readonly ApplicationDbContext _applicationDbContext;

        public ClinicReviewGetAllEndpoint(ApplicationDbContext applicationDbContext)
        {
            _applicationDbContext = applicationDbContext;
        }

        [HttpGet]
        public override async Task<ClinicReviewGetAllResponse> Obradi([FromQuery]NoRequest request)
        {
            var data = await _applicationDbContext.ClinicReview.Include(s => s.Patient).Select(x => new ClinicReviewGetAllResponseClinic
            {
                patientFullName = x.Patient.FirstName + " " + x.Patient.LastName,
                clinicReview = x.ClinicalReviewComment,
                reviewRate = x.ClinicalReviewRate
            }).ToListAsync();

            return new ClinicReviewGetAllResponse
            {
                ClinicReview = data
            };
        }
    }
}
