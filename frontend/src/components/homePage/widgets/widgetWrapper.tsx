
import styles from "./widgetWrapperStyles.module.scss";

export default function WidgetWrapper({ children }: { children: React.ReactNode }) {
    return (
        <article className={styles.widgetWrapper}>
            {children}
        </article>
    );
}