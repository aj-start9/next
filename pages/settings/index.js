import React from 'react'
import Layout from './../../components/layout/layout'
import { useRouter } from 'next/router'

const Settings = () => {
    const router = useRouter()
    return (
        <Layout url="settings">
            Setting
        </Layout>
    )
}

export default Settings