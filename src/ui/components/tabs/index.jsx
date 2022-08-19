import { useState } from "react";

export default function Tabs (props){
    const [activeTab, setActiveTab] = useState([0]);
    const getActiveTab = props.getActiveTab ?? function(){};
    return <div className="tabs">
        {Array.from(props.children).map((tab, index)=>{
            
    const active = index === activeTab ? "active" : "";
           
            return <button key={index} onClick={_=>{
                setActiveTab(index);
                getActiveTab(index);
            }} className={`tab ${active}`}>
                {tab}
            </button>;
        })}
    </div>
}