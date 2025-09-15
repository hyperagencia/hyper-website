'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { usePathname } from '@/i18n/navigation';
import { Globe, Menu, X } from 'lucide-react';
import { useRouter } from '@/i18n/navigation';
import { useParams } from 'next/navigation';

const GlassmorphismHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  
  const t = useTranslations('common.navigation');
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const currentLocale = params.locale as string;

  // Detectar scroll para cambiar el header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cambiar idioma
  const handleLanguageChange = (locale: string) => {
    router.replace(
      // @ts-expect-error
      { pathname, params },
      { locale }
    );
    setIsLanguageOpen(false);
  };

  // Enlaces de navegación
  const navigationItems = [
    { href: '/', label: t('inicio'), key: 'home' },
    { href: '/agencia', label: t('agencia'), key: 'about' },
    { href: '/proyectos', label: t('proyectos'), key: 'work' },
    { href: '/expertices', label: t('expertices'), key: 'expertise' },
    { href: '/blog', label: t('blog'), key: 'thinking' },
    { href: '/contacto', label: t('contacto'), key: 'contact' },
  ];

  const isActivePath = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  // Cerrar menús al hacer click fuera
  useEffect(() => {
    const handleClickOutside = () => {
      setIsLanguageOpen(false);
    };

    if (isLanguageOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isLanguageOpen]);

  return (
    <>
      {/* Header principal */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-xl shadow-sm' 
            : 'bg-white/60 backdrop-blur-md'
        }`}
      >
        {/* Contenido del header */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo - Extremo izquierdo */}
            <Link href="/" className="group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="text-2xl font-bold tracking-tight text-gray-900 transition-colors duration-200"
              >
                Hyper
              </motion.div>
            </Link>

            {/* Navegación central - Píldora redondeada */}
            <nav className="hidden lg:flex">
              <div className="flex items-center bg-gray-200/80 backdrop-blur-md rounded-full p-1 shadow-lg border border-gray-300/30">
                {navigationItems.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className="relative group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className={`px-5 py-2.5 text-sm font-medium transition-all duration-300 rounded-full ${
                        isActivePath(item.href)
                          ? 'bg-gray-800 text-white shadow-md'
                          : 'text-gray-700 hover:text-gray-900 hover:bg-white/50'
                      }`}
                    >
                      {item.label}
                    </motion.div>
                  </Link>
                ))}
              </div>
            </nav>

            {/* Selector de idioma - Extremo derecho */}
            <div className="flex items-center space-x-3">
              
              {/* Selector de idioma */}
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsLanguageOpen(!isLanguageOpen);
                  }}
                  className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-full hover:bg-gray-100/50 transition-all duration-200 bg-gray-200/80 backdrop-blur-md shadow-sm border border-gray-300/30"
                >
                  <Globe className="w-5 h-5" />
                </motion.button>

                <AnimatePresence>
                  {isLanguageOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-36 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-gray-200/50 overflow-hidden"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        onClick={() => handleLanguageChange('es')}
                        className={`w-full px-4 py-3 text-sm text-left transition-colors duration-200 ${
                          currentLocale === 'es' 
                            ? 'text-gray-900 bg-gray-50/50 font-medium' 
                            : 'text-gray-700 hover:bg-gray-50/50'
                        }`}
                      >
                        🇪🇸 Español
                      </button>
                      <button
                        onClick={() => handleLanguageChange('en')}
                        className={`w-full px-4 py-3 text-sm text-left transition-colors duration-200 ${
                          currentLocale === 'en' 
                            ? 'text-gray-900 bg-gray-50/50 font-medium' 
                            : 'text-gray-700 hover:bg-gray-50/50'
                        }`}
                      >
                        🇺🇸 English
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Botón menú móvil */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden flex items-center justify-center w-10 h-10 text-gray-700 rounded-full hover:bg-gray-100/50 transition-all duration-200 bg-gray-200/80 backdrop-blur-md shadow-sm border border-gray-300/30"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Menú móvil */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Panel del menú */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute right-0 top-0 h-full w-80 max-w-sm bg-white/95 backdrop-blur-xl shadow-2xl border-l border-gray-200/50"
            >
              <div className="flex flex-col h-full pt-24 pb-6">
                
                {/* Navegación móvil */}
                <nav className="flex-1 px-6 space-y-2">
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.key}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block px-4 py-3 text-lg font-medium rounded-xl transition-all duration-200 ${
                          isActivePath(item.href)
                            ? 'text-white bg-gray-800 shadow-lg'
                            : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Footer del menú móvil */}
                <div className="px-6 pt-6 border-t border-gray-200/50">
                  <p className="text-sm text-gray-500 text-center">
                    © 2024 Hyperagencia
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GlassmorphismHeader;