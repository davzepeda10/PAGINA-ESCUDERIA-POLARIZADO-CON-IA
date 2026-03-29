import { motion } from "motion/react";
import { MapPin, MessageCircle, Clock, ShieldCheck, Sun, EyeOff, Car, ArrowRight, Facebook, Instagram } from "lucide-react";

export default function App() {
  const whatsappLink = "https://wa.me/50495466640";
  const mapsLink = "https://maps.app.goo.gl/F5UemuQLzbrr7Jz28";
  const emailLink = "mailto:escuderiatinthn@gmail.com";

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between py-4 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-blue-800 to-gray-900 drop-shadow-sm transform -skew-x-6">
                ESCUDERÍA POLARIZADOS
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#ubicacion" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Ubicación</a>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm"
              >
                Cotizar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl space-y-4">
                  <p>Nos especializamos en la instalación de polarizados automotrices de alta gama, ofreciendo soluciones que combinan tecnología, protección y estética para tu vehículo.</p>
                  <p>Trabajamos con películas de última generación que brindan máximo rechazo de calor, protección contra rayos UV y una apariencia elegante, garantizando siempre resultados de alta calidad y durabilidad.</p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 group"
                  >
                    Mensaje por WhatsApp
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[450px] lg:h-[700px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 mt-8 lg:mt-0 bg-gradient-to-br from-white to-blue-50 flex items-center justify-center p-2 lg:p-4"
            >
              <img 
                src="https://i.postimg.cc/xCg7xjps/ESCUDERIA-POLARIZADOS-LOHGO-DE-COLOR.png" 
                alt="Escudería Polarizados Logo" 
                className="w-full h-full object-contain mix-blend-multiply drop-shadow-2xl hover:scale-105 transition-transform duration-700 scale-110 lg:scale-125"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services / Benefits */}
      <section id="servicios" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Por qué elegir nuestro polarizado?</h2>
            <p className="text-lg text-gray-600">
              No solo oscurecemos cristales, instalamos películas de alto rendimiento diseñadas para proteger y durar.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Sun className="w-6 h-6 text-blue-600" />,
                title: "Rechazo de Calor y UV",
                desc: "Nuestros materiales bloquean los dañinos rayos UV y reducen significativamente la temperatura interior de tu vehículo."
              },
              {
                icon: <EyeOff className="w-6 h-6 text-blue-600" />,
                title: "Mejora la privacidad",
                desc: "Protege tus pertenencias y viaja con tranquilidad, gracias a los diferentes niveles de oscuridad disponibles."
              },
              {
                icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
                title: "Calidad Garantizada",
                desc: "Instalación profesional, sin burbujas ni imperfecciones, asegurando una estética premium y duradera."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Credibility */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 lg:p-16 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Expertos en estética automotriz en Tegucigalpa
                </h2>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  En Escudería Polarizados, entendemos que tu vehículo es una inversión importante. Por eso, nos dedicamos exclusivamente a ofrecer un servicio de polarizado de alta gama, prestando atención a cada detalle, para garantizar un resultado impecable que supere tus expectativas.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    "Atención personalizada",
                    "Materiales de primera calidad",
                    "Acabados profesionales sin detalles"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-gray-200">
                      <ShieldCheck className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div>
                  <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-gray-900 bg-white hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    Agendar una cita
                  </a>
                </div>
              </div>
              <div className="relative min-h-[300px] lg:min-h-full bg-gray-800">
                <img 
                  src="https://i.postimg.cc/fyrPs2ND/Area-de-Trabajo.jpg" 
                  alt="Área de trabajo de Escudería Polarizados" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent lg:w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galería de Trabajos */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Trabajos</h2>
            <p className="text-lg text-gray-600">
              Resultados reales en vehículos de nuestros clientes. Acabados perfectos que hablan por sí mismos.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                src: "https://i.postimg.cc/cL9PBLj4/3M-FX-FRONTAL-20.jpg",
                alt: "Vehículo con polarizado 3M FX Frontal 20%",
                label: "3M FX Frontal 20%"
              },
              {
                src: "https://i.postimg.cc/pXt9P2sL/3M-CERAMIC-IR-FRONTAL-25.jpg",
                alt: "Vehículo con polarizado 3M Ceramic IR Frontal 25%",
                label: "3M Ceramic IR Frontal 25%"
              },
              {
                src: "https://i.postimg.cc/gJ45SctN/POLARIZADO-NIGHTVISION.jpg",
                alt: "Vehículo con Polarizado Nightvision",
                label: "Polarizado Nightvision"
              },
              {
                src: "https://i.postimg.cc/XNKjc9gJ/STEK.jpg",
                alt: "Vehículo con polarizado STEK",
                label: "Polarizado STEK"
              },
              {
                src: "https://i.postimg.cc/fyrPs2ND/Area-de-Trabajo.jpg",
                alt: "Instalaciones de Escudería Polarizados",
                label: "Nuestras Instalaciones"
              },
              {
                src: "https://i.postimg.cc/85RS4VM4/POLARIZADO%20NIGHTVISION.jpg",
                alt: "Vehículo con Polarizado Nightvision",
                label: "Polarizado Nightvision"
              }
            ].map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden shadow-lg h-72 sm:h-80 relative group"
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${img.className || ''}`} 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-semibold text-lg tracking-wide">{img.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section id="ubicacion" className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Visítanos o contáctanos</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Ubicación</h3>
                    <p className="text-gray-600 leading-relaxed max-w-sm">
                      Res. Ciudad Nueva 2 Etapa, Calle Los Alcaldes, calle principal frente a Residencial Portal de Bosque 2<br />
                      Tegucigalpa, Honduras
                    </p>
                    <a 
                      href={mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 font-medium mt-3 hover:text-blue-700"
                    >
                      Ver en Google Maps <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Horarios de Atención</h3>
                    <ul className="text-gray-600 space-y-2 mt-2">
                      <li className="flex justify-between gap-8 border-b border-gray-100 pb-2">
                        <span>Lunes a Viernes</span>
                        <span className="font-medium text-gray-900 text-right">9:00 am - 4:30 pm</span>
                      </li>
                      <li className="flex justify-between gap-8 border-b border-gray-100 pb-2">
                        <span>Sábados</span>
                        <span className="font-medium text-gray-900 text-right">8:00 am - 12:00 pm</span>
                      </li>
                      <li className="flex justify-between gap-8 pb-1">
                        <span>Domingos</span>
                        <span className="font-medium text-gray-400 text-right">Cerrado</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <MessageCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Contacto Directo</h3>
                    <div className="flex flex-col space-y-2 mt-2">
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                        <span className="font-medium text-gray-900">WhatsApp:</span> 9546-6640
                      </a>
                      <a href={emailLink} className="text-gray-600 hover:text-blue-600 transition-colors">
                        <span className="font-medium text-gray-900">Email:</span> escuderiatinthn@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 flex flex-col justify-center text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Car className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Listo para mejorar tu vehículo?</h3>
              <p className="text-gray-600 mb-8">
                Escríbenos por WhatsApp para enviarte una cotización rápida, o resolver cualquier duda sobre nuestros servicios.
              </p>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-md"
              >
                Enviar mensaje por WhatsApp
              </a>
              <p className="text-sm text-gray-500 mt-4">
                Respondemos rápidamente en horario laboral.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <div className="flex items-center gap-2">
              <div className="bg-white p-4 rounded-3xl inline-block">
                <img 
                  src="https://i.postimg.cc/xCg7xjps/ESCUDERIA-POLARIZADOS-LOHGO-DE-COLOR.png" 
                  alt="Escudería Polarizados" 
                  className="h-24 md:h-32 w-auto object-contain mix-blend-multiply"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            {/* Redes Sociales */}
            <div className="flex items-center gap-3">
              <a 
                href="https://www.facebook.com/share/1EoSRbnbE8/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-4 py-2.5 bg-gray-800 hover:bg-[#1877F2] text-gray-300 hover:text-white rounded-xl transition-all shadow-sm"
              >
                <Facebook className="w-5 h-5" />
                <span className="text-sm font-medium hidden sm:block">Facebook</span>
              </a>
              <a 
                href="https://www.instagram.com/escuderiapolarizados?igsh=aXY4bGwzcmI5d2Ew&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-4 py-2.5 bg-gray-800 hover:bg-[#E4405F] text-gray-300 hover:text-white rounded-xl transition-all shadow-sm"
              >
                <Instagram className="w-5 h-5" />
                <span className="text-sm font-medium hidden sm:block">Instagram</span>
              </a>
              <a 
                href="https://www.tiktok.com/@escuderiapolarizados" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-4 py-2.5 bg-gray-800 hover:bg-black text-gray-300 hover:text-white rounded-xl transition-all shadow-sm border border-transparent hover:border-gray-700"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
                <span className="text-sm font-medium hidden sm:block">TikTok</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-gray-800">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
              <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Cómo llegar</a>
            </div>

            <div className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Escuderia Polarizados. Tegucigalpa.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
