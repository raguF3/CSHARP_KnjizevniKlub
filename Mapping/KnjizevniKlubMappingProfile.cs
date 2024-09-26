using AutoMapper;
using CSHARP_KnjizevniKlub.Models;
using CSHARP_KnjizevniKlub.Models.DTO;

namespace CSHARP_KnjizevniKlub.Mapping
{
    public class KnjizevniKlubMappingProfile: Profile
    {
        public KnjizevniKlubMappingProfile()
        {
            // kreiramo mapiranja: izvor, odredište
            CreateMap<Dolazak, DolazakDTORead>();
            CreateMap<DolazakDTORead, Dolazak>();
            CreateMap<DolazakDTOInsertUpdate, Dolazak>();

            CreateMap<List<Dolazak>, List<DolazakDTORead>>();

        }
    }
}
