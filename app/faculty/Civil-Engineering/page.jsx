import { FacultyLayout } from '@/components/Academics/layout/facultyLayout'
import React from 'react'

const page = () => {
    return (
        <FacultyLayout
            programmes={[]}
            departmentNameForNav={'Civil Engineering'}
            routeName={'Civil-Engineering'}
        />
    )
}

export default page
