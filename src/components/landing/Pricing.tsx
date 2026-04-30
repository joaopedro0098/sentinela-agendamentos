import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Básico",
    price: 57,
    limit: "Até 100 agendamentos/mês",
    features: [
      "IA de atendimento no WhatsApp",
      "Integração com Google Sheets",
      "Suporte por e-mail",
      "Configuração guiada",
    ],
    highlight: false,
  },
  {
    name: "Profissional",
    price: 87,
    limit: "Até 300 agendamentos/mês",
    features: [
      "Tudo do plano Básico",
      "Respostas personalizadas avançadas",
      "Suporte prioritário no WhatsApp",
      "Confirmações e lembretes automáticos",
      "Relatórios mensais",
    ],
    highlight: true,
  },
  {
    name: "Avançado",
    price: 127,
    limit: "Agendamentos ilimitados",
    features: [
      "Tudo do plano Profissional",
      "Múltiplos atendentes / unidades",
      "Onboarding 1:1 com especialista",
      "Suporte dedicado",
      "Personalização total da IA",
    ],
    highlight: false,
  },
];

const Pricing = () => (
  <section id="planos" className="py-24 relative">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--brand-violet)/0.15),transparent_60%)]" />
    <div className="container relative">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-sm font-semibold text-gradient uppercase tracking-wider">Planos</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-3 font-display">
          Escolha o plano <span className="text-gradient">ideal</span>
        </h2>
        <p className="text-muted-foreground mt-4">
          🔥 Vagas limitadas neste mês — comece hoje e garanta seu preço.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-3xl p-8 flex flex-col ${
              plan.highlight
                ? "glass glow-border shadow-glow scale-100 md:scale-105 z-10"
                : "glass hover:-translate-y-1 transition-transform"
            }`}
          >
            {plan.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1 bg-gradient-brand text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-glow">
                  <Zap className="w-3 h-3" /> MAIS POPULAR
                </span>
              </div>
            )}

            <h3 className="text-2xl font-bold font-display">Plano {plan.name}</h3>
            <div className="mt-6 mb-2">
              <span className="text-sm text-muted-foreground">R$</span>
              <span className="text-5xl font-bold font-display mx-1">{plan.price}</span>
              <span className="text-sm text-muted-foreground">/mês</span>
            </div>
            <p className="text-sm text-[hsl(var(--brand-cyan))] font-medium mb-6">{plan.limit}</p>

            <ul className="space-y-3 mb-8 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <span className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5 ${plan.highlight ? "bg-gradient-brand" : "bg-secondary"}`}>
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              size="lg"
              className={`w-full rounded-full h-12 ${
                plan.highlight
                  ? "bg-gradient-brand hover:opacity-90 text-white border-0 shadow-glow"
                  : "bg-secondary hover:bg-secondary/70 text-foreground border border-border"
              }`}
            >
              <a href="#cta">Começar agora</a>
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
