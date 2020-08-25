import React from 'react'
import Head from 'next/head'
import Layout from '../../../components/layout/layout'
import classes from './../../../styles/invoice-list.module.css'
import Button from '../../../components/button/button'
import { useRouter } from 'next/router'
import NoList from './../../../components/no_list/no_list'

const InvoiceList = () => {
    const router = useRouter()
    const gotoForm = () => {
        router.push('/invoice/invoice-form')
    }
    return (
        <Layout url="invoice/invoice-list">
            <Head>
                <title>Invoice List</title>
            </Head>

            <div className={classes.main_div}>
                <div className={classes.invoice_list_top}>
                    <p className={classes.invoice_list_header}>Invoices</p>
                    <div className={classes.align_header_item}>
                        {/* <div className="form-group">
                            <input type="email" className={'form-control', classes.custom_input} id="Search Invoices" placeholder="Search Invoices" />
                        </div> */}
                        <Button text="+ Create Invoice" fill onSubmit={gotoForm}
                            style={{ width: "15rem" }}
                            main_color="#2a3aff" />
                    </div>
                </div>
                {/* <NoList name="invoice" name_btn="Create Invoice"/> */}
                <div className={['table-responsive', classes.table_div].join(" ")} >
                    <table className={['table', classes.table_border].join(" ")}>
                        <thead style={{ backgroundColor: 'rgba(42, 58, 255, 0.1)' }}>
                            <tr>
                                <th style={{ width: '25%' }} className={classes.table_head} scope="col">Invoice Info</th>
                                <th style={{ width: '20%' }} className={classes.table_head} scope="col">Customer Info</th>
                                <th style={{ width: '20%' }} className={classes.table_head} scope="col">Due Date</th>
                                <th style={{ width: '20%', paddingLeft: '2.5%' }} className={classes.table_head} scope="col">Amount</th>
                                <th style={{ width: '15%', paddingLeft: '3%' }} className={classes.table_head} scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody className={classes.row_item}>
                            <tr >
                                <td className={classes.table_item}>
                                    <p className={classes.invoice_no}>#1234567890123456</p>
                                    <p className={classes.invoice_date}>12 August, 2020</p>
                                </td>
                                <td className={classes.table_item}>
                                    <p className={classes.cust_name}>Customer Name</p>
                                    <p className={classes.city}>City, Country</p>
                                </td>
                                <td className={classes.table_item}>
                                    <p className={classes.due_date}>
                                        20 August, 2020
                                    </p>
                                </td>
                                <td className={classes.table_item}>
                                    <span className={classes.rupee_logo}>
                                        ₹
                                    </span> &nbsp;
                                    <span className={classes.amount}>
                                        78324.899
                                    </span>
                                </td>
                                <td className={classes.table_item}>
                                    <p className={classes.status}>Pending</p>
                                </td>

                            </tr>
                            <tr >
                                <td className={classes.table_item}>
                                    <p className={classes.invoice_no}>#1234567890123456</p>
                                    <p className={classes.invoice_date}>12 August, 2020</p>
                                </td>
                                <td className={classes.table_item}>
                                    <p className={classes.cust_name}>Customer Name</p>
                                    <p className={classes.city}>City, Country</p>
                                </td>
                                <td className={classes.table_item}>
                                    <p className={classes.due_date}>
                                        20 August, 2020
                                    </p>
                                </td>
                                <td className={classes.table_item}>
                                    <span className={classes.rupee_logo}>
                                        ₹
                                    </span> &nbsp;
                                    <span className={classes.amount}>
                                        7832324.899
                                    </span>
                                </td>
                                <td className={classes.table_item}>
                                    <p className={classes.status}>Pending</p>
                                </td>
                            </tr>
                            <tr >
                                <td className={classes.table_item}>
                                    <p className={classes.invoice_no}>#1234567890123456</p>
                                    <p className={classes.invoice_date}>12 August, 2020</p>
                                </td>
                                <td className={classes.table_item}>
                                    <p className={classes.cust_name}>Customer Name</p>
                                    <p className={classes.city}>City, Country</p>
                                </td>
                                <td className={classes.table_item}>
                                    <p className={classes.due_date}>
                                        20 August, 2020
                                    </p>
                                </td>
                                <td className={classes.table_item}>
                                    <span className={classes.rupee_logo}>
                                        ₹
                                    </span> &nbsp;
                                    <span className={classes.amount}>
                                        7832324.899
                                    </span>
                                </td>
                                <td className={classes.table_item}>
                                    <p className={classes.status}>Pending</p>
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