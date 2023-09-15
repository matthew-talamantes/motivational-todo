import { Quote } from "@/types";

import styles from "./featuredQuoteStyles.module.scss";

export default function FeaturedQuote({ quote }: { quote: Quote }) {

    return (
        <article id="featuredQuote" className={styles.featuredQuote}>
            <h2 className={`quote quote-lg ${styles.quote}`}>{quote.text}</h2>
            <p className={`attribution attribution-lg ${styles.attribution}`}>- {quote.author}</p>
        </article>
    );
}