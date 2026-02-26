import { FacultyLayout } from '@/components/Academics/layout/facultyLayout'
import React from 'react'

const page = () => {
    return (
        <FacultyLayout
            programmes={[]}
            departmentNameForNav={'Master in Business Administration'}
            routeName={'Business-Administration'}
        />
    )
}

export default page
