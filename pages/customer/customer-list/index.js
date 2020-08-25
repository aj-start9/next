import React from 'react'
import Head from 'next/head'
import Layout from '../../../components/layout/layout'
import classes from './../../../styles/customer-list.module.css'
import Button from '../../../components/button/button'
import { useRouter } from 'next/router'
import NoList from './../../../components/no_list/no_list'

const InvoiceList = () => {
    const router = useRouter()
    const gotoForm = () => {
        router.push('/customer/customer-form')
    }
    return (
        <Layout url="customer/customer-list">
            <Head>
                <title>Invoice List</title>
            </Head>
            <div className={classes.main_div}>
                <div className={classes.invoice_list_top}>
                    <p className={classes.invoice_list_header}>Customers</p>
                    <div className={classes.align_header_item}>
                        {/* <div className="form-group">
                            <input type="email" className={'form-control', classes.custom_input} id="Search Invoices" placeholder="Search Invoices" />
                        </div> */}
                        <Button text="+ Add Customer" fill onSubmit={gotoForm}
                            style={{ width: "15rem" }}
                            main_color="#2a3aff" />
                    </div>
                </div>
                {/* <NoList name="customer" name_btn="Add Customer"/> */}
                <div className={['table-responsive', classes.table_div].join(" ")} >
                    <table className={['table', classes.table_border].join(" ")}>
                        <thead data-sticky-header  style={{ backgroundColor: 'rgba(42, 58, 255, 0.1)' }}>
                            <tr>
                                <th style={{ width: '25%' }} className={classes.table_head} scope="col">Name</th>
                                <th style={{ width: '25%' }} className={classes.table_head} scope="col">Contact info</th>
                                <th style={{ width: '20%' }} className={classes.table_head} scope="col">GST Registered</th>
                                <th style={{ width: '15%' }} className={classes.table_head} scope="col">Invoices Sent</th>
                                <th style={{ width: '15%' }} className={classes.table_head} scope="col">Invoices Due</th>
                            </tr>
                        </thead>
                        <tbody className={classes.row_item}>
                            <tr >
                                <td className={classes.table_item}>
                                    <p className={classes.invoice_no}>John De</p>
                                    <p className={classes.invoice_date}>+91 98723232323</p>
                                </td>
                                <td className={classes.table_item}>
                                    <p className={classes.cust_name}>test@test.com</p>
                                </td>
                                <td className={classes.table_item}>
                                    <p className={classes.due_date}>
                                        Yes
                                    </p>
                                </td>
                                <td className={classes.table_item}>
                                    <span className={classes.amount}>
                                        12
                                    </span>
                                </td>
                                <td className={classes.table_item}>
                                    <span className={classes.amount}>
                                        12
                                    </span>
                                </td>
                            </tr>
                            <tr >
                                <td className={classes.table_item}>
                                    <p className={classes.invoice_no}>John De</p>
                                    <p className={classes.invoice_date}>+91 232323232323</p>
                                </td>
                                <td className={classes.table_item}>
                                    <p className={classes.cust_name}>test@test.com</p>
                                </td>
                                <td className={classes.table_item}>
                                    <p className={classes.due_date}>
                                        Yes
                                    </p>
                                </td>
                                <td className={classes.table_item}>
                                    <span className={classes.amount}>
                                        12
                                    </span>
                                </td>
                                <td className={classes.table_item}>
                                    <span className={classes.amount}>
                                        12
                                    </span>
                                </td>
                            </tr>
                            <tr >
                                <td className={classes.table_item}>
                                    <p className={classes.invoice_no}>John De</p>
                                    <p className={classes.invoice_date}>+91 232323232323</p>
                                </td>
                                <td className={classes.table_item}>
                                    <p className={classes.cust_name}>test@test.com</p>
                                </td>
                                <td className={classes.table_item}>
                                    <p className={classes.due_date}>
                                        Yes
                                    </p>
                                </td>
                                <td className={classes.table_item}>
                                    <span className={classes.amount}>
                                        12
                                    </span>
                                </td>
                                <td className={classes.table_item}>
                                    <span className={classes.amount}>
                                        12
                                    </span>
                                </td>
                            </tr>
                            <tr >
                                <td className={classes.table_item}>
                                    <p className={classes.invoice_no}>John De</p>
                                    <p className={classes.invoice_date}>+91 232323232323</p>
                                </td>
                                <td className={classes.table_item}>
                                    <p className={classes.cust_name}>test@test.com</p>
                                </td>
                                <td className={classes.table_item}>
                                    <p className={classes.due_date}>
                                        Yes
                                    </p>
                                </td>
                                <td className={classes.table_item}>
                                    <span className={classes.amount}>
                                        12
                                    </span>
                                </td>
                                <td className={classes.table_item}>
                                    <span className={classes.amount}>
                                        12
                                    </span>
                                </td>
                            </tr>
                            <tr >
                                <td className={classes.table_item}>
                                    <p className={classes.invoice_no}>John De</p>
                                    <p className={classes.invoice_date}>+91 232323232323</p>
                                </td>
                                <td className={classes.table_item}>
                                    <p className={classes.cust_name}>test@test.com</p>
                                </td>
                                <td className={classes.table_item}>
                                    <p className={classes.due_date}>
                                        Yes
                                    </p>
                                </td>
                                <td className={classes.table_item}>
                                    <span className={classes.amount}>
                                        12
                                    </span>
                                </td>
                                <td className={classes.table_item}>
                                    <span className={classes.amount}>
                                        12
                                    </span>
                                </td>
                            </tr>
                            <tr >
                                <td className={classes.table_item}>
                                    <p className={classes.invoice_no}>John De</p>
                                    <p className={classes.invoice_date}>+91 232323232323</p>
                                </td>
                                <td className={classes.table_item}>
                                    <p className={classes.cust_name}>test@test.com</p>
                                </td>
                                <td className={classes.table_item}>
                                    <p className={classes.due_date}>
                                        Yes
                                    </p>
                                </td>
                                <td className={classes.table_item}>
                                    <span className={classes.amount}>
                                        12
                                    </span>
                                </td>
                                <td className={classes.table_item}>
                                    <span className={classes.amount}>
                                        12
                                    </span>
                                </td>
                            </tr>
                            <tr >
                                <td className={classes.table_item}>
                                    <p className={classes.invoice_no}>John De</p>
                                    <p className={classes.invoice_date}>+91 232323232323</p>
                                </td>
                                <td className={classes.table_item}>
                                    <p className={classes.cust_name}>test@test.com</p>
                                </td>
                                <td className={classes.table_item}>
                                    <p className={classes.due_date}>
                                        Yes
                                    </p>
                                </td>
                                <td className={classes.table_item}>
                                    <span className={classes.amount}>
                                        12
                                    </span>
                                </td>
                                <td className={classes.table_item}>
                                    <span className={classes.amount}>
                                        12
                                    </span>
                                </td>
                            </tr>
                            <tr >
                                <td className={classes.table_item}>
                                    <p className={classes.invoice_no}>John De</p>
                                    <p className={classes.invoice_date}>+91 232323232323</p>
                                </td>
                                <td className={classes.table_item}>
                                    <p className={classes.cust_name}>test@test.com</p>
                                </td>
                                <td className={classes.table_item}>
                                    <p className={classes.due_date}>
                                        Yes
                                    </p>
                                </td>
                                <td className={classes.table_item}>
                                    <span className={classes.amount}>
                                        12
                                    </span>
                                </td>
                                <td className={classes.table_item}>
                                    <span className={classes.amount}>
                                        12
                                    </span>
                                </td>
                            </tr>
                            <tr >
                                <td className={classes.table_item}>
                                    <p className={classes.invoice_no}>John De</p>
                                    <p className={classes.invoice_date}>+91 232323232323</p>
                                </td>
                                <td className={classes.table_item}>
                                    <p className={classes.cust_name}>test@test.com</p>
                                </td>
                                <td className={classes.table_item}>
                                    <p className={classes.due_date}>
                                        Yes
                                    </p>
                                </td>
                                <td className={classes.table_item}>
                                    <span className={classes.amount}>
                                        12
                                    </span>
                                </td>
                                <td className={classes.table_item}>
                                    <span className={classes.amount}>
                                        12
                                    </span>
                                </td>
                            </tr>
                            <tr >
                                <td className={classes.table_item}>
                                    <p className={classes.invoice_no}>John De</p>
                                    <p className={classes.invoice_date}>+91 232323232323</p>
                                </td>
                                <td className={classes.table_item}>
                                    <p className={classes.cust_name}>test@test.com</p>
                                </td>
                                <td className={classes.table_item}>
                                    <p className={classes.due_date}>
                                        Yes
                                    </p>
                                </td>
                                <td className={classes.table_item}>
                                    <span className={classes.amount}>
                                        12
                                    </span>
                                </td>
                                <td className={classes.table_item}>
                                    <span className={classes.amount}>
                                        12
                                    </span>
                                </td>
                            </tr>
                            <tr >
                                <td className={classes.table_item}>
                                    <p className={classes.invoice_no}>John De</p>
                                    <p className={classes.invoice_date}>+91 232323232323</p>
                                </td>
                                <td className={classes.table_item}>
                                    <p className={classes.cust_name}>test@test.com</p>
                                </td>
                                <td className={classes.table_item}>
                                    <p className={classes.due_date}>
                                        Yes
                                    </p>
                                </td>
                                <td className={classes.table_item}>
                                    <span className={classes.amount}>
                                        12
                                    </span>
                                </td>
                                <td className={classes.table_item}>
                                    <span className={classes.amount}>
                                        12
                                    </span>
                                </td>
                            </tr>
                            <tr >
                                <td className={classes.table_item}>
                                    <p className={classes.invoice_no}>John De</p>
                                    <p className={classes.invoice_date}>+91 232323232323</p>
                                </td>
                                <td className={classes.table_item}>
                                    <p className={classes.cust_name}>test@test.com</p>
                                </td>
                                <td className={classes.table_item}>
                                    <p className={classes.due_date}>
                                        Yes
                                    </p>
                                </td>
                                <td className={classes.table_item}>
                                    <span className={classes.amount}>
                                        12
                                    </span>
                                </td>
                                <td className={classes.table_item}>
                                    <span className={classes.amount}>
                                        12
                                    </span>
                                </td>
                            </tr>
                            <tr >
                                <td className={classes.table_item}>
                                    <p className={classes.invoice_no}>John De</p>
                                    <p className={classes.invoice_date}>+91 232323232323</p>
                                </td>
                                <td className={classes.table_item}>
                                    <p className={classes.cust_name}>test@test.com</p>
                                </td>
                                <td className={classes.table_item}>
                                    <p className={classes.due_date}>
                                        Yes
                                    </p>
                                </td>
                                <td className={classes.table_item}>
                                    <span className={classes.amount}>
                                        12
                                    </span>
                                </td>
                                <td className={classes.table_item}>
                                    <span className={classes.amount}>
                                        12
                                    </span>
                                </td>
                            </tr>
                            <tr >
                                <td className={classes.table_item}>
                                    <p className={classes.invoice_no}>John De</p>
                                    <p className={classes.invoice_date}>+91 232323232323</p>
                                </td>
                                <td className={classes.table_item}>
                                    <p className={classes.cust_name}>test@test.com</p>
                                </td>
                                <td className={classes.table_item}>
                                    <p className={classes.due_date}>
                                        Yes
                                    </p>
                                </td>
                                <td className={classes.table_item}>
                                    <span className={classes.amount}>
                                        12
                                    </span>
                                </td>
                                <td className={classes.table_item}>
                                    <span className={classes.amount}>
                                        12
                                    </span>
                                </td>
                            </tr>
                            <tr >
                                <td className={classes.table_item}>
                                    <p className={classes.invoice_no}>John De</p>
                                    <p className={classes.invoice_date}>+91 232323232323</p>
                                </td>
                                <td className={classes.table_item}>
                                    <p className={classes.cust_name}>test@test.com</p>
                                </td>
                                <td className={classes.table_item}>
                                    <p className={classes.due_date}>
                                        Yes
                                    </p>
                                </td>
                                <td className={classes.table_item}>
                                    <span className={classes.amount}>
                                        12
                                    </span>
                                </td>
                                <td className={classes.table_item}>
                                    <span className={classes.amount}>
                                        12
                                    </span>
                                </td>
                            </tr>
                            <tr >
                                <td className={classes.table_item}>
                                    <p className={classes.invoice_no}>John De</p>
                                    <p className={classes.invoice_date}>+91 232323232323</p>
                                </td>
                                <td className={classes.table_item}>
                                    <p className={classes.cust_name}>test@test.com</p>
                                </td>
                                <td className={classes.table_item}>
                                    <p className={classes.due_date}>
                                        Yes
                                    </p>
                                </td>
                                <td className={classes.table_item}>
                                    <span className={classes.amount}>
                                        12
                                    </span>
                                </td>
                                <td className={classes.table_item}>
                                    <span className={classes.amount}>
                                        12
                                    </span>
                                </td>
                            </tr>
                            
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
}


export default InvoiceList