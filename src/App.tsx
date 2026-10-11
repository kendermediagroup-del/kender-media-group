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
  "Eventos Corporativos": [photo1, photo2],
  "Gubernamentales": [photo3],
  "Retratos de Estudio": [estudio1, estudio2, estudio3, estudio4, estudio5, estudio6],
  "Retratos de Exterior": [photo1, photo2, photo3, photo4, photo5, photo6],
  "Marcas": [photo5, photo2],
  "Quinceañeras": [photo6, photo1],
  "Constructoras e Inmobiliaria": [photo2, photo3],
};

type VideoItem = { id: string; url: string; link: string; title: string; thumb?: string };
const portfolioVideo: Record<string, VideoItem[]> = {
  "Eventos Corporativos": [
    { id: "1234749618", url: "https://player.vimeo.com/video/1234749618?controls=1&title=0&byline=0", link: "https://vimeo.com/1234749618", title: "Evento Corporativo - 1234749618", thumb: photo1 },
    { id: "1231465596", url: "https://player.vimeo.com/video/1231465596?controls=1&title=0&byline=0", link: "https://vimeo.com/1231465596", title: "Evento Corporativo - 1231465596", thumb: photo2 },
    { id: "1234748814", url: "https://player.vimeo.com/video/1234748814?controls=1&title=0&byline=0", link: "https://vimeo.com/1234748814", title: "Evento Corporativo - 1234748814", thumb: photo3 },
    { id: "1234750165", url: "https://player.vimeo.com/video/1234750165?controls=1&title=0&byline=0", link: "https://vimeo.com/1234750165", title: "Evento Corporativo - 1234750165", thumb: photo4 },
    { id: "1234748817", url: "https://player.vimeo.com/video/1234748817?controls=1&title=0&byline=0", link: "https://vimeo.com/1234748817", title: "Evento Corporativo - 1234748817", thumb: photo5 },
  ],
  "Marcas": [
    { id: "1234750043", url: "https://player.vimeo.com/video/1234750043?controls=1&title=0&byline=0", link: "https://vimeo.com/1234750043", title: "Marca - 1234750043", thumb: photo2 },
    { id: "1234746452", url: "https://player.vimeo.com/video/1234746452?controls=1&title=0&byline=0", link: "https://vimeo.com/1234746452", title: "Marca - 1234746452", thumb: photo1 },
    { id: "1234748816", url: "https://player.vimeo.com/video/1234748816?controls=1&title=0&byline=0", link: "https://vimeo.com/1234748816", title: "Marca - 1234748816", thumb: photo3 },
    { id: "1234746448", url: "https://player.vimeo.com/video/1234746448?controls=1&title=0&byline=0", link: "https://vimeo.com/1234746448", title: "Marca - 1234746448", thumb: photo4 },
    { id: "1234746449", url: "https://player.vimeo.com/video/1234746449?controls=1&title=0&byline=0", link: "https://vimeo.com/1234746449", title: "Marca - 1234746449", thumb: photo5 },
  ],
  "Cumpleaños": [
    { id: "1231465829", url: "https://player.vimeo.com/video/1231465829?controls=1&title=0&byline=0", link: "https://vimeo.com/1231465829", title: "Cumpleaños - 1231465829", thumb: photo6 },
  ],
  "Quinceañeras": [
    { id: "1234750163", url: "https://player.vimeo.com/video/1234750163?controls=1&title=0&byline=0", link: "https://vimeo.com/1234750163", title: "Quinceañera - 1234750163", thumb: photo1 },
    { id: "1231465650", url: "https://player.vimeo.com/video/1231465650?controls=1&title=0&byline=0", link: "https://vimeo.com/1231465650", title: "Quinceañera - 1231465650", thumb: photo2 },
  ],
  "Constructoras e Inmobiliaria": [
    { id: "1234748815", url: "https://player.vimeo.com/video/1234748815?controls=1&title=0&byline=0", link: "https://vimeo.com/1234748815", title: "Constructora - 1234748815", thumb: photo3 },
    { id: "1231465649", url: "https://player.vimeo.com/video/1231465649?controls=1&title=0&byline=0", link: "https://vimeo.com/1231465649", title: "Constructora - 1231465649", thumb: photo4 },
  ],
};

