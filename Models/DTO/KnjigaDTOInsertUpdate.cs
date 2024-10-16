using System.ComponentModel.DataAnnotations;

namespace CSHARP_KnjizevniKlub.Models.DTO
{
    public record KnjigaDTOInsertUpdate
    (
        [Range(0, 50, ErrorMessage = "Vrijednost {0} mora biti između {1} i {2}")] int? sifra,
        [Required(ErrorMessage = "Naziv obavezan")] string naziv,
        [Required(ErrorMessage = "Autor obavezan")] string autor,
        DateTime? godina


    );
}
