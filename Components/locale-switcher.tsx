import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './locale-switcher.module.css'

export default function LocaleSwitcher() {
  const router = useRouter()
  const { locales, locale: activeLocale } = router

  const otherLocales = (locales || []).filter(
    (locale) => locale !== activeLocale
  )

  return (
    <div>
      <div className={styles.localSwitcher}>
        {otherLocales.map((locale) => {
          const { pathname, query, asPath } = router
          return (
            <div key={locale}>
              <Link
                href={{ pathname, query }}
                as={asPath}
                locale={locale}
                legacyBehavior
              >
                {locale}
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}