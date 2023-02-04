import React from "react";
import {
    FeedsWidget2,
    FeedsWidget3,
    FeedsWidget4,
    FeedsWidget5,
    FeedsWidget6,
    ListsWidget2,
    ListsWidget5
} from "../../_metronic/partials/widgets";
export function NewsFeed() {
    // return (
    //     <div className="d-flex flex-row flex-column-fluid" style={{paddingTop:"20px"}}>
    //         {/*<div className="d-flex flex-row-fluid flex-center">*/}
    //         {/*</div>*/}
    //
    //         {/*<div className="d-flex flex-row-auto w-400px flex-start">*/}
    //         {/*    <ListsWidget5 className='mb-5 mb-xxl-8'/>*/}
    //         {/*</div>*/}
    //
    //
    //     </div>
    // )

    return (
        <div className='row g-5 g-xxl-8'>
            <div className='d-flex flex-wrap flex-stack mb-6'>
                <h3 className='fw-bolder my-2'>
                    My Projects
                    <span className='fs-6 text-gray-400 fw-bold ms-1'>Active</span>
                </h3>

                <div className='d-flex flex-wrap my-2'>
                    <div className='me-4'>
                        <select
                            name='status'
                            data-control='select2'
                            data-hide-search='true'
                            className='form-select form-select-sm form-select-white w-125px'
                            defaultValue='Active'
                        >
                            <option value='Active'>Active</option>
                            <option value='Approved'>In Progress</option>
                            <option value='Declined'>To Do</option>
                            <option value='In Progress'>Completed</option>
                        </select>
                    </div>
                    <a
                        href='#'
                        className='btn btn-primary btn-sm'
                        data-bs-toggle='modal'
                        data-bs-target='#kt_modal_create_project'
                    >
                        New Project
                    </a>
                </div>
            </div>
            <div className='col-xl-8'>
                <FeedsWidget2 className='mb-5 mb-xxl-8' />

                <FeedsWidget3 className='mb-5 mb-xxl-8' />

                <FeedsWidget4 className='mb-5 mb-xxl-8' />

                <FeedsWidget5 className='mb-5 mb-xxl-8' />

                <FeedsWidget6 className='mb-5 mb-xxl-8' />
            </div>

            <div className='col-xl-4'>
                {/*<ChartsWidget1 className='mb-5 mb-xxl-8' />*/}

                <ListsWidget5 className='mb-5 mb-xxl-8' />

                <ListsWidget2 className='mb-5 mb-xxl-8' />
            </div>
        </div>
    )
}
