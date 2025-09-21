
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Image, FileText, Users, Code } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Image,
      title: "Vision par Ordinateur",
      description: "Datasets d'images, vidéos et données 3D pour l'entraînement de modèles de computer vision",
      features: ["Classification d'images", "Détection d'objets", "Segmentation sémantique", "Reconnaissance faciale"],
      color: "codjam-orange"
    },
    {
      icon: FileText,
      title: "Natural Language Processing",
      description: "Corpus textuels, datasets conversationnels et données multilingues pour vos modèles NLP",
      features: ["Analyse de sentiment", "Classification de texte", "Traduction automatique", "Chatbots IA"],
      color: "codjam-teal"
    },
    {
      icon: Users,
      title: "Annotation Humaine",
      description: "Services d'annotation professionnelle par des experts qualifiés pour garantir la qualité",
      features: ["Annotation manuelle", "Validation qualité", "Formats standardisés", "Livraison rapide"],
      color: "codjam-navy"
    },
    {
      icon: Code,
      title: "Données Multimodales",
      description: "Datasets complexes combinant texte, image, audio et vidéo pour des modèles avancés",
      features: ["Audio transcription", "Sous-titrage vidéo", "OCR avancé", "Fusion de modalités"],
      color: "codjam-orange"
    }
  ];

  return (
    <section id="data-hub" className="py-20 bg-gradient-to-b from-white to-codjam-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-codjam-navy-500 mb-6">
            AI Data Hub
          </h2>
          <p className="text-lg text-codjam-navy-600 max-w-3xl mx-auto">
            Notre plateforme couvre tous les types de données nécessaires à l'entraînement 
            de vos modèles d'intelligence artificielle, avec une expertise reconnue 
            dans chaque domaine.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-white/90 backdrop-blur-sm"
              >
                <CardHeader className="pb-4">
                  <div className={`w-14 h-14 rounded-lg bg-${service.color}-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 text-${service.color}-500`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-codjam-navy-500 group-hover:text-codjam-teal-500 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-codjam-navy-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-codjam-navy-600">
                        <div className={`w-2 h-2 rounded-full bg-${service.color}-500 mr-3`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className={`w-full border-${service.color}-500 text-${service.color}-500 hover:bg-${service.color}-50 transition-all duration-300`}
                  >
                    En savoir plus
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-codjam-navy-500 mb-4">
            Besoin d'un Dataset Personnalisé ?
          </h3>
          <p className="text-codjam-navy-600 mb-6 max-w-2xl mx-auto">
            Notre équipe d'experts peut créer des datasets sur mesure pour vos besoins spécifiques. 
            Contactez-nous pour discuter de votre projet.
          </p>
          <Button 
            size="lg"
            className="bg-codjam-gradient text-white px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            style={{ background: 'linear-gradient(270deg, #14afe0 17%, #17a2b8 100%)' }}
          >
            Demander un Devis
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
