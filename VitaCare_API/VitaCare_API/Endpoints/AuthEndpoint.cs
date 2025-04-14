using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using VitaCare_API.Data.Models;
using VitaCare_API.Models;
using VitaCare_API.Service;

namespace VitaCare_API.Endpoints
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthEndpoint : ControllerBase
    {
        public IConfiguration _configuration;
        public IAuthService _authService;
        public static User user = new User();

        public AuthEndpoint(IConfiguration configuration, IAuthService authService)
        {
            _configuration = configuration;
            _authService = authService;
        }

        [HttpPost("register")]
        public async Task<ActionResult<User>> Register(UserRegistrationDto request)
        {
            var user = await _authService.RegisterAsync(request);

            if (user is null)
            {
                return BadRequest("Username already exists");
            }

            return Ok(user);
        }

        [HttpPost("login")]
        public async Task<ActionResult<TokenResponseDto>> Login(UserDto request)
        {
            var response = await _authService.LoginAsync(request);

            if (response is null) { return BadRequest("Invalid username or password!"); }

            return Ok(response);
        }

        [HttpPost("refresh-token")]
        public async Task<ActionResult<TokenResponseDto>> RefreshToken(RefreshTokenRequestDto request)
        {
            var response = await _authService.RefreshTokenAsync(request);
            if (response is null || response.AccessToken is null || response.RefreshToken is null) { return Unauthorized("Invalid refresh token"); }

            return Ok(response);
        }
    }
}
