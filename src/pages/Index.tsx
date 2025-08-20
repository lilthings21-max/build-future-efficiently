import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Wrench, Sun, Lightbulb, Users, Hammer, Phone, Mail, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background border-b border-border px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/6e762eb5-7043-4252-8ef6-0b456e481337.png" 
              alt="Efficace Bâti Logo" 
              className="h-12 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#accueil" className="text-foreground hover:text-primary transition-colors">Accueil</a>
            <a href="#activites" className="text-foreground hover:text-primary transition-colors">Nos Activités</a>
            <a href="#savoir-faire" className="text-foreground hover:text-primary transition-colors">Savoir-faire</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Nous Contacter</a>
          </nav>
          <Button size="sm" className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
            Demander un devis
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="accueil" className="relative h-screen flex items-center justify-center bg-gradient-to-r from-primary/20 to-secondary/30">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Construisons ensemble l'avenir, durable et efficace.
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
            Spécialistes en construction, rénovation et performance énergétique des bâtiments.
          </p>
          <Button size="lg" className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
            En savoir plus
          </Button>
        </div>
      </section>

      {/* Présentation rapide */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-muted rounded-lg p-8 h-80 flex items-center justify-center">
              <Building size={120} className="text-primary" />
            </div>
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                Efficace Bâti est une entreprise marocaine de construction et rénovation, 
                spécialisée dans l'efficacité énergétique et la durabilité.
              </p>
              <h3 className="text-xl font-semibold mb-4">Nos objectifs :</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Réaliser des projets respectueux des standards européens de performance.</li>
                <li>• Promouvoir l'utilisation des énergies renouvelables et des matériaux innovants.</li>
                <li>• Optimiser l'usage de l'eau et de l'énergie dans le bâtiment.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mini CTA */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-6">Vous avez un projet de construction ou rénovation ?</h2>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Contactez-nous
          </Button>
        </div>
      </section>

      {/* Nos Activités */}
      <section id="activites" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nos Activités</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nous couvrons l'ensemble des métiers du bâtiment et des énergies durables.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Building className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Construction et rénovation</h3>
                <p className="text-muted-foreground">
                  Travaux de construction de bâtiments modernes et durables.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Lightbulb className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Efficacité énergétique</h3>
                <p className="text-muted-foreground">
                  Isolation thermique, étanchéité, chauffage, climatisation et ventilation.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Sun className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Énergies renouvelables</h3>
                <p className="text-muted-foreground">
                  Installation d'équipements solaires et photovoltaïques.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Wrench className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Second œuvre</h3>
                <p className="text-muted-foreground">
                  Électricité, plomberie, menuiserie bois/PVC/aluminium, peinture, carrelage, finitions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Users className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Études et assistance</h3>
                <p className="text-muted-foreground">
                  Conseil technique, conception de projets conformes aux standards européens.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Hammer className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Travaux publics</h3>
                <p className="text-muted-foreground">
                  Voirie, assainissement et génie civil.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Savoir-faire */}
      <section id="savoir-faire" className="py-20 px-6 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Notre Savoir-faire</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-background rounded-lg p-8 h-80 flex items-center justify-center">
              <Users size={120} className="text-primary" />
            </div>
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                Fort de son expertise, Efficace Bâti accompagne ses clients à chaque étape de leurs projets.
              </p>
              <h3 className="text-xl font-semibold mb-4">Nos engagements :</h3>
              <ul className="space-y-3 text-muted-foreground mb-8">
                <li>• Respect des normes européennes en efficacité énergétique.</li>
                <li>• Intégration de solutions innovantes et durables.</li>
                <li>• Réalisation clé en main, depuis l'étude jusqu'à la finition.</li>
                <li>• Une équipe pluridisciplinaire alliant expérience et innovation.</li>
              </ul>
              <blockquote className="text-xl font-medium text-primary italic">
                "Notre savoir-faire, votre garantie de qualité et de performance."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Nous Contacter */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nous contacter</h2>
            <p className="text-xl text-muted-foreground">
              Parlez-nous de votre projet, nous vous répondrons rapidement.
            </p>
          </div>
          
          <Card className="p-8 mb-12">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nom et Prénom</label>
                  <Input placeholder="Votre nom complet" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="votre@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Téléphone</label>
                <Input type="tel" placeholder="+212 XXX-XXXXXX" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Votre projet / Message</label>
                <Textarea 
                  placeholder="Décrivez-nous votre projet en détail..."
                  className="min-h-32"
                />
              </div>
              <div className="text-center">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Envoyer ma demande
                </Button>
              </div>
            </form>
          </Card>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Adresse</h3>
              <p className="text-muted-foreground">
                26, Avenue Mers Sultan, Apt 3, 1er Étage<br />
                Casablanca – Maroc
              </p>
            </div>
            <div>
              <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Téléphone</h3>
              <p className="text-muted-foreground">+212 642-444647</p>
            </div>
            <div>
              <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">said.harouchi@efficacebati.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold mb-4">Efficace Bâti</div>
          <p className="text-primary-foreground/80">
            Construisons ensemble l'avenir, durable et efficace.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
