import { Menu } from "antd";
import { BarChartOutlined, CreditCardOutlined } from "@ant-design/icons";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function Sidenav({ color }) {
  const { pathname } = useLocation();
  const currentPage = pathname.replace("/", "");

  const pages = [
    {
      link: "dashboard",
      label: "Dashboard",
      icon: <BarChartOutlined />,
    },
    {
      link: "sleep",
      icon: <BarChartOutlined />,
      label: "Sleep",
    },
    {
      link: "tables",
      icon: <BarChartOutlined />,
      label: "Tables",
    },
    {
      link: "billing",
      icon: <CreditCardOutlined />,
      label: "Billing",
    },
  ];

  return (
    <>
      <div className="brand">
        <img src={logo} alt="" />
        <span>Wellness Tracker</span>
      </div>
      <hr />
      <Menu theme="light" mode="inline">
        {pages.map((page, key) => (
          <Menu.Item key={key}>
            <NavLink to={`/${page.link}`}>
              <span
                className="icon"
                style={{
                  background: currentPage === page.link ? color : "",
                }}
              >
                {page.icon}
              </span>
              <span className="label">{page.label}</span>
            </NavLink>
          </Menu.Item>
        ))}
      </Menu>
    </>
  );
}

export default Sidenav;
