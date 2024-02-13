import { Button, Htag, P, Tag } from "@/components";

export default function Home(): JSX.Element {
  return (
    <main>
      <div>
        <Htag tag="h2">Текст</Htag>
        <Button
          apperance="primary"
          arrow="right"
        >
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
      </div>
    </main>
  );
}
