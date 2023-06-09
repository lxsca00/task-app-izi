/* eslint-disable jsx-a11y/anchor-is-valid */
import { useLayout } from '../core/LayoutProvider'

const Footer = (): JSX.Element => {
  const {classes} = useLayout()
  return (
    <div className='footer py-4 d-flex flex-lg-column' id='kt_footer'>
      {/* begin::Container */}
      <div
        className={`${classes.footerContainer} d-flex flex-column flex-md-row align-items-center justify-content-between`}
      >
        {/* begin::Copyright */}
        <div className='text-dark order-2 order-md-1'>
          <span className='text-muted fw-bold me-2'>{new Date().getFullYear()} &copy;</span>
          <a href='/app/profile' className='text-gray-800 text-hover-primary'>
            Delfosti
          </a>
        </div>
        {/* end::Copyright */}
      </div>
      {/* end::Container */}
    </div>
  )
}

export {Footer}
