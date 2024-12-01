import 'server-only'

const dictionaries = {
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  fr: () => import('../dictionaries/fr.json').then((module) => module.default),
  it: () => import('../dictionaries/it.json').then((module) => module.default),
}

const getDictionary = async (locale: string) => {
  switch (locale) {
    case 'vi':
      return dictionaries.en()
    case 'fr':
      return dictionaries.fr()
    case 'it':
      return dictionaries.it()
    default:
      return dictionaries.en()
  }
}

export default getDictionary
