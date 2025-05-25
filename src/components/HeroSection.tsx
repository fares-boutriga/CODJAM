
import { Button } from '@/components/ui/button';
import { ArrowDown, Code, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden circuit-pattern">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-codjam-teal-50/50 via-white to-codjam-orange-50/30"></div>
      
      {/* Animated Background Shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-codjam-teal-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-codjam-orange-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-codjam-navy-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-codjam-teal-100 text-codjam-teal-700 mb-8 border border-codjam-teal-200">
            <Code className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Plateforme IA B2B</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-codjam-navy-500">Données IA</span><br />
            <span className="text-gradient">de Haute Qualité</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-codjam-navy-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            CODJAM est la plateforme spécialisée dans la collecte, l'annotation et la gestion 
            de données pour l'entraînement de modèles d'intelligence artificielle. 
            Vision par ordinateur, NLP, données multimodales.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-codjam-orange-500 hover:bg-codjam-orange-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Explorer nos Datasets
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-codjam-teal-500 text-codjam-teal-600 hover:bg-codjam-teal-50 px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              Voir la Démo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-codjam-orange-500 mb-2">1M+</div>
              <div className="text-codjam-navy-600">Images Annotées</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-codjam-teal-500 mb-2">500+</div>
              <div className="text-codjam-navy-600">Datasets Disponibles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-codjam-navy-500 mb-2">50+</div>
              <div className="text-codjam-navy-600">Clients Satisfaits</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-codjam-teal-500" />
      </div>
    </section>
  );
};

export default HeroSection;
