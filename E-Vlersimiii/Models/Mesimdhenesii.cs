using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace E_Vlersimiii.Models
{
    public partial class Mesimdhenesii
    {
        [NotMapped] public int MesimdhenesiId { get; set; }
    public Mesimdhenesii()
        {
            Ditaris = new HashSet<Ditari>();
        }

        public int IdMesimdhensi { get; set; }
        public string? Lenda { get; set; }
        public string? MbiemriM { get; set; }
        public string? EmriM { get; set; }
        public int? NrTel { get; set; }

        public virtual Lendum? LendaNavigation { get; set; }
        public virtual ICollection<Ditari> Ditaris { get; set; }
     
    }
}
