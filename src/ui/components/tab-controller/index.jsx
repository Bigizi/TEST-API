import "./style.css";
export default function TabController(props){
    return <div className="tab-contents">
        {
            Array.from(props.children).map((tabContent, index)=>{
                const active = props.activeTab === index ? "active" : "";
                return <div key={index} className={`tab-content ${active}`}>
                    {tabContent}
                </div>
            })
        }
    </div>
}