using System.ComponentModel.DataAnnotations;

namespace CSHARP_KnjizevniKlub.Models
{
    public class Clan: Entitet
    {
        [Key]
        public int? sifra {  get; set; }
        public string? ime { get; set; }
        public string? prezime { get; set; }
        public string? email { get; set; }
        public int? lozinka { get; set; }
        public bool? administrator { get; set; }
    }
}
