import React from 'react'
import Layout from './../../../components/layout/layout'
import classes from './../../../styles/profile-list.module.css'
import Button from './../../../components/button/button'
import NoList from './../../../components/no_list/no_list'
import { useRouter } from 'next/router'
const ProfileList = () => {
    const router = useRouter()
    const gotoBilling = () => {
        router.push('/profile/billing-details')
    }
    const gotoPayment = () => {
        router.push('/profile/payment-profile')
    }

    return (
        <Layout url="profile/profile-list">
            <div className={classes.main_div}>
                <h2 className={classes.profile_header}>Profiles</h2>
                <div className={classes.invoice_list_top}>
                    <p className={classes.invoice_list_header}>Payment Profiles</p>
                    <div className={classes.align_header_item}>
                        {/* <div className="form-group">
                            <input type="email" className={'form-control', classes.custom_input} id="Search Invoices" placeholder="Search Invoices" />
                        </div> */}
                        <Button text="+ Add Payment Profile" fill onSubmit={gotoPayment}
                            style={{ width: "20rem" }}
                            main_color="#2a3aff" />
                    </div>
                </div>
                <div style={{ marginBottom: '6rem' }}>
                    {/* <NoList style_img={{width:'35%'}} name="payment profile" name_btn="Add Payment Profile"/> */}
                    <div className={['table-responsive', classes.table_div].join(" ")} >
                        <table className={['table', classes.table_border].join(" ")}>
                            <thead style={{ backgroundColor: 'rgba(42, 58, 255, 0.1)' }}>
                                <tr>
                                    <th style={{ width: '17%' }} className={classes.table_head} scope="col">Bank Country</th>
                                    <th style={{ width: '17%' }} className={classes.table_head} scope="col">Bank Name</th>
                                    <th style={{ width: '20%' }} className={classes.table_head} scope="col">Account No</th>
                                    <th style={{ width: '31%' }} className={classes.table_head} scope="col">IBAN</th>
                                    <th style={{ width: '15%' }} className={classes.table_head} scope="col">Identifier Code</th>
                                </tr>
                            </thead>
                            <tbody className={classes.row_item}>
                                <tr >
                                    <td className={classes.table_item}>
                                        <p className={classes.invoice_no}>Saudi Arabia</p>
                                    </td>
                                    <td className={classes.table_item}>
                                        <p className={classes.cust_name}>Riyal Bank</p>
                                    </td>
                                    <td className={classes.table_item}>
                                        <p className={classes.due_date}>
                                            300158005
                                    </p>
                                    </td>
                                    <td className={classes.table_item}>
                                        <span className={classes.amount}>
                                            HU42 1177 3016 1111 1018 000 0000
                                    </span>
                                    </td>
                                    <td className={classes.table_item}>
                                        <span className={classes.amount}>
                                            CTBAAU2S
                                    </span>
                                    </td>
                                </tr>
                                <tr >
                                    <td className={classes.table_item}>
                                        <p className={classes.invoice_no}>Saudi Arabia</p>
                                    </td>
                                    <td className={classes.table_item}>
                                        <p className={classes.cust_name}>Riyal Bank</p>
                                    </td>
                                    <td className={classes.table_item}>
                                        <p className={classes.due_date}>
                                            300158005
                                    </p>
                                    </td>
                                    <td className={classes.table_item}>
                                        <span className={classes.amount}>
                                            HU42 1177 3016 1111 1018 000 0000
                                    </span>
                                    </td>
                                    <td className={classes.table_item}>
                                        <span className={classes.amount}>
                                            CTBAAU2S
                                    </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={classes.invoice_list_top}>
                    <p className={classes.invoice_list_header}>Billing Details</p>
                    <div className={classes.align_header_item}>
                        {/* <div className="form-group">
                            <input type="email" className={'form-control', classes.custom_input} id="Search Invoices" placeholder="Search Invoices" />
                        </div> */}
                        <Button text="+ Add Billing Info" fill onSubmit={gotoBilling}
                            style={{ width: "20rem" }}
                            main_color="#2a3aff" />
                    </div>
                </div>
                <div>
                    {/* <NoList style_img={{ width: '35%' }} name="billing detail" name_btn="Add Billing Info" /> */}
                    <div className={['table-responsive', classes.table_div].join(" ")} >
                        <table className={['table', classes.table_border].join(" ")}>
                            <thead style={{ backgroundColor: 'rgba(42, 58, 255, 0.1)' }}>
                                <tr>
                                    <th style={{ width: '20%' }} className={classes.table_head} scope="col">Name</th>
                                    <th style={{ width: '20%' }} className={classes.table_head} scope="col">Company Name</th>
                                    <th style={{ width: '20%' }} className={classes.table_head} scope="col">Email</th>
                                    <th style={{ width: '25%' }} className={classes.table_head} scope="col">Phone</th>
                                    <th style={{ width: '15%' }} className={classes.table_head} scope="col">Country</th>
                                </tr>
                            </thead>
                            <tbody className={classes.row_item}>
                                <tr >
                                    <td className={classes.table_item}>
                                        <p className={classes.invoice_no}>John De</p>
                                    </td>
                                    <td className={classes.table_item}>
                                        <p className={classes.cust_name}>Doe.inc</p>
                                    </td>
                                    <td className={classes.table_item}>
                                        <p className={classes.due_date}>test@test.com</p>
                                    </td>
                                    <td className={classes.table_item}>
                                        <span className={classes.amount}>
                                            +91 02225822131
                                        </span>
                                    </td>
                                    <td className={classes.table_item}>
                                        <span className={classes.amount}>
                                            India
                                    </span>
                                    </td>
                                </tr>
                                <tr >
                                    <td className={classes.table_item}>
                                        <p className={classes.invoice_no}>John De</p>
                                    </td>
                                    <td className={classes.table_item}>
                                        <p className={classes.cust_name}>Doe.inc</p>
                                    </td>
                                    <td className={classes.table_item}>
                                        <p className={classes.due_date}>test@test.com</p>
                                    </td>
                                    <td className={classes.table_item}>
                                        <span className={classes.amount}>
                                            +91 02225822131
                                        </span>
                                    </td>
                                    <td className={classes.table_item}>
                                        <span className={classes.amount}>
                                            India
                                    </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ProfileList