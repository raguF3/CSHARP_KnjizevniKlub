using CSHARP_KnjizevniKlub.Models;
using Microsoft.EntityFrameworkCore;

namespace CSHARP_KnjizevniKlub.Data
{
    public class KnjizevniKlubContext : DbContext
    {
        public KnjizevniKlubContext(DbContextOptions<KnjizevniKlubContext> opcije) : base(opcije) { }

        public DbSet<Dolazak> Dolasci { get; set; }
        public DbSet<Clan> Clanovi { get; set; }
        public DbSet<Knjiga> Knjige { get; set; }
        public DbSet<Sastanak> Sastanci { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Sastanak>()
                .HasOne(s => s.Knjiga)
                .WithMany(k => k.Sastanci) // Ovdje treba biti Sastanci umjesto Sastanak
                .HasForeignKey(s => s.KnjigaSifra);

            modelBuilder.Entity<Dolazak>()
                .HasOne(d => d.Clan)
                .WithMany(c => c.Dolasci)
                .HasForeignKey(d => d.ClanId); // Promijenjeno

            modelBuilder.Entity<Dolazak>()
                .HasOne(d => d.Sastanak)
                .WithMany(s => s.Dolasci) // Treba biti dolasci
                .HasForeignKey(d => d.SastanakId); // Promijenjeno
        }
    }
}
