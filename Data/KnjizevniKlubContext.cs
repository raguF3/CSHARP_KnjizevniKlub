using CSHARP_KnjizevniKlub.Models;
using Microsoft.EntityFrameworkCore;
using System.Text.RegularExpressions;


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

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Implementacija veze 1:n
            //modelBuilder.Entity<Clan>().HasOne(g => g.);

            
           
        }
    }


}

