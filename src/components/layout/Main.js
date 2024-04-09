import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Layout, Drawer, Affix } from "antd";
import Sidenav from "./Sidenav";
import Header from "./Header";

const { Header: AntHeader, Content, Sider } = Layout;

function Main({ children }) {
  const [visible, setVisible] = useState(false);

  const placement = "right";
  const sidenavColor = "#1890ff";

  const openDrawer = () => setVisible(!visible);

  let { pathname } = useLocation();
  pathname = pathname.replace("/", "");

  return (
    <Layout className="layout-dashboard">
      <Drawer
        title={false}
        closable={false}
        onClose={() => setVisible(false)}
        placement={placement === "right" ? "left" : "right"}
        key={placement === "right" ? "left" : "right"}
        visible={visible}
        width={250}
        className={`drawer-sidebar ${
          pathname === "rtl" ? "drawer-sidebar-rtl" : ""
        } `}
      >
        <Layout
          className={`layout-dashboard ${
            pathname === "rtl" ? "layout-dashboard-rtl" : ""
          }`}
        >
          <Sider
            trigger={null}
            width={250}
            theme="light"
            className={`sider-primary ant-layout-sider-primary`}
            style={{ background: "transparent" }}
          >
            <Sidenav color={sidenavColor} />
          </Sider>
        </Layout>
      </Drawer>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        trigger={null}
        width={250}
        theme="light"
        className={`sider-primary ant-layout-sider-primary`}
        style={{ background: "transparent" }}
      >
        <Sidenav color={sidenavColor} />
      </Sider>
      <Layout>
        <Affix>
          <AntHeader>
            <Header onPress={openDrawer} name={pathname} subName={pathname} />
          </AntHeader>
        </Affix>
        <Content className="content-ant">{children}</Content>
      </Layout>
    </Layout>
  );
}

export default Main;
