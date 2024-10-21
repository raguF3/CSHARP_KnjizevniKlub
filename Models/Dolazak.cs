using System.ComponentModel.DataAnnotations;

namespace CSHARP_KnjizevniKlub.Models
{
    public class Dolazak: Entitet
    {
        internal object Clanovi;
        internal object Sastanak;

        public int? sastanak {  get; set; }

        public int? clan { get; set; }

    }
}
