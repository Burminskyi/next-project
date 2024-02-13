"use client";

import { Button, Htag, P, Rating, Tag } from "@/components";
import { useState } from "react";

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  return (
    <main>
      <div>
        <Htag tag="h2">Текст</Htag>
        <Button apperance="primary" arrow="right">
          Кнопка
        </Button>
        <Button apperance="ghost" arrow="down">
          Кнопка
        </Button>
        <P size="s">Текст</P>
        <P>Текст</P>
        <P size="l">Текст</P>
        <Tag size="s" color="green">
          Тег
        </Tag>
        <Tag size="m" color="red">
          Тег
        </Tag>
        <Tag size="s" href="https://www.youtube.com/">
          Тег
        </Tag>
        <Rating rating={rating} isEditable setRating={setRating}></Rating>
      </div>
    </main>
  );
}
