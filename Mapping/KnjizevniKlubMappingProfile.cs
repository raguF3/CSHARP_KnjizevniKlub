using AutoMapper;
using CSHARP_KnjizevniKlub.Models;
using CSHARP_KnjizevniKlub.Models.DTO;

namespace CSHARP_KnjizevniKlub.Mapping
{
    public class KnjizevniKlubMappingProfile: Profile
    {
        public KnjizevniKlubMappingProfile()
        {
            CreateMap<Dolazak, DolazakDTORead>();
            CreateMap<DolazakDTOInsertUpdate, Dolazak>();


        }
    }
}
