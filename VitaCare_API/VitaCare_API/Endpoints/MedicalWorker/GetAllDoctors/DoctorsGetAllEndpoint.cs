using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.Sql;
using Microsoft.EntityFrameworkCore;
using VitaCare_API.Data;
using VitaCare_API.Helpers;

namespace VitaCare_API.Endpoints.MedicalWorker.GetAllDoctors
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorsGetAllEndpoint : MyBaseEndpoint<NoRequest, DoctorsGetAllResponse>
    {
        private readonly ApplicationDbContext _applicationDbContext;

        public DoctorsGetAllEndpoint(ApplicationDbContext applicationDbContext)
        {
            _applicationDbContext = applicationDbContext;
        }

        [HttpGet]
        public override async Task<DoctorsGetAllResponse> Obradi([FromQuery]NoRequest request)
        {
            var data = await _applicationDbContext.Doctor.Select(x => new DoctorsGetAllResponseDoctors
            {
                doctorID = x.DoctorID,
                firstName = x.FirstName,
                lastName = x.LastName
            }).ToListAsync();


            return new DoctorsGetAllResponse
            {
                Doctors = data
            };
        }
    }
}
