using CSHARP_KnjizevniKlub.Data;
using Microsoft.AspNetCore.Mvc;

namespace CSHARP_KnjizevniKlub.Controllers
{
    public class KnjizevniKlubControllers
    {
        public abstract class KnjizevniKlubController : ControllerBase
        {


            protected readonly KnjizevniKlubContext _context;


            public KnjizevniKlubController(KnjizevniKlubContext context)
            {
                _context = context;
            }
        }
    }
}