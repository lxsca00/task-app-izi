/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useRef } from "react";
import { Link } from "react-router-dom";
import { useLayout } from "../../core/LayoutProvider";
import { toAbsoluteUrl } from "../../../../helpers/AssetHelpers";
import { KTSVG } from "../../../../helpers/KTSVG";
import { AsideMenu } from "./AsideMenu";

const AsideDefault: FC = () => {
  const { config, classes } = useLayout();
  const asideRef = useRef<HTMLDivElement | null>(null);
  const { aside } = config;

  const minimize = () => {
    asideRef.current?.classList.add("animating");
    setTimeout(() => {
      asideRef.current?.classList.remove("animating");
    }, 300);
  };

  return (
    <div
      id="kt_aside"
      className="aside aside-dark"
      data-kt-drawer="true"
      data-kt-drawer-name="aside"
      data-kt-drawer-activate="{default: true, lg: false}"
      data-kt-drawer-overlay="true"
      data-kt-drawer-width="{default:'200px', '300px': '250px'}"
      data-kt-drawer-direction="start"
      data-kt-drawer-toggle="#kt_aside_mobile_toggle"
      ref={asideRef}
    >
      {/* begin::Brand */}
      <div className="aside-logo flex-column-auto" id="kt_aside_logo">
        <Link to="/app">
          <img
            alt="Logo"
            className="h-25px logo"
            src={toAbsoluteUrl("/media/logos/default.png")}
          />
        </Link>

        {/* end::Logo */}

        {/* begin::Aside toggler */}
        {aside.minimize && (
          <div
            id="kt_aside_toggle"
            className="btn btn-icon w-auto px-0 btn-active-color-primary aside-toggle"
            data-kt-toggle="true"
            data-kt-toggle-state="active"
            data-kt-toggle-target="body"
            data-kt-toggle-name="aside-minimize"
            onClick={minimize}
          >
            <KTSVG
              path={"/media/icons/duotune/arrows/arr080.svg"}
              className={"svg-icon-1 rotate-180"}
            />
          </div>
        )}
        {/* end::Aside toggler */}
      </div>
      {/* end::Brand */}

      {/* begin::Aside menu */}
      <div className="aside-menu aside-dark flex-column-fluid">
        <AsideMenu />
      </div>
      {/* end::Aside menu */}
    </div>
  );
};

export { AsideDefault };
