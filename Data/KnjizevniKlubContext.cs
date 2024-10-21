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
        public DbSet<Knjiga> Knjige { get; set; }
        public DbSet<Sastanak> Sastanci { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
           
            modelBuilder.Entity<Dolazak>()
                .Property(d => d.Clanovi) 
                .IsRequired();

            modelBuilder.Entity<Dolazak>()
                .Property(d => d.Sastanak) 
                .IsRequired();

            
            modelBuilder.Entity<Sastanak>()
                .Property(s => s.KnjigaSifra)
                .IsRequired();
        }
    }
}

    
