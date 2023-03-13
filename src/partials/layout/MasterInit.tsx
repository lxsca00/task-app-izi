import { AsideDefault } from "./components/aside/AsideDefault";
import { AsideMenu } from "./components/aside/AsideMenu";
import { AsideMenuItem } from "./components/aside/AsideMenuItem";
import { AsideMenuMain } from "./components/aside/AsideMenuMain";
import { AsideMenuWithSub } from "./components/aside/AsideMenuWithSub";
import { MasterLayout } from "./MasterLayout";

const MasterInit = () => (
  <>
    <p>MasterInit component works!</p>
    <MasterLayout />
    <AsideDefault />
    <AsideMenu />
    <AsideMenuItem />
    <AsideMenuMain />
    <AsideMenuWithSub />
  </>
);

export { MasterInit };
