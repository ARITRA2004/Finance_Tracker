import { useEffect, useState } from 'react';
import './dashboard.css'

const Dashboard = ()=>{

    const [avilableBalance,setAvilableBalance] = useState(100000);
    const [date,setDate] = useState({});
    const [name,setName] = useState("");
    const [image,setImage] = useState("");
    const [totalnetWorth,setTotalnetWorth] = useState(0);
    const [incomesources,setIncomeSources] = useState([]);
    const [spendings,setSpendings] = useState([]);
    const [incomes,setIncomes] = useState([]);
    const [IncomeandExpense,setIncomeandExpense] = useState([]);
    const [assets,setAssets] = useState([]);
    const [notifications,setNotifications] = useState([]);
    const [response,setResponse] = useState([]);

    useEffect(()=>{
        const date = new Date();
        setDate({
            day: date.getDay(),
            month: date.getMonth()+1,
            year: date.getFullYear()
        })
    },[date])

    return(
        <div className="finance-dashboard">
            <div className='f-item header'>
                <div>Avilable balence
                    <div>Rs.{avilableBalance}</div>
                </div>
                <div>Date</div>
                <div>
                    <div>{name}</div>
                    <div>
                        <img src="https://media.licdn.com/dms/image/v2/D4E03AQFWbiZvnqcpAA/profile-displayphoto-scale_200_200/B4EZgWw9vMGYAc-/0/1752728595853?e=2147483647&v=beta&t=z5TzEGixTkB0w5dmqL_9S_n-1PygLzr0OlHmSBBX3wE" height="50%" width="50%" alt="" />
                    </div>
                </div>
            </div>
            <div className='f-item side'>Sidebar</div>
            <div className='f-item tnw'>Total net worth</div>
            <div className='f-item is'>Income sources</div>
            <div className='f-item s'>spendings</div>
            <div className='f-item i'>Income</div>
            <div className='f-item ie'>Income and Expense</div>
            <div className='f-item a'>Assects</div>
            <div className='f-item ig'>Income goal</div>
            <div className='f-item noti'>Notifications</div>
        </div>
    )
}

export default Dashboard;