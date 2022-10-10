import React from 'react'
import { Card, CardBody, Col, Input, Label, Row, Table } from 'reactstrap';
import PreviewCardHeader from '../../../src/Components/Common/PreviewCardHeader';
import { Link } from 'react-router-dom';        
import {DefaultTables,
        StrippedRow,
        TablesColors,
        HoverableRows,
        CardTables,
        ActiveTables,
        BorderedTables,
        TablesBorderColors,
        TablesWithoutBorders,
        SmallTables,
        TableHead,
        TableFoot,
        Captions,
        TableNesting,
        Variants,
        VerticalAlignment,
        ResponsiveTables
    } from '../../../src/pages/Tables/BasicTables/BasicTablesCode';
const CheckBoxTable = () => {
    return (
        <Row>
            <Col xl={12}>
                <Card>
                    <PreviewCardHeader title="Card Tables" />
                    <CardBody>
                        <p className="text-muted mb-4">Use <code>table-card</code> class to show card-based table within a &lt;tbody&gt;.</p>
                        <div className="live-preview">
                            <div className="table-responsive table-card">
                                <Table className="align-middle table-nowrap mb-0">
                                    <thead className="table-light">
                                        <tr>
                                            <th scope="col" style={{ "width": "46px" }}>
                                                <div className="form-check">
                                                    <Input className="form-check-input" type="checkbox" defaultValue="" id="cardtableCheck" />
                                                    <Label className="form-check-label" htmlFor="cardtableCheck"></Label>
                                                </div>
                                            </th>
                                            <th scope="col">ID</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Total</th>
                                            <th scope="col">Status</th>
                                            <th scope="col" style={{ "width": "150px" }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="form-check">
                                                    <Input className="form-check-input" type="checkbox" defaultValue="" id="cardtableCheck01" />
                                                    <Label className="form-check-label" htmlFor="cardtableCheck01"></Label>
                                                </div>
                                            </td>
                                            <td><Link to="#" className="fw-medium">#VL2110</Link></td>
                                            <td>William Elmore</td>
                                            <td>07 Oct, 2021</td>
                                            <td>$24.05</td>
                                            <td><span className="badge bg-success">Paid</span></td>
                                            <td>
                                                <button type="button" className="btn btn-sm btn-light">Details</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check">
                                                    <Input className="form-check-input" type="checkbox" defaultValue="" id="cardtableCheck02" />
                                                    <Label className="form-check-label" htmlFor="cardtableCheck02"></Label>
                                                </div>
                                            </td>
                                            <td><Link to="#" className="fw-medium">#VL2109</Link></td>
                                            <td>Georgie Winters</td>
                                            <td>07 Oct, 2021</td>
                                            <td>$26.15</td>
                                            <td><span className="badge bg-success">Paid</span></td>
                                            <td>
                                                <button type="button" className="btn btn-sm btn-light">Details</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check">
                                                    <Input className="form-check-input" type="checkbox" value="" id="cardtableCheck03" />
                                                    <Label className="form-check-label" htmlFor="cardtableCheck03"></Label>
                                                </div>
                                            </td>
                                            <td><Link to="#" className="fw-medium">#VL2108</Link></td>
                                            <td>Whitney Meier</td>
                                            <td>06 Oct, 2021</td>
                                            <td>$21.25</td>
                                            <td><span className="badge bg-danger">Refund</span></td>
                                            <td>
                                                <button type="button" className="btn btn-sm btn-light">Details</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check">
                                                    <Input className="form-check-input" type="checkbox" value="" id="cardtableCheck04" />
                                                    <label className="form-check-label" htmlFor="cardtableCheck04"></label>
                                                </div>
                                            </td>
                                            <td><Link to="#" className="fw-medium">#VL2107</Link></td>
                                            <td>Justin Maier</td>
                                            <td>05 Oct, 2021</td>
                                            <td>$25.03</td>
                                            <td><span className="badge bg-success">Paid</span></td>
                                            <td>
                                                <button type="button" className="btn btn-sm btn-light">Details</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                        <div className="d-none code-view">
                            <pre className="language-markup" style={{ "height": "275px" }}>
                                <code>
                                    <CardTables />
                                </code>
                            </pre>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}
export default CheckBoxTable;