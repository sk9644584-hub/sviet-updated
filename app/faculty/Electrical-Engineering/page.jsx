import { FacultyLayout } from '@/components/Academics/layout/facultyLayout'
import React from 'react'

const page = () => {
    return (
        <FacultyLayout
            programmes={[]}
            departmentNameForNav={'Electrical Engineering'}
            routeName={'Electrical-Engineering'}
        />
    )
}

export default page
