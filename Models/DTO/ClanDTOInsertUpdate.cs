using System.ComponentModel.DataAnnotations;

namespace CSHARP_KnjizevniKlub.Models.DTO
{
    public class ClanDTOInsertUpdate
    (
        [Range(0, 50, ErrorMessage = "Vrijednost {0} mora biti između {1} i {2}")] int? sifra,
        [Required(ErrorMessage = "Ime je obavezno")] string ime,
        [Required(ErrorMessage = "Prezime je obavezno")] string prezime,
        [Required(ErrorMessage = "Email je obavezno")] string email,
        [Range(0, 50, ErrorMessage = "Vrijednost {0} mora biti između {1} i {2}")] int? lozinka,
        bool?administrator

        );
}
