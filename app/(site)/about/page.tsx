import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About page",
};


export default function Home(): JSX.Element {
  return <div>О нас</div>;
}
