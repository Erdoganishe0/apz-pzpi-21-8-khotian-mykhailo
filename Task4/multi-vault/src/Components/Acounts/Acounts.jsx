import React from 'react'
import './Acounts.css'
import Find from '../Find-Line/Find'
import Header from '../Header/MainHeader'
import Acount from '../Acount/Acount'

const Acounts = () => {
    return (
        <div className='accounts-container'>
            <Header />
            <div className='accounts-table-container'>
                <Find placefolder = {'Find...'}/>
                <div className='account-table'>
                    <Acount src="kiln.png" name="Kiln" description = "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"/>
                    <Acount src="kiln.png" name="Kiln" description = "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"/>
                    <Acount src="kiln.png" name="Kiln" description = "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"/>
                </div>
            </div>
        </div>
    )
   
}
export default Acounts