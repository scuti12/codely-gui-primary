/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Card2} from '../../../../_metronic/partials/content/cards/Card2'
import {IconUserModel} from '../ProfileModels'

export function Projects() {
  return (
    <>
      <div className='row g-6 g-xl-9'>
        <div className='col-md-6 col-xl-4'>
          <Card2
            icon='/media/svg/brand-logos/plurk.svg'
            badgeColor='primary'
            status='In Progress'
            statusColor='primary'
            title='HTML CSS animation'
            description='HTML CSS animation бүтээх'
            date='November 10, 2021'
            budget='100,000 төгрөг'
            progress={50}
            users={users1}
          />
        </div>

        <div className='col-md-6 col-xl-4'>
          <Card2
            icon='/media/svg/brand-logos/disqus.svg'
            badgeColor='info'
            status='Pending'
            statusColor='info'
            title='Java дунд шат'
            description='Java дунд шатны суралцагч нарт'
            date='May 10, 2021'
            budget='50,000 төгрөг'
            progress={30}
            users={users2}
          />
        </div>

        <div className='col-md-6 col-xl-4'>
          <Card2
            icon='/media/svg/brand-logos/figma-1.svg'
            badgeColor='success'
            status='Completed'
            statusColor='success'
            title='Database expert'
            description='Database expert тодруулах тэмцээн'
            date='Mar 14, 2021'
            budget='3 сар Free'
            progress={100}
            users={users3}
          />
        </div>

        <div className='col-md-6 col-xl-4'>
          <Card2
            icon='/media/svg/brand-logos/plurk.svg'
            badgeColor='primary'
            status='In Progress'
            statusColor='primary'
            title='HTML CSS animation'
            description='HTML CSS animation бүтээх'
            date='November 10, 2021'
            budget='100,000 төгрөг'
            progress={50}
            users={users1}
          />
        </div>

        <div className='col-md-6 col-xl-4'>
          <Card2
            icon='/media/svg/brand-logos/disqus.svg'
            badgeColor='info'
            status='Pending'
            statusColor='info'
            title='Java дунд шат'
            description='Java дунд шатны суралцагч нарт'
            date='May 10, 2021'
            budget='50,000 төгрөг'
            progress={30}
            users={users2}
          />
        </div>

        <div className='col-md-6 col-xl-4'>
          <Card2
            icon='/media/svg/brand-logos/figma-1.svg'
            badgeColor='success'
            status='Completed'
            statusColor='success'
            title='Database expert'
            description='Database expert тодруулах тэмцээн'
            date='Mar 14, 2021'
            budget='3 сар Free'
            progress={100}
            users={users3}
          />
        </div>

        <div className='col-md-6 col-xl-4'>
          <Card2
            icon='/media/svg/brand-logos/plurk.svg'
            badgeColor='primary'
            status='In Progress'
            statusColor='primary'
            title='HTML CSS animation'
            description='HTML CSS animation бүтээх'
            date='November 10, 2021'
            budget='100,000 төгрөг'
            progress={50}
            users={users1}
          />
        </div>

        <div className='col-md-6 col-xl-4'>
          <Card2
            icon='/media/svg/brand-logos/disqus.svg'
            badgeColor='info'
            status='Pending'
            statusColor='info'
            title='Java дунд шат'
            description='Java дунд шатны суралцагч нарт'
            date='May 10, 2021'
            budget='50,000 төгрөг'
            progress={30}
            users={users2}
          />
        </div>

        <div className='col-md-6 col-xl-4'>
          <Card2
            icon='/media/svg/brand-logos/figma-1.svg'
            badgeColor='success'
            status='Completed'
            statusColor='success'
            title='Database expert'
            description='Database expert тодруулах тэмцээн'
            date='Mar 14, 2021'
            budget='3 сар Free'
            progress={100}
            users={users3}
          />
        </div>

        
      </div>

      <div className='d-flex flex-stack flex-wrap pt-10'>
        <div className='fs-6 fw-bold text-gray-700'>Showing 1 to 10 of 50 entries</div>

        <ul className='pagination'>
          <li className='page-item previous'>
            <a href='#' className='page-link'>
              <i className='previous'></i>
            </a>
          </li>

          <li className='page-item active'>
            <a href='#' className='page-link'>
              1
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              2
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              3
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              4
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              5
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              6
            </a>
          </li>

          <li className='page-item next'>
            <a href='#' className='page-link'>
              <i className='next'></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

const users1: Array<IconUserModel> = [
  {name: 'Emma Smith', avatar: '/media/avatars/150-1.jpg'},
  {name: 'Rudy Stone', avatar: '/media/avatars/150-2.jpg'},
  {name: 'Susan Redwood', initials: 'S', color: 'primary'},
]

const users2 = [
  {name: 'Alan Warden', initials: 'A', color: 'warning'},
  {name: 'Brian Cox', avatar: '/media/avatars/150-4.jpg'},
]

const users3 = [
  {name: 'Mad Masy', avatar: '/media/avatars/150-1.jpg'},
  {name: 'Cris Willson', avatar: '/media/avatars/150-2.jpg'},
  {name: 'Mike Garcie', initials: 'M', color: 'info'},
]

const users4 = [
  {name: 'Nich Warden', initials: 'N', color: 'warning'},
  {name: 'Rob Otto', initials: 'R', color: 'success'},
]

const users5 = [
  {name: 'Francis Mitcham', avatar: '/media/avatars/150-5.jpg'},
  {name: 'Michelle Swanston', avatar: '/media/avatars/150-13.jpg'},
  {name: 'Susan Redwood', initials: 'S', color: 'primary'},
]

const users6 = [
  {name: 'Emma Smith', avatar: '/media/avatars/150-1.jpg'},
  {name: 'Rudy Stone', avatar: '/media/avatars/150-2.jpg'},
  {name: 'Susan Redwood', initials: 'S', color: 'primary'},
]

const users7 = [
  {name: 'Meloday Macy', avatar: '/media/avatars/150-3.jpg'},
  {name: 'Rabbin Watterman', initials: 'S', color: 'success'},
]

const users8 = [
  {name: 'Emma Smith', avatar: '/media/avatars/150-1.jpg'},
  {name: 'Rudy Stone', avatar: '/media/avatars/150-2.jpg'},
  {name: 'Susan Redwood', initials: 'S', color: 'primary'},
]

const users9 = [
  {name: 'Meloday Macy', avatar: '/media/avatars/150-3.jpg'},
  {name: 'Rabbin Watterman', initials: 'S', color: 'danger'},
]
