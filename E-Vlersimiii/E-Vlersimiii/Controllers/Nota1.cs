﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using E_Vlersimiii.Models;
using Microsoft.EntityFrameworkCore;
using E_Vlersimiii.Data;

[Route("api/[controller]")]
[ApiController]
public class Nota1Controller : ControllerBase
{
    private readonly E_VleresimiiContext _context;

    public object?[]? NotaP1 { get; private set; }

    public Nota1Controller(E_VleresimiiContext context)
    {
        _context = context;
    }

    // Get all Nota1
    [HttpGet("GetNotaP1")]
    public async Task<ActionResult<List<Nota1>>> Get()
    {
        return Ok(await _context.Nota1s.ToListAsync());
    }

    [HttpGet("{NotaP1}")]
    // GET: api/Shippingschedules/ID

    public async Task<ActionResult<Nota1>> GetNota1(int NotaP1)
    {
        ActionResult<Nota1> Nota1 = await _context.Nota1s.FindAsync(NotaP1);

        if (NotaP1 == null)
        {
            return NotFound();
        }

        return Nota1;
    }


    // Create Nota1 
    [HttpPost("ShtoNota1")]
    public async Task<ActionResult<List<Nota1>>> AddNota1(Nota1 nota1)
    {
        _context.Nota1s.Add(nota1);
        await _context.SaveChangesAsync();

        return Ok(await _context.Nota1s.ToListAsync());
    }

    // Update Nota1
    [HttpPut("UpdateNota1")]
    public async Task<ActionResult<Nota1>> UpdateNota1(Nota1 request)
    {
        var dbNota1s = await _context.Nota1s.FindAsync(request.NotaP1);
        if (dbNota1s == null)
            return NotFound("Nota1 not found");

        // Your update logic here

        await _context.SaveChangesAsync();

        return Ok(await _context.Nota1s.ToListAsync());
    }

    // Delete a ditar
    [HttpDelete("FshijeNota1/{NotaP1}")]
    public async Task<ActionResult<List<Nota1>>> DeleteNota1(int NotaP1)
    {
        var dbNota1s = await _context.Nota1s.FindAsync(NotaP1);
        if (dbNota1s == null)
            return NotFound("Nota1 not          found");

        Nota1 dbNota1 = null;
        _context.Nota1s.Remove(dbNota1);
        await _context.SaveChangesAsync();

        return Ok(await _context.Nota1s.ToListAsync());
    }
}
