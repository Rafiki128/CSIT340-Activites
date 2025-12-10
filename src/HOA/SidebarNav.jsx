
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Components/sidebarStyle.css'; 

const navItems = [
    { name: '🏠 Home', path: '/' },
    { name: '👤 Nameplate', path: '/nameplate' },
    { name: '🔢 Counter', path: '/counter' },
    { name: '📝 Midterm Exam', path: '/midterm-exam' },
    { name: '🧮 Calculator', path: '/calculator' },
    { name: '🧠 Hooks Activity', path: '/hooks-activity' },
];

const SidebarNav = () => {
    const location = useLocation();

    return (
        <nav className="sidebar-nav">
            <h3 className="sidebar-header">
                HOA Compilation
            </h3> 
            
            <ul className="sidebar-list">
                {navItems.map((item) => (
                    <li key={item.path} className="sidebar-list-item">
                        <Link 
                            to={item.path}
                            className={`sidebar-link ${location.pathname === item.path ? 'sidebar-link-active' : ''}`}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default SidebarNav;