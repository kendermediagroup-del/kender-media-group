import { useEffect, useState, useRef } from "react";
import logoImg from "container:///mnt/data/src/assets/d1d0e2860004f01e-photo8134053410506080444.jpeg";
import photoPlayaFaro from "container:///mnt/data/src/assets/649f80ed29cc270a-photo6006523194098036563.jpeg";
import photoVestidoBlanco from "container:///mnt/data/src/assets/b1e91c7da53fd5e5-photo4462852633220934344.jpeg";
import photoNocheZebra from "container:///mnt/data/src/assets/753de106022ecbe9-photo2583181825893420029.jpeg";
import photoChacabana from "container:///mnt/data/src/assets/3c8eb2dfbb9f3733-photo3400482280174130022.jpeg";
import photoCEO from "container:///mnt/data/src/assets/294ff731768fdca2-photo3934092392695613329.jpeg";
import photoExtra1 from "container:///mnt/data/src/assets/7b0dbf0aa10ed123-photo5825509973075283862.jpeg";
import photoExtra2 from "container:///mnt/data/src/assets/44cdb6eb6a381d76-photo1546056030176176174.jpeg";

type Lang = "ES" | "EN";

type Slide =
  | { type: "video"; id: string; url: string; catES: string; catEN: string }
  | { type: "photo"; src: string; catES: string; catEN: string };

const slides: Slide[] = [
  {
    type: "video",
    id: "1231465649",
    url: "https://player.vimeo.com/video/1231465649?autoplay=1&muted=1&loop=1&controls=0&title=0&byline=0&portrait=0",
    catES: "CONSTRUCTORAS",
    catEN: "CONSTRUCTION",
  },
  {
    type: "photo",
    src: photoPlayaFaro,
    catES: "BODAS DESTINO",
    catEN: "DESTINATION WEDDINGS",
  },
  {
    type: "video",
    id: "1231465829",
    url: "https://player.vimeo.com/video/1231465829?autoplay=1&muted=1&loop=1&controls=0&title=0&byline=0&portrait=0",
    catES: "CUMPLEAÑOS",
    catEN: "BIRTHDAYS",
  },
  {
    type: "photo",
    src: photoVestidoBlanco,
    catES: "QUINCEAÑOS",
    catEN: "QUINCEAÑERA",
  },
  {
    type: "video",
    id: "1231465650",
    url: "https://player.vimeo.com/video/1231465650?autoplay=1&muted=1&loop=1&controls=0&title=0&byline=0&portrait=0",
    catES: "QUINCEAÑOS",
    catEN: "QUINCEAÑERA",
  },
  {
    type: "photo",
    src: photoNocheZebra,
    catES: "EVENTOS NOCTURNOS",
    catEN: "NIGHT EVENTS",
  },
  {
    type: "video",
    id: "1231465596",
    url: "https://player.vimeo.com/video/1231465596?autoplay=1&muted=1&loop=1&controls=0&title=0&byline=0&portrait=0",
    catES: "CORPORATIVOS",
    catEN: "CORPORATE",
  },
  {
    type: "photo",
    src: photoChacabana,
    catES: "RETRATOS",
    catEN: "PORTRAITS",
  },
];

