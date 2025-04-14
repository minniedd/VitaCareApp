using VitaCare_API.Models;

namespace VitaCare_API.Service
{
    public interface IAuthService
    {
        Task<Data.Models.User?> RegisterAsync(UserRegistrationDto request);
        Task<TokenResponseDto?> LoginAsync(UserDto request);
        Task<TokenResponseDto?> RefreshTokenAsync(RefreshTokenRequestDto request);
    }
}
