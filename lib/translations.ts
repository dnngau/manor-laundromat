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
            { id: 'parking', question: 'Is parking available?', answer: 'Yes. We have free, convenient on-site parking.' },
            { id: 'wifi', question: 'Is there free Wi-Fi?', answer: 'Yes, free Wi-Fi is available for all customers. Stream, scroll, or get some work done while your laundry runs.' },
            { id: 'climate', question: 'Is the facility climate-controlled?', answer: "Yes. We're air-conditioned in the summer and heated in the winter, so it's a comfortable place to spend your time year-round." },
            { id: 'supplies', question: 'Do you sell laundry detergent or supplies?', answer: "Yes! Our on-site vending machine carries detergent, fabric softener, dryer sheets, and more, including familiar brands like Ariel, Suavitel, and Tide. Forgot something at home? We've got you covered." },
            { id: 'holidays', question: 'Are you open on holidays?', answer: "Yes, we're open 6 AM to 10 PM every day of the year, including holidays. If we ever need to close or adjust hours, we'll post it at the laundromat and on our Instagram ({{instagram}})." },
            { id: 'last-wash', question: "What's the latest I can start a wash?", answer: 'We close at 10 PM, so we recommend starting your last wash by 9:00 PM.' },
            { id: 'bathroom', question: 'Is there a bathroom on-site?', answer: "Not yet, but a bathroom is part of an upcoming remodel and we know it's important. Thanks for bearing with us in the meantime." },
            { id: 'security', question: 'Is the laundromat secure?', answer: 'Yes. The facility has security cameras throughout, and the parking lot and interior are well-lit during all operating hours. We want everyone to feel comfortable doing laundry, day or night.' },
            { id: 'lost-items', question: 'What if I leave clothes behind?', answer: "We have security cameras and will do our best to help track down anything left behind. Give us a call at (717) 925-7480 and we'll check. That said, Manor Laundromat isn't responsible for lost or unattended belongings, so please keep an eye on your laundry while you're here." },
          ],
        },
        {
          name: 'Payment',
          value: 'payment',
          faqs: [
            { id: 'payment-methods', question: 'What payment methods do you accept?', answer: 'We accept cash, card (credit & debit), and smartphone payments via the LaundryCat app.' },
            { id: 'attendant', question: 'Is there someone available to help?', answer: "Yes, there are a few ways to reach us. Call (717) 925-7480 during open hours for machine issues, refunds, or general questions. For non-urgent questions, DM us on Instagram {{instagram}}. For anything we can't resolve over the phone, we'll come on-site as quickly as we can." },
            { id: 'attendant-on-site', question: 'Is there an attendant on-site?', answer: "No. Manor Laundromat is a self-service laundromat, so there's no attendant on-site — but we're always here to help. Call us at (717) 925-7480 during open hours with any questions." },
            { id: 'promotions', question: 'Do you offer any promotions or rewards?', answer: "Yes! Load $20 onto your laundry card or LaundryCat app and get a $4 bonus — that's an instant 20% boost on every reload. We also run additional promotions throughout the year, so follow {{instagram}} on Instagram to catch every deal." },
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
        'Una lavandería de autoservicio limpia y renovada con máquinas de gran capacidad y comodidades sencillas diseñadas para facilitar el día de lavandería.',
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
            { id: 'parking', question: '¿Hay estacionamiento disponible?', answer: 'Sí. Tenemos estacionamiento gratuito y conveniente en el local.' },
            { id: 'wifi', question: '¿Hay Wi-Fi gratuito disponible?', answer: 'Sí, ofrecemos Wi-Fi gratuito para todos los clientes. Transmita, navegue o trabaje mientras su ropa se lava.' },
            { id: 'climate', question: '¿Las instalaciones tienen control de temperatura?', answer: 'Sí. Tenemos aire acondicionado en verano y calefacción en invierno, así que es un lugar cómodo para pasar el tiempo durante todo el año.' },
            { id: 'supplies', question: '¿Venden detergente o artículos de lavandería?', answer: '¡Sí! Nuestra máquina expendedora en el local ofrece detergente, suavizante, hojas para secadora y más, incluyendo marcas conocidas como Ariel, Suavitel y Tide. ¿Olvidó algo en casa? Lo tenemos cubierto.' },
            { id: 'holidays', question: '¿Abren los días festivos?', answer: 'Sí, abrimos de 6 AM a 10 PM todos los días del año, incluidos los días festivos. Si alguna vez necesitamos cerrar o cambiar el horario, lo publicaremos en la lavandería y en nuestro Instagram ({{instagram}}).' },
            { id: 'last-wash', question: '¿Cuál es la última hora para empezar a lavar?', answer: 'Cerramos a las 10 PM, así que recomendamos comenzar su última lavada antes de las 9:00 PM.' },
            { id: 'bathroom', question: '¿Hay baño en el local?', answer: 'Todavía no, pero un baño es parte de una próxima remodelación y sabemos que es importante. Gracias por su paciencia mientras tanto.' },
            { id: 'security', question: '¿Es seguro el local?', answer: 'Sí. El local cuenta con cámaras de seguridad en todas las áreas, y el estacionamiento y el interior están bien iluminados durante todo el horario de operación. Queremos que todos se sientan cómodos haciendo su lavandería, de día o de noche.' },
            { id: 'lost-items', question: '¿Qué pasa si dejo ropa olvidada?', answer: "Tenemos cámaras de seguridad y haremos nuestro mejor esfuerzo para localizar cualquier artículo olvidado. Llámenos al (717) 925-7480 y verificaremos. Dicho esto, Manor Laundromat no se hace responsable por pertenencias perdidas o desatendidas, así que por favor cuide su ropa mientras esté aquí." },
          ],
        },
        {
          name: 'Pago',
          value: 'payment',
          faqs: [
            { id: 'payment-methods', question: '¿Qué métodos de pago aceptan?', answer: 'Aceptamos efectivo, tarjeta (crédito y débito), y pagos por teléfono a través de la aplicación LaundryCat.' },
            { id: 'attendant', question: '¿Hay alguien disponible para ayudar?', answer: 'Sí, hay varias formas de contactarnos. Llámenos al (717) 925-7480 durante el horario de operación para problemas con máquinas, reembolsos o preguntas generales. Para preguntas no urgentes, escríbanos por Instagram {{instagram}}. Para cualquier cosa que no podamos resolver por teléfono, iremos al local lo más rápido posible.' },
            { id: 'attendant-on-site', question: '¿Hay un empleado en el local?', answer: 'No. Manor Laundromat es una lavandería de autoservicio, por lo que no hay empleados en el local — pero siempre estamos disponibles para ayudarle. Llámenos al (717) 925-7480 durante el horario de operación con cualquier pregunta.' },
            { id: 'promotions', question: '¿Ofrecen promociones o recompensas?', answer: '¡Sí! Cargue $20 en su tarjeta de lavandería o en la aplicación LaundryCat y reciba $4 de bonificación — eso es un bono instantáneo del 20% en cada recarga. También tenemos promociones adicionales durante el año, así que síganos en {{instagram}} en Instagram para no perderse ninguna oferta.' },
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
      heading: '¡Fotos - Eche un Vistazo Adentro!',
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
