using System.ComponentModel.DataAnnotations.Schema;

namespace CSHARP_KnjizevniKlub.Models
{
    public class Dolazak : Entitet
    {
        // Navigacijsko svojstvo za Sastanak
        [ForeignKey("Sastanak")]
        public int? SastanakId { get; set; } // Ovdje koristimo Id umjesto direktnog tipa Sastanak
        public virtual Sastanak Sastanak { get; set; }

        // Navigacijsko svojstvo za Clan
        [ForeignKey("Clan")]
        public int? ClanId { get; set; } // Ovdje koristimo Id umjesto direktnog tipa Clan
        public virtual Clan Clan { get; set; }
    }
}
