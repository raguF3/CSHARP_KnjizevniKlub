using CSHARP_KnjizevniKlub.Models;

public class Clan : Entitet
{
    public string? ime { get; set; }
    public string? prezime { get; set; }
    public string? email { get; set; }
    public int? lozinka { get; set; }
    public bool? administrator { get; set; }

    // Promijenjeno iz ICollection u List
    public List<Dolazak> Dolasci { get; set; } = new List<Dolazak>();
}
