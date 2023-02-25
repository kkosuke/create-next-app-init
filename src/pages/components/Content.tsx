import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export function Content({ children }: Props) {
  return (
    <>
      <div className="container">{children}</div>
      <hr />
      <footer>©︎ 2021 aaaa</footer>
    </>
  );
}
