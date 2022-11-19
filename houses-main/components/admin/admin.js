import {SnippetsOutlined, TeamOutlined} from '@ant-design/icons';
import {Breadcrumb, Button, Layout, Menu} from 'antd';
import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {logout} from "store";
import {useRouter} from "next/router";
import Link from "next/link";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const {Header, Content, Footer, Sider} = Layout;

function getItem(label, key, icon, path, children) {
    return {
        key,
        icon,
        path,
        children,
        label,
    };
}

const items = [
    getItem('Obyekt', '1', <SnippetsOutlined/>, "/object"),
    getItem('Uy', '2', <TeamOutlined/>, "/houses"),
    getItem('Xonadon', '2', <TeamOutlined/>, "/room"),
    getItem('Tur', '2', <TeamOutlined/>, "/type"),
    getItem('Shartnoma', '2', <TeamOutlined/>, "/contract"),
    getItem('Buxgalteriya', '2', <TeamOutlined/>, "/accounting"),
    getItem('Qarzdorlar', '2', <TeamOutlined/>, "/debt"),
    // getItem('Subkategoriya', '2', <Inpusts/>, "/subcategory"),
    // getItem('Mahsulot', '2', <TeamOutlined/>, "/product"),
];

const Admin = ({children}) => {
    const navigate = useRouter()
    const [collapsed, setCollapsed] = useState(false);
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
        navigate.push("/login")
    }

    const handleMainPage = () => {
        dispatch(logout())
        navigate.push("/")
    }

    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
            >
                <div className="sidebar-logo" onClick={() => handleMainPage()}>
                    {
                        !collapsed ? " Object" : "HS"
                    }
                </div>
                <Menu theme="dark"
                      defaultSelectedKeys={[navigate.pathname]}
                      mode="inline"
                >
                    {
                        items?.map((menu, k) => {
                            return (
                                <Menu.Item key={menu.path} icon={menu.icon}>
                                    <Link href={menu.path}/>
                                    {menu.label}
                                </Menu.Item>
                            )
                        })
                    }
                </Menu>
            </Sider>
            <Layout className="site-layout">

                <Header
                    className="mHeader"
                >
                    <Button type="primary" onClick={() => handleLogout()}>
                        Log out
                    </Button>
                </Header>
                <Breadcrumb style={{margin: '16px 20px'}}>
                    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <div className="site-layout-background">
                        {children}
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Safeeds Transport Inc ©2022 Created by
                    &nbsp;<a href="https://senior-developer.vercel.app/">
                    Ikhtiyor
                </a>
                </Footer>
            </Layout>
        </Layout>
    );
};

export default Admin;
