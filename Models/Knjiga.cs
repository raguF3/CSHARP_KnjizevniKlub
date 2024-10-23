using CSHARP_KnjizevniKlub.Models;

public class Knjiga : Entitet
{
    public string? naziv { get; set; }
    public string? autor { get; set; }
    public DateTime? godina { get; set; }

    // Preporučuje se korištenje ICollection za navigacijska svojstva
    public virtual ICollection<Sastanak> Sastanci { get; set; } = new List<Sastanak>();
}
