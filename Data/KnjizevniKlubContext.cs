using CSHARP_KnjizevniKlub.Models;
using Microsoft.EntityFrameworkCore;


namespace CSHARP_KnjizevniKlub.Data
{
    public class KnjizevniKlubContext : DbContext
    {
        public KnjizevniKlubContext(DbContextOptions<KnjizevniKlubContext> opcije) : base(opcije)
        { }
        public DbSet<Dolazak> Dolasci { get; set; }
        public DbSet<Clan> Clanovi { get; set; }
        public DbSet <Knjiga> Knjige { get; set; }
        public DbSet <Sastanak> Sastanci { get; set; }
    }
}

