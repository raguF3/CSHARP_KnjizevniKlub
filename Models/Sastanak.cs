using System.ComponentModel.DataAnnotations;

namespace CSHARP_KnjizevniKlub.Models
{
    public class Sastanak: Entitet
    {
       
        public int? knjiga { get; set; }
        public string? mjesto { get; set; }
        public DateTime? datum { get; set; }
    }
}
