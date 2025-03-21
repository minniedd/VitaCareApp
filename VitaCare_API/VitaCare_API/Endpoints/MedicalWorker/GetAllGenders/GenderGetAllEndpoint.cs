using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.Json;
using VitaCare_API.Data;
using VitaCare_API.Endpoints.MedicalWorker.GetAllExaminations;
using VitaCare_API.Helpers;

namespace VitaCare_API.Endpoints.MedicalWorker.GetAllGenders
{
    [Route("api/[controller]")]
    [ApiController]
    public class GenderGetAllEndpoint : MyBaseEndpoint<NoRequest, GenderGetAllResponse>
    {
        private readonly ApplicationDbContext _applicationDbContext;

        public GenderGetAllEndpoint(ApplicationDbContext applicationDbContext)
        {
            _applicationDbContext = applicationDbContext;
        }
        [HttpGet]
        public override async Task<GenderGetAllResponse> Obradi([FromQuery]NoRequest request)
        {
            var data = await _applicationDbContext.Gender.Select(x => new GenderGetAllResponseGender
            {
                genderID = x.GenderID,
                genderDescription = x.GenderDescription
            }).ToListAsync();

            return new GenderGetAllResponse
            {
                Genders = data
            };
        }
    }
}
