using CSHARP_KnjizevniKlub.Models;

public class Sastanak : Entitet
{
    public int? KnjigaSifra { get; set; } // Šifra knjige
    public string? mjesto { get; set; }
    public DateTime? datum { get; set; }

    // Navigacijsko svojstvo
    public virtual Knjiga Knjiga { get; set; } // Odnos prema Klasi Knjiga
    public List<Dolazak> Dolasci { get; set; } = new List<Dolazak>();
}
