namespace VitaCare_API.Endpoints.Reviews.Doctor
{
    public class DoctorReviewGetAllResponse
    {
        public List<DoctorReviewGetAllResponseDoctor> DoctorReview { get; set; }
    }

    public class DoctorReviewGetAllResponseDoctor
    {
        public string patientFullName { get; set; }
        public string doctorFullName { get; set; }
        public string doctorReview { get; set; }
        public int reviewRate { get; set; }
    }
}
