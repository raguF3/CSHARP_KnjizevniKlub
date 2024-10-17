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
            CreateMap<DolazakDTORead, Dolazak>();
            CreateMap<DolazakDTOInsertUpdate, Dolazak>();


            CreateMap<Clan, ClanDTORead>();
            CreateMap<ClanDTORead, Clan>();
            CreateMap<ClanDTOInsertUpdate, Clan>();

            CreateMap<Sastanak, SastanakDTORead>();
            CreateMap<SastanakDTORead, Sastanak>();
            CreateMap<SastanakDTOInsertUpdate, Sastanak>();

            CreateMap<Knjiga, KnjigaDTORead>();
            CreateMap<KnjigaDTORead, Knjiga>();
            CreateMap<KnjigaDTOInsertUpdate, Knjiga>();
        }
    }
}
