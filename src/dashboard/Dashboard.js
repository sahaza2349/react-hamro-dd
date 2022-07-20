import { useAuthValue } from '../AuthContext'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

import Layout from '../components/layout/layout.js'
import styles from './dashboard.module.scss'
import Blogs from '../components/blog/blog'

export default function Dashboard() {
    return (
        <div>
            <Layout className={styles.layout}>
                <div>
                    <Blogs />
                </div>
            </Layout>
        </div>
    )
}