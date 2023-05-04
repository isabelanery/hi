import styles from '../styles/my_hover_effect.module.css';

export default function MyHoverEffect() {
    return (
      <div class={styles.body}>
        <p class={styles.p}>Haki</p>

        <div class={styles.card}>
          {
            [...Array(480).keys()].map((i) => (
              <div class={styles.snow}></div>
            ))
          }

        </div>
      </div>
    )
}