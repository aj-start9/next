import React from 'react'
import Head from 'next/head'
import Layout from '../../../components/layout/layout'
import classes from './../../../styles/invoice-form.module.css'
import Button from './../../../components/button/button'
import { useRouter } from 'next/router'

const InvoiceForm = () => {
    const router = useRouter()
    const gotoList = () => {
        router.push('/invoice/invoice-list')
    }

    return (
        <Layout url="invoice/invoice-form">
            <Head>
                <title>Invoice Form</title>
            </Head>
            <div className={`${classes.invoice_form_container}`}>
                <div className={classes.invoice_list_top}>
                    <p className={classes.invoice_list_header}>My Invoices &nbsp; | &nbsp; <span style={{ color: '#404040' }}>New Invoice</span></p>
                    <div className={classes.align_header_item}>
                        <Button text="Cancel" onSubmit={gotoList}
                            style={{ width: "9rem", marginLeft: '2rem', color: '#2a3aff' }}
                            main_color="#2a3aff" />
                        <Button text="Send Invoice" fill 
                            style={{ width: "13rem", marginLeft: '2rem' }}
                            main_color="#2a3aff" />
                    </div>
                </div>
                <form className={`row form-inputs ${classes.invoice_details_form}`}>
                    <div className={`col-lg-4 col-md-6 ${classes.form_col}`}>
                        <div className={"w-100 mb-5"}>
                            <label htmlFor="invoiceNumber" className={classes.input_label}>Invoice Number :<span className={classes.required_field_asterisk}>*</span></label>
                            <input type="text" id="invoiceNumber" className={`form-control ${classes.form_control}`} placeholder="Specify Invoice Number" />
                        </div>
                        <div className={"w-100 mb-5"}>
                            <label htmlFor="poNumber" className={classes.input_label}>Customer PO/Order Number :</label>
                            <input type="text" id="poNumber" className={`form-control ${classes.form_control}`} placeholder="Specify PO Number" />
                        </div>
                        <div className={"w-100"}>
                            <label htmlFor="incoTerms" className={classes.input_label}>IncoTerms :</label>
                            <div className={"row mr-0 ml-0"}>
                                <div className={`${classes.form_control_container} ${classes.select_container} col-xl-4 ${classes.inco_select}`}>
                                    <select id="incoTerms" className={`${classes.custom_select_opt} form-control ${classes.form_control}`} defaultValue="cpt">
                                        <option value="cpt">CPT</option>
                                        <option value="other">OTHER</option>
                                    </select>
                                    <img src="/img/arrow.svg" alt="Choose" className={classes.down_arrow_solid_1}></img>
                                </div>
                                <input type="text" id="carriageId" className={`form-control col-md ${classes.form_control}`} placeholder="Carriage Padwadawid to" />
                            </div>
                        </div>
                    </div>
                    <div className={`col-lg-4 col-md-6 ${classes.form_col}`}>
                        <div className={"w-100 mb-5"}>
                            <label htmlFor="invoiceDate" className={classes.input_label}>Invoice Date :<span className={classes.required_field_asterisk}>*</span></label>
                            <div className={classes.form_control_container}>
                                <input type="text" id="invoiceDate" className={`form-control ${classes.form_control}`} placeholder="Choose Date" />
                                <img src="/img/date_pick.svg" alt="Pick Date" className={classes.date_picker}></img>
                            </div>
                        </div>
                        <div className="w-100 mb-5">
                            <label htmlFor="dueDate" className={classes.input_label}>Due Date :</label>
                            <div className={classes.form_control_container}>
                                <input type="text" id="dueDate" className={`form-control ${classes.form_control}`} placeholder="Choose Date" />
                                <img src="/img/date_pick.svg" alt="Pick Date" className={classes.date_picker}></img>
                            </div>
                        </div>
                        <div className="w-100">
                            <label htmlFor="paymentTerms" className={classes.input_label}>Payment Terms :</label>
                            <input type="text" id="paymentTerms" className={`form-control ${classes.form_control}`} placeholder="Specify Payment Terms" />
                        </div>
                    </div>
                    <div className={`col-lg-3 ${classes.logo_preview}`}>
                        <input type="file" accept="png,jpg,jpeg" className={classes.logo_input} />
                        <div className={classes.logo_text}>LOGO</div>
                    </div>
                </form>
                <div className={`row ${classes.billing_info_container}`}>
                    <div className={`col-md ${classes.billing_info_column}`}>
                        <div className={classes.billing_info_header}>
                            <div className={classes.billing_info_text_container}>
                                <h5>BILLED BY</h5>
                                <small>SELLER INFO</small>
                            </div>
                            <div className={classes.edit_info}>Edit</div>
                        </div>
                        <div className={classes.text_information_group}>
                            <p className={classes.text_information}>Seller Name</p>
                            <p className={classes.text_information_muted}>Address Line 1</p>
                            <p className={classes.text_information_muted}>Address Line 2</p>
                            <p className={classes.text_information_muted}>India</p>
                            <p className={classes.text_information_muted}>Bengaluru - <span>560 056</span></p>
                        </div>
                        <div className={classes.text_information_group}>
                            <p className={classes.text_information}>Mobile: <span className={classes.text_information_muted}>+91-87666 99887</span></p>
                            <p className={classes.text_information}>Email: <span className={classes.text_information_muted}>seller@gmail.com</span></p>
                        </div>
                        <div className={classes.text_information_group}>
                            <p className={classes.text_information}>CIN: <span className={classes.text_information_muted}>6543UBGF68904321VCRT5</span></p>
                            <p className={classes.text_information}>GST No: <span className={classes.text_information_muted}>22  AA8765YH76  1  Z  5</span></p>
                        </div>
                    </div>
                    <div className={`col-md ${classes.billing_info_column}`}>
                        <div className={classes.billing_info_header}>
                            <div className={classes.billing_info_text_container}>
                                <h5>BILLED TO</h5>
                                <small>CUSTOMER INFO</small>
                            </div>
                            <div className={classes.edit_info}>Edit</div>
                        </div>
                        <div className={classes.text_information_group}>
                            <label htmlFor="customerInput" className={classes.input_label}>Invoice Number :<span className={classes.required_field_asterisk}>*</span></label>
                            <div className={classes.search_container}>
                                <input type="text" id="customerInput" className={`form-control ${classes.form_control}`} placeholder="Choose Customer" />
                                <img src="/img/search.svg" alt="Search" className={classes.search_icon}></img>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md ${classes.billing_info_column}`}>
                        <div className={classes.billing_info_header}>
                            <div className={classes.billing_info_text_container}>
                                <h5>PAYMENT INSTRUCTIONS</h5>
                                <small>PAYMENT METHOD</small>
                            </div>
                            <div className={classes.edit_info}>Edit</div>
                        </div>
                        <div className={classes.text_information_group}>
                            <label htmlFor="paymentInput" className={classes.input_label}>Payment Profile :<span className={classes.required_field_asterisk}>*</span></label>
                            <div className={classes.search_container}>
                                <input type="text" id="paymentInput" className={`form-control ${classes.form_control}`} placeholder="Choose Payment Profile" />
                                <img src="/img/search.svg" alt="Search" className={classes.search_icon}></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`row ${classes.item_details_container}`}>
                    <div className={"col-md"}>
                        <h5 className={classes.item_details_head}>ITEM DETAILS</h5>
                    </div>
                    <div className={`col-md ${classes.item_options_container}`}>
                        <div className={classes.item_options_sub_container}>
                            <label htmlFor="currencyType" className={classes.input_label}>Currency :<span className={classes.required_field_asterisk}>*</span></label>
                            <div className={`${classes.form_control_container} ${classes.select_container}`}>
                                <select id="currencyType" className={`${classes.custom_select_opt} form-control ${classes.form_control}`} defaultValue="inr">
                                    <option value="inr">INR</option>
                                    <option value="usd">USD</option>
                                </select>
                                <img src="/img/arrow.svg" alt="Choose" className={classes.down_arrow_solid_2}></img>
                            </div>
                        </div>
                        <div className={classes.item_options_sub_container}>
                            <label htmlFor="taxPct" className={classes.input_label}>Tax :<span className={classes.required_field_asterisk}>*</span></label>
                            <div className={`${classes.form_control_container} ${classes.select_container}`}>
                                <input id="taxPct" type="number" className={`form-control ${classes.form_control}`} />
                                <div className={`${classes.pct_icon} ${classes.pct_icon_1}`}>%</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"table-responsive-lg"}>
                    <table className={`table table-borderless ${classes.item_details_table}`}>
                        <thead>
                            <tr>
                                <th scope="col" className={classes.detail_column_name}>S.NO.</th>
                                <th scope="col" className={classes.detail_column_name}>ITEM / SERVICE DESCRIPTION</th>
                                <th scope="col" className={classes.detail_column_name}>QUANTITY</th>
                                <th scope="col" className={classes.detail_column_name}>UNIT RATE</th>
                                <th scope="col" className={classes.detail_column_name}>AMOUNT</th>
                                <th scope="col" className={classes.detail_column_name}>DISCOUNT</th>
                                <th scope="col" className={classes.detail_column_name}>DISCOUNTED AMOUNT</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={classes.detail_column_values}>1</td>
                                <td className={classes.detail_column_values}>
                                    <input type="text" id="itemDescription" className={`form-control ${classes.form_control}`} placeholder="Enter description" />
                                </td>
                                <td className={classes.detail_column_values}>
                                    <input type="number" id="itemQty" className={`form-control ${classes.form_control}`} placeholder="0" />
                                </td>
                                <td className={classes.detail_column_values}>
                                    <input type="number" id="itemUnitRate" className={`form-control ${classes.form_control}`} placeholder="0.00" />
                                </td>
                                <td className={classes.detail_column_values}>
                                    <input type="number" id="itemAmount" className={`form-control ${classes.form_control}`} placeholder="0.00" />
                                </td>
                                <td className={classes.detail_column_values}>
                                    <div className={classes.form_control_container}>
                                        <input type="number" id="itemDiscount" className={`form-control ${classes.form_control}`} placeholder="0" onChange={(e) => { console.log(e) }} />
                                        <div className={`${classes.pct_icon} ${classes.pct_icon_1}`}>%</div>
                                    </div>
                                </td>
                                <td className={classes.detail_column_values}>
                                    <input type="number" id="itemDiscountAmount" className={`form-control ${classes.form_control}`} placeholder="0.00" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={classes.item_details_summary}>
                    <div className={`row align-items-center ${classes.item_details_summary_row}`}>
                        <div className={`col-md-5 ${classes.additional_info}`}>
                            <span className={classes.info_tip}>i</span> Additional Discount :
                        </div>
                        <div className={"col-md-2 radio-group"}>
                            <div className={"form-check form-check-inline"}>
                                <input className={"form-check-input"} type="radio" name="inlineRadioOptions" id="percentageRadio" value="pct" defaultChecked />
                                <label className={`${classes.form_check_label} form-check-label`} htmlFor="percentageRadio">Percentage</label>
                            </div>
                            <div className={"form-check form-check-inline"}>
                                <input className={"form-check-input"} type="radio" name="inlineRadioOptions" id="absoluteRadio" value="option2" />
                                <label className={`${classes.form_check_label} form-check-label`} htmlFor="absoluteRadio">Absolute</label>
                            </div>
                        </div>
                        <div className={"col-md-2"}>
                            <div className={classes.form_control_container}>
                                <input type="number" id="additionalDiscount" className={`form-control ${classes.form_control}`} placeholder="0" />
                                <div className={`${classes.pct_icon} ${classes.pct_icon_2}`}>%</div>
                            </div>
                        </div>
                        <div className={`col-sm-1 ${classes.addDiscountCurrency} ${classes.currency}`}>&#8377;</div>
                        <div className={`col-sm-2 ${classes.addDiscountAmount} ${classes.amount_value}`}>0.00</div>
                    </div>
                    <div className={`row align-items-center ${classes.item_details_summary_row}`}>
                        <p className={`col-sm-5 ${classes.additional_info}`}>
                            <span className={classes.info_tip}>i</span> Total Amount :
                        </p>
                        <div className={`col-sm-1 offset-md-4 ${classes.currency}`}>&#8377;</div>
                        <div className={`col-sm-2 ${classes.amount_value}`}>40,000.00</div>
                    </div>
                    <div className={`row align-items-center ${classes.item_details_summary_row}`}>
                        <div className={`col-sm-5 ${classes.additional_info}`}>
                            <span className={classes.info_tip}>i</span> Discounted Amount :
                        </div>
                        <div className={`col-sm-1 offset-md-4 ${classes.currency}`}>&#8377;</div>
                        <div className={`col-sm-2 ${classes.amount_value}`}>4,000.00</div>
                    </div>
                    <div className={`row align-items-center ${classes.item_details_summary_row}`}>
                        <div className={`col-sm-5 ${classes.additional_info}`}>
                            <span className={classes.info_tip}>i</span> Total Tax Amount :
                        </div>
                        <div className={`col-sm-1 offset-md-4 ${classes.currency}`}>&#8377;</div>
                        <div className={`col-sm-2 ${classes.amount_value}`}>6,480.00</div>
                    </div>
                    <div className={`row align-items-center ${classes.item_details_summary_row}`}>
                        <div className={`col-sm-5 ${classes.additional_info}`}>
                            <span className={classes.info_tip}>i</span> Grand Total :
                        </div>
                        <div className={`col-sm-1 offset-md-4 ${classes.currency}`}>&#8377;</div>
                        <div className={`col-sm-2 ${classes.amount_value}`}>29,520.00</div>
                    </div>
                </div>
                <div className={`row ${classes.item_details_notes}`}>
                    <p className={"col"}>Notes</p>
                </div>
                <textarea rows="4" name="notes" id="itemNotes" placeholder="Additional Notes" className={`col form-control ${classes.form_control} ${classes.notes_textarea}`}></textarea>
            </div>
        </Layout>
    )
}


export default InvoiceForm
