import { useState } from 'react';
import { MapPin, Clock, ChevronDown, ChevronUp, Menu, X, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const WHATSAPP_NUMBER = "5521988614533";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de agendar um horário no Espaço Renovo.`;

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.81 11.81 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413Z"/>
    </svg>
  );
}

const SERVICES = [
  { name: "Alongamento Postural", price: "99,00", highlight: true },
  { name: "Reflexologia", price: "125,00", highlight: false },
  { name: "Massagem Facial", price: "110,00", highlight: false },
  { name: "Massagem Relaxante", price: "145,00", highlight: false },
  { name: "Massagem Pedras Quentes", price: "140,00", highlight: false },
  { name: "Drenagem Linfática", price: "90,00", highlight: false },
  { name: "Massagem Desportiva", price: "150,00", highlight: false },
  { name: "Massagem Terapêutica", price: "145,00", highlight: false },
  { name: "Bambuterapia", price: "135,00", highlight: false },
  { name: "Liberação Miofascial", price: "90,00", highlight: false },
  { name: "Ventosaterapia", price: "135,00", highlight: false },
  { name: "Candle Massage", price: "150,00", highlight: false, subtitle: "(Velas Quentes)" },
];

const FAQS = [
  {
    question: "Como funciona o agendamento?",
    answer: "Trabalhamos exclusivamente com hora marcada. O agendamento é feito de forma rápida e prática diretamente através do nosso WhatsApp."
  },
  {
    question: "Vocês atendem aos domingos?",
    answer: "Não. Nosso horário de funcionamento é de segunda a sexta, das 08:00 às 19:00, e aos sábados, das 08:00 às 16:30."
  },
  {
    question: "Onde vocês estão localizados?",
    answer: "Estamos no Nilo Shopping (Estrada Mirandela, 651), 2º andar, sala 103, no centro de Nilópolis - RJ."
  },
  {
    question: "Quais são as formas de pagamento aceitas?",
    answer: "Aceitamos PIX, cartões de crédito, débito e dinheiro em espécie."
  }
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-stone-50/90 backdrop-blur-md z-50 border-b border-stone-200 shadow-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <span className="font-serif text-3xl md:text-4xl font-bold text-stone-800 tracking-tight">Espaço Renovo</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#servicos" className="text-sm font-medium text-stone-600 hover:text-amber-700 transition-colors uppercase tracking-widest">Serviços</a>
            <a href="#localizacao" className="text-sm font-medium text-stone-600 hover:text-amber-700 transition-colors uppercase tracking-widest">Localização</a>
            <a href="#faq" className="text-sm font-medium text-stone-600 hover:text-amber-700 transition-colors uppercase tracking-widest">Dúvidas</a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-800 hover:text-amber-700 focus:outline-none" aria-label="Menu">
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-stone-50 border-t border-stone-200">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#servicos" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-stone-800 hover:text-amber-700 hover:bg-stone-100 rounded-md">Serviços</a>
            <a href="#localizacao" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-stone-800 hover:text-amber-700 hover:bg-stone-100 rounded-md">Localização</a>
            <a href="#faq" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-stone-800 hover:text-amber-700 hover:bg-stone-100 rounded-md">Dúvidas</a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative pt-20 pb-20 lg:pt-20 lg:pb-32 overflow-hidden font-sans min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2000&auto=format&fit=crop" 
          alt="Ambiente de massoterapia com pedras quentes" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/70 bg-gradient-to-b from-stone-900/80 via-stone-900/50 to-stone-950/90"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-amber-400 font-bold tracking-[0.2em] uppercase text-xs mb-6 block"
          >
            Clínica de Massoterapia
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6 drop-shadow-lg"
          >
            Renove seu corpo,<br/> acalme sua mente.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg sm:text-xl text-stone-200 mb-10 leading-relaxed max-w-2xl mx-auto font-light drop-shadow"
          >
            Especialistas em alívio de tensões e bem-estar. Reserve um momento só seu e descubra o poder transformador da massoterapia.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a href="#servicos" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/30 px-8 py-4 rounded-full text-lg font-medium transition-all">
              Ver Tratamentos
            </a>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 flex items-center justify-center gap-2 text-sm text-stone-300 font-medium"
          >
            <CheckCircle2 className="w-5 h-5 text-amber-500" />
            <span>Atendimento exclusivo com hora marcada</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="servicos" className="py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-700 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Especialidades</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-6">Nossos Tratamentos</h2>
          <p className="text-stone-500 max-w-2xl mx-auto text-lg font-light">
            Escolha a terapia ideal para as suas necessidades. Todos os nossos serviços são realizados por profissionais altamente qualificados.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => (
            <div 
              key={idx} 
              className={`relative bg-stone-50 rounded-3xl p-8 transition-all duration-300 hover:shadow-xl flex flex-col h-full ${
                service.highlight ? 'ring-2 ring-amber-600 shadow-md transform md:-translate-y-2 bg-amber-50/30' : 'border border-stone-100 hover:-translate-y-1'
              }`}
            >
              {service.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest shadow-sm">
                  Mais Procurado
                </div>
              )}
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-serif font-bold text-stone-800 mb-1 leading-tight">{service.name}</h3>
                  {service.subtitle && <p className="text-sm text-stone-500 mb-2">{service.subtitle}</p>}
                </div>
                <div className="flex items-baseline gap-1 mt-6 mb-6">
                  <span className="text-sm font-bold text-stone-400">R$</span>
                  <span className="text-4xl font-bold text-amber-700 tracking-tight">{service.price}</span>
                </div>
              </div>
              
              <a 
                href={`${WHATSAPP_URL}&text=${encodeURIComponent(`Gostaria de agendar o serviço: ${service.name} (R$ ${service.price})`)}`}
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-full py-3.5 rounded-2xl font-medium text-sm flex justify-center items-center gap-2 transition-all ${
                  service.highlight 
                    ? 'bg-amber-700 hover:bg-amber-800 text-white shadow-md' 
                    : 'bg-white border border-stone-200 text-stone-800 hover:border-amber-600 hover:text-amber-700 shadow-sm'
                }`}
              >
                Agendar Agora
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PromoBanner() {
  return (
    <section className="py-24 bg-stone-900 relative overflow-hidden font-sans">
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
           <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#pattern)"></path>
           <defs>
             <pattern id="pattern" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="currentColor" className="text-amber-100"></circle>
             </pattern>
           </defs>
        </svg>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="text-amber-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Bem-estar contínuo</span>
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
          Pacotes Promocionais
        </h2>
        <p className="text-lg md:text-xl text-stone-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          O bem-estar deve ser um hábito. Oferecemos condições especiais para pacotes de múltiplas sessões. Cuide-se com maior frequência e garanta descontos exclusivos.
        </p>
        <a 
          href={`${WHATSAPP_URL}&text=${encodeURIComponent('Gostaria de saber mais sobre os pacotes promocionais para múltiplas sessões.')}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-lg hover:shadow-amber-600/20"
        >
          Consultar Pacotes
        </a>
      </div>
    </section>
  );
}

function LocationAndHours() {
  return (
    <section id="localizacao" className="py-24 bg-stone-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <span className="text-amber-700 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Nossa Estrutura</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-6">Visite Nosso Espaço</h2>
            <p className="text-stone-500 mb-10 text-lg font-light leading-relaxed">
              Um ambiente preparado com carinho e requinte para oferecer tranquilidade, conforto e segurança durante todo o seu tratamento.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm border border-stone-200 text-amber-700">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-stone-900 mb-2">Localização</h4>
                  <p className="text-stone-600 leading-relaxed font-light">
                    Estrada Mirandela, 651<br/>
                    Nilo Shopping, 2º andar, sala 103<br/>
                    Nilópolis - RJ
                  </p>
                </div>
              </div>
              
              <div className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm border border-stone-200 text-amber-700">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="w-full">
                  <h4 className="text-lg font-bold text-stone-900 mb-4">Horário de Funcionamento</h4>
                  <div className="bg-white rounded-2xl border border-stone-100 p-6 shadow-sm">
                    <ul className="text-stone-600 space-y-3 w-full">
                      <li className="flex justify-between items-center border-b border-stone-100 pb-3">
                        <span className="font-light">Segunda a Sexta</span>
                        <span className="font-medium text-stone-900">08:00 - 19:00</span>
                      </li>
                      <li className="flex justify-between items-center border-b border-stone-100 pb-3">
                        <span className="font-light">Sábados</span>
                        <span className="font-medium text-stone-900">08:00 - 16:30</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="font-light text-stone-400">Domingos</span>
                        <span className="font-medium text-stone-400">Fechado</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-4 flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm font-medium text-amber-800">
                      Regra de atendimento: Exclusivamente com hora marcada via WhatsApp.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative h-[400px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
             <img 
               src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2000&auto=format&fit=crop" 
               alt="Interior calmo da clínica de massoterapia"
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent flex flex-col justify-end p-8">
               <a 
                 href="https://maps.google.com/?q=Estrada+Mirandela,+651+-+Nilo+Shopping+-+Nilópolis+-+RJ" 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="bg-white text-stone-900 font-medium px-6 py-3.5 rounded-full inline-flex items-center gap-2 self-start hover:bg-stone-100 transition-colors shadow-lg"
               >
                 <MapPin className="w-5 h-5 text-amber-700" />
                 Abrir no Google Maps
               </a>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border-b border-stone-200 last:border-0">
      <button 
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
        onClick={onClick}
      >
        <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-amber-700' : 'text-stone-800 group-hover:text-amber-700'}`}>
          {question}
        </span>
        <span className={`ml-6 flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-amber-700 border-amber-700 text-white' : 'border-stone-300 text-stone-400 group-hover:border-amber-700 group-hover:text-amber-700'}`}>
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-stone-500 font-light leading-relaxed pr-12">{answer}</p>
      </div>
    </div>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white font-sans">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-700 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Dúvidas</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-6">Perguntas Frequentes</h2>
          <p className="text-stone-500 text-lg font-light">Ficou com alguma dúvida? Confira abaixo as respostas para as perguntas mais comuns dos nossos clientes.</p>
        </div>
        
        <div className="bg-stone-50 rounded-3xl p-6 md:p-10 shadow-sm border border-stone-100">
          {FAQS.map((faq, idx) => (
            <FaqItem 
              key={idx}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === idx}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-16 border-t border-stone-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <span className="font-serif text-3xl font-bold text-white tracking-wide">Espaço Renovo</span>
          <p className="mt-3 text-stone-500 font-light">Clínica de Massoterapia e Bem-Estar.</p>
        </div>
        <div className="text-sm text-center md:text-right font-light text-stone-500">
          <p>&copy; {new Date().getFullYear()} Espaço Renovo. Todos os direitos reservados.</p>
          <p className="mt-2 text-stone-400 font-medium">Atendimento exclusivo com hora marcada.</p>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a 
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#1ebe57] transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Agendar pelo WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8" />
      <span className="absolute right-full mr-4 bg-white text-stone-800 text-sm font-bold px-4 py-2.5 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap transform translate-x-2 group-hover:translate-x-0 duration-300">
        Agende seu horário!
      </span>
    </a>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 selection:bg-amber-200 selection:text-amber-900">
      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
        <PromoBanner />
        <LocationAndHours />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

