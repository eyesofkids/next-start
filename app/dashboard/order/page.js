import clsx from 'clsx'
import styles from './page.module.scss'

export default function OrderPage(props) {
  return (
    <>
      <h1>OrderPage</h1>

      <button type="button" className="btn btn-primary">
        Primary
      </button>
      <button
        type="button"
        className={clsx('btn btn-primary', styles.btnPrimary)}
      >
        Primary
      </button>
      <button type="button" className="btn btn-primary">
        Primary
      </button>
      <button
        type="button"
        className={clsx('btn btn-secondary', styles.btnSecondary)}
      >
        Secondary
      </button>
      <button type="button" className="btn btn-secondary">
        Secondary
      </button>
    </>
  )
}
