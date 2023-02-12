import React from "react";
import {Projects} from "../modules/profile/components/Projects";
export function Cup(){
return(
    <div>
        <div className='d-flex flex-wrap flex-stack mb-6'>
            <h3 className='fw-bolder my-2'>
                Cups
                {/* <span className='fs-6 text-gray-400 fw-bold ms-1'>Active</span> */}
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
                        <option value='Declined'>Шинээр зарлагдсан</option>
                        <option value='Active'>Явагдаж байгаа</option>
                        <option value='Approved'>Дууссан</option>
                        {/* <option value='In Progress'></option> */}
                    </select>
                </div>
                <a
                    href='#'
                    className='btn btn-primary btn-sm'
                    data-bs-toggle='modal'
                    data-bs-target='#kt_modal_create_project'
                >
                    Хадгалах
                </a>
            </div>
        </div>
        {/* <Projects/> */}
        <h1>Projects page here</h1>
    </div>
)
}
