import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export default function Content({ children }: Props) {
  return (
    <>
      <div className="container">{children}</div>
      <hr />
      <footer>©︎ 2021 aaaa</footer>
    </>
  );
}