const translations = {
  ES: {
    nav: ["Inicio", "Nosotros", "Portafolio", "Servicios", "Contacto"],
    heroTitle: "Creamos Historias Que Venden",
    heroSub: "Más de 9 años capturando momentos que se convierten en recuerdos eternos. Fotografía y video de alto impacto para marcas y familias en República Dominicana.",
    verPortafolio: "Ver Portafolio",
    cotizar: "Cotizar Ahora",
    stats: [
      { n: "+9", l: "AÑOS DE EXPERIENCIA" },
      { n: "+250", l: "PROYECTOS COMPLETADOS" },
      { n: "+100", l: "EMPRESAS CONFIAN" },
    ],
    sobreTitle: "SOBRE NOSOTROS",
    sobreSub: "Más que una productora, somos narradores de emociones.",
    sobreText: `Soy Andy Batista Sanon, C.E.O. y fundador de Kender Media Group.
Creo que una fotografía no es simplemente una imagen, y un video no es simplemente una grabación. Son momentos que se convierten en recuerdos, emociones que vuelven a sentirse y experiencias que permanecen.
En Kender Media Group no nos dedicamos únicamente a capturar lo que sucede frente a nuestro lente; contamos historias, creamos emociones y transformamos momentos en recuerdos que podrás revivir una y otra vez.
Porque los momentos pasan… pero la emoción de volver a vivirlos no tiene por qué hacerlo.`,
    portafolioTitle: "PORTAFOLIO",
    portafolioSub: "Cada imagen, una historia limpia sin distracciones",
    serviciosTitle: "SERVICIOS",
    servicios: [
      { cat: "CONSTRUCTORAS", desc: "Documentación de avances, renders vividos y contenido para ventas. Convertimos obra gris en deseo de compra." },
      { cat: "CUMPLEAÑOS", desc: "Celebraciones íntimas y grandes fiestas. Captura emotiva, entrega rápida, misma noche highlights." },
      { cat: "QUINCEAÑOS", desc: "Sesión soñada, vestido, vals y emoción familiar. Fotos editoriales y film cinematográfico." },
      { cat: "CORPORATIVOS", desc: "Eventos, activaciones y contenido para marcas. Entrega lista para redes y pantallas LED." },
    ],
    resenasTitle: "LO QUE DICEN NUESTROS CLIENTES",
    resenas: [
      { name: "Raul", text: "Profesionales de verdad. El video de mi empresa superó lo que imaginaba. Ventas aumentaron después del reel." },
      { name: "Railing", text: "Mi quinceaños fue mágico y ellos lo hicieron eterno. Las fotos parecen de revista." },
      { name: "Jesus", text: "Puntualidad, creatividad y calidad. Kender es otro nivel en RD." },
      { name: "Roberto", text: "Contratamos para constructoras y ahora son nuestro equipo oficial de contenido." },
      { name: "Harry", text: "Excelente trato, entendieron mi visión y la elevaron. 100% recomendados." },
    ],
    cotizacionTitle: "COTIZA TU HISTORIA",
    cotizacionSub: "Cuéntanos tu idea. Respondemos en menos de 2 horas.",
    form: { nombre: "Nombre completo", tel: "WhatsApp", tipo: "Tipo de evento", fecha: "Fecha estimada", msg: "Cuéntanos tu idea", enviar: "Enviar cotización" },
    contacto: {
      title: "CONTACTO",
      dir: "Santo Domingo Este, República Dominicana",
      email: "kendermediagroup@gmail.com",
      tel: "849-253-5700",
      ig: "@kendermediagroup",
    },
    audioOn: "Activar audio",
    audioOff: "Silenciar",
  },
  EN: {
    nav: ["Home", "About", "Portfolio", "Services", "Contact"],
    heroTitle: "We Create Stories That Sell",
    heroSub: "Over 9 years capturing moments that become eternal memories. High-impact photography and video for brands and families in Dominican Republic.",
    verPortafolio: "View Portfolio",
    cotizar: "Get Quote",
    stats: [
      { n: "+9", l: "YEARS EXPERIENCE" },
      { n: "+250", l: "PROJECTS DONE" },
      { n: "+100", l: "COMPANIES TRUST US" },
    ],
    sobreTitle: "ABOUT US",
    sobreSub: "More than a studio, we are emotion storytellers.",
    sobreText: `I'm Andy Batista Sanon, CEO and founder of Kender Media Group.
I believe a photograph is not just an image, and a video is not just a recording. They are moments that become memories, emotions that are felt again and experiences that remain.
At Kender Media Group we don't just capture what happens in front of our lens; we tell stories, create emotions and transform moments into memories you can relive again and again.
Because moments pass… but the emotion of reliving them doesn't have to.`,
    portafolioTitle: "PORTFOLIO",
    portafolioSub: "Each image, a clean story without distractions",
    serviciosTitle: "SERVICES",
    servicios: [
      { cat: "CONSTRUCTION", desc: "Progress documentation, vivid renders and sales content. We turn gray work into desire to buy." },
      { cat: "BIRTHDAYS", desc: "Intimate celebrations and big parties. Emotional capture, fast delivery, same-night highlights." },
      { cat: "QUINCEAÑERA", desc: "Dream shoot, dress, waltz and family emotion. Editorial photos and cinematic film." },
      { cat: "CORPORATE", desc: "Events, activations and brand content. Ready for social and LED screens." },
    ],
    resenasTitle: "WHAT OUR CLIENTS SAY",
    resenas: [
      { name: "Raul", text: "True professionals. My company video exceeded what I imagined. Sales increased after the reel." },
      { name: "Railing", text: "My quinceañera was magical and they made it eternal. Photos look like magazine." },
      { name: "Jesus", text: "Punctuality, creativity and quality. Kender is next level in DR." },
      { name: "Roberto", text: "We hired for construction and now they are our official content team." },
      { name: "Harry", text: "Excellent treatment, they understood my vision and elevated it. 100% recommended." },
    ],
    cotizacionTitle: "QUOTE YOUR STORY",
    cotizacionSub: "Tell us your idea. We reply in less than 2 hours.",
    form: { nombre: "Full name", tel: "WhatsApp", tipo: "Event type", fecha: "Estimated date", msg: "Tell us your idea", enviar: "Send quote" },
    contacto: {
      title: "CONTACT",
      dir: "Santo Domingo Este, Dominican Republic",
      email: "kendermediagroup@gmail.com",
      tel: "849-253-5700",
      ig: "@kendermediagroup",
    },
    audioOn: "Enable audio",
    audioOff: "Mute",
  },
};

