import {FC} from 'react'
import { useLang } from './i18n'
import {IntlProvider} from 'react-intl'
import '@formatjs/intl-relativetimeformat/polyfill'
import '@formatjs/intl-relativetimeformat/locale-data/en'
import '@formatjs/intl-relativetimeformat/locale-data/de'
import '@formatjs/intl-relativetimeformat/locale-data/es'
import '@formatjs/intl-relativetimeformat/locale-data/fr'
import '@formatjs/intl-relativetimeformat/locale-data/ja'
import '@formatjs/intl-relativetimeformat/locale-data/zh'

import enMessages from './messages/en.json'
import esMessages from './messages/es.json'
import jaMessages from './messages/ja.json'
import zhMessages from './messages/zh.json'
import { WithChildren } from '../helpers/react18MigrationHelpers'

const allMessages = {
  en: enMessages,
  es: esMessages,
  ja: jaMessages,
  zh: zhMessages,
}

const I18nProvider: FC<WithChildren> = ({children}) => {
  const locale = useLang()
  const messages = allMessages[locale]

  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  )
}

export {I18nProvider}
