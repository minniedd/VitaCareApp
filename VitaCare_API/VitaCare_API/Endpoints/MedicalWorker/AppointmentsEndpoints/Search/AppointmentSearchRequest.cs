namespace VitaCare_API.Endpoints.MedicalWorker.AppointmentsEndpoints.Search
{
    public class AppointmentSearchRequest
    {
        public string? Search { get; set; }
        public int PageNumber { get; set; } = 1;
        public int PageSize { get; set; } = 10;
    }
}
