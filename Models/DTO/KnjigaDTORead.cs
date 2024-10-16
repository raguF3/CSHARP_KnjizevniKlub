namespace CSHARP_KnjizevniKlub.Models.DTO
{
    public record KnjigaDTORead

        (
       int? sifra,
       string? naziv,
       string?autor,
       DateTime?godina
        );
}
