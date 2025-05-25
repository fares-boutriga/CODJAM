
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, ArrowDown } from 'lucide-react';

const DatasetsSection = () => {
  const featuredDatasets = [
    {
      title: "African Faces Recognition",
      description: "Dataset de 100K visages africains avec annotations détaillées pour la reconnaissance faciale éthique",
      size: "15GB",
      samples: "100,000",
      type: "Images",
      category: "Computer Vision",
      price: "€2,500",
      tags: ["Reconnaissance faciale", "Diversité", "Éthique IA"]
    },
    {
      title: "Francophone NLP Corpus",
      description: "Corpus multilingue français-africain pour modèles de langage avec 50M de tokens",
      size: "5GB",
      samples: "50M tokens",
      type: "Texte",
      category: "NLP",
      price: "€1,800",
      tags: ["Français", "Multilingue", "Corpus"]
    },
    {
      title: "African Wildlife 4K",
      description: "Images 4K de la faune africaine avec bounding boxes pour détection d'animaux",
      size: "25GB",
      samples: "75,000",
      type: "Images",
      category: "Computer Vision",
      price: "€3,200",
      tags: ["Faune", "4K", "Conservation"]
    },
    {
      title: "Urban Africa Street View",
      description: "Dataset de scènes urbaines africaines pour véhicules autonomes et navigation",
      size: "40GB",
      samples: "200,000",
      type: "Images/Vidéos",
      category: "Computer Vision",
      price: "€4,500",
      tags: ["Urbain", "Navigation", "Véhicules"]
    }
  ];

  const categories = [
    { name: "Computer Vision", count: 156, color: "bg-codjam-orange-100 text-codjam-orange-700" },
    { name: "NLP", count: 89, color: "bg-codjam-teal-100 text-codjam-teal-700" },
    { name: "Audio", count: 45, color: "bg-codjam-navy-100 text-codjam-navy-700" },
    { name: "Multimodal", count: 23, color: "bg-purple-100 text-purple-700" }
  ];

  return (
    <section id="datasets" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-codjam-navy-500 mb-6">
            Datasets Premium
          </h2>
          <p className="text-lg text-codjam-navy-600 max-w-3xl mx-auto mb-8">
            Découvrez notre collection de datasets haute qualité, prêts à l'emploi 
            ou personnalisables selon vos besoins spécifiques.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-codjam-navy-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher un dataset (ex: reconnaissance faciale, NLP français...)"
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-codjam-teal-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className={`${category.color} px-4 py-2 text-sm font-medium cursor-pointer hover:shadow-md transition-all duration-200`}
            >
              {category.name} ({category.count})
            </Badge>
          ))}
        </div>

        {/* Featured Datasets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {featuredDatasets.map((dataset, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1 bg-white"
            >
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="text-codjam-teal-600 border-codjam-teal-600">
                    {dataset.category}
                  </Badge>
                  <span className="text-2xl font-bold text-codjam-orange-500">{dataset.price}</span>
                </div>
                <CardTitle className="text-xl font-bold text-codjam-navy-500 group-hover:text-codjam-teal-500 transition-colors">
                  {dataset.title}
                </CardTitle>
                <CardDescription className="text-codjam-navy-600">
                  {dataset.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Dataset Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-lg font-bold text-codjam-navy-500">{dataset.size}</div>
                    <div className="text-sm text-codjam-navy-600">Taille</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-codjam-navy-500">{dataset.samples}</div>
                    <div className="text-sm text-codjam-navy-600">Échantillons</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-codjam-navy-500">{dataset.type}</div>
                    <div className="text-sm text-codjam-navy-600">Type</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {dataset.tags.map((tag, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary" 
                      className="bg-codjam-teal-50 text-codjam-teal-700 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    className="flex-1 border-codjam-teal-500 text-codjam-teal-500 hover:bg-codjam-teal-50"
                  >
                    Aperçu
                  </Button>
                  <Button 
                    className="flex-1 bg-codjam-orange-500 hover:bg-codjam-orange-600 text-white"
                  >
                    <ArrowDown className="w-4 h-4 mr-2" />
                    Télécharger
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-codjam-teal-500 text-codjam-teal-600 hover:bg-codjam-teal-50 px-8 py-3 font-semibold"
          >
            Voir Tous les Datasets ({categories.reduce((acc, cat) => acc + cat.count, 0)})
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DatasetsSection;
