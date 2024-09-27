using System.ComponentModel.DataAnnotations;

namespace CSHARP_KnjizevniKlub.Models.DTO
{
    public class DolazakDTOInsertUpdate
    {

        public record SmjerDTOInsertUpdate(
            [Range(0, 50, ErrorMessage = "Vrijednost {0} mora biti između {1} i {2}")]
            int? clan,
            [Range(0, 50, ErrorMessage = "Vrijednost {0} mora biti između {1} i {2}")]
            int? sastanak
            
            );

    }
}
