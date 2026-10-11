import { useEffect, useState, useRef } from "react";
import photo1 from "./assets/photo2583181825893420029.jpeg";
import photo2 from "./assets/photo3400482280174130022.jpeg";
import photo3 from "./assets/photo3934092392695613329.jpeg";
import photo4 from "./assets/photo4462852633220934344.jpeg";
import photo5 from "./assets/photo5825509973075283862.jpeg";
import photo6 from "./assets/photo6006523194098036563.jpeg";
import logo from "./assets/photo8134053410506080444.jpeg";
import estudio1 from "./assets/estudio_1.jpeg";
import estudio2 from "./assets/estudio_2.jpeg";
import estudio3 from "./assets/estudio_3.jpeg";
import estudio4 from "./assets/estudio_4.jpeg";
import estudio5 from "./assets/estudio_5.jpeg";
import estudio6 from "./assets/estudio_6.jpeg";

type MainTab = "foto" | "video";
const FOTO_CATS = ["Eventos Corporativos","Gubernamentales","Retratos de Estudio","Retratos de Exterior","Marcas","Quinceañeras","Constructoras e Inmobiliaria"] as const;
const VIDEO_CATS = ["Eventos Corporativos","Marcas","Cumpleaños","Quinceañeras","Constructoras e Inmobiliaria"] as const;

const portfolioFoto: Record<string, string[]> = {
  "Eventos Corporativos": [],
  "Gubernamentales": [],
  "Retratos de Estudio": [estudio1, estudio2, estudio3, estudio4, estudio5, estudio6],
  "Retratos de Exterior": [photo1, photo2, photo3, photo4, photo5, photo6],
  "Marcas": [],
  "Quinceañeras": [],
  "Constructoras e Inmobiliaria": [],
};

type VideoItem = { id: string; url: string; link: string; title: string };
const portfolioVideo: Record<string, VideoItem[]> = {
  "Eventos Corporativos": [
    { id: "1234749618", url: "https://player.vimeo.com/video/1234749618?title=0&byline=0&portrait=0", link: "https://vimeo.com/1234749618", title: "Eventos Corporativos 1" },
    { id: "1231465596", url: "https://player.vimeo.com/video/1231465596?title=0&byline=0&portrait=0", link: "https://vimeo.com/1231465596", title: "Eventos Corporativos 2" },
    { id: "1234748814", url: "https://player.vimeo.com/video/1234748814?title=0&byline=0&portrait=0", link: "https://vimeo.com/1234748814", title: "Eventos Corporativos 3" },
    { id: "1234750165", url: "https://player.vimeo.com/video/1234750165?title=0&byline=0&portrait=0", link: "https://vimeo.com/1234750165", title: "Eventos Corporativos 4" },
    { id: "1234748817", url: "https://player.vimeo.com/video/1234748817?title=0&byline=0&portrait=0", link: "https://vimeo.com/1234748817", title: "Eventos Corporativos 5" },
  ],
  "Marcas": [
    { id: "1234750043", url: "https://player.vimeo.com/video/1234750043?title=0&byline=0&portrait=0", link: "https://vimeo.com/1234750043", title: "Marcas 1" },
    { id: "1234746452", url: "https://player.vimeo.com/video/1234746452?title=0&byline=0&portrait=0", link: "https://vimeo.com/1234746452", title: "Marcas 2" },
    { id: "1234748816", url: "https://player.vimeo.com/video/1234748816?title=0&byline=0&portrait=0", link: "https://vimeo.com/1234748816", title: "Marcas 3" },
    { id: "1234746448", url: "https://player.vimeo.com/video/1234746448?title=0&byline=0&portrait=0", link: "https://vimeo.com/1234746448", title: "Marcas 4" },
    { id: "1234746449", url: "https://player.vimeo.com/video/1234746449?title=0&byline=0&portrait=0", link: "https://vimeo.com/1234746449", title: "Marcas 5" },
  ],
  "Cumpleaños": [
    { id: "1231465829", url: "https://player.vimeo.com/video/1231465829?title=0&byline=0&portrait=0", link: "https://vimeo.com/1231465829", title: "Cumpleaños 1" },
  ],
  "Quinceañeras": [
    { id: "1234750163", url: "https://player.vimeo.com/video/1234750163?title=0&byline=0&portrait=0", link: "https://vimeo.com/1234750163", title: "Quinceañeras 1" },
    { id: "1231465650", url: "https://player.vimeo.com/video/1231465650?title=0&byline=0&portrait=0", link: "https://vimeo.com/1231465650", title: "Quinceañeras 2" },
  ],
  "Constructoras e Inmobiliaria": [
    { id: "1234748815", url: "https://player.vimeo.com/video/1234748815?title=0&byline=0&portrait=0", link: "https://vimeo.com/1234748815", title: "Constructoras 1" },
    { id: "1231465649", url: "https://player.vimeo.com/video/1231465649?title=0&byline=0&portrait=0", link: "https://vimeo.com/1231465649", title: "Constructoras 2" },
  ],
};

