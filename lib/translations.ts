export const translations = {
  en: {
    languageToggle: 'Español',
    hoursLabel: 'Open Daily',
    nav: {
      '/hours-location': 'Hours & Location',
      '/photos': 'Photos',
      '/#machines-pricing-heading': 'Machines & Pricing',
      '/faq': 'FAQ',
      '/contact': 'Contact',
    },
    hero: {
      getDirections: 'Get Directions',
      viewMorePhotos: 'View More Photos',
      prevPhoto: 'Previous photo',
      nextPhoto: 'Next photo',
    },
    features: {
      badge: 'Why Manor Laundromat',
      heading: 'A Better Laundromat Experience in Lancaster, PA',
      subheading:
        'A clean, upgraded self-service laundry with large-capacity machines and simple amenities designed to make laundry day easier.',
      items: [
        {
          title: 'Brand New, Large Machines',
          description:
            'Featuring Dexter X-Series commercial washers up to 80 lbs. and 50 lb. dryers. Built to handle larger and bulkier loads.',
        },
        {
          title: 'Fully Renovated Space',
          description:
            'Enjoy a refreshed, well-lit, and climate-controlled laundromat designed for comfort, safety, and cleanliness.',
        },
        {
          title: 'Flexible Payment Options',
          description:
            'Multiple ways to pay, including cash, card, or smartphone via an app, powered by the Laundroworks payment system.',
        },
        {
          title: 'Fast, Efficient Wash & Dry',
          description:
            'Powerful wash and dry performance with quicker cycle times to help you get in and out faster - even on busy days.',
        },
        {
          title: 'Free Wi-Fi & Comfortable Seating',
          description:
            'Relax, stream, or get work done while your laundry runs - with free Wi-Fi and seating designed for longer loads.',
        },
        {
          title: 'Convenient Lancaster Location',
          description:
            'Located on Manor Street in Lancaster, PA with ample parking — minutes from Stone Mill Plaza and Downtown Lancaster.',
        },
      ],
    },
    pricing: {
      heading: 'Washer Sizes & Prices',
      subheading: 'Find the right washer for your laundry needs',
      featureLabels: ['Load Capacity', 'Units in Store', 'Ideal For', 'Comforter Friendly', 'Bulky Items', 'Payment Options'],
      featureKeys: ['loadCapacity', 'machinesAvailable', 'idealFor', 'comforterFriendly', 'bulkyItems', 'paymentOptions'],
      planSizeLabels: { '30': 'Small', '40': 'Medium', '60': 'Large', '80': 'Extra Large' } as Record<string, string>,
      washerLabel: 'Washer',
      plans: [
        {
          name: '30 lb Washer',
          price: '$4.75',
          period: 'per cycle',
          features: {
            loadCapacity: 'Small-Medium',
            machinesAvailable: 5,
            idealFor: 'Everyday laundry, towels',
            comforterFriendly: false,
            bulkyItems: false,
            paymentOptions: 'Card, Cash, or Smartphone',
          },
        },
        {
          name: '40 lb Washer',
          price: '$6.25',
          period: 'per cycle',
          features: {
            loadCapacity: 'Medium-Large',
            machinesAvailable: 10,
            idealFor: 'Large family loads',
            comforterFriendly: false,
            bulkyItems: true,
            paymentOptions: 'Card, Cash, or Smartphone',
          },
        },
        {
          name: '60 lb Washer',
          price: '$8.00',
          period: 'per cycle',
          features: {
            loadCapacity: 'Large',
            machinesAvailable: 3,
            idealFor: 'Comforters, blankets',
            comforterFriendly: true,
            bulkyItems: true,
            paymentOptions: 'Card, Cash, or Smartphone',
          },
        },
        {
          name: '80 lb Washer',
          price: '$11.00',
          period: 'per cycle',
          features: {
            loadCapacity: 'Extra Large',
            machinesAvailable: 2,
            idealFor: 'Bulky items, oversized loads',
            comforterFriendly: true,
            bulkyItems: true,
            paymentOptions: 'Card, Cash, or Smartphone',
          },
        },
      ],
    },
    dryers: {
      heading: 'Dryer Sizes & Prices',
      subheading: 'All dryers hold up to 50 lbs, enough room for a full load, comforters, and bulky items.',
      startLabel: 'Start',
      addTimeLabel: 'Add Time',
      minutes30: '30 minutes',
      per6minutes: 'per 6 minutes',
    },
    faq: {
      heading: 'Frequently Asked Questions',
      subheading: 'Everything you need to know for a smooth laundry day',
      notFound: "Didn't find the answer you were looking for?",
      contactLink: 'Contact us',
      tabs: [
        {
          name: 'General',
          value: 'general',
          faqs: [
            { id: 'hours', question: 'What are your hours?', answer: 'We are open every day from 6:00 AM to 10:00 PM.' },
            { id: 'location', question: 'Where are you located?', answer: 'You can find us at 876 Manor Street, Lancaster, PA 17603.' },
            { id: 'parking', question: 'Is parking available?', answer: 'Yes, there is convenient on-site parking available for customers.' },
          ],
        },
        {
          name: 'Machines',
          value: 'machines',
          faqs: [
            { id: 'sizes', question: 'What washer sizes do you offer?', answer: 'We have 30 lb, 40 lb, 60 lb, and 80 lb washers for different load sizes.' },
            { id: 'comforters', question: 'Can I wash comforters and bulky items?', answer: 'Yes. Our 60 lb and 80 lb machines are ideal for comforters and oversized loads.' },
            { id: 'dryers', question: 'How are dryers priced?', answer: 'Dryers are priced at a flat rate of $1.75 for every 30 minutes. Additional time can be added at $0.25 per 6 minutes' },
          ],
        },
        {
          name: 'Payment',
          value: 'payment',
          faqs: [
            { id: 'payment-methods', question: 'What payment methods do you accept?', answer: 'We accept cash and card (credit & debit).' },
            { id: 'attendant', question: 'Is there someone available to help?', answer: 'If you need help while onsite, call us at (717) 925-7480 and we can assist.' },
          ],
        },
      ],
    },
    contact: {
      heading: 'Contact Us',
      reviewBadge: 'Leave a Review',
      reviewTitle: 'Enjoyed your visit?',
      reviewSubtitle: "Reviews help other Lancaster locals find us. We'd love to hear about your experience.",
      reviewLink: 'Write a Google Review',
      labels: {
        phone: 'Phone',
        address: 'Address',
        directions: 'Directions',
        instagram: 'Instagram',
      },
      directionsLink: 'Open in Google Maps',
    },
    hoursLocation: {
      heading: 'Hours & Location',
      subheading: 'Find us quickly, check our hours, and get directions in one tap.',
      visitHeading: 'Visit Your Lancaster, PA Laundromat',
      openDailyLabel: 'Open Daily:',
      openDailyHours: '6:00 AM - 10:00 PM',
      addressLabel: 'Address:',
      address: '876 Manor Street, Lancaster, PA 17603',
      getDirections: 'Get Directions',
    },
    photos: {
      heading: 'Photos - Take a Look Inside!',
      prevPhoto: 'Previous photo',
      nextPhoto: 'Next photo',
      close: 'Close',
    },
    footer: {
      openDaily: 'Open Daily: 6:00 AM – 10:00 PM',
      rights: 'All rights reserved.',
      links: {
        '/': 'Home',
        '/hours-location': 'Hours & Location',
        '/faq': 'FAQ',
        '/contact': 'Contact',
      } as Record<string, string>,
    },
  },
  es: {
    languageToggle: 'English',
    hoursLabel: 'Abierto a Diario',
    nav: {
      '/hours-location': 'Horario y Ubicación',
      '/photos': 'Fotos',
      '/#machines-pricing-heading': 'Lavadoras y Precios',
      '/faq': 'Preguntas Frecuentes',
      '/contact': 'Contacto',
    },
    hero: {
      getDirections: 'Cómo Llegar',
      viewMorePhotos: 'Ver Más Fotos',
      prevPhoto: 'Foto anterior',
      nextPhoto: 'Foto siguiente',
    },
    features: {
      badge: 'Por Qué Manor Laundromat',
      heading: 'Una Mejor Experiencia de Lavandería en Lancaster, PA',
      subheading:
        'Una lavandería de autoservicio limpia y renovada con máquinas de gran capacidad y servicios sencillos diseñados para facilitar el día de lavandería.',
      items: [
        {
          title: 'Máquinas Nuevas y de Gran Tamaño',
          description:
            'Con lavadoras comerciales Dexter X-Series de hasta 80 lbs. y secadoras de 50 lbs. Diseñadas para manejar cargas más grandes y voluminosas.',
        },
        {
          title: 'Espacio Completamente Renovado',
          description:
            'Disfrute de una lavandería renovada, bien iluminada y con control de temperatura diseñada para su comodidad, seguridad y limpieza.',
        },
        {
          title: 'Opciones de Pago Flexibles',
          description:
            'Múltiples formas de pago, incluyendo efectivo, tarjeta o teléfono inteligente a través de una aplicación, con el sistema de pago Laundroworks.',
        },
        {
          title: 'Lavado y Secado Rápido y Eficiente',
          description:
            'Potente rendimiento de lavado y secado con tiempos de ciclo más rápidos para ayudarle a terminar antes, incluso en días ocupados.',
        },
        {
          title: 'Wi-Fi Gratis y Asientos Cómodos',
          description:
            'Relájese, transmita contenido o trabaje mientras su ropa se lava, con Wi-Fi gratis y asientos diseñados para cargas largas.',
        },
        {
          title: 'Ubicación Conveniente en Lancaster',
          description:
            'Ubicado en Manor Street en Lancaster, PA con amplio estacionamiento — a minutos de Stone Mill Plaza y el Centro de Lancaster.',
        },
      ],
    },
    pricing: {
      heading: 'Tamaños y Precios de Lavadoras',
      subheading: 'Encuentre la lavadora adecuada para sus necesidades',
      featureLabels: ['Capacidad de Carga', 'Unidades en Tienda', 'Ideal Para', 'Apta para Edredones', 'Artículos Voluminosos', 'Opciones de Pago'],
      featureKeys: ['loadCapacity', 'machinesAvailable', 'idealFor', 'comforterFriendly', 'bulkyItems', 'paymentOptions'],
      planSizeLabels: { '30': 'Pequeña', '40': 'Mediana', '60': 'Grande', '80': 'Extra Grande' } as Record<string, string>,
      washerLabel: 'Lavadora',
      plans: [
        {
          name: 'Lavadora de 30 lb',
          price: '$4.75',
          period: 'por ciclo',
          features: {
            loadCapacity: 'Pequeña-Mediana',
            machinesAvailable: 5,
            idealFor: 'Ropa diaria, toallas',
            comforterFriendly: false,
            bulkyItems: false,
            paymentOptions: 'Tarjeta, Efectivo o Teléfono',
          },
        },
        {
          name: 'Lavadora de 40 lb',
          price: '$6.25',
          period: 'por ciclo',
          features: {
            loadCapacity: 'Mediana-Grande',
            machinesAvailable: 10,
            idealFor: 'Cargas grandes de familia',
            comforterFriendly: false,
            bulkyItems: true,
            paymentOptions: 'Tarjeta, Efectivo o Teléfono',
          },
        },
        {
          name: 'Lavadora de 60 lb',
          price: '$8.00',
          period: 'por ciclo',
          features: {
            loadCapacity: 'Grande',
            machinesAvailable: 3,
            idealFor: 'Edredones, mantas',
            comforterFriendly: true,
            bulkyItems: true,
            paymentOptions: 'Tarjeta, Efectivo o Teléfono',
          },
        },
        {
          name: 'Lavadora de 80 lb',
          price: '$11.00',
          period: 'por ciclo',
          features: {
            loadCapacity: 'Extra Grande',
            machinesAvailable: 2,
            idealFor: 'Artículos voluminosos, cargas grandes',
            comforterFriendly: true,
            bulkyItems: true,
            paymentOptions: 'Tarjeta, Efectivo o Teléfono',
          },
        },
      ],
    },
    dryers: {
      heading: 'Tamaños y Precios de Secadoras',
      subheading:
        'Todas las secadoras tienen capacidad de hasta 50 lbs, espacio suficiente para una carga completa, edredones y artículos voluminosos.',
      startLabel: 'Inicio',
      addTimeLabel: 'Agregar Tiempo',
      minutes30: '30 minutos',
      per6minutes: 'por 6 minutos',
    },
    faq: {
      heading: 'Preguntas Frecuentes',
      subheading: 'Todo lo que necesita saber para un día de lavandería sin problemas',
      notFound: '¿No encontró la respuesta que buscaba?',
      contactLink: 'Contáctenos',
      tabs: [
        {
          name: 'General',
          value: 'general',
          faqs: [
            { id: 'hours', question: '¿Cuáles son sus horarios?', answer: 'Estamos abiertos todos los días de 6:00 AM a 10:00 PM.' },
            { id: 'location', question: '¿Dónde están ubicados?', answer: 'Nos encuentra en 876 Manor Street, Lancaster, PA 17603.' },
            { id: 'parking', question: '¿Hay estacionamiento disponible?', answer: 'Sí, hay un estacionamiento conveniente disponible para los clientes.' },
          ],
        },
        {
          name: 'Máquinas',
          value: 'machines',
          faqs: [
            { id: 'sizes', question: '¿Qué tamaños de lavadoras ofrecen?', answer: 'Tenemos lavadoras de 30 lb, 40 lb, 60 lb y 80 lb para diferentes tamaños de carga.' },
            { id: 'comforters', question: '¿Puedo lavar edredones y artículos voluminosos?', answer: 'Sí. Nuestras máquinas de 60 lb y 80 lb son ideales para edredones y cargas de gran tamaño.' },
            { id: 'dryers', question: '¿Cómo se cobran los secadores?', answer: 'Los secadores tienen un precio fijo de $1.75 por cada 30 minutos. Se puede agregar tiempo adicional a $0.25 por cada 6 minutos.' },
          ],
        },
        {
          name: 'Pago',
          value: 'payment',
          faqs: [
            { id: 'payment-methods', question: '¿Qué métodos de pago aceptan?', answer: 'Aceptamos efectivo y tarjeta (crédito y débito).' },
            { id: 'attendant', question: '¿Hay alguien disponible para ayudar?', answer: 'Si necesita ayuda en el lugar, llámenos al (717) 925-7480 y le ayudaremos.' },
          ],
        },
      ],
    },
    contact: {
      heading: 'Contáctenos',
      reviewBadge: 'Deje una Reseña',
      reviewTitle: '¿Disfrutó su visita?',
      reviewSubtitle: 'Las reseñas ayudan a otros residentes de Lancaster a encontrarnos. Nos encantaría escuchar sobre su experiencia.',
      reviewLink: 'Escribir una Reseña en Google',
      labels: {
        phone: 'Teléfono',
        address: 'Dirección',
        directions: 'Indicaciones',
        instagram: 'Instagram',
      },
      directionsLink: 'Abrir en Google Maps',
    },
    hoursLocation: {
      heading: 'Horario y Ubicación',
      subheading: 'Encuéntrenos fácilmente, consulte nuestros horarios y obtenga indicaciones con un toque.',
      visitHeading: 'Visite Su Lavandería en Lancaster, PA',
      openDailyLabel: 'Abierto a Diario:',
      openDailyHours: '6:00 AM - 10:00 PM',
      addressLabel: 'Dirección:',
      address: '876 Manor Street, Lancaster, PA 17603',
      getDirections: 'Cómo Llegar',
    },
    photos: {
      heading: '¡Fotos - Echa un Vistazo Adentro!',
      prevPhoto: 'Foto anterior',
      nextPhoto: 'Foto siguiente',
      close: 'Cerrar',
    },
    footer: {
      openDaily: 'Abierto a Diario: 6:00 AM – 10:00 PM',
      rights: 'Todos los derechos reservados.',
      links: {
        '/': 'Inicio',
        '/hours-location': 'Horario y Ubicación',
        '/faq': 'Preguntas Frecuentes',
        '/contact': 'Contacto',
      } as Record<string, string>,
    },
  },
}

export type Translations = typeof translations.en
