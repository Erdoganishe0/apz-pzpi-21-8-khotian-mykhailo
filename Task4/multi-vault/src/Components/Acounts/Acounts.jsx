import React from 'react'
import './Acounts.css'
import Find from '../Find-Line/Find'
import Header from '../Header/MainHeader'
import Acount from '../Acount/Acount'

const Acounts = () => {

    const accountList = [
        {"src":"kiln.png", "name":"Kiln", "description":"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum", "id":""},
        {"src":"kiln.png", "name":"Kiln", "description":"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum", "id":""},
        {"src":"kiln.png", "name":"Kiln", "description":"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum", "id":""},
        {"src":"kiln.png", "name":"Kiln", "description":"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum", "id":""},
        {"src":"kiln.png", "name":"Kiln", "description":"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum", "id":""}, 
    ]

    return (
        <div className='accounts-container'>
            <Header />
            <div className='accounts-table-container'>
                <Find placefolder = {'Find...'}/>
                    {Array.from({length: Math.ceil(accountList.length / 3)}, (_, i) => i).map(i => (
                    <div key={i} className='account-table'>
                    {accountList.slice(i * 3, (i + 1) * 3).map((account, index) => (
                        <Acount key={index} src={account.src} name={account.name} description={account.description} user = {account.id}/>
                    ))}
                </div>
                ))}
            </div>
        </div>
    )
   
}
export default Acounts