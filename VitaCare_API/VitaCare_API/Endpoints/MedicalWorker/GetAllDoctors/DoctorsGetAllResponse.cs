namespace VitaCare_API.Endpoints.MedicalWorker.GetAllDoctors
{
    public class DoctorsGetAllResponse
    {
        public List<DoctorsGetAllResponseDoctors> Doctors { get; set; }
    }

    public class DoctorsGetAllResponseDoctors
    {
        public int doctorID { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
    }
}
