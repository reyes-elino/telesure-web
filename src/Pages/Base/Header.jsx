import React from "react";
import { NavLink } from "react-router-dom";
import { Menubar } from 'primereact/menubar';


const Header = () => {

    const templating = (item, options) => {
        return (
            <NavLink className={({ isActive }) => isActive ? 'p-menuitem-link active' : 'p-menuitem-link'} to={item.url}>
                {item.icon && <span className={`p-menuitem-icon ${item.icon}`}></span>}
                <span className="p-menuitem-text">{item.label}</span>
            </NavLink>
        )
    }
    
    const items = [
        {
            label: 'Home',
            url: '/home',
            template: templating
        },
        {
            label: 'Configuration',
            items: [
                {
                    label: 'Vertex Specification',
                    url: '/vertex_specification',
                    template: templating
                },
                {
                    label: 'Edge Specification',
                    url: '/edge_specification',
                    template: templating
                }
            ]
        },
        {
            label: 'Topology',
            items: [
                {
                    label: 'Graph',
                    url: '/graph_list',
                    template: templating
                },
                {
                    label: 'Vertex',
                    url: '/vertex_list',
                    template: templating
                },
                {
                    label: 'Edge',
                    url: '/edge_list',
                    template: templating
                }
            ]
        },
        {
            label: 'Help',
            items: [
                {
                    label: 'Help',
                    url: '/help',
                    template: templating
                },
                {
                    label: 'Documentation',
                    url: '',
                    template: templating
                },
                {
                    label: 'About',
                    url: '/about',
                    template: templating
                }
            ]
        },
    ];
    

    const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2"></img>;    
    

    return (        
       <Menubar className="header" model={items} start={start} />
    );
}

export default Header