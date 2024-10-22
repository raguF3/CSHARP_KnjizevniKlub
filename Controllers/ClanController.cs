using CSHARP_KnjizevniKlub.Models.DTO;
using CSHARP_KnjizevniKlub.Models;
using Microsoft.AspNetCore.Mvc;
using static CSHARP_KnjizevniKlub.Controllers.KnjizevniKlubController;
using CSHARP_KnjizevniKlub.Data;
using AutoMapper;

namespace CSHARP_KnjizevniKlub.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]


    public class ClanController(KnjizevniKlubContext context, IMapper mapper) : KnjizevniKlubController(context, mapper)
    {

        [HttpGet]
        public ActionResult<List<ClanDTORead>> Get()
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { poruka = ModelState });
            }
            try
            {

                var lista = _context.Clanovi;


                return Ok(_mapper.Map<List<ClanDTORead>>(lista));
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }

        }

        [HttpGet]
        [Route("{sifra:int}")]
        public ActionResult<ClanDTORead> GetBySifra(int sifra)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { poruka = ModelState });
            }
            Clan? e;
            try
            {
                e = _context.Clanovi.Find(sifra);
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }
            if (e == null)
            {
                return NotFound(new { poruka = "Član ne postoji u bazi" });
            }

            return Ok(_mapper.Map<ClanDTORead>(e));
        }

        [HttpPost]
        public IActionResult Post(ClanDTOInsertUpdate dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { poruka = ModelState });
            }
            try
            {
                var e = _mapper.Map<Clan>(dto);
                _context.Clanovi.Add(e);
                _context.SaveChanges();
                return StatusCode(StatusCodes.Status201Created, _mapper.Map<ClanDTORead>(e));
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }



        }

        [HttpPut]
        [Route("{sifra:int}")]
        [Produces("application/json")]
        public IActionResult Put(int sifra, ClanDTOInsertUpdate dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { poruka = ModelState });
            }
            try
            {
                Clan? e;
                try
                {
                    e = _context.Clanovi.Find(sifra);
                }
                catch (Exception ex)
                {
                    return BadRequest(new { poruka = ex.Message });
                }
                if (e == null)
                {
                    return NotFound(new { poruka = "Član ne postoji u bazi" });
                }

                e = _mapper.Map(dto, e);

                _context.Clanovi.Update(e);
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
                Clan? e;
                try
                {
                    e = _context.Clanovi.Find(sifra);
                }
                catch (Exception ex)
                {
                    return BadRequest(new { poruka = ex.Message });
                }
                if (e == null)
                {
                    return NotFound("Član ne postoji u bazi");
                }
                _context.Clanovi.Remove(e);
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
