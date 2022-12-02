import React from 'react'
import {AsideDefault} from './components/aside/AsideDefault'
import {Footer} from './components/Footer'
import {HeaderWrapper} from './components/header/HeaderWrapper'
import {Toolbar} from './components/toolbar/Toolbar'
import {ScrollTop} from './components/ScrollTop'
import {Content} from './components/Content'
import {MasterInit} from './MasterInit'
import {PageDataProvider} from './core'
import {
  DrawerMessenger,
  ExploreMain,
  ActivityDrawer,
  Main,
  InviteUsers,
  UpgradePlan,
} from '../partials'

const MasterLayout: React.FC = ({children}) => {
  return (
    <PageDataProvider>
      <div className='page d-flex flex-row flex-column-fluid'>
        <AsideDefault />
        <div className='wrapper d-flex flex-column flex-row-fluid' id='kt_wrapper'>
          <HeaderWrapper />

          <div id='kt_content' className='content d-flex flex-column flex-column-fluid pt-0'>
            {/*<Toolbar />*/}
            <div className='post d-flex flex-column-fluid' id='kt_post'>
              <Content>{children}</Content>
            </div>
            <div className='post d-flex flex-column-fluid align-items-center justify-content-center row ' id='kt_button'>
              <a href='#' className='btn btn-warning col-mb-12 col-lg-6'>
                  自分の日記をもっと見る
              </a>
            </div>
          </div>
          <Footer />
        </div>
      </div>

      {/* begin:: Drawers */}
      {/*<ActivityDrawer />*/}
      {/*<ExploreMain />*/}
      {/*<DrawerMessenger />*/}
      {/* end:: Drawers */}

      {/* begin:: Modals */}
      <Main />
      {/*<InviteUsers />*/}
      {/*<UpgradePlan />*/}
      {/* end:: Modals */}

      {/*<MasterInit />*/}
      {/*<ScrollTop />*/}
    </PageDataProvider>
  )
}

export {MasterLayout}
