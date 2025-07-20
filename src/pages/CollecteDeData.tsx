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
    question: "Pourquoi choisir Codjam pour la collecte de données ?",
    answer: "Chez Codjam, nous nous engageons à fournir des données fiables, authentiques et adaptées à vos besoins. Notre expertise locale, l'utilisation de technologies avancées et notre approche personnalisée garantissent une collecte de données de haute qualité. Nous nous assurons que les données collectées sont représentatives des réalités africaines, tout en respectant les normes éthiques internationales."
  }, {
    question: "Quels types de données collectez-vous ?",
    answer: "Nous proposons plusieurs types de données, chacune collectée selon des standards stricts pour garantir leur qualité et pertinence. Voici les principaux types : • Données textuelles : Langues locales comme le Swahili, le Haoussa, le Zoulou, l'Arabe africain. • Données audio : Discussions, interviews, discours dans des contextes réels. • Données visuelles (images) : Captures d'images pour des applications variées telles que la reconnaissance faciale ou la réalité virtuelle. • Données vidéo : Captation de scènes quotidiennes ou d'événements culturels pour des applications comme la reconnaissance d'actions."
  }, {
    question: "Quel est le processus de collecte des données ?",
    answer: "Notre processus est rigoureux et structuré, comprenant les étapes suivantes : • Identification des besoins : Nous travaillons avec vous pour définir les objectifs et les spécifications des données. • Collecte sur le terrain : Notre équipe locale collecte des données directement sur le terrain. • Traitement et annotation : Les données sont ensuite traitées et annotées pour assurer leur précision et pertinence. • Livraison : Nous vous fournissons les données collectées, prêtes à être intégrées dans vos projets."
  }, {
    question: "Comment garantissez-vous la qualité des données collectées ?",
    answer: "Nous utilisons des outils de collecte avancés, tout en respectant des standards éthiques et qualitatifs stricts. Notre équipe de terrain, composée de professionnels locaux, connaît les spécificités culturelles, linguistiques et sociales des communautés, ce qui garantit une collecte authentique et précise."
  }, {
    question: "Quelles sont les applications des données collectées ?",
    answer: "Les données collectées par Codjam sont adaptées à une large gamme d'applications, notamment : • Intelligence Artificielle (IA) : Formation de modèles IA pour la reconnaissance vocale, la vision par ordinateur, etc. • Recherche : Collecte de données pour des projets en sciences sociales, santé publique, marketing, et plus. • Éducation : Création de ressources pédagogiques adaptées aux réalités locales. • Technologies émergentes : Utilisation dans des domaines comme la réalité virtuelle, les jeux vidéo et la reconnaissance faciale."
  }, {
    question: "Comment vos données reflètent-elles la diversité culturelle de l'Afrique ?",
    answer: "Nous comprenons l'importance de refléter la richesse linguistique et culturelle de l'Afrique dans nos données. Nos équipes de collecte travaillent dans diverses régions et communautés, capturant des données qui respectent et représentent les spécificités locales. Que ce soit dans les langues, les accents, les comportements ou les traditions, nous veillons à garantir une couverture authentique et fidèle."
  }, {
    question: "Comment puis-je commencer la collecte de données avec Codjam ?",
    answer: "C'est simple ! Il vous suffit de nous contacter via le formulaire sur notre site ou de discuter de votre projet avec l'un de nos experts. Nous travaillerons avec vous pour comprendre vos besoins spécifiques et lancer la collecte de données sur mesure."
  }, {
    question: "Est-ce que Codjam prend en charge la collecte de données dans toute l'Afrique ?",
    answer: "Oui, nous opérons à travers tout le continent africain, de manière flexible et adaptée à chaque environnement, qu'il soit urbain ou rural. Nos équipes locales connaissent parfaitement les contextes géographiques et culturels, ce qui garantit une collecte pertinente et efficace."
  }, {
    question: "Comment puis-je obtenir plus d'informations sur vos services ?",
    answer: "Vous pouvez consulter notre brochure PDF ou demander un rendez-vous pour discuter plus en détail de vos besoins spécifiques. Nous sommes là pour vous accompagner dans la collecte de données adaptées à vos projets."
  }, {
    question: "Est-ce que vous proposez des services personnalisés pour des projets spécifiques ?",
    answer: "Absolument ! Chez Codjam, chaque projet est unique, c'est pourquoi nous offrons des services personnalisés. Nous adaptons la collecte de données à vos objectifs spécifiques, qu'il s'agisse d'un projet en IA, en recherche, ou pour d'autres secteurs."
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

      {/* Section finale : Démarrage */}
      <section className="py-16 bg-gradient-to-br from-codjam-orange-500 to-codjam-teal-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              📩 Besoin de données fiables et contextualisées ?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Grâce à notre solide expérience et à notre ancrage en Afrique, nous vous accompagnons dans la collecte de données pour l'intelligence artificielle, la recherche ou l'innovation. Nous construisons, avec vous, des jeux de données de qualité, adaptés à vos besoins et enracinés dans les réalités du continent. Parlons de votre projet et avançons ensemble vers des solutions utiles, locales et ambitieuses.
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

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-codjam-navy-500 mb-4">
              ❓FAQ - Collecte de Données avec Codjam
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
                    <p className="text-codjam-navy-400 whitespace-pre-line">{item.answer}</p>
                  </CardContent>}
              </Card>)}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-codjam-navy-500 font-semibold mb-4">
              Vous avez d'autres questions ?
            </p>
            <p className="text-codjam-navy-400 mb-6">
              📩 Discutons ensemble de votre projet ! N'hésitez pas à nous contacter pour toute demande ou pour démarrer votre collecte de données
            </p>
            <Button size="lg" className="bg-codjam-orange-500 hover:bg-codjam-orange-600 text-white px-8 py-4">
              Contactez-nous
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default CollecteDeData;