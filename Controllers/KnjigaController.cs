using AutoMapper;
using CSHARP_KnjizevniKlub.Data;
using CSHARP_KnjizevniKlub.Models.DTO;
using Microsoft.AspNetCore.Mvc;

namespace CSHARP_KnjizevniKlub.Controllers
{

    [ApiController]
    [Route("api/v1/[controller]")]


    public class KnjigaController(KnjizevniKlubContext context, IMapper mapper) : KnjizevniKlubController(context, mapper)
    {

        [HttpGet]
        public ActionResult<List<KnjigaDTORead>> Get()
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { poruka = ModelState });
            }
            try
            {
                return Ok(_mapper.Map<List<KnjigaDTORead>>(_context.Knjige));
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }

        }

        [HttpGet]
        [Route("{sifra:int}")]
        public ActionResult<KnjigaDTORead> GetBySifra(int sifra)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { poruka = ModelState });
            }
            Knjiga? e;
            try
            {
                e = _context.Knjige.Find(sifra);
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }
            if (e == null)
            {
                return NotFound(new { poruka = "Knjiga ne postoji u bazi" });
            }

            return Ok(_mapper.Map<KnjigaDTORead>(e));
        }

        [HttpPost]
        public IActionResult Post(KnjigaDTOInsertUpdate dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { poruka = ModelState });
            }
            try
            {
                var e = _mapper.Map<Knjiga>(dto);
                _context.Knjige.Add(e);
                _context.SaveChanges();
                return StatusCode(StatusCodes.Status201Created, _mapper.Map<KnjigaDTORead>(e));
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }



        }

        [HttpPut]
        [Route("{sifra:int}")]
        [Produces("application/json")]
        public IActionResult Put(int sifra, KnjigaDTOInsertUpdate dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { poruka = ModelState });
            }
            try
            {
                Knjiga? e;
                try
                {
                    e = _context.Knjige.Find(sifra);
                }
                catch (Exception ex)
                {
                    return BadRequest(new { poruka = ex.Message });
                }
                if (e == null)
                {
                    return NotFound(new { poruka = "Knjiga ne postoji u bazi" });
                }

                e = _mapper.Map(dto, e);

                _context.Knjige.Update(e);
                _context.SaveChanges();

                return Ok(new { poruka = "Uspješno promjenjeno" });
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }

        }

        [HttpDelete]
        [Route("{sifra:int}")]
        [Produces("application/json")]
        public IActionResult Delete(int sifra)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { poruka = ModelState });
            }
            try
            {
                Knjiga? e;
                try
                {
                    e = _context.Knjige.Find(sifra);
                }
                catch (Exception ex)
                {
                    return BadRequest(new { poruka = ex.Message });
                }
                if (e == null)
                {
                    return NotFound("Knjiga ne postoji u bazi");
                }
                _context.Knjige.Remove(e);
                _context.SaveChanges();
                return Ok(new { poruka = "Uspješno obrisano" });
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }
        }
    }
}
