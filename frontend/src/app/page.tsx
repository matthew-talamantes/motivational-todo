import { Quote } from "@/types";
import React from "react";

import BackgroundImage from "@/components/homePage/backgroundImg";
import Header from "@/components/header";
import CurrentDate from "@/components/homePage/currentDate";
import FeaturedQuote from "@/components/homePage/featuredQuote";
import WidgetGroup from "@/components/homePage/widgetGroup";

import styles from "./styles.module.scss";

const getQuote = async () => {
  const quoteableUrl: string = "https://api.quotable.io/random";
  const localUrl: string = "http://localhost:3001/quotes";
  const pctNewQuote: number = 0.5;
  const randomNum: number = Math.random();
  // 1 day = 86400 seconds
  const validateOptions: object = {
    next: { revlaidate: 1 }
  };

  let quote: Quote;
  if (pctNewQuote === 1) {
    const response = await fetch(quoteableUrl, validateOptions);
    const rawQuote = await response.json();
    quote = { id: rawQuote._id, text: rawQuote.content, author: rawQuote.author, tags: rawQuote.tags };
  } else if (randomNum <= pctNewQuote) {
    const response = await fetch(quoteableUrl, validateOptions);
    const rawQuote = await response.json();
    quote = { id: rawQuote._id, text: rawQuote.content, author: rawQuote.author, tags: rawQuote.tags };
  } else {
    const response = await fetch(localUrl, validateOptions);
    const rawQuote = await response.json();
    const randomIndex = Math.floor(Math.random() * rawQuote.length);
    const selctedQuote = rawQuote[randomIndex];
    quote = { id: selctedQuote.id, text: selctedQuote.quote, author: selctedQuote.author, tags: selctedQuote.tags };
  }

  return quote;
};



export default async function Home() {

  const quote: Quote = await getQuote();
  const todoUrl: string = "http://localhost:3001/favorite-list/1";

  return (
    <main className="">
      <div className={styles.bgImgWrapper}>
        <BackgroundImage />
      </div>
      <div className={styles.content}>
        <Header textColor='white' />
        <CurrentDate />
        <FeaturedQuote quote={quote} />
        <WidgetGroup todoUrl={todoUrl} />
      </div>
    </main>
  )
}