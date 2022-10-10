import React from "react";
import { Col, Container, Row } from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import Widget from "./Widgets";
import BestSellingProducts from "./BestSellingProducts";
import RecentActivity from "./RecentActivity";
import RecentOrders from "./RecentOrders";
import Revenue from "./Revenue";
import SalesByLocations from "./SalesByLocations";
import Section from "./Section";
import StoreVisits from "./StoreVisits";
import TopSellers from "./TopSellers";
import Button_section from "./Button_section";
import Section_table from "./Section_table";
import Section_t from "./Section_table";
import CheckBoxTable from "./CheckBoxtable";



const DashboardEcommerce = () => {
  document.title = "Dashboard | Velzon - React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Chenel Contents" pageTitle="Dashboards" />
          <Row>
            <Col>
              <div className="h-100">
                {/* <Section /> */}
                <Button_section />
                <Row>
                  {/* <Section_t /> */}
                  {/* <Widget /> */}
                </Row>
                <Row>
                  <Col xl={8}>
                    {/* <Revenue /> */}
                  </Col>
                  {/* <SalesByLocations /> */}
                </Row>
                <Row>
                  {/* <BestSellingProducts /> */}
                  {/* <TopSellers /> */}
                </Row>
                <Row>
                  {/* <StoreVisits /> */}
                  {/* <RecentOrders /> */}
                </Row>
              </div>
            </Col>

            {/* <RecentActivity /> */}
          </Row>
          <CheckBoxTable/>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default DashboardEcommerce;
