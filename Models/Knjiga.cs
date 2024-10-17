using System.ComponentModel.DataAnnotations;

namespace CSHARP_KnjizevniKlub.Models
{
    public class Knjiga : Entitet
    {
        [Key]
        
        public int? sifra { get; set; }

        public string? naziv { get; set; }
        public string? autor { get; set; }
        public DateTime? godina { get; set; }

    }
}
