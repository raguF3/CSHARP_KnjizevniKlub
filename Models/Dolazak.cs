using System.ComponentModel.DataAnnotations;

namespace CSHARP_KnjizevniKlub.Models
{
    public class Dolazak: Entitet
    {
        [Key]
        
        public int? sastanak {  get; set; }

        public int? clan { get; set; }

    }
}
