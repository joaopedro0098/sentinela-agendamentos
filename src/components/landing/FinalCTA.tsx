import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => (
  <section id="cta" className="py-24 relative">
    <div className="container">
      <div className="relative max-w-4xl mx-auto text-center glass rounded-3xl p-12 md:p-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-brand opacity-10" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-[hsl(var(--brand-violet)/0.4)] blur-3xl rounded-full" />

        <div className="relative">
          <h2 className="text-4xl md:text-6xl font-bold font-display leading-tight">
            Automatize seu atendimento <span className="text-gradient">hoje mesmo</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-6 max-w-xl mx-auto">
            Pare de perder clientes enquanto você dorme. Ative a Sentinela em minutos.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-gradient-brand hover:opacity-90 text-white border-0 rounded-full px-10 h-14 text-base shadow-glow animate-pulse-glow"
          >
            <a href="#planos">Começar agora <ArrowRight className="w-5 h-5 ml-1" /></a>
          </Button>
          <p className="text-xs text-muted-foreground mt-4">⏱️ Setup em menos de 10 minutos</p>
        </div>
      </div>
    </div>

    <footer className="container mt-20 pb-10">
      <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Sentinela Agendamentos. Todos os direitos reservados.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground transition-colors">Termos</a>
          <a href="#" className="hover:text-foreground transition-colors">Privacidade</a>
          <a href="#" className="hover:text-foreground transition-colors">Contato</a>
        </div>
      </div>
    </footer>
  </section>
);

export default FinalCTA;