export default function App() {
  const [lang, setLang] = useState<Lang>("ES");
  const t = translations[lang];
  const [current, setCurrent] = useState(0);
  const [muted, setMuted] = useState(true);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const iframeRefs = useRef<(HTMLIFrameElement | null)[]>([]);
  const [formData, setFormData] = useState({ nombre: "", tel: "", tipo: "", fecha: "", msg: "" });

  // autoplay 5s
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((p) => (p + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  // keyboard
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setCurrent((p) => (p - 1 + slides.length) % slides.length);
      if (e.key === "ArrowRight") setCurrent((p) => (p + 1) % slides.length);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, []);

  const toggleAudio = () => {
    const iframe = iframeRefs.current[current];
    if (iframe && slides[current].type === "video") {
      try {
        if (muted) {
          iframe.contentWindow?.postMessage(JSON.stringify({ method: "setVolume", value: 1 }), "*");
          iframe.contentWindow?.postMessage(JSON.stringify({ method: "setMuted", value: false }), "*");
        } else {
          iframe.contentWindow?.postMessage(JSON.stringify({ method: "setVolume", value: 0 }), "*");
          iframe.contentWindow?.postMessage(JSON.stringify({ method: "setMuted", value: true }), "*");
        }
      } catch {}
      setMuted(!muted);
    }
  };

  // Reset muted when slide changes to video
  useEffect(() => {
    if (slides[current].type === "video") {
      setMuted(true);
    }
  }, [current]);

  const portfolioImgs = [photoPlayaFaro, photoVestidoBlanco, photoNocheZebra, photoChacabana, photoExtra1, photoExtra2];

  const handleQuote = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hola Kender Media Group! Soy ${formData.nombre}. %0AEvento: ${formData.tipo}%0AFecha: ${formData.fecha}%0ATel: ${formData.tel}%0AIdea: ${formData.msg}`;
    const waUrl = `https://wa.me/18492535700?text=${msg}`;
    window.open(waUrl, "_blank");
    window.open(`mailto:kendermediagroup@gmail.com?subject=Cotizacion ${formData.tipo} - ${formData.nombre}&body=${decodeURIComponent(msg.replaceAll("%0A", "\n"))}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#070707] text-white selection:bg-[#C08A5C]/30">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600&display=swap');
        *{font-family: 'Inter', sans-serif;}
        .serif{font-family:'Instrument Serif', serif;}
        html{scroll-behavior:smooth; scroll-padding-top:96px;}
        .bronze-gradient{background: linear-gradient(90deg,#C08A5C,#B7794B);}
        .text-bronze{color:#C08A5C;}
        .border-bronze{border-color:#C08A5C;}
        /* hero - FIXED for Desktop vs Mobile */
        .hero-media{position:absolute; inset:0; width:100%; height:100%; overflow:hidden; background:#070707;}
        .hero-media iframe{position:absolute; left:50%; top:50%; width:100vw; height:56.25vw; min-height:100%; min-width:177.77vh; transform:translate(-50%,-50%) scale(1.15); border:0;}
        .hero-media img{position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:center top;}
        /* MOBILE: perfecto como te gusta - deja cover top */
        @media (max-width: 767px){
          .hero-media img{object-fit:cover; object-position:center top;}
        }
        /* DESKTOP: fix para que se vea el rostro completo */
        @media (min-width: 768px){
          .hero-media img{
            object-fit:cover;
            object-position:center 18%;
            /* zoom out un poco para que no corte cabeza */
            transform:scale(0.92);
            transform-origin:center top;
            width:100%;
            height:108%;
            top:0;
          }
        }
      `}</style>

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#070707]/80 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 h-[88px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="Kender Media Group" className="w-12 h-12 object-contain rounded-[8px]" />
            <div className="leading-[1.1]">
              <p className="font-semibold tracking-[0.12em] text-[12px]">KENDER</p>
              <p className="text-[10px] tracking-[0.2em] opacity-70 -mt-[1px]">MEDIA GROUP</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-[12px] tracking-[0.14em] uppercase opacity-80">
            {t.nav.map((n, i) => {
              const ids = ["inicio", "nosotros", "portafolio", "servicios", "contacto"];
              return (
                <a key={n} href={`#${ids[i]}`} className="hover:text-[#C08A5C] transition-colors">
                  {n}
                </a>
              );
            })}
          </nav>
          <div className="flex items-center gap-3">
            <div className="flex items-center rounded-full border border-white/10 p-1">
              {(["ES", "EN"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1 rounded-full text-[11px] tracking-widest transition ${lang === l ? "bg-white text-black font-semibold" : "opacity-60 hover:opacity-100"}`}
                >
                  {l}
                </button>
              ))}
            </div>
            <a href="#cotizacion" className="hidden md:inline-flex bronze-gradient text-black text-[12px] tracking-widest px-5 py-2.5 rounded-full font-semibold hover:brightness-110 transition">
              {t.cotizar.toUpperCase()}
            </a>
          </div>
        </div>
      </header>

      {/* HERO SLIDER */}
      <section id="inicio" className="relative w-full h-[100vh] min-h-[720px] overflow-hidden bg-[#070707]">
        {/* Slides background */}
        {slides.map((slide, idx) => {
          const isActive = idx === current;
          return (
            <div
              key={idx}
              className={`hero-media transition-opacity duration-[1200ms] ${isActive ? "opacity-100 z-[1]" : "opacity-0 z-0"}`}
              aria-hidden={!isActive}
            >
              {slide.type === "video" ? (
                <iframe
                  ref={(el) => {
                    iframeRefs.current[idx] = el;
                  }}
                  src={slide.url}
                  allow="autoplay; fullscreen; picture-in-picture"
                  title={`video-${slide.id}`}
                  loading="eager"
                />
              ) : (
                <img src={slide.src} alt={slide.catES} />
              )}
              {/* 50% dark layer */}
              <div className="absolute inset-0 bg-black/50" />
              {/* subtle bronze vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070707]/80 via-transparent to-[#070707]/20" />
            </div>
          );
        })}

        {/* Category + play icon top left */}
        <div className="absolute top-[108px] left-6 md:left-10 z-20 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center">
            <span className="text-[12px]">▶</span>
          </div>
          <div className="text-[11px] tracking-[0.2em] uppercase opacity-80 border border-white/15 px-3 py-1 rounded-full bg-black/20 backdrop-blur">
            {lang === "ES" ? (slides[current] as any).catES : (slides[current] as any).catEN} • {String(current + 1).padStart(2, "0")}/08
          </div>
        </div>

        {/* Audio button */}
        {slides[current].type === "video" && (
          <button
            onClick={toggleAudio}
            className="absolute top-[108px] right-6 md:right-10 z-20 text-[11px] tracking-widest uppercase px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 hover:bg-white/15 transition"
          >
            {muted ? t.audioOn : t.audioOff}
          </button>
        )}

        {/* Fixed central text */}
        <div className="absolute inset-0 z-20 flex items-center justify-center px-6">
          <div className="max-w-[900px] w-full text-center mt-16">
            <h1 className="serif text-[46px] md:text-[84px] leading-[0.9] tracking-[-0.02em]">
              <span className="block font-light italic opacity-90">Creamos Historias</span>
              <span className="block font-normal text-bronze">Que Venden</span>
            </h1>
            <p className="mt-6 text-[14px] md:text-[16px] leading-[1.7] opacity-75 max-w-[640px] mx-auto font-light">{t.heroSub}</p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a href="#portafolio" className="px-8 py-3.5 rounded-full bg-white text-black text-[12px] tracking-[0.14em] uppercase font-semibold hover:bg-[#f2f2f2] transition">
                {t.verPortafolio}
              </a>
              <a href="#cotizacion" className="px-8 py-3.5 rounded-full bronze-gradient text-black text-[12px] tracking-[0.14em] uppercase font-semibold hover:brightness-110 transition">
                {t.cotizar}
              </a>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 md:gap-12 max-w-[560px] mx-auto border-t border-white/10 pt-8">
              {t.stats.map((s) => (
                <div key={s.n} className="text-center">
                  <p className="serif text-[32px] md:text-[40px] leading-none">{s.n}</p>
                  <p className="mt-2 text-[10px] tracking-[0.18em] opacity-60">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Controls */}
        <button
          onClick={() => setCurrent((p) => (p - 1 + slides.length) % slides.length)}
          aria-label="prev"
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center hover:bg-white/15 transition"
        >
          <span className="text-xl leading-none">‹</span>
        </button>
        <button
          onClick={() => setCurrent((p) => (p + 1) % slides.length)}
          aria-label="next"
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center hover:bg-white/15 transition"
        >
          <span className="text-xl leading-none">›</span>
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all rounded-full ${i === current ? "w-8 h-2 bg-[#C08A5C]" : "w-2 h-2 bg-white/30 hover:bg-white/60"}`}
              aria-label={`go to ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* SOBRE NOSOTROS */}
      <section id="nosotros" className="bg-[#070707] py-24 md:py-32 border-t border-white/[0.06]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-20 items-start">
          <div>
            <p className="text-[11px] tracking-[0.22em] text-bronze mb-4">{t.sobreTitle}</p>
            <h2 className="serif text-[36px] md:text-[56px] leading-[0.95] max-w-[560px]">{t.sobreSub}</h2>
            <div className="mt-8 space-y-5 text-[15px] leading-[1.85] opacity-80 font-light whitespace-pre-line">{t.sobreText}</div>
            <div className="mt-10 flex gap-4">
              <div className="h-[1px] w-16 bg-[#C08A5C] mt-3" />
              <div>
                <p className="font-semibold tracking-wide">Andy Batista Sanon</p>
                <p className="text-[12px] tracking-[0.18em] opacity-60 uppercase">CEO & Founder • Kender Media Group</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-[24px] overflow-hidden bg-[#111] border border-white/10">
              <img src={photoCEO} alt="Andy Batista Sanon" className="w-full h-full object-cover object-top" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#121212] border border-white/10 rounded-[16px] px-6 py-4 shadow-2xl">
              <p className="serif text-[28px] leading-none">+9 años</p>
              <p className="text-[10px] tracking-[0.18em] opacity-60 uppercase mt-1">Creando recuerdos</p>
            </div>
          </div>
        </div>
      </section>

      {/* PORTAFOLIO */}
      <section id="portafolio" className="bg-[#0B0B0B] py-24 border-t border-white/[0.06]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="flex flex-wrap justify-between items-end gap-6 mb-10">
            <div>
              <p className="text-[11px] tracking-[0.22em] text-bronze">{t.portafolioTitle}</p>
              <h2 className="serif text-[36px] md:text-[48px] mt-2">{t.portafolioSub}</h2>
            </div>
            <p className="text-[13px] opacity-60 max-w-[340px]">Selección limpia, sin descripciones. Solo la emoción, centrada arriba para respetar rostros.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {portfolioImgs.map((img, i) => (
              <button key={i} onClick={() => setLightbox(img)} className="group relative aspect-[4/5] overflow-hidden rounded-[18px] bg-[#151515] border border-white/5">
                <img src={img} alt={`portfolio ${i}`} className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition duration-700" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="bg-[#070707] py-24 border-t border-white/[0.06]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <p className="text-[11px] tracking-[0.22em] text-bronze">{t.serviciosTitle}</p>
          <div className="grid md:grid-cols-4 gap-6 mt-8">
            {t.servicios.map((s) => (
              <div key={s.cat} className="rounded-[20px] bg-[#111111] border border-white/[0.06] p-7 hover:border-[#C08A5C]/30 transition">
                <p className="text-[11px] tracking-[0.2em] text-bronze">{s.cat}</p>
                <h3 className="serif text-[22px] mt-3 leading-[1.1]">{s.cat}</h3>
                <p className="mt-4 text-[13px] leading-[1.7] opacity-70">{s.desc}</p>
                <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-[#C08A5C]/50 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEÑAS */}
      <section className="bg-[#0E0E0E] py-20 border-t border-white/[0.06]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <p className="text-[11px] tracking-[0.22em] text-bronze">{t.resenasTitle}</p>
          <div className="mt-8 grid md:grid-cols-5 gap-4">
            {t.resenas.map((r) => (
              <div key={r.name} className="rounded-[16px] bg-[#151515] border border-white/5 p-5">
                <div className="flex gap-1 text-[#C08A5C] text-[14px]">★★★★★</div>
                <p className="mt-3 text-[13px] leading-[1.6] opacity-80">"{r.text}"</p>
                <p className="mt-4 text-[12px] font-semibold tracking-wide">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COTIZACION */}
      <section id="cotizacion" className="bg-[#070707] py-24 border-t border-white/[0.06]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid md:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
          <div>
            <p className="text-[11px] tracking-[0.22em] text-bronze">COTIZACIÓN</p>
            <h2 className="serif text-[42px] md:text-[54px] leading-[0.95] mt-3">{t.cotizacionTitle}</h2>
            <p className="mt-4 text-[14px] opacity-70 max-w-[420px]">{t.cotizacionSub}</p>
            <div className="mt-8 rounded-[16px] bg-[#111] border border-white/10 p-5 text-[13px] leading-[1.7] opacity-75">
              <p>Al enviar, se abrirá WhatsApp hacia <span className="text-white">+1 849-253-5700</span> y Email a <span className="text-white">kendermediagroup@gmail.com</span> con tu mensaje listo.</p>
            </div>
          </div>
          <form onSubmit={handleQuote} className="rounded-[20px] bg-[#111111] border border-white/10 p-6 md:p-8 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input required value={formData.nombre} onChange={(e) => setFormData({ ...formData, nombre: e.target.value })} placeholder={t.form.nombre} className="w-full bg-[#0E0E0E] border border-white/10 rounded-[12px] px-4 py-3 text-[14px] outline-none focus:border-[#C08A5C]/50" />
              <input required value={formData.tel} onChange={(e) => setFormData({ ...formData, tel: e.target.value })} placeholder={t.form.tel} className="w-full bg-[#0E0E0E] border border-white/10 rounded-[12px] px-4 py-3 text-[14px] outline-none focus:border-[#C08A5C]/50" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <select required value={formData.tipo} onChange={(e) => setFormData({ ...formData, tipo: e.target.value })} className="w-full bg-[#0E0E0E] border border-white/10 rounded-[12px] px-4 py-3 text-[14px] outline-none focus:border-[#C08A5C]/50">
                <option value="">{t.form.tipo}</option>
                <option>Constructoras</option>
                <option>Cumpleaños</option>
                <option>Quinceaños</option>
                <option>Corporativos</option>
                <option>Bodas</option>
              </select>
              <input value={formData.fecha} onChange={(e) => setFormData({ ...formData, fecha: e.target.value })} type="date" className="w-full bg-[#0E0E0E] border border-white/10 rounded-[12px] px-4 py-3 text-[14px] outline-none focus:border-[#C08A5C]/50" />
            </div>
            <textarea required value={formData.msg} onChange={(e) => setFormData({ ...formData, msg: e.target.value })} placeholder={t.form.msg} rows={4} className="w-full bg-[#0E0E0E] border border-white/10 rounded-[12px] px-4 py-3 text-[14px] outline-none focus:border-[#C08A5C]/50 resize-none" />
            <button type="submit" className="w-full bronze-gradient text-black font-semibold tracking-[0.12em] uppercase text-[12px] py-3.5 rounded-[12px] hover:brightness-110 transition">
              {t.form.enviar} • WhatsApp + Email
            </button>
            <p className="text-[11px] opacity-50 text-center">Doble notificación automática</p>
          </form>
        </div>
      </section>

      {/* FOOTER CONTACTO */}
      <footer id="contacto" className="bg-[#050505] border-t border-white/[0.06] py-16">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid md:grid-cols-[1.2fr_0.8fr_0.8fr] gap-10">
          <div className="flex gap-4 items-start">
            <img src={logoImg} alt="logo" className="w-14 h-14 rounded-[10px] object-cover" />
            <div>
              <p className="font-semibold tracking-[0.14em] text-[13px]">KENDER MEDIA GROUP</p>
              <p className="mt-3 text-[13px] leading-[1.7] opacity-60 max-w-[320px]">Fotografía y video de alto impacto. Santo Domingo Este, RD. Historias que venden y emociones que permanecen.</p>
              <p className="mt-4 text-[11px] tracking-[0.18em] opacity-40">© {new Date().getFullYear()} Kender Media Group • V5 FIX</p>
            </div>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.22em] text-bronze">{t.contacto.title}</p>
            <div className="mt-4 space-y-2 text-[13px] opacity-70">
              <p>{t.contacto.dir}</p>
              <a href="mailto:kendermediagroup@gmail.com" className="block hover:text-white transition">{t.contacto.email}</a>
              <a href="tel:+18492535700" className="block hover:text-white transition">{t.contacto.tel}</a>
              <a href="https://instagram.com/kendermediagroup" target="_blank" rel="noopener" className="block hover:text-white transition">{t.contacto.ig}</a>
            </div>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.22em] text-bronze">ACCESOS RÁPIDOS</p>
            <div className="mt-4 space-y-2 text-[13px] opacity-70">
              <a href="#portafolio" className="block hover:text-white">Portafolio</a>
              <a href="#servicios" className="block hover:text-white">Servicios</a>
              <a href="https://wa.me/18492535700" target="_blank" rel="noopener" className="inline-flex mt-3 px-5 py-2 rounded-full bg-white text-black text-[12px] font-semibold">WhatsApp directo</a>
            </div>
          </div>
        </div>
      </footer>

      {/* LIGHTBOX */}
      {lightbox && (
        <div className="fixed inset-0 z-[80] bg-black/90 backdrop-blur flex items-center justify-center p-6" onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="lightbox" className="max-w-[92vw] max-h-[86vh] w-auto h-auto object-contain rounded-[12px]" />
          <button className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">✕</button>
        </div>
      )}
    </div>
  );
}
