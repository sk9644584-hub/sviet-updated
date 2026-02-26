import { FacultyLayout } from '@/components/Academics/layout/facultyLayout'
import React from 'react'

const page = () => {
    return (
        <FacultyLayout
            programmes={[]}
            departmentNameForNav={'Mechanical Engineering'}
            routeName={'Mechanical-Engineering'}
        />
    )
}

export default page