const heroSlides = [
  { type: "video", url: "https://player.vimeo.com/video/1234749618?autoplay=1&muted=1&loop=1&controls=0&title=0&byline=0&portrait=0", cat: "EVENTOS CORPORATIVOS" },
  { type: "photo", src: photo6, cat: "RETRATOS DE EXTERIOR" },
  { type: "video", url: "https://player.vimeo.com/video/1234748815?autoplay=1&muted=1&loop=1&controls=0&title=0&byline=0&portrait=0", cat: "CONSTRUCTORAS" },
  { type: "photo", src: estudio1, cat: "RETRATOS DE ESTUDIO" },
  { type: "video", url: "https://player.vimeo.com/video/1234750043?autoplay=1&muted=1&loop=1&controls=0&title=0&byline=0&portrait=0", cat: "MARCAS" },
  { type: "photo", src: photo1, cat: "QUINCEAÑOS" },
  { type: "video", url: "https://player.vimeo.com/video/1231465829?autoplay=1&muted=1&loop=1&controls=0&title=0&byline=0&portrait=0", cat: "CUMPLEAÑOS" },
  { type: "photo", src: estudio3, cat: "ESTUDIO" },
];

export default function App() {
  const [current, setCurrent] = useState(0);
  const [muted, setMuted] = useState(true);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [mainTab, setMainTab] = useState<MainTab>("foto");
  const [activeFotoCat, setActiveFotoCat] = useState<string>("Retratos de Estudio");
  const [activeVideoCat, setActiveVideoCat] = useState<string>("Eventos Corporativos");
  const [formData, setFormData] = useState({ nombre: "", tel: "", tipo: "", fecha: "", msg: "", categoria: "" });
  const iframeRefs = useRef<(HTMLIFrameElement | null)[]>([]);

  useEffect(() => {
    const i = setInterval(() => setCurrent((p) => (p + 1) % heroSlides.length), 5000);
    return () => clearInterval(i);
  }, []);

  const toggleAudio = () => {
    const iframe = iframeRefs.current[current];
    if (!iframe) return;
    try {
      if (muted) {
        iframe.contentWindow?.postMessage(JSON.stringify({ method: "setVolume", value: 1 }), "*");
        iframe.contentWindow?.postMessage(JSON.stringify({ method: "setMuted", value: false }), "*");
      } else {
        iframe.contentWindow?.postMessage(JSON.stringify({ method: "setVolume", value: 0 }), "*");
        iframe.contentWindow?.postMessage(JSON.stringify({ method: "setMuted", value: true }), "*");
      }
      setMuted(!muted);
    } catch {}
  };

  const cotizarCategoria = (categoria: string, tipo: string) => {
    setFormData({ ...formData, categoria: `${tipo.toUpperCase()} - ${categoria}`, tipo: categoria });
    document.getElementById("cotizacion")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#070707] text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600&display=swap');
        *{font-family:'Inter',sans-serif}
        .serif{font-family:'Instrument Serif',serif}
        html{scroll-behavior:smooth; scroll-padding-top:96px;}
        .bronze-gradient{background: linear-gradient(90deg,#C08A5C,#B7794B);}
        .text-bronze{color:#C08A5C;}
        .hero-media{position:absolute; inset:0; width:100%; height:100%; overflow:hidden; background:#070707;}
        .hero-media iframe{position:absolute; left:50%; top:50%; width:100vw; height:56.25vw; min-height:100%; min-width:177.77vh; transform:translate(-50%,-50%) scale(1.15); border:0;}
        .hero-media img{position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:center top;}
        @media (max-width:767px){ .hero-media img{object-position:center top;} }
        @media (min-width:768px){ .hero-media img{object-position:center 18%; transform:scale(0.92); transform-origin:center top; width:100%; height:108%;} }
      `}</style>

      <header className="fixed top-0 left-0 w-full z-50 bg-[#070707]/80 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 h-[88px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Kender" className="w-12 h-12 object-cover rounded-[8px]" />
            <div className="leading-[1.1]"><p className="font-semibold tracking-[0.12em] text-[12px]">KENDER</p><p className="text-[10px] tracking-[0.2em] opacity-70">MEDIA GROUP</p></div>
          </div>
          <nav className="hidden md:flex gap-6 text-[11px] tracking-widest opacity-70">
            <a href="#inicio" className="hover:text-white">INICIO</a>
            <a href="#portafolio" className="hover:text-white">PORTAFOLIO</a>
            <a href="#cotizacion" className="hover:text-white">COTIZAR</a>
          </nav>
          <a href="#cotizacion" className="bronze-gradient text-black text-[11px] tracking-widest px-5 py-2.5 rounded-full font-semibold">COTIZAR</a>
        </div>
      </header>

      <section id="inicio" className="relative w-full h-[100vh] min-h-[720px] overflow-hidden bg-[#070707]">
        {heroSlides.map((slide, idx) => {
          const isActive = idx === current;
          return (
            <div key={idx} className={`hero-media transition-opacity duration-[1200ms] ${isActive?"opacity-100 z-[1]":"opacity-0 z-0"}`}>
              {slide.type==="video"?<iframe ref={el=>{iframeRefs.current[idx]=el}} src={(slide as any).url} allow="autoplay; fullscreen" title={`v-${idx}`} />:<img src={(slide as any).src} alt={slide.cat} />}
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070707]/90 via-transparent to-[#070707]/20" />
            </div>
          );
        })}
        <div className="absolute top-[108px] left-6 md:left-10 z-20 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-[12px]">▶</div>
          <div className="text-[11px] tracking-[0.2em] uppercase opacity-80 border border-white/15 px-3 py-1 rounded-full bg-black/20 backdrop-blur">{heroSlides[current].cat} • {String(current+1).padStart(2,"0")}/08</div>
        </div>
        {heroSlides[current].type==="video" && (
          <button onClick={toggleAudio} className="absolute top-[108px] right-6 md:right-10 z-20 text-[11px] tracking-widest uppercase px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20">{muted?"Activar audio":"Silenciar"}</button>
        )}
        <div className="absolute inset-0 z-20 flex items-center justify-center px-6">
          <div className="max-w-[900px] w-full text-center mt-16">
            <h1 className="serif text-[46px] md:text-[84px] leading-[0.9] tracking-[-0.02em]"><span className="block font-light italic opacity-90">Creamos Historias</span><span className="block font-normal text-bronze">Que Venden</span></h1>
            <p className="mt-6 text-[14px] md:text-[16px] leading-[1.7] opacity-75 max-w-[640px] mx-auto font-light">Más de 9 años capturando momentos que se convierten en recuerdos eternos. Fotografía y video de alto impacto para marcas y familias en RD.</p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a href="#portafolio" className="px-8 py-3.5 rounded-full bg-white text-black text-[12px] tracking-[0.14em] uppercase font-semibold">Ver Portafolio por Categoría</a>
              <a href="#cotizacion" className="px-8 py-3.5 rounded-full bronze-gradient text-black text-[12px] tracking-[0.14em] uppercase font-semibold">Cotizar Ahora</a>
            </div>
          </div>
        </div>
      </section>

      <section id="portafolio" className="bg-[#090909] py-20 border-t border-white/[0.06]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-[11px] tracking-[0.22em] text-bronze">PORTAFOLIO POR CATEGORÍAS</p>
              <h2 className="serif text-[36px] md:text-[54px] leading-[0.95] mt-3">Explora por <span className="text-bronze italic">categoría</span></h2>
              <p className="mt-3 text-[13px] opacity-60 max-w-[520px]">Fotografía solo en Retratos Estudio y Exterior. Videos con links visibles y sin fotos.</p>
            </div>
            <div className="flex gap-2 p-1 rounded-full bg-white/[0.06] border border-white/10">
              <button onClick={()=>setMainTab("foto")} className={`px-7 py-2.5 rounded-full text-[12px] tracking-widest font-semibold transition ${mainTab==="foto"?"bg-white text-black":"opacity-60"}`}>FOTOGRAFÍA</button>
              <button onClick={()=>setMainTab("video")} className={`px-7 py-2.5 rounded-full text-[12px] tracking-widest font-semibold transition ${mainTab==="video"?"bg-white text-black":"opacity-60"}`}>VIDEO</button>
            </div>
          </div>

          {mainTab==="foto" && (
            <>
              <div className="mt-8 flex flex-wrap gap-2">
                {FOTO_CATS.map(cat=>{
                  const isActive = activeFotoCat===cat;
                  const count = portfolioFoto[cat]?.length || 0;
                  return (
                    <button key={cat} onClick={()=>setActiveFotoCat(cat)} className={`px-4 py-2 rounded-full text-[11px] tracking-wide border transition ${isActive?"bg-[#C08A5C] border-[#C08A5C] text-black font-semibold":"bg-white/[0.04] border-white/10 opacity-70 hover:opacity-100"}`}>
                      {cat} {count>0?`(${count})`:""}
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 p-4 rounded-[14px] bg-white/[0.04] border border-white/10">
                <div>
                  <p className="font-semibold text-[13px] tracking-wide">{activeFotoCat}</p>
                  <p className="text-[11px] opacity-60">{portfolioFoto[activeFotoCat]?.length||0} fotos</p>
                </div>
                <button onClick={()=>cotizarCategoria(activeFotoCat, "foto")} className="px-6 py-2.5 rounded-full bronze-gradient text-black text-[11px] font-bold tracking-widest uppercase">Cotizar {activeFotoCat} • WhatsApp</button>
              </div>

              {(portfolioFoto[activeFotoCat]?.length||0)>0 ? (
                <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                  {(portfolioFoto[activeFotoCat] || []).map((src, i)=>(
                    <div key={i} className="group relative aspect-[4/5] overflow-hidden rounded-[16px] bg-[#111] border border-white/5 cursor-pointer" onClick={()=>setLightbox(src)}>
                      <img src={src} alt={`${activeFotoCat} ${i+1}`} className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition duration-700" />
                      <div className="absolute bottom-0 left-0 right-0 p-3 flex justify-between items-end opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-black/60 to-transparent">
                        <p className="text-[10px] tracking-widest opacity-80">{activeFotoCat.toUpperCase()} • {i+1}</p>
                        <button onClick={(e)=>{e.stopPropagation(); cotizarCategoria(activeFotoCat, "foto")}} className="px-3 py-1 rounded-full bg-white text-black text-[9px] font-bold">COTIZAR</button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-8 rounded-[16px] border border-dashed border-white/15 p-12 text-center">
                  <p className="text-[13px] opacity-60">Fotos de {activeFotoCat} próximamente. Esperando que me pases las fotografías para ponerlas en orden.</p>
                  <button onClick={()=>cotizarCategoria(activeFotoCat, "foto")} className="mt-4 px-6 py-2.5 rounded-full bg-white text-black text-[11px] font-bold uppercase">Cotizar {activeFotoCat}</button>
                </div>
              )}
            </>
          )}

          {mainTab==="video" && (
            <>
              <div className="mt-8 flex flex-wrap gap-2">
                {VIDEO_CATS.map(cat=>{
                  const isActive = activeVideoCat===cat;
                  const count = portfolioVideo[cat]?.length || 0;
                  return (
                    <button key={cat} onClick={()=>setActiveVideoCat(cat)} className={`px-4 py-2 rounded-full text-[11px] tracking-wide border transition ${isActive?"bg-white border-white text-black font-semibold":"bg-white/[0.04] border-white/10 opacity-70"}`}>
                      {cat} ({count})
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 p-4 rounded-[14px] bg-white/[0.04] border border-white/10">
                <div>
                  <p className="font-semibold text-[13px] tracking-wide">{activeVideoCat}</p>
                  <p className="text-[11px] opacity-60">VIDEO • {portfolioVideo[activeVideoCat]?.length||0} videos • Solo video, sin fotos • Links visibles</p>
                </div>
                <button onClick={()=>cotizarCategoria(activeVideoCat, "video")} className="px-6 py-2.5 rounded-full bg-white text-black text-[11px] font-bold tracking-widest uppercase">Cotizar {activeVideoCat} • WhatsApp</button>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {(portfolioVideo[activeVideoCat] || []).map((v, i)=>(
                  <div key={i} className="group relative rounded-[16px] overflow-hidden bg-[#111] border border-white/10">
                    <div className="relative aspect-video overflow-hidden bg-black">
                      <iframe src={v.url} className="w-full h-full" allow="autoplay; fullscreen" title={v.title} />
                    </div>
                    <div className="p-3 bg-[#0E0E0E] flex flex-col gap-2">
                      <a href={v.link} target="_blank" rel="noopener" className="text-[11px] text-[#C08A5C] hover:text-white underline break-all">{v.link}</a>
                      <div className="flex justify-between items-center">
                        <p className="text-[10px] opacity-60">{v.title}</p>
                        <button onClick={()=>cotizarCategoria(activeVideoCat,"video")} className="px-3 py-1 rounded-full bg-white text-black text-[9px] font-bold tracking-widest">COTIZAR ESTA CATEGORÍA</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <section id="cotizacion" className="bg-[#070707] py-20 border-t border-white/[0.06]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid md:grid-cols-[0.9fr_1.1fr] gap-12">
          <div>
            <p className="text-[11px] tracking-[0.22em] text-bronze">COTIZACIÓN POR CATEGORÍA</p>
            <h2 className="serif text-[42px] md:text-[54px] leading-[0.95] mt-3">COTIZA TU <br/><span className="text-bronze italic">CATEGORÍA</span></h2>
            <p className="mt-4 text-[14px] opacity-70">Selecciona fotografía o video y la categoría que viste. Respondemos en menos de 2 horas.</p>
            {formData.categoria && (
              <div className="mt-6 p-4 rounded-[12px] bg-[#C08A5C]/10 border border-[#C08A5C]/30">
                <p className="text-[11px] tracking-widest text-bronze">CATEGORÍA SELECCIONADA</p>
                <p className="mt-1 text-[14px] font-semibold text-white">{formData.categoria}</p>
              </div>
            )}
          </div>
          <form onSubmit={(e)=>{
            e.preventDefault();
            const msg = `Hola Kender! Soy ${formData.nombre}. %0ACategoría: ${formData.categoria || formData.tipo}%0ATipo: ${formData.tipo}%0AFecha: ${formData.fecha}%0ATel: ${formData.tel}%0AIdea: ${formData.msg}`;
            window.open(`https://wa.me/18492535700?text=${msg}`, "_blank");
          }} className="rounded-[20px] bg-[#111] border border-white/10 p-6 md:p-8 space-y-4">
            <input value={formData.categoria} onChange={e=>setFormData({...formData,categoria:e.target.value})} placeholder="Categoría seleccionada aparecerá aquí" className="w-full bg-[#0E0E0E] border border-[#C08A5C]/30 rounded-[12px] px-4 py-3 text-[13px] outline-none text-[#C08A5C]" readOnly />
            <div className="grid md:grid-cols-2 gap-4">
              <input required value={formData.nombre} onChange={e=>setFormData({...formData,nombre:e.target.value})} placeholder="Nombre completo" className="w-full bg-[#0E0E0E] border border-white/10 rounded-[12px] px-4 py-3 text-[14px] outline-none" />
              <input required value={formData.tel} onChange={e=>setFormData({...formData,tel:e.target.value})} placeholder="WhatsApp" className="w-full bg-[#0E0E0E] border border-white/10 rounded-[12px] px-4 py-3 text-[14px] outline-none" />
            </div>
            <select required value={formData.tipo} onChange={e=>setFormData({...formData,tipo:e.target.value})} className="w-full bg-[#0E0E0E] border border-white/10 rounded-[12px] px-4 py-3 text-[14px]">
              <option value="">Tipo de evento / Categoría</option>
              {FOTO_CATS.map(c=><option key={c}>{c}</option>)}
              {VIDEO_CATS.map(c=><option key={c}>VIDEO - {c}</option>)}
            </select>
            <input value={formData.fecha} onChange={e=>setFormData({...formData,fecha:e.target.value})} type="date" className="w-full bg-[#0E0E0E] border border-white/10 rounded-[12px] px-4 py-3 text-[14px]" />
            <textarea required value={formData.msg} onChange={e=>setFormData({...formData,msg:e.target.value})} placeholder="Cuéntanos tu idea para esta categoría" rows={4} className="w-full bg-[#0E0E0E] border border-white/10 rounded-[12px] px-4 py-3 text-[14px] resize-none" />
            <button type="submit" className="w-full bronze-gradient text-black font-semibold tracking-[0.12em] uppercase text-[12px] py-3.5 rounded-[12px]">Enviar cotización de {formData.categoria || "categoría"} • WhatsApp</button>
          </form>
        </div>
      </section>

      <footer className="bg-[#050505] border-t border-white/[0.06] py-12">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex flex-wrap justify-between gap-6">
          <div className="flex gap-3 items-center"><img src={logo} alt="logo" className="w-10 h-10 rounded object-cover" /><p className="text-[11px] tracking-widest">KENDER MEDIA GROUP • V5 + CATEGORIAS</p></div>
          <p className="text-[11px] opacity-40">© {new Date().getFullYear()} • 849-253-5700</p>
        </div>
      </footer>

      {lightbox && (
        <div className="fixed inset-0 z-[80] bg-black/90 backdrop-blur flex items-center justify-center p-6" onClick={()=>setLightbox(null)}>
          <img src={lightbox} alt="lightbox" className="max-w-[92vw] max-h-[86vh] object-contain rounded-[12px]" />
          <button className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 border border-white/20">✕</button>
        </div>
      )}
    </div>
  );
}
