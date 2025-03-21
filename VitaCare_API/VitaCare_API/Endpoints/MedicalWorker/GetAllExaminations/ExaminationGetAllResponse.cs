namespace VitaCare_API.Endpoints.MedicalWorker.GetAllExaminations
{
    public class ExaminationGetAllResponse
    {
        public List<ExaminationGetAllResponseExamination> Examinations { get; set; }
    }

    public class ExaminationGetAllResponseExamination
    {
        public int examinationID { get; set; }
        public string examinationName { get; set; }
    }
}
