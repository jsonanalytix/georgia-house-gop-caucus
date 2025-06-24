import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es' | 'ko';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About Us',
    issues: 'Our Priorities',
    events: 'Community Events',
    getInvolved: 'Get Involved',
    contact: 'Contact',
    voterResources: 'Voter Resources',
    
    // Header
    georgiaHouseGOP: 'Georgia House Republican Caucus',
    buildingBridges: 'Building Bridges, Creating Opportunities',
    
    // Home page
    welcomeTitle: 'Welcome to Our Community',
    welcomeSubtitle: 'Working together for a stronger Georgia',
    welcomeDescription: 'The Georgia House Republican Caucus is committed to engaging with all communities across our great state. We believe in creating opportunities, building bridges, and ensuring every voice is heard in the democratic process.',
    joinMovement: 'Join Our Movement',
    learnMore: 'Learn More About Us',
    
    // Community engagement
    communityTitle: 'Community Engagement',
    communityDescription: 'We are committed to year-round engagement with all communities across Georgia, not just during election season.',
    
    // Issues
    ourPriorities: 'Our Priorities for Georgia',
    economicOpportunity: 'Economic Opportunity',
    education: 'Education Excellence',
    publicSafety: 'Public Safety',
    healthcare: 'Healthcare Access',
    
    // Footer
    stayConnected: 'Stay Connected',
    followUs: 'Follow us on social media and stay updated on our community initiatives.',
    subscribe: 'Subscribe to Newsletter',
    email: 'Your email address',
    privacyPolicy: 'Privacy Policy',
    disclaimer: 'Paid for by the Georgia House Republican Caucus. Not authorized by any candidate or candidate\'s committee.',
    
    // Forms
    firstName: 'First Name',
    lastName: 'Last Name',
    phoneNumber: 'Phone Number',
    zipCode: 'Zip Code',
    submit: 'Submit',
    message: 'Message',
    
    // Get Involved
    getInvolvedTitle: 'Get Involved in Your Community',
    volunteer: 'Volunteer',
    attendEvents: 'Attend Events',
    shareStory: 'Share Your Story'
  },
  es: {
    // Navigation
    home: 'Inicio',
    about: 'Acerca de Nosotros',
    issues: 'Nuestras Prioridades',
    events: 'Eventos Comunitarios',
    getInvolved: 'Participa',
    contact: 'Contacto',
    voterResources: 'Recursos para Votantes',
    
    // Header
    georgiaHouseGOP: 'Caucus Republicano de la Cámara de Georgia',
    buildingBridges: 'Construyendo Puentes, Creando Oportunidades',
    
    // Home page
    welcomeTitle: 'Bienvenidos a Nuestra Comunidad',
    welcomeSubtitle: 'Trabajando juntos por una Georgia más fuerte',
    welcomeDescription: 'El Caucus Republicano de la Cámara de Georgia está comprometido a participar con todas las comunidades en nuestro gran estado. Creemos en crear oportunidades, construir puentes y asegurar que todas las voces sean escuchadas en el proceso democrático.',
    joinMovement: 'Únete a Nuestro Movimiento',
    learnMore: 'Aprende Más Sobre Nosotros',
    
    // Community engagement
    communityTitle: 'Participación Comunitaria',
    communityDescription: 'Estamos comprometidos con la participación durante todo el año con todas las comunidades de Georgia, no solo durante la temporada electoral.',
    
    // Issues
    ourPriorities: 'Nuestras Prioridades para Georgia',
    economicOpportunity: 'Oportunidad Económica',
    education: 'Excelencia Educativa',
    publicSafety: 'Seguridad Pública',
    healthcare: 'Acceso a la Salud',
    
    // Footer
    stayConnected: 'Mantente Conectado',
    followUs: 'Síguenos en las redes sociales y mantente actualizado sobre nuestras iniciativas comunitarias.',
    subscribe: 'Suscríbete al Boletín',
    email: 'Tu dirección de correo electrónico',
    privacyPolicy: 'Política de Privacidad',
    disclaimer: 'Pagado por el Caucus Republicano de la Cámara de Georgia. No autorizado por ningún candidato o comité de candidatos.',
    
    // Forms
    firstName: 'Nombre',
    lastName: 'Apellido',
    phoneNumber: 'Número de Teléfono',
    zipCode: 'Código Postal',
    submit: 'Enviar',
    message: 'Mensaje',
    
    // Get Involved
    getInvolvedTitle: 'Participa en Tu Comunidad',
    volunteer: 'Ser Voluntario',
    attendEvents: 'Asistir a Eventos',
    shareStory: 'Comparte Tu Historia'
  },
  ko: {
    // Navigation
    home: '홈',
    about: '소개',
    issues: '우선순위',
    events: '커뮤니티 행사',
    getInvolved: '참여하기',
    contact: '연락처',
    voterResources: '유권자 자료',
    
    // Header
    georgiaHouseGOP: '조지아 하원 공화당 코커스',
    buildingBridges: '다리 건설, 기회 창조',
    
    // Home page
    welcomeTitle: '우리 커뮤니티에 오신 것을 환영합니다',
    welcomeSubtitle: '더 강한 조지아를 위해 함께 노력합니다',
    welcomeDescription: '조지아 하원 공화당 코커스는 우리 주의 모든 커뮤니티와 함께하는 것을 약속합니다. 우리는 기회를 창조하고, 다리를 건설하며, 민주적 과정에서 모든 목소리가 들리도록 하는 것을 믿습니다.',
    joinMovement: '우리 운동에 참여하세요',
    learnMore: '우리에 대해 더 알아보기',
    
    // Community engagement
    communityTitle: '커뮤니티 참여',
    communityDescription: '우리는 선거철뿐만 아니라 일년 내내 조지아의 모든 커뮤니티와 함께하기 위해 노력합니다.',
    
    // Issues
    ourPriorities: '조지아를 위한 우선순위',
    economicOpportunity: '경제적 기회',
    education: '교육 우수성',
    publicSafety: '공공 안전',
    healthcare: '의료 접근성',
    
    // Footer
    stayConnected: '연결 유지',
    followUs: '소셜 미디어에서 팔로우하고 커뮤니티 이니셔티브에 대한 업데이트를 받아보세요.',
    subscribe: '뉴스레터 구독',
    email: '이메일 주소',
    privacyPolicy: '개인정보 보호정책',
    disclaimer: '조지아 하원 공화당 코커스가 비용을 지불했습니다. 어떤 후보자나 후보자 위원회의 승인을 받지 않았습니다.',
    
    // Forms
    firstName: '이름',
    lastName: '성',
    phoneNumber: '전화번호',
    zipCode: '우편번호',
    submit: '제출',
    message: '메시지',
    
    // Get Involved
    getInvolvedTitle: '지역사회에 참여하세요',
    volunteer: '자원봉사',
    attendEvents: '행사 참석',
    shareStory: '이야기 공유'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};