import clsx from "clsx";
//import { KTSVG } from '../../../../helpers/KTSVG'
import { toAbsoluteUrl } from "../../../../helpers/AssetHelpers";
import { HeaderUserMenu } from "./header-menus/HeaderUserMenu";
//import { useLayout } from '../../core/LayoutProvider'

const toolbarButtonMarginClass = "ms-1 ms-lg-3",
  //toolbarButtonHeightClass = 'w-30px h-30px w-md-40px h-md-40px',
  toolbarUserAvatarHeightClass = "symbol-30px symbol-md-40px";

const Topbar = (): JSX.Element => {
  //const {config} = useLayout()

  return (
    <div className="d-flex">
      {/* begin::User */}
      <div
        className={clsx("d-flex align-items-center", toolbarButtonMarginClass)}
        id="kt_header_user_menu_toggle"
      >
        {/* begin::Toggle */}
        <div
          className={clsx(
            "cursor-pointer symbol",
            toolbarUserAvatarHeightClass
          )}
          data-kt-menu-trigger="click"
          data-kt-menu-attach="parent"
          data-kt-menu-placement="bottom-end"
          data-kt-menu-flip="bottom"
        >
          <img src={toAbsoluteUrl("/media/avatars/300-1.jpg")} alt="metronic" />
        </div>
        <HeaderUserMenu />
        {/* end::Toggle */}
      </div>
      {/* end::User */}
    </div>
  );
};

export { Topbar };
