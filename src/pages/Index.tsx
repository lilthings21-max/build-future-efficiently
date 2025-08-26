import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Wrench, Sun, Lightbulb, Users, Hammer, Phone, Mail, MapPin, ArrowUp, Heart, Shield, Home, Zap, FileText, ExternalLink, ChevronDown, Camera } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('consequences');
  const [showProjectDropdown, setShowProjectDropdown] = useState(false);

  // Fetch publications from Supabase
  const { data: publications, isLoading } = useQuery({
    queryKey: ['publications'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('publication')
        .select('*')
        .order('creation_date', { ascending: false })
        .limit(3);
      
      if (error) throw error;
      return data;
    },
  });

  // Fetch photos from Supabase
  const { data: photos, isLoading: photosLoading } = useQuery({
    queryKey: ['photos'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('photo')
        .select('*')
        .order('creation_date', { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });

  // Get unique photo types for filters
  const photoTypes = photos ? ['Tous', ...Array.from(new Set(photos.map(photo => photo.type)))] : ['Tous'];
  const [selectedPhotoType, setSelectedPhotoType] = useState('Tous');
  
  // Filter photos based on selected type
  const filteredPhotos = photos ? (selectedPhotoType === 'Tous' ? photos : photos.filter(photo => photo.type === selectedPhotoType)) : [];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowScrollTop(scrollTop > 300);

      // Detect active section
      const sections = ['consequences', 'expertise', 'projets', 'galerie', 'formulaire', 'publications'];
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
              onClick={() => scrollToSection('galerie')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeSection === 'galerie' 
                  ? 'text-yellow-600 bg-yellow-50 shadow-md border border-yellow-200 font-bold' 
                  : 'text-foreground hover:text-yellow-600 hover:bg-yellow-50/50 hover:shadow-sm'
              }`}
            >
              Galerie
            </button>
            
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
            Vers un avenir bâti sur l'efficacité énergétique et la durabilité.
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
            <h2 className="text-4xl font-bold mb-6 flex items-center justify-center gap-3">
              <Home className="w-10 h-10 text-primary" />
              Condensation et moisissures : un enjeu sanitaire et énergétique
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-background rounded-lg p-8 shadow-md">
              <p className="text-lg text-muted-foreground leading-relaxed">
                La condensation et les moisissures ne sont pas de simples désagréments visuels. Elles constituent un risque réel pour la santé, favorisant l'apparition de maladies respiratoires telles que l'asthme, en particulier chez les enfants et les personnes âgées.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Ces problèmes sont souvent causés par une isolation thermique défaillante, générant des ponts thermiques.
              </p>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-400 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-orange-800">
                <Shield className="w-8 h-8" />
                Les ponts thermiques : deux conséquences majeures
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Heart className="w-6 h-6 text-red-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-orange-800">Sanitaires :</h4>
                    <p className="text-orange-700">Favorisent l'humidité et les moisissures.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-yellow-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-orange-800">Énergétiques :</h4>
                    <p className="text-orange-700">Provoquent des pertes de chaleur, augmentent les coûts de chauffage et diminuent le confort intérieur.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Notre expertise */}
      <section id="expertise" className="py-20 px-6 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 flex items-center justify-center gap-3">
              <Wrench className="w-10 h-10 text-primary" />
              Notre solution : une isolation thermique performante par l'extérieur
            </h2>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="bg-background rounded-lg p-8 shadow-md">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Chez <strong>EfficaceBâti</strong>, nous concevons des bâtiments :
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-3" />
                  <p className="font-semibold">Sans ponts thermiques</p>
                </div>
                <div className="text-center">
                  <Building className="w-12 h-12 text-primary mx-auto mb-3" />
                  <p className="font-semibold">Étanches à l'eau</p>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-3" />
                  <p className="font-semibold">Conformes aux normes européennes</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Nos matériaux isolants de haute qualité</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center bg-white rounded-lg p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-blue-600">EPS</span>
                  </div>
                  <h4 className="font-semibold mb-2">Polystyrène expansé</h4>
                  <p className="text-sm text-muted-foreground">Performance thermique optimale</p>
                </div>
                <div className="text-center bg-white rounded-lg p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-green-600">XPS</span>
                  </div>
                  <h4 className="font-semibold mb-2">Polystyrène extrudé</h4>
                  <p className="text-sm text-muted-foreground">Résistance à l'humidité</p>
                </div>
                <div className="text-center bg-white rounded-lg p-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-purple-600">PU</span>
                  </div>
                  <h4 className="font-semibold mb-2">Mousse polyuréthane</h4>
                  <p className="text-sm text-muted-foreground">Isolation haute performance</p>
                </div>
              </div>
              <p className="text-center text-muted-foreground mt-6">
                Adaptés aux spécificités de chaque projet.
              </p>
            </div>

            <div className="bg-background rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-primary" />
                Une collaboration technique avec votre architecte
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Nous ne remplaçons pas votre architecte. Nous travaillons en étroite collaboration avec lui pour vous proposer des solutions sur mesure :
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Isolation optimisée de l'enveloppe thermique</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Conformité aux normes RTCM</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Conseils en ventilation naturelle (châssis, ouvertures, circulation d'air)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Votre projet */}
      <section id="projets" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 flex items-center justify-center gap-3">
              <Building className="w-10 h-10 text-primary" />
              Les bénéfices pour vous
            </h2>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 hover:shadow-lg transition-shadow bg-green-50 border-green-200">
                <CardContent className="pt-6">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-green-800">1. Santé</h3>
                  </div>
                  <p className="text-lg text-green-700 text-center">
                    Un intérieur sain, sans humidité ni moisissures, pour protéger vos proches.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-8 hover:shadow-lg transition-shadow bg-blue-50 border-blue-200">
                <CardContent className="pt-6">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-10 h-10 text-blue-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-blue-800">2. Économie</h3>
                  </div>
                  <p className="text-lg text-blue-700 text-center">
                    Réduction des pertes énergétiques = économies sur vos factures de chauffage.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-yellow-800">
                <Lightbulb className="w-8 h-8" />
                À ne pas négliger : le choix des châssis
              </h3>
              <p className="text-lg text-yellow-700">
                Pour une performance optimale, vos châssis doivent être équipés de double vitrage.
                Sans cela, l'efficacité globale de votre projet pourrait être compromise.
              </p>
            </div>

            <div className="bg-background rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-primary" />
                Pourquoi choisir <strong>EfficaceBâti</strong> ?
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-lg">Des solutions techniques durables et économiques</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-lg">Une approche collaborative avec votre architecte</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-lg">Une expertise conforme aux standards européens</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-lg">Une réponse adaptée à vos besoins spécifiques</span>
                  </div>
                </div>
              </div>
              <div className="text-center mt-8">
                <Button 
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => scrollToSection('formulaire')}
                >
                  Démarrer mon projet
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Galerie */}
      <section id="galerie" className="py-20 px-6 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Notre Galerie de Projets</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez nos réalisations à travers cette galerie de projets qui témoigne de notre expertise et de notre savoir-faire.
            </p>
          </div>

          {/* Filter Navigation */}
          <div className="flex justify-center mb-12">
            <nav className="inline-flex bg-background rounded-lg border-2 border-primary/20 p-2 shadow-md">
              {photoTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedPhotoType(type)}
                  className={`px-6 py-3 font-semibold transition-all duration-300 rounded-md min-w-[120px] text-center ${
                    selectedPhotoType === type
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-primary hover:bg-primary/10'
                  }`}
                >
                  {type}
                </button>
              ))}
            </nav>
          </div>

          {/* Photos Grid */}
          {photosLoading ? (
            <div className="text-center">
              <p className="text-muted-foreground">Chargement des photos...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPhotos.map((photo) => (
                <div key={photo.id} className="group relative overflow-hidden rounded-lg bg-background shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={photo.url}
                      alt={photo.description || 'Projet de construction'}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                  </div>
                  {photo.description && (
                    <div className="p-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {photo.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {filteredPhotos.length === 0 && !photosLoading && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">Aucune photo disponible pour cette catégorie.</p>
            </div>
          )}
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
          
          {isLoading ? (
            <div className="text-center">
              <p className="text-muted-foreground">Chargement des publications...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {publications?.map((publication) => (
                <Card key={publication.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <div className="aspect-video overflow-hidden">
                    {publication.thumbnail ? (
                      <img 
                        src={publication.thumbnail} 
                        alt={publication.titre}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        <FileText className="w-16 h-16 text-primary" />
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {publication.titre}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {publication.informations}
                    </p>
                    {publication.lien && (
                      <a 
                        href={publication.lien}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-primary text-sm hover:underline"
                      >
                        <span>Lire la suite</span>
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="text-2xl font-bold mb-4">**EfficaceBâti**</div>
              <p className="text-primary-foreground/80 mb-4 leading-relaxed">
                Vers un avenir bâti sur l'efficacité énergétique et la durabilité.
              </p>
              <p className="text-primary-foreground/70 text-sm">
                Spécialistes en construction, rénovation et performance énergétique des bâtiments selon les normes européennes.
              </p>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4 text-lg">Contactez-nous</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary-foreground/80 mt-1 flex-shrink-0" />
                  <div className="text-primary-foreground/80 text-sm">
                    26, Avenue Mers Sultan, Apt 3, 1er Étage<br />
                    Casablanca – Maroc
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary-foreground/80 flex-shrink-0" />
                  <a href="tel:+212642444647" className="text-primary-foreground/80 text-sm hover:text-primary-foreground transition-colors">
                    +212 642-444647
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary-foreground/80 flex-shrink-0" />
                  <a href="mailto:said.harouchi@efficacebati.com" className="text-primary-foreground/80 text-sm hover:text-primary-foreground transition-colors">
                    said.harouchi@efficacebati.com
                  </a>
                </div>
              </div>
            </div>
            
            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4 text-lg">Nos Services</h3>
              <ul className="space-y-2 text-primary-foreground/80 text-sm">
                <li>Isolation thermique</li>
                <li>Construction neuve</li>
                <li>Rénovation énergétique</li>
                <li>Diagnostic thermique</li>
                <li>Conseils techniques</li>
              </ul>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-primary-foreground/20 pt-6 text-center">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} **EfficaceBâti**. Tous droits réservés.
            </p>
          </div>
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
