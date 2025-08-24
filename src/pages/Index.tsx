import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Wrench, Sun, Lightbulb, Users, Hammer, Phone, Mail, MapPin, ArrowUp, Heart, Shield, Home, Zap, FileText, ExternalLink, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('consequences');
  const [showProjectDropdown, setShowProjectDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowScrollTop(scrollTop > 300);

      // Detect active section
      const sections = ['consequences', 'expertise', 'projets', 'formulaire', 'publications'];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && scrollTop >= section.offsetTop - 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="min-h-screen bg-background">
      {/* Logo Section */}
      <div className="bg-background py-8 text-center border-b border-border">
        <img 
          src="/lovable-uploads/a71b6835-bdb9-445b-af43-6b267b86e960.png" 
          alt="Efficace Bâti Logo" 
          className="h-20 w-auto mx-auto"
        />
      </div>

      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-background/95 to-background/90 backdrop-blur-md border-b-2 border-primary/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-center space-x-6 lg:space-x-12 flex-wrap">
            <button 
              onClick={() => scrollToSection('consequences')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeSection === 'consequences' 
                  ? 'text-yellow-600 bg-yellow-50 shadow-md border border-yellow-200 font-bold' 
                  : 'text-foreground hover:text-yellow-600 hover:bg-yellow-50/50 hover:shadow-sm'
              }`}
            >
              Conséquences des Ponts Thermiques
            </button>
            
            <button 
              onClick={() => scrollToSection('expertise')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeSection === 'expertise' 
                  ? 'text-yellow-600 bg-yellow-50 shadow-md border border-yellow-200 font-bold' 
                  : 'text-foreground hover:text-yellow-600 hover:bg-yellow-50/50 hover:shadow-sm'
              }`}
            >
              Notre Expertise
            </button>
            
            <div className="relative">
              <button 
                onClick={() => setShowProjectDropdown(!showProjectDropdown)}
                onMouseEnter={() => setShowProjectDropdown(true)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeSection === 'projets' 
                    ? 'text-yellow-600 bg-yellow-50 shadow-md border border-yellow-200 font-bold' 
                    : 'text-foreground hover:text-yellow-600 hover:bg-yellow-50/50 hover:shadow-sm'
                }`}
              >
                Votre Projet
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showProjectDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {showProjectDropdown && (
                <div 
                  className="absolute top-full left-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-xl z-60 overflow-hidden"
                  onMouseLeave={() => setShowProjectDropdown(false)}
                >
                  <div className="py-2">
                    <button
                      onClick={() => {
                        scrollToSection('projets');
                        setShowProjectDropdown(false);
                      }}
                      className="w-full text-left px-4 py-3 hover:bg-yellow-50 transition-colors duration-200 flex items-center gap-3"
                    >
                      <Home className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-semibold text-foreground">Nouvelle Construction</div>
                        <div className="text-sm text-muted-foreground">Bâtiments neufs performants</div>
                      </div>
                    </button>
                    <button
                      onClick={() => {
                        scrollToSection('projets');
                        setShowProjectDropdown(false);
                      }}
                      className="w-full text-left px-4 py-3 hover:bg-yellow-50 transition-colors duration-200 flex items-center gap-3 border-t border-gray-100"
                    >
                      <Wrench className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-semibold text-foreground">Rénovation Énergétique</div>
                        <div className="text-sm text-muted-foreground">Amélioration de l'existant</div>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            <button 
              onClick={() => scrollToSection('formulaire')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeSection === 'formulaire' 
                  ? 'text-yellow-600 bg-yellow-50 shadow-md border border-yellow-200 font-bold' 
                  : 'text-foreground hover:text-yellow-600 hover:bg-yellow-50/50 hover:shadow-sm'
              }`}
            >
              Contact
            </button>
            
            <button 
              onClick={() => scrollToSection('publications')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeSection === 'publications' 
                  ? 'text-yellow-600 bg-yellow-50 shadow-md border border-yellow-200 font-bold' 
                  : 'text-foreground hover:text-yellow-600 hover:bg-yellow-50/50 hover:shadow-sm'
              }`}
            >
              Publications
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/6f06b044-aa63-4148-898a-06d318d24289.png')`,
            filter: 'blur(2px)',
            opacity: 0.7
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Construisons ensemble l'avenir, durable et efficace.
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
            Spécialistes en construction, rénovation et performance énergétique des bâtiments.
          </p>
          <Button 
            size="lg" 
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            onClick={() => scrollToSection('formulaire')}
          >
            Contactez-nous
          </Button>
        </div>
      </section>

      {/* Section: Les conséquences du Pont Thermiques sur la santé */}
      <section id="consequences" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Les conséquences du Pont Thermiques sur la santé</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Les ponts thermiques représentent un danger silencieux pour votre santé et votre confort.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Heart className="w-16 h-16 text-destructive mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Problèmes respiratoires</h3>
                <p className="text-muted-foreground">
                  L'humidité causée par les ponts thermiques favorise le développement de moisissures et d'allergènes.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Zap className="w-16 h-16 text-destructive mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Inconfort thermique</h3>
                <p className="text-muted-foreground">
                  Les variations de température créent des zones froides et chaudes, affectant le bien-être.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Shield className="w-16 h-16 text-destructive mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Dégradation du bâti</h3>
                <p className="text-muted-foreground">
                  La condensation endommage les structures et réduit la durabilité du bâtiment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section: Notre expertise */}
      <section id="expertise" className="py-20 px-6 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Notre expertise: quelques approches pour éviter le Pont thermique</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Des solutions techniques éprouvées pour éliminer les ponts thermiques.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-background rounded-lg p-8 h-80 flex items-center justify-center">
              <Building size={120} className="text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Nos techniques d'intervention :</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-primary mr-3 mt-1" />
                  <span>Isolation thermique par l'extérieur (ITE) pour envelopper complètement le bâtiment</span>
                </li>
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-primary mr-3 mt-1" />
                  <span>Rupteurs de ponts thermiques aux jonctions critiques</span>
                </li>
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-primary mr-3 mt-1" />
                  <span>Étanchéité à l'air pour éviter les infiltrations</span>
                </li>
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-primary mr-3 mt-1" />
                  <span>Choix de matériaux performants et durables</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Votre projet */}
      <section id="projets" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Votre projet</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Que ce soit pour une nouvelle construction ou une rénovation énergétique, nous vous accompagnons.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Home className="w-20 h-20 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-semibold mb-4">Nouvelle construction</h3>
                <p className="text-muted-foreground mb-6">
                  Conception et réalisation de bâtiments neufs respectant les plus hauts standards d'efficacité énergétique.
                </p>
                <ul className="text-left space-y-2 text-muted-foreground mb-6">
                  <li>• Étude thermique complète</li>
                  <li>• Conception sans ponts thermiques</li>
                  <li>• Matériaux haute performance</li>
                  <li>• Certification énergétique</li>
                </ul>
                <Button 
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => scrollToSection('formulaire')}
                >
                  Discuter de mon projet
                </Button>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Wrench className="w-20 h-20 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-semibold mb-4">Rénovation énergétique</h3>
                <p className="text-muted-foreground mb-6">
                  Amélioration de l'existant avec traitement spécifique des ponts thermiques et amélioration de la performance.
                </p>
                <ul className="text-left space-y-2 text-muted-foreground mb-6">
                  <li>• Diagnostic thermique détaillé</li>
                  <li>• Isolation performante</li>
                  <li>• Traitement des ponts thermiques</li>
                  <li>• Amélioration du confort</li>
                </ul>
                <Button 
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => scrollToSection('formulaire')}
                >
                  Rénover mon bâtiment
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section: Formulaire de renseignements */}
      <section id="formulaire" className="py-20 px-6 bg-muted">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Formulaire de renseignements</h2>
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
                <label className="block text-sm font-medium mb-2">Type de projet</label>
                <select className="w-full p-3 border border-border rounded-md bg-background">
                  <option value="">Sélectionnez votre type de projet</option>
                  <option value="nouvelle-construction">Nouvelle construction</option>
                  <option value="renovation">Rénovation énergétique</option>
                  <option value="diagnostic">Diagnostic thermique</option>
                  <option value="autre">Autre</option>
                </select>
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

      {/* Section: Publications */}
      <section id="publications" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Publications</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez nos ressources et publications spécialisées sur l'efficacité énergétique.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <FileText className="w-16 h-16 text-primary" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                  Guide des Ponts Thermiques
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Comprendre et identifier les ponts thermiques dans votre bâtiment pour améliorer son efficacité.
                </p>
                <div className="flex items-center text-primary text-sm">
                  <span>Lire la suite</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <Lightbulb className="w-16 h-16 text-primary" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                  Isolation Thermique Efficace
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Les meilleures techniques d'isolation pour éliminer les déperditions énergétiques.
                </p>
                <div className="flex items-center text-primary text-sm">
                  <span>Lire la suite</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <Sun className="w-16 h-16 text-primary" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                  Énergies Renouvelables
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Intégrer les énergies renouvelables dans votre projet de construction ou rénovation.
                </p>
                <div className="flex items-center text-primary text-sm">
                  <span>Lire la suite</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <Building className="w-16 h-16 text-primary" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                  Standards Européens
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Respecter les normes européennes d'efficacité énergétique dans vos projets au Maroc.
                </p>
                <div className="flex items-center text-primary text-sm">
                  <span>Lire la suite</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </div>
              </CardContent>
            </Card>
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

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 h-12 w-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg transition-all duration-300 animate-fade-in"
          size="icon"
        >
          <ArrowUp size={20} />
        </Button>
      )}
    </div>
  );
};

export default Index;
