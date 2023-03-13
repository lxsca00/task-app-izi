//import { Outlet } from "react-router-dom"
import { TestForContent } from "../../TestForContent"
import { AsideDefault } from "./components/aside/AsideDefault"
import { Content } from "./components/Content"
import { Footer } from "./components/Footer"
import { HeaderWrapper } from "./components/header/HeaderWrapper"
import { ScrollTop } from "./components/ScrollTop"
import { PageDataProvider } from "./core/PageData"

const MasterLayout = () => {
    return(
        <PageDataProvider>
            <div className='page d-flex flex-row flex-column-fluid'>
          <AsideDefault />
          <div className='wrapper d-flex flex-column flex-row-fluid' id='kt_wrapper'>
            <HeaderWrapper />

            <div id='kt_content' className='content d-flex flex-column flex-column-fluid'>
              <div className='post d-flex flex-column-fluid' id='kt_post'>
                <Content>
                  {/*<Outlet />*/}
                  <TestForContent/>
                </Content>
              </div>
            </div>
            <Footer />
          </div>
        </div>
        <ScrollTop />            
        </PageDataProvider>
    )
}

export {MasterLayout}