const heroSlides = [
  { type: "video", id: "1234749618", url: "https://player.vimeo.com/video/1234749618?autoplay=1&muted=1&loop=1&controls=0&title=0&byline=0&portrait=0", cat: "EVENTOS CORPORATIVOS" },
  { type: "photo", src: photo6, cat: "RETRATOS EXTERIOR" },
  { type: "video", id: "1234748815", url: "https://player.vimeo.com/video/1234748815?autoplay=1&muted=1&loop=1&controls=0&title=0&byline=0&portrait=0", cat: "CONSTRUCTORAS" },
  { type: "photo", src: estudio1, cat: "RETRATOS ESTUDIO" },
  { type: "video", id: "1234750043", url: "https://player.vimeo.com/video/1234750043?autoplay=1&muted=1&loop=1&controls=0&title=0&byline=0&portrait=0", cat: "MARCAS" },
  { type: "photo", src: photo1, cat: "QUINCEAÑOS" },
];

export default function App() {
  const [current, setCurrent] = useState(0);
  const [muted, setMuted] = useState(true);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [videoLightbox, setVideoLightbox] = useState<string | null>(null);
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
            </div>
          );
        })}
        <div className="absolute top-[108px] left-6 md:left-10 z-20 text-[11px] tracking-[0.2em] uppercase border border-white/15 px-3 py-1 rounded-full bg-black/20 backdrop-blur">{heroSlides[current].cat} • {String(current+1).padStart(2,"0")}/06</div>
        {heroSlides[current].type==="video" && <button onClick={toggleAudio} className="absolute top-[108px] right-6 md:right-10 z-20 text-[11px] uppercase px-4 py-2 rounded-full bg-white/10 border border-white/20">{muted?"Activar audio":"Silenciar"}</button>}
        <div className="absolute inset-0 z-20 flex items-center justify-center px-6">
          <div className="max-w-[900px] w-full text-center mt-16">
            <h1 className="serif text-[46px] md:text-[84px] leading-[0.9]"><span className="block font-light italic opacity-90">Creamos Historias</span><span className="block text-bronze">Que Venden</span></h1>
            <p className="mt-6 text-[14px] md:text-[16px] opacity-75 max-w-[640px] mx-auto">Fotografía y video organizados por categoría con links visibles y cotización directa por categoría.</p>
            <div className="mt-10 flex justify-center gap-3">
              <a href="#portafolio" className="px-8 py-3.5 rounded-full bg-white text-black text-[12px] font-semibold uppercase">Ver Portafolio</a>
              <a href="#cotizacion" className="px-8 py-3.5 rounded-full bronze-gradient text-black text-[12px] font-semibold uppercase">Cotizar Ahora</a>
            </div>
          </div>
        </div>
      </section>

      <section id="portafolio" className="bg-[#090909] py-20 border-t border-white/[0.06]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-[11px] tracking-[0.22em] text-bronze">PORTAFOLIO POR CATEGORÍAS</p>
              <h2 className="serif text-[36px] md:text-[54px] mt-3">Explora por <span className="text-bronze italic">categoría</span></h2>
              <p className="mt-3 text-[13px] opacity-60 max-w-[520px]">Links de videos y fotos visibles. Cada categoría tiene su botón COTIZAR.</p>
            </div>
            <div className="flex gap-2 p-1 rounded-full bg-white/[0.06] border border-white/10">
              <button onClick={()=>setMainTab("foto")} className={`px-7 py-2.5 rounded-full text-[12px] font-semibold ${mainTab==="foto"?"bg-white text-black":"opacity-60"}`}>FOTOGRAFÍA</button>
              <button onClick={()=>setMainTab("video")} className={`px-7 py-2.5 rounded-full text-[12px] font-semibold ${mainTab==="video"?"bg-white text-black":"opacity-60"}`}>VIDEO</button>
            </div>
          </div>

          {mainTab==="foto" && (
            <>
              <div className="mt-8 flex flex-wrap gap-2">
                {FOTO_CATS.map(cat=>{const count = portfolioFoto[cat]?.length || 0; return <button key={cat} onClick={()=>setActiveFotoCat(cat)} className={`px-4 py-2 rounded-full text-[11px] border ${activeFotoCat===cat?"bg-[#C08A5C] text-black border-[#C08A5C] font-semibold":"bg-white/[0.04] border-white/10 opacity-70"}`}>{cat} ({count})</button>})}
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 p-4 rounded-[14px] bg-white/[0.04] border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bronze-gradient flex items-center justify-center text-black font-bold">{portfolioFoto[activeFotoCat]?.length}</div>
                  <div><p className="font-semibold text-[13px]">{activeFotoCat}</p><p className="text-[11px] opacity-60">FOTOGRAFÍA • {portfolioFoto[activeFotoCat]?.length} imágenes • Primera = PORTADA</p></div>
                </div>
                <div className="flex gap-2">
                  <button onClick={()=>cotizarCategoria(activeFotoCat,"foto")} className="px-6 py-2.5 rounded-full bronze-gradient text-black text-[11px] font-bold uppercase">Cotizar {activeFotoCat}</button>
                  <a href={`https://wa.me/18492535700?text=Hola%20Kender!%20FOTO%20-${encodeURIComponent(activeFotoCat)}`} target="_blank" className="px-5 py-2.5 rounded-full bg-white text-black text-[11px] font-bold uppercase">WhatsApp</a>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
                {(portfolioFoto[activeFotoCat] || []).map((src,i)=>(
                  <div key={i} className="group relative aspect-[4/5] overflow-hidden rounded-[16px] bg-[#111] border border-white/5 cursor-pointer" onClick={()=>setLightbox(src)}>
                    <img src={src} alt={`${activeFotoCat} ${i+1}`} className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition" />
                    {i===0 && <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#C08A5C] text-black text-[10px] font-bold">PORTADA</div>}
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-end">
                      <p className="text-[10px]">{activeFotoCat} • {i+1}</p>
                      <button onClick={(e)=>{e.stopPropagation(); cotizarCategoria(activeFotoCat,"foto")}} className="px-3 py-1 rounded-full bg-white text-black text-[9px] font-bold">COTIZAR</button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {mainTab==="video" && (
            <>
              <div className="mt-8 flex flex-wrap gap-2">
                {VIDEO_CATS.map(cat=>{const count = portfolioVideo[cat]?.length || 0; return <button key={cat} onClick={()=>setActiveVideoCat(cat)} className={`px-4 py-2 rounded-full text-[11px] border ${activeVideoCat===cat?"bg-white text-black font-semibold":"bg-white/[0.04] border-white/10 opacity-70"}`}>{cat} ({count})</button>})}
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 p-4 rounded-[14px] bg-white/[0.04] border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold">{portfolioVideo[activeVideoCat]?.length}</div>
                  <div><p className="font-semibold text-[13px]">{activeVideoCat}</p><p className="text-[11px] opacity-60">VIDEO • {portfolioVideo[activeVideoCat]?.length} videos • Links visibles • Primera = PORTADA</p></div>
                </div>
                <div className="flex gap-2">
                  <button onClick={()=>cotizarCategoria(activeVideoCat,"video")} className="px-6 py-2.5 rounded-full bg-white text-black text-[11px] font-bold uppercase">Cotizar {activeVideoCat}</button>
                  <a href={`https://wa.me/18492535700?text=Hola%20Kender!%20VIDEO%20-${encodeURIComponent(activeVideoCat)}`} target="_blank" className="px-5 py-2.5 rounded-full bronze-gradient text-black text-[11px] font-bold uppercase">WhatsApp</a>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {(portfolioVideo[activeVideoCat] || []).map((v,i)=>(
                  <div key={i} className="group relative rounded-[16px] overflow-hidden bg-[#111] border border-white/10">
                    <div className="relative aspect-video cursor-pointer" onClick={()=>setVideoLightbox(v.url)}>
                      <img src={v.thumb || photo1} alt={v.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/40" />
                      {i===0 && <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white text-black text-[10px] font-bold">PORTADA</div>}
                      <div className="absolute inset-0 flex items-center justify-center"><div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">▶</div></div>
                      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent"><p className="text-[12px] font-semibold">{v.title}</p><p className="text-[10px] opacity-70">{activeVideoCat} • {i+1}</p></div>
                    </div>
                    <div className="p-3 bg-[#0E0E0E] flex flex-col gap-2">
                      <a href={v.link} target="_blank" className="text-[11px] text-[#C08A5C] underline break-all">{v.link}</a>
                      <div className="flex justify-between">
                        <button onClick={()=>setVideoLightbox(v.url)} className="px-3 py-1 rounded-full bg-white/10 text-[9px] font-bold">VER VIDEO</button>
                        <button onClick={()=>cotizarCategoria(activeVideoCat,"video")} className="px-3 py-1 rounded-full bg-white text-black text-[9px] font-bold">COTIZAR ESTA CATEGORÍA</button>
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
            <h2 className="serif text-[42px] md:text-[54px] mt-3">COTIZA TU <span className="text-bronze italic">CATEGORÍA</span></h2>
            {formData.categoria && <div className="mt-6 p-4 rounded-[12px] bg-[#C08A5C]/10 border border-[#C08A5C]/30"><p className="text-[11px] text-bronze">SELECCIONADA</p><p className="font-semibold">{formData.categoria}</p></div>}
          </div>
          <form onSubmit={(e)=>{
            e.preventDefault();
            const msg = `Hola Kender! Soy ${formData.nombre}. Categoría: ${formData.categoria || formData.tipo} Tipo: ${formData.tipo} Fecha: ${formData.fecha} Tel: ${formData.tel} Idea: ${formData.msg}`;
            window.open(`https://wa.me/18492535700?text=${encodeURIComponent(msg)}`, "_blank");
          }} className="rounded-[20px] bg-[#111] border border-white/10 p-6 space-y-4">
            <input value={formData.categoria} readOnly placeholder="Categoría seleccionada aparecerá aquí" className="w-full bg-[#0E0E0E] border border-[#C08A5C]/30 rounded-[12px] px-4 py-3 text-[13px] text-[#C08A5C]" />
            <div className="grid md:grid-cols-2 gap-4">
              <input required value={formData.nombre} onChange={e=>setFormData({...formData,nombre:e.target.value})} placeholder="Nombre" className="w-full bg-[#0E0E0E] border border-white/10 rounded-[12px] px-4 py-3 text-[14px]" />
              <input required value={formData.tel} onChange={e=>setFormData({...formData,tel:e.target.value})} placeholder="WhatsApp" className="w-full bg-[#0E0E0E] border border-white/10 rounded-[12px] px-4 py-3 text-[14px]" />
            </div>
            <select required value={formData.tipo} onChange={e=>setFormData({...formData,tipo:e.target.value})} className="w-full bg-[#0E0E0E] border border-white/10 rounded-[12px] px-4 py-3 text-[14px]">
              <option value="">Categoría</option>
              {FOTO_CATS.map(c=><option key={c}>{c}</option>)}
              {VIDEO_CATS.map(c=><option key={c}>VIDEO - {c}</option>)}
            </select>
            <input value={formData.fecha} onChange={e=>setFormData({...formData,fecha:e.target.value})} type="date" className="w-full bg-[#0E0E0E] border border-white/10 rounded-[12px] px-4 py-3 text-[14px]" />
            <textarea required value={formData.msg} onChange={e=>setFormData({...formData,msg:e.target.value})} placeholder="Idea para esta categoría" rows={4} className="w-full bg-[#0E0E0E] border border-white/10 rounded-[12px] px-4 py-3 text-[14px]" />
            <button type="submit" className="w-full bronze-gradient text-black font-semibold uppercase text-[12px] py-3.5 rounded-[12px]">Enviar cotización • WhatsApp</button>
          </form>
        </div>
      </section>

      <footer className="bg-[#050505] border-t border-white/[0.06] py-12">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex justify-between">
          <p className="text-[11px] tracking-widest">KENDER MEDIA GROUP • V9 FINAL</p>
          <p className="text-[11px] opacity-40">849-253-5700 • Links visibles por categoría</p>
        </div>
      </footer>

      {lightbox && <div className="fixed inset-0 z-[80] bg-black/90 flex items-center justify-center p-6" onClick={()=>setLightbox(null)}><img src={lightbox} alt="lightbox" className="max-w-[92vw] max-h-[86vh] object-contain rounded-[12px]" /></div>}
      {videoLightbox && <div className="fixed inset-0 z-[80] bg-black/90 flex items-center justify-center p-4" onClick={()=>setVideoLightbox(null)}><div className="w-full max-w-[960px] aspect-video bg-black rounded-[16px] overflow-hidden" onClick={e=>e.stopPropagation()}><iframe src={`${videoLightbox}&autoplay=1`} className="w-full h-full" allow="autoplay; fullscreen" /></div></div>}
    </div>
  );
}
