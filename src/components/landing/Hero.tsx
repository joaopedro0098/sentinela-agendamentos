import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-36 pb-20 overflow-hidden">
      {/* glow orbs */}
      <div className="absolute top-20 left-1/4 w-72 h-72 rounded-full bg-[hsl(var(--brand-violet)/0.25)] blur-3xl animate-pulse-glow" />
      <div className="absolute top-40 right-1/4 w-72 h-72 rounded-full bg-[hsl(var(--brand-blue)/0.25)] blur-3xl" />

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm">
            <Sparkles className="w-4 h-4 text-[hsl(var(--brand-pink))]" />
            <span className="text-muted-foreground">Powered by AI · Atendimento 24/7</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] font-display">
            Nunca mais perca clientes por{" "}
            <span className="text-gradient animate-gradient bg-gradient-text">falta de resposta</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A IA que responde seus clientes e agenda automaticamente <strong className="text-foreground">24h por dia</strong> direto no WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button asChild size="lg" className="bg-gradient-brand hover:opacity-90 text-white border-0 rounded-full px-8 h-14 text-base shadow-glow animate-pulse-glow">
              <a href="#planos">Começar agora <ArrowRight className="w-5 h-5 ml-1" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 h-14 text-base bg-transparent border-border hover:bg-secondary">
              <a href="#como-funciona">Ver como funciona</a>
            </Button>
          </div>

          <p className="text-xs text-muted-foreground pt-2">
            ⚡ Setup em minutos · Sem cartão de crédito para testar
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
