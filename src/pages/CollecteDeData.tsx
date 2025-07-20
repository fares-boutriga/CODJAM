import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Brain, Target, Settings, FileText, Headphones, Image, Video, Search, CheckCircle, Users, Globe, MessageSquare, ChevronLeft, ChevronRight, Download, Mail, Phone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
const CollecteDeData = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showFAQ, setShowFAQ] = useState<number | null>(null);
  const testimonials = [{
    text: "Codjam a transformé notre projet IA grâce à des données africaines authentiques et de haute qualité.",
    author: "Dr. Sarah Mensah",
    company: "Tech4Africa Institute"
  }, {
    text: "Un partenaire de confiance qui comprend les nuances culturelles et linguistiques de nos besoins.",
    author: "Jean-Baptiste Kone",
    company: "StartupAI Mali"
  }, {
    text: "La précision et la contextualisation des données collectées ont dépassé nos attentes.",
    author: "Prof. Aminata Diallo",
    company: "Université de Dakar"
  }];
  const faqItems = [{
    question: "Pourquoi choisir Codjam ?",
    answer: "Notre expertise locale combinée à une technologie avancée nous permet de fournir des données authentiques et contextualisées spécifiques au continent africain."
  }, {
    question: "Quels types de données collectez-vous ?",
    answer: "Nous collectons des données textuelles, audio, visuelles et vidéo dans plus de 50 langues africaines, couvrant divers domaines culturels et techniques."
  }, {
    question: "Quel est le processus ?",
    answer: "Notre processus en 4 étapes : identification des besoins, collecte sur le terrain, traitement et annotation, puis livraison sécurisée."
  }, {
    question: "Comment garantissez-vous la qualité des données ?",
    answer: "Nous appliquons des protocoles rigoureux de validation, avec double vérification par nos experts locaux et contrôle qualité automatisé."
  }, {
    question: "Quelles sont les applications des données ?",
    answer: "NLP, vision par ordinateur, santé, marketing, éducation, sciences sociales, préservation du patrimoine culturel et bien plus."
  }, {
    question: "Comment représentez-vous la diversité africaine ?",
    answer: "Nous travaillons avec des collecteurs locaux dans 15 pays africains pour assurer une représentation authentique et équitable."
  }, {
    question: "Comment démarrer un projet ?",
    answer: "Contactez-nous pour un audit gratuit de vos besoins. Nous proposons ensuite un devis personnalisé sous 48h."
  }, {
    question: "Quelles zones géographiques couvrez-vous ?",
    answer: "Afrique de l'Ouest, Centrale, de l'Est et du Nord, avec une expertise particulière dans les régions francophones et anglophones."
  }, {
    question: "Où obtenir plus d'informations ?",
    answer: "Téléchargez notre brochure complète ou contactez directement nos experts pour une consultation personnalisée."
  }, {
    question: "Proposez-vous des services personnalisés ?",
    answer: "Oui, chaque projet est unique. Nous adaptons nos méthodes de collecte selon vos besoins spécifiques et votre secteur d'activité."
  }];
  const nextTestimonial = () => {
    setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };
  return <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 lg:pt-24 pb-16 bg-gradient-to-br from-codjam-orange-50 to-codjam-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-codjam-navy-500 mb-6">
              🎯 Collecte de Données africaines précises pour des{' '}
              <span className="text-gradient bg-gradient-to-r from-codjam-orange-500 via-codjam-teal-500 to-codjam-navy-500 bg-clip-text text-transparent">
                Applications Innovantes
              </span>
            </h1>
            <p className="text-xl text-codjam-navy-400 mb-8 max-w-3xl mx-auto">
              Des données locales, authentiques et représentatives pour nourrir vos projets en intelligence artificielle, 
              recherche, éducation et bien plus.
            </p>
            <Button size="lg" className="bg-codjam-orange-500 hover:bg-codjam-orange-600 text-white px-8 py-4 text-lg">
              📩 Discutons de votre projet
            </Button>
            <div className="mt-4">
              <Button variant="outline" size="lg" className="border-codjam-teal-500 text-codjam-teal-500">
                Start collecting data now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-codjam-navy-500 mb-6">
              🔍 Des Données Fiables pour un Impact Réel
            </h2>
            <p className="text-lg text-codjam-navy-400 leading-relaxed">
              Chez CODJAM, nous croyons que la qualité des données détermine le succès de vos projets. 
              Notre approche rigoureuse de collecte combine expertise locale et méthodologies avancées pour 
              vous fournir des données africaines authentiques, contextualisées et prêtes à alimenter vos 
              innovations les plus ambitieuses.
            </p>
          </div>
        </div>
      </section>

      {/* Pourquoi choisir Codjam */}
      <section className="py-16 bg-codjam-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-codjam-navy-500 mb-4">
              💡 Une Approche Unique de la Collecte de Données
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center border-codjam-teal-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-codjam-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-codjam-orange-500" />
                </div>
                <CardTitle className="text-codjam-navy-500">🧠 Expertise locale</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-codjam-navy-400">
                  Notre réseau de collecteurs natifs maîtrise les subtilités culturelles et linguistiques 
                  de chaque région africaine.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-codjam-teal-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-codjam-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-codjam-teal-500" />
                </div>
                <CardTitle className="text-codjam-navy-500">🛠️ Technologie avancée</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-codjam-navy-400">
                  Outils d'annotation IA, plateforme de collecte mobile et processus de validation 
                  automatisés pour une qualité optimale.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-codjam-teal-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-codjam-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-codjam-navy-500" />
                </div>
                <CardTitle className="text-codjam-navy-500">🎯 Services personnalisés</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-codjam-navy-400">
                  Chaque projet est unique. Nous adaptons nos méthodes selon vos besoins spécifiques 
                  et contraintes sectorielles.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Données pour l'IA et au-delà */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-codjam-navy-500 mb-6">
              🤖 Des Données qui Nourrissent l'Intelligence Artificielle – et bien plus
            </h2>
            <p className="text-lg text-codjam-navy-400 leading-relaxed">
              Nos données alimentent une multitude d'applications : modèles NLP multilingues, systèmes de 
              reconnaissance vocale, solutions de santé digitale, outils marketing culturellement adaptés, 
              plateformes éducatives contextualisées, recherches en sciences sociales, et projets de 
              préservation du patrimoine africain. Chaque dataset est conçu pour maximiser la performance 
              et la pertinence de vos solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Nos Domaines de Collecte */}
      <section className="py-16 bg-codjam-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-codjam-navy-500 mb-4">
              📊 Nos Types de Données Collectées
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center border-codjam-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-codjam-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-codjam-orange-500" />
                </div>
                <CardTitle className="text-codjam-navy-500">📝 Données textuelles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-codjam-navy-400">
                  Corpus linguistiques, transcriptions, contenus culturels dans 50+ langues africaines
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-codjam-teal-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-codjam-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="w-8 h-8 text-codjam-teal-500" />
                </div>
                <CardTitle className="text-codjam-navy-500">🎧 Données audio</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-codjam-navy-400">
                  Enregistrements vocaux, musiques traditionnelles, soundscapes urbains et ruraux
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-codjam-navy-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-codjam-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Image className="w-8 h-8 text-codjam-navy-500" />
                </div>
                <CardTitle className="text-codjam-navy-500">🖼️ Données visuelles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-codjam-navy-400">
                  Photos contextuelles, objets culturels, expressions faciales, scènes de vie quotidienne
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-codjam-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-codjam-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="w-8 h-8 text-codjam-orange-500" />
                </div>
                <CardTitle className="text-codjam-navy-500">🎥 Données vidéo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-codjam-navy-400">
                  Séquences comportementales, gestes culturels, activités professionnelles, événements
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Processus de Collecte */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-codjam-navy-500 mb-4">
              🧬 Notre Processus de Collecte
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-codjam-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-codjam-orange-500" />
                </div>
                <h3 className="font-semibold text-codjam-navy-500 mb-2">1. Identification des besoins</h3>
                <p className="text-sm text-codjam-navy-400">Analyse détaillée de vos objectifs et spécifications</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-codjam-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-codjam-teal-500" />
                </div>
                <h3 className="font-semibold text-codjam-navy-500 mb-2">2. Collecte sur le terrain</h3>
                <p className="text-sm text-codjam-navy-400">Mobilisation de nos équipes locales expertes</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-codjam-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-codjam-navy-500" />
                </div>
                <h3 className="font-semibold text-codjam-navy-500 mb-2">3. Traitement et annotation</h3>
                <p className="text-sm text-codjam-navy-400">Nettoyage, annotation et validation qualité</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-codjam-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-codjam-orange-500" />
                </div>
                <h3 className="font-semibold text-codjam-navy-500 mb-2">4. Livraison</h3>
                <p className="text-sm text-codjam-navy-400">Données prêtes à l'emploi dans vos formats préférés</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages Clients */}
      <section className="py-16 bg-codjam-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-codjam-navy-500 mb-4">
              👥 Témoignages Clients
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <Card className="text-center p-8 border-codjam-teal-200">
                <CardContent>
                  <blockquote className="text-lg text-codjam-navy-500 mb-6 italic">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>
                  <div className="text-codjam-navy-400">
                    <p className="font-semibold">{testimonials[currentTestimonial].author}</p>
                    <p className="text-sm">{testimonials[currentTestimonial].company}</p>
                  </div>
                </CardContent>
              </Card>
              
              <Button variant="outline" size="icon" className="absolute left-4 top-1/2 transform -translate-y-1/2" onClick={prevTestimonial}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <Button variant="outline" size="icon" className="absolute right-4 top-1/2 transform -translate-y-1/2" onClick={nextTestimonial}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => <button key={index} className={`w-3 h-3 rounded-full ${index === currentTestimonial ? 'bg-codjam-teal-500' : 'bg-gray-300'}`} onClick={() => setCurrentTestimonial(index)} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Culturel & Technologique */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-codjam-navy-500 mb-6">
              🌍 Préserver, Innover, Transformer
            </h2>
            <p className="text-lg text-codjam-navy-400 leading-relaxed">Chez Codjam, nous croyons que la collecte de données peut aussi servir à préserver le patrimoine africain. Langues en voie de disparition, objets traditionnels, expressions culturelles – nous contribuons à leur sauvegarde numérique tout en créant des datasets puissants pour les technologies de demain.</p>
          </div>
        </div>
      </section>

      {/* Extras Section */}
      <section className="py-16 bg-codjam-subtle">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Brochure téléchargeable */}
            <Card className="text-center border-codjam-orange-200">
              <CardHeader>
                <Download className="w-12 h-12 text-codjam-orange-500 mx-auto mb-4" />
                <CardTitle className="text-codjam-navy-500">📄 Ressources</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-codjam-navy-400 mb-4">
                  Téléchargez notre brochure complète, cas d'usage et liste des langues supportées
                </p>
                <Button variant="outline" className="border-codjam-orange-500 text-codjam-orange-500">
                  Télécharger
                </Button>
              </CardContent>
            </Card>

            {/* Logos partenaires */}
            <Card className="text-center border-codjam-teal-200">
              <CardHeader>
                <Globe className="w-12 h-12 text-codjam-teal-500 mx-auto mb-4" />
                <CardTitle className="text-codjam-navy-500">🤝 Partenaires</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-codjam-navy-400 mb-4">
                  Ils nous font confiance pour leurs projets de données africaines
                </p>
                <div className="flex justify-center space-x-2">
                  <Badge variant="outline" className="text-xs">Tech4Africa</Badge>
                  <Badge variant="outline" className="text-xs">StartupAI</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Contact rapide */}
            <Card className="text-center border-codjam-navy-200">
              <CardHeader>
                <MessageSquare className="w-12 h-12 text-codjam-navy-500 mx-auto mb-4" />
                <CardTitle className="text-codjam-navy-500">📬 Contact Rapide</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="w-4 h-4 text-codjam-navy-400" />
                    <span className="text-codjam-navy-400">contact@codjam.ai</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="w-4 h-4 text-codjam-navy-400" />
                    <span className="text-codjam-navy-400">+33 1 23 45 67 89</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-codjam-navy-500 mb-4">
              ❓ Questions Fréquentes
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => <Card key={index} className="border-codjam-teal-200">
                <CardHeader className="cursor-pointer" onClick={() => setShowFAQ(showFAQ === index ? null : index)}>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-codjam-navy-500 text-lg">{item.question}</CardTitle>
                    <ChevronRight className={`w-5 h-5 text-codjam-teal-500 transition-transform ${showFAQ === index ? 'rotate-90' : ''}`} />
                  </div>
                </CardHeader>
                {showFAQ === index && <CardContent>
                    <p className="text-codjam-navy-400">{item.answer}</p>
                  </CardContent>}
              </Card>)}
          </div>
        </div>
      </section>

      {/* Section finale : Démarrage */}
      <section className="py-16 bg-gradient-to-br from-codjam-orange-500 to-codjam-teal-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              📩 Besoin de données fiables et contextualisées ?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Démarrons ensemble votre projet de collecte de données africaines. 
              Nos experts vous accompagnent de l'analyse des besoins à la livraison finale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-codjam-orange-500 hover:bg-gray-50 px-8 py-4 text-lg">
                ➡️ Talk to an expert
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                Join our Talent
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default CollecteDeData;