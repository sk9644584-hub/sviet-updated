import { FacultyLayout } from '@/components/Academics/layout/facultyLayout'
import React from 'react'

const page = () => {
    return (
        <FacultyLayout
            programmes={[]}
            departmentNameForNav={'Computer Applications'}
            routeName={'Computer-Applications'}
        />
    )
}

export default page
