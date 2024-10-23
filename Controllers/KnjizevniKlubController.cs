using AutoMapper;
using CSHARP_KnjizevniKlub.Data;
using Microsoft.AspNetCore.Mvc;

namespace CSHARP_KnjizevniKlub.Controllers
{

    public abstract class KnjizevniKlubController : ControllerBase
        {


            protected readonly KnjizevniKlubContext _context;
            protected readonly IMapper _mapper;

            public KnjizevniKlubController(KnjizevniKlubContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }
        }
    }
