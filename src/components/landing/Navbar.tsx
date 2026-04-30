import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

const Navbar = () => (
  <header className="fixed top-0 inset-x-0 z-50">
    <div className="container py-4">
      <nav className="glass rounded-full px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center shadow-glow">
            <Sparkles className="w-4 h-4 text-white" />
          </span>
          Sentinela
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#como-funciona" className="hover:text-foreground transition-colors">Como funciona</a>
          <a href="#beneficios" className="hover:text-foreground transition-colors">Benefícios</a>
          <a href="#planos" className="hover:text-foreground transition-colors">Planos</a>
        </div>
        <Button asChild size="sm" className="bg-gradient-brand hover:opacity-90 text-white border-0 rounded-full">
          <a href="#planos">Começar <ArrowRight className="w-4 h-4 ml-1" /></a>
        </Button>
      </nav>
    </div>
  </header>
);

export default Navbar;
