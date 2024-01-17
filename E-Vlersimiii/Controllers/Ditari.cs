﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using E_Vlersimiii.Models;
using Microsoft.EntityFrameworkCore;
using E_Vlersimiii.Data;

[Route("api/[controller]")]
[ApiController]
public class DitariController : ControllerBase
{
    private readonly E_VleresimiiContext _context;

    public object?[]? ID_Ditari { get; private set; }

    public DitariController(E_VleresimiiContext context)
    {
        _context = context;
    }

    // Get all Ditaret
    [HttpGet("GetDitaret")]
    public async Task<ActionResult<List<Ditari>>> Get()
    {
        return Ok(await _context.Ditari.ToListAsync());
    }

    [HttpGet("{IdKlasa}")]
    // GET: api/Shippingschedules/ID
  
    public async Task<ActionResult<Ditari>> GetDitari(string IdKlasa)
    {
        ActionResult<Ditari> Ditari = await _context.Ditari.FindAsync(IdKlasa);

        if (Ditari == null)
        {
            return NotFound();
        }

        return Ditari;
    }


    // Create a ditar 
    [HttpPost("ShtoDitari")]
    public async Task<ActionResult<List<Ditari>>> AddDitari(Ditari ditari)
    {
        _context.Ditari.Add(ditari);
        await _context.SaveChangesAsync();

        return Ok(await _context.Ditari.ToListAsync());
    }

    // Update Bus
    [HttpPut("UpdateDitari")]
    public async Task<ActionResult<Ditari>> UpdateDitari(Ditari request)
    {
        var dbDitari = await _context.Ditari.FindAsync(request.IdKlasa);
        if (dbDitari == null)
            return NotFound("Ditari not found");

        // Your update logic here

        await _context.SaveChangesAsync();

        return Ok(await _context.Ditari.ToListAsync());
    }

    // Delete a ditar
    [HttpDelete("FshijeDitarin/{IdKlasa}")]
    public async Task<ActionResult<List<Ditari>>> DeleteDitari(string IdKlasa)
    {
        var dbDitari = await _context.Ditari.FindAsync(IdKlasa);
        if (dbDitari == null)
            return NotFound("Ditari not found");

        _context.Ditari.Remove(dbDitari);
        await _context.SaveChangesAsync();

        return Ok(await _context.Ditari.ToListAsync());
    }
}
