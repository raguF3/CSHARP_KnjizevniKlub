using AutoMapper;
using CSHARP_KnjizevniKlub.Data;
using CSHARP_KnjizevniKlub.Models;
using CSHARP_KnjizevniKlub.Models.DTO;
using Microsoft.AspNetCore.Mvc;

namespace CSHARP_KnjizevniKlub.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class DolazakController : KnjizevniKlubController
    {
        public DolazakController(KnjizevniKlubContext context, IMapper mapper) : base(context, mapper)
        {
        }

        [HttpGet]
        public ActionResult<List<DolazakDTORead>> Get()
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { poruka = ModelState });
            }
            try
            {
                var lista = _context.Dolasci.ToList(); // Dodano ToList() da se izvrši upit
                return Ok(_mapper.Map<List<DolazakDTORead>>(lista));
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }
        }

        [HttpGet]
        [Route("{sifra:int}")]
        public ActionResult<DolazakDTORead> GetBySifra(int sifra)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { poruka = ModelState });
            }
            Dolazak? e;
            try
            {
                e = _context.Dolasci.Find(sifra);
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }
            if (e == null)
            {
                return NotFound(new { poruka = "Dolazak ne postoji u bazi" });
            }

            return Ok(_mapper.Map<DolazakDTORead>(e));
        }

        [HttpPost]
        public IActionResult Post(DolazakDTOInsertUpdate dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { poruka = ModelState });
            }
            try
            {
                var e = _mapper.Map<Dolazak>(dto);
                _context.Dolasci.Add(e);
                _context.SaveChanges();
                return StatusCode(StatusCodes.Status201Created, _mapper.Map<DolazakDTORead>(e));
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }
        }

        [HttpPut]
        [Route("{sifra:int}")]
        [Produces("application/json")]
        public IActionResult Put(int sifra, DolazakDTOInsertUpdate dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { poruka = ModelState });
            }
            try
            {
                Dolazak? e;
                try
                {
                    e = _context.Dolasci.Find(sifra);
                }
                catch (Exception ex)
                {
                    return BadRequest(new { poruka = ex.Message });
                }
                if (e == null)
                {
                    return NotFound(new { poruka = "Dolazak ne postoji u bazi" });
                }

                e = _mapper.Map(dto, e);

                _context.Dolasci.Update(e);
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
                Dolazak? e;
                try
                {
                    e = _context.Dolasci.Find(sifra);
                }
                catch (Exception ex)
                {
                    return BadRequest(new { poruka = ex.Message });
                }
                if (e == null)
                {
                    return NotFound("Dolazak ne postoji u bazi");
                }
                _context.Dolasci.Remove(e);
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
