import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  const linkCls = (active: boolean) =>
    `transition-colors ${active ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`;

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="container py-4">
        <nav className="glass rounded-full px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center shadow-glow">
              <Sparkles className="w-4 h-4 text-white" />
            </span>
            Sentinela
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link to="/" className={linkCls(pathname === "/")}>Produto</Link>
            <Link to="/planos" className={linkCls(pathname === "/planos")}>Planos</Link>
          </div>
          <Button asChild size="sm" className="bg-gradient-brand hover:opacity-90 text-white border-0 rounded-full">
            <Link to="/planos">Começar <ArrowRight className="w-4 h-4 ml-1" /></Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
