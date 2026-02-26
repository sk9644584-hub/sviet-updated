import { FacultyLayout } from '@/components/Academics/layout/facultyLayout'
import React from 'react'

const page = () => {
    return (
        <FacultyLayout
            programmes={[]}
            departmentNameForNav={'Computer Science & Engineering'}
            routeName={'Computer-Science-And-Engineering'}
        />
    )
}

export default page