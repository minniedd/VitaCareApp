namespace VitaCare_API.Endpoints.Reviews.Clinic
{
    public class ClinicReviewGetAllResponse
    {
        public List<ClinicReviewGetAllResponseClinic> ClinicReview { get; set; }
    }

    public class ClinicReviewGetAllResponseClinic
    {
        public string patientFullName { get; set; }
        public string clinicReview { get; set; }
        public int reviewRate { get; set; }
    }
}
