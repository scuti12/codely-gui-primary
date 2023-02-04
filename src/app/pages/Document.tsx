import React, {Suspense, lazy} from 'react'
import {StatisticsWidget6} from "../../_metronic/partials/widgets";
import {Documents} from "../modules/profile/components/Documents";

export function Document() {
    return(
        <div>
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
            <Documents/>
        </div>

    )
}
