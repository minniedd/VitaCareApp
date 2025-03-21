namespace VitaCare_API.Endpoints.MedicalWorker.GetAllGenders
{
    public class GenderGetAllResponse
    {
        public List<GenderGetAllResponseGender> Genders { get; set; }
    }

    public class GenderGetAllResponseGender
    {
        public int genderID { get; set; }
        public string genderDescription { get; set; }
    }
}
