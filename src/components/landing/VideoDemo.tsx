import { Play } from "lucide-react";

const VideoDemo = () => {
  return (
    <section className="relative py-12">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold font-display">
              Veja a Sentinela em <span className="text-gradient">ação</span>
            </h2>
            <p className="text-muted-foreground mt-3">Uma demonstração rápida de como a IA atende e agenda sozinha.</p>
          </div>

          <div className="relative group">
            {/* gradient border wrapper */}
            <div className="absolute -inset-1 bg-gradient-brand rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
            <div className="relative glass rounded-3xl overflow-hidden glow-border">
              <div className="aspect-video w-full relative bg-secondary/40 flex items-center justify-center">
                {/*
                  📹 SUBSTITUA AQUI PELO SEU VÍDEO:
                  Opção 1 — vídeo local em /public/demo.mp4:
                  <video src="/demo.mp4" controls poster="/poster.jpg" className="w-full h-full object-cover" />

                  Opção 2 — YouTube:
                  <iframe src="https://www.youtube.com/embed/SEU_ID" title="Demo Sentinela" allowFullScreen className="w-full h-full" />
                */}
                <video
                  controls
                  className="w-full h-full object-cover"
                  poster=""
                >
                  <source src="/demo.mp4" type="video/mp4" />
                </video>

                {/* Overlay placeholder enquanto não há vídeo */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none bg-gradient-to-br from-[hsl(var(--brand-blue)/0.2)] via-transparent to-[hsl(var(--brand-pink)/0.2)]">
                  <div className="w-20 h-20 rounded-full bg-gradient-brand flex items-center justify-center shadow-glow animate-float">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                  <p className="mt-6 text-sm text-muted-foreground bg-background/60 px-4 py-2 rounded-full backdrop-blur">
                    📁 Adicione seu vídeo em <code className="text-foreground">/public/demo.mp4</code>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;
