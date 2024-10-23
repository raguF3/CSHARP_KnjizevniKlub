using CSHARP_KnjizevniKlub.Models.DTO;
using CSHARP_KnjizevniKlub.Models;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using CSHARP_KnjizevniKlub.Data;

namespace CSHARP_KnjizevniKlub.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class SastanakController : KnjizevniKlubController
    {
        public SastanakController(KnjizevniKlubContext context, IMapper mapper) : base(context, mapper)
        {
        }

        [HttpGet]
        public ActionResult<List<SastanakDTORead>> Get()
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { poruka = ModelState });
            }
            try
            {
                var lista = _context.Sastanci.ToList(); // Dodano ToList() da se izvrši upit
                return Ok(_mapper.Map<List<SastanakDTORead>>(lista));
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }
        }

        [HttpGet]
        [Route("{sifra:int}")]
        public ActionResult<SastanakDTORead> GetBySifra(int sifra)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { poruka = ModelState });
            }
            Sastanak? e;
            try
            {
                e = _context.Sastanci.Find(sifra);
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }
            if (e == null)
            {
                return NotFound(new { poruka = "Sastanak ne postoji u bazi" });
            }

            return Ok(_mapper.Map<SastanakDTORead>(e));
        }

        [HttpPost]
        public IActionResult Post(SastanakDTOInsertUpdate dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { poruka = ModelState });
            }
            try
            {
                var e = _mapper.Map<Sastanak>(dto);
                _context.Sastanci.Add(e);
                _context.SaveChanges();
                return StatusCode(StatusCodes.Status201Created, _mapper.Map<SastanakDTORead>(e));
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }
        }

        [HttpPut]
        [Route("{sifra:int}")]
        [Produces("application/json")]
        public IActionResult Put(int sifra, SastanakDTOInsertUpdate dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { poruka = ModelState });
            }
            try
            {
                Sastanak? e;
                try
                {
                    e = _context.Sastanci.Find(sifra);
                }
                catch (Exception ex)
                {
                    return BadRequest(new { poruka = ex.Message });
                }
                if (e == null)
                {
                    return NotFound(new { poruka = "Sastanak ne postoji u bazi" });
                }

                e = _mapper.Map(dto, e);

                _context.Sastanci.Update(e);
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
                Sastanak? e;
                try
                {
                    e = _context.Sastanci.Find(sifra);
                }
                catch (Exception ex)
                {
                    return BadRequest(new { poruka = ex.Message });
                }
                if (e == null)
                {
                    return NotFound("Sastanak ne postoji u bazi");
                }
                _context.Sastanci.Remove(e);
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
