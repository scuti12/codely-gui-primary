import React from 'react'
import {MenuItem} from './MenuItem'
import {MenuInnerWithSub} from './MenuInnerWithSub'
import {MegaMenu} from './MegaMenu'
import {useIntl} from 'react-intl'

export function MenuInner() {
  const intl = useIntl()
  return (
    <>
      <MenuItem to='/newsFeed' title='Home' icon='/media/icons/duotune/general/gen025.svg'/>
      <MenuItem to='/questions' title='Quetions' icon='/media/icons/duotune/general/gen046.svg'/>
      <MenuItem to='/document' title='Documents' icon='/media/icons/duotune/files/fil012.svg'/>
      <MenuItem to='/course' title='Courses' icon='/media/icons/duotune/general/gen002.svg'/>
      <MenuItem to='/cup' title='Cup' icon='/media/icons/duotune/general/gen020.svg'/>
      <MenuItem to='/rank' title='Rank' icon='/media/icons/duotune/graphs/gra004.svg'/>
      <MenuItem to='/work' title='Work' icon='/media/icons/duotune/finance/fin006.svg'/>
      {/*<MenuItem title={intl.formatMessage({id: 'MENU.DASHBOARD'})} to='/dashboard' />*/}
      {/* <MenuInnerWithSub
        title='Tools'
        to='/crafted'
        menuPlacement='bottom-start'
        menuTrigger='click'
      >
        
        <MenuInnerWithSub
          title='Pages'
          to='/crafted/pages'
          icon='/media/icons/duotune/general/gen022.svg'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >

          <MenuInnerWithSub
            title='Profile'
            to='/crafted/pages/profile'
            hasArrow={true}
            hasBullet={true}
            menuPlacement='right-start'
            menuTrigger={`{default:'click', lg: 'hover'}`}
          >
            <MenuItem to='/crafted/pages/profile/overview' title='Overview' hasBullet={true} />
            <MenuItem to='/crafted/pages/profile/projects' title='Projects' hasBullet={true} />
            <MenuItem to='/crafted/pages/profile/campaigns' title='Campaigns' hasBullet={true} />
            <MenuItem to='/crafted/pages/profile/documents' title='Documents' hasBullet={true} />
            <MenuItem
              to='/crafted/pages/profile/connections'
              title='Connections'
              hasBullet={true}
            />
          </MenuInnerWithSub>
          <MenuInnerWithSub
            title='Wizards'
            to='/crafted/pages/wizards'
            hasArrow={true}
            hasBullet={true}
            menuPlacement='right-start'
            menuTrigger={`{default:'click', lg: 'hover'}`}
          >
            <MenuItem to='/crafted/pages/wizards/horizontal' title='Horizontal' hasBullet={true} />
            <MenuItem to='/crafted/pages/wizards/vertical' title='Vertical' hasBullet={true} />
          </MenuInnerWithSub>
        </MenuInnerWithSub>

        
        <MenuInnerWithSub
          title='Accounts'
          to='/crafted/accounts'
          icon='/media/icons/duotune/communication/com006.svg'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/crafted/account/overview' title='Overview' hasBullet={true} />
          <MenuItem to='/crafted/account/settings' title='Settings' hasBullet={true} />
        </MenuInnerWithSub>

        
        <MenuInnerWithSub
          title='Errors'
          to='/error'
          icon='/media/icons/duotune/technology/teh004.svg'
          hasArrow={true}
          menuPlacement='bottom-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/error/404' title='Error 404' hasBullet={true} />
          <MenuItem to='/error/500' title='Error 500' hasBullet={true} />
        </MenuInnerWithSub>

        
        <MenuInnerWithSub
          title='Widgets'
          to='/crafted/widgets'
          icon='/media/icons/duotune/general/gen025.svg'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem title='Layout Builder' to='/builder' hasBullet={true} />
          <MenuItem title='Dashboard' to='/dashboard' hasBullet={true} />
          <MenuItem to='/crafted/widgets/lists' title='Lists' hasBullet={true} />
          <MenuItem to='/crafted/widgets/statistics' title='Statistics' hasBullet={true} />
          <MenuItem to='/crafted/widgets/charts' title='Charts' hasBullet={true} />
          <MenuItem to='/crafted/widgets/mixed' title='Mixed' hasBullet={true} />
          <MenuItem to='/crafted/widgets/tables' title='Tables' hasBullet={true} />
          <MenuItem to='/crafted/widgets/feeds' title='Feeds' hasBullet={true} />
          <MenuItem to='/apps/chat/private-chat' title='Private Chat' hasBullet={true} />
          <MenuItem to='/apps/chat/group-chat' title='Group Chart' hasBullet={true} />
          <MenuItem to='/apps/chat/drawer-chat' title='Drawer Chart' hasBullet={true} />
        </MenuInnerWithSub>
      </MenuInnerWithSub> */}

      {/*<MenuInnerWithSub*/}
      {/*  isMega={true}*/}
      {/*  title='Mega menu'*/}
      {/*  to='/mega-menu'*/}
      {/*  menuPlacement='bottom-start'*/}
      {/*  menuTrigger='click'*/}
      {/*>*/}
      {/*  <MegaMenu />*/}
      {/*</MenuInnerWithSub>*/}
    </>
  )
}
