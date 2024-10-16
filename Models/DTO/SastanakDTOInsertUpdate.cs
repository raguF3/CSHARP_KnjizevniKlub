using System.ComponentModel.DataAnnotations;

namespace CSHARP_KnjizevniKlub.Models.DTO
{
    public record SastanakDTOInsertUpdate
    (

      [Range(0, 50, ErrorMessage = "Vrijednost {0} mora biti između {1} i {2}")] int? sifra,
      [Range(0, 50, ErrorMessage = "Vrijednost {0} mora biti između {1} i {2}")] int? knjiga,
      DateTime? datum,
      [Required(ErrorMessage = "Mjesto obavezno")] string mjesto


    );
}
