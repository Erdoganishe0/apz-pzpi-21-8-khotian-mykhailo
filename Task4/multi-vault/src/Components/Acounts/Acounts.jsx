import React, {useState, useEffect} from 'react'
import './Acounts.css'
import Find from '../Find-Line/Find'
import Header from '../Header/MainHeader'
import Acount from '../Acount/Acount'

const Acounts = () => {

    const fetchUserSettings = async () => {
        try {    
            const response = await axios.get('api/user')
            return response.data.settings    
        } catch (error) {    
            console.error(error)    
        }    
    }
    const [isEnglish, setIsEnglish] = useState(null)
    useEffect(() => {
        const fetchWallet = async () => {
            try {
                const settingsData = await fetchUserSettings()
                setIsEnglish(settingsData.isEngLanguage)
            } catch (error) {
                console.error(error);
            }
        };
        fetchWallet();

    }, []);

    const accountList = [
        {"src":"kiln.png",
        "name":"Kiln", 
        "description":"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum", 
        "user":"0x4f19b886C5Cc4ac9Ca32596D2bBCf760928703B8"},
        {"src":"kiln.png", "name":"Kiln", "description":"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum", "user":""},
        {"src":"kiln.png", "name":"Kiln", "description":"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum", "user":""},
        {"src":"kiln.png", "name":"Kiln", "description":"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum", "user":""},
        {"src":"kiln.png", "name":"Kiln", "description":"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum", "user":""}, 
    ]

    return (
        <div className='accounts-container'>
            <Header />
            <div className='accounts-table-container'>
                <Find placefolder = {'Find...'}/>
                    {Array.from({length: Math.ceil(accountList.length / 3)}, (_, i) => i).map(i => (
                    <div key={i} className='account-table'>
                    {accountList.slice(i * 3, (i + 1) * 3).map((account, index) => (
                        <Acount key={index} src={account.src} name={account.name} description={account.description} user = {account.user}/>
                    ))}
                </div>
                ))}
            </div>
        </div>
    )
   
}
export default Acounts