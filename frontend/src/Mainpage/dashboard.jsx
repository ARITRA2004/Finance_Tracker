import { useEffect, useState } from 'react';
import './dashboard.css'
import axios from 'axios';

const Dashboard = ()=>{

    const [avilableBalance,setAvilableBalance] = useState(100000);
    const [date,setDate] = useState({});
    const [name,setName] = useState("");
    const [image,setImage] = useState("");
    const [totalnetWorth,setTotalnetWorth] = useState(0);
    const [incomesources,setIncomeSources] = useState([]);
    const [Expenses,setExpenses] = useState([]);
    const [totalSpedings,setTotalSpendings] = useState(null);
    const [incomes,setIncomes] = useState([]);
    const [IncomeandExpense,setIncomeandExpense] = useState([]);
    const [assets,setAssets] = useState([]);
    const [notifications,setNotifications] = useState([]);
    const [response,setResponse] = useState([]);
    
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const expenseRes = await axios.get("http://localhost:3000/getExpensedata",{
                    withCredentials:true
                });

                // const incomeRes = await axios.get("http://localhost:3000/getIncomeData");
                
                console.log(expenseRes);

                const {data} = expenseRes;
                const {date,userId,_v,_id, ...rest} = data.data[0];
                const result = {
                    ...rest,
                }
                
                //adding all the expenses keywise
                const allExpenseSum = Object.keys(result).reduce((sum,key)=>{
                    const val = result[key];
                    
                    if(typeof val === "object"){
                        return sum + Object.values(val).reduce((a,b)=>a+b,0)
                    }
                    else{
                        return sum + val;
                    }
                },0)

                setTotalSpendings(allExpenseSum);

                setExpenses(result)

                console.log(allExpenseSum);

                setName(expenseRes?.data?.userEmail);
                setDate(expenseRes?.data?.data[0]?.date);

                console.log(date);

            }catch(err){
                console.log(err.message);
            }
        }
        fetchData();
    },[])


    return(
        <div className="finance-dashboard">
            <div className='f-item header'>
                <div>Avilable balence
                    <div>Rs.{avilableBalance}</div>
                </div>
                {
                    date ? (<div>
                        <span>{date.day}/</span>
                        <span>{date.month}/</span>
                        <span>{date.year}</span>
                    </div>) : <></>
                }
                
                <div>
                    <div>{name}</div>
                    <div>
                        {/* <img src="https://media.licdn.com/dms/image/v2/D4E03AQFWbiZvnqcpAA/profile-displayphoto-scale_200_200/B4EZgWw9vMGYAc-/0/1752728595853?e=2147483647&v=beta&t=z5TzEGixTkB0w5dmqL_9S_n-1PygLzr0OlHmSBBX3wE" height="50%" width="50%" alt="" /> */}
                    </div>
                </div>
            </div>
            <div className='f-item side'>Sidebar</div>
            <div className='f-item tnw'>Total net worth</div>
            <div className='f-item is'>Income sources</div>
            <div className='f-item s'>
                <div>spendings</div>
                <div>{totalSpedings}</div>
            </div>
            <div className='f-item i'>Income</div>
            <div className='f-item ie'>Income and Expense</div>
            <div className='f-item a'>Assects</div>
            <div className='f-item ig'>Income goal</div>
            <div className='f-item noti'>Notifications</div>
        </div>
    )
}

export default Dashboard;