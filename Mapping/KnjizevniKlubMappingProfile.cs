using AutoMapper;
using CSHARP_KnjizevniKlub.Models;
using CSHARP_KnjizevniKlub.Models.DTO;

namespace CSHARP_KnjizevniKlub.Mapping
{
    public class KnjizevniKlubMappingProfile: Profile
    {
        public KnjizevniKlubMappingProfile()
        {
            CreateMap<Dolasci, DolazakDTORead>();
            CreateMap<DolazakDTORead, Dolasci>();
            CreateMap<DolazakDTOInsertUpdate, Dolasci>();

            CreateMap<Clanovi, ClanDTORead>();
            CreateMap<ClanDTORead, Clanovi>();
            CreateMap<ClanDTOInsertUpdate, Clanovi>();

            CreateMap<Sastanci, SastanakDTORead>();
            CreateMap<SastanakDTORead, Sastanci>();
            CreateMap<SastanakDTOInsertUpdate, Sastanci>();

            CreateMap<Knjige, KnjigaDTORead>();
            CreateMap<KnjigaDTORead, Knjige>();
            CreateMap<KnjigaDTOInsertUpdate, Knjige>();
        }
    }
}
