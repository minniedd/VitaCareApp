using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VitaCare_API.Data;
using VitaCare_API.Endpoints.MedicalWorker.GetAllDoctors;
using VitaCare_API.Helpers;

namespace VitaCare_API.Endpoints.MedicalWorker.GetAllExaminations
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExaminationGetAllEndpoint : MyBaseEndpoint<NoRequest, ExaminationGetAllResponse>
    {
        private readonly ApplicationDbContext _applicationDbContext;

        public ExaminationGetAllEndpoint(ApplicationDbContext applicationDbContext)
        {
            _applicationDbContext = applicationDbContext;
        }

        [HttpGet]
        public override async Task<ExaminationGetAllResponse> Obradi([FromQuery]NoRequest request)
        {
            var data = await _applicationDbContext.MedicalExaminations.Select(x=> new ExaminationGetAllResponseExamination
            {
                examinationID = x.ExaminationID,
                examinationName = x.ExaminationName
            }).ToListAsync();


            return new ExaminationGetAllResponse
            {
                Examinations = data
            };
        }
    }
}
