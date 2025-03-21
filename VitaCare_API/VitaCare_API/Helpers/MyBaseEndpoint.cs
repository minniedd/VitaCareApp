using Microsoft.AspNetCore.Mvc;

namespace VitaCare_API.Helpers
{
    public abstract class MyBaseEndpoint<TRequest, TResponse>:ControllerBase
    {
        public abstract Task<TResponse> Obradi(TRequest request);
    }
}
