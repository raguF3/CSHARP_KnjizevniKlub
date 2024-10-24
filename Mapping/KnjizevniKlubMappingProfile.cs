using AutoMapper;
using CSHARP_KnjizevniKlub.Models;
using CSHARP_KnjizevniKlub.Models.DTO;


namespace CSHARP_KnjizevniKlub.Mapping
{
    public class KnjizevniKlubMappingProfile: Profile
    {
        public KnjizevniKlubMappingProfile()
        {
            CreateMap<Sastanak, SastanakDTORead>()
    .ForMember(dest => dest.sifra, opt => opt.MapFrom(src => src.Sifra)); // Ovdje bi Sifra trebala biti int

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
