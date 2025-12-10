import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SidebarNav from './SidebarNav'; 
import Home from './Home';

import '../Components/mainStyle.css'; 

import { AbellaNameplate as Nameplate } from './AbellaNameplate';
import { Abella as Counter } from './Abella';
import { RosalinaSalaAbellaQuizTaker as MidtermExam } from './RosalinaSalaAbellaQuizTaker';
import { CalculatorJSX as Calculator } from './CalculatorJSX';
import { AbellaApp as UserHooksActivity } from './AbellaApp';

const MainLayout = () => {
    return (
        <div className="main-container"> 

            <div className="sidebar-area">
                <SidebarNav />
            </div>

            <div className="main-content-area"> 
        
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/nameplate" element={<Nameplate />} />
                    <Route path="/counter" element={<Counter />} />
                    <Route path="/midterm-exam" element={<MidtermExam />} />
                    <Route path="/calculator" element={<Calculator />} />
                    <Route path="/hooks-activity" element={<UserHooksActivity />} />
                </Routes>
            </div>
        </div>
    );
};

export default MainLayout;