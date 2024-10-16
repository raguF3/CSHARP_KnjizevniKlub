namespace CSHARP_KnjizevniKlub.Models
{
    public class Sastanak: Entitet
    {

        public int? sifra { get; set; }
        public DateTime? datum { get; set; }
        public int? knjiga { get; set; }

        public string? mjesto { get; set; }

    }
}
