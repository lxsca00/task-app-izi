import { FC } from "react";
import { WithChildren } from "../../../helpers/react18MigrationHelpers";

const Content: FC<WithChildren> = ({ children }) => (
  <>
    <p>Content component works!</p>
    {children}
  </>
);

export { Content };
