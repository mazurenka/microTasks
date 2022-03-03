import React, {useState} from "react";

type FilterType = 'all' | 'zloty' | 'dollar' | 'euro'
type MoneyType = {
    currency: FilterType
    price: number
    id: string
}
type PropsType = {
    clickFilter: (nameButton: FilterType) => void
}

export const NewComponent = (props: PropsType) => {

    const [money, setMoney] = useState<Array<MoneyType>>([
        {currency: 'dollar', price: 100, id: ' sdvmfjvnefonv'},
        {currency: 'euro', price: 200, id: ' vjlvspdpokv'},
        {currency: 'zloty', price: 50, id: ' fkjverovjoijc'},
        {currency: 'dollar', price: 100, id: ' sdvmfjvnefonv'},
        {currency: 'euro', price: 200, id: ' vjlvspdpokv'},
        {currency: 'zloty', price: 50, id: ' fkjverovjoijc'},
        {currency: 'dollar', price: 100, id: ' sdvmfjvnefonv'},
        {currency: 'euro', price: 200, id: ' vjlvspdpokv'},
        {currency: 'zloty', price: 50, id: ' fkjverovjoijc'},
    ])

    const [filter, setFilter] = useState<FilterType>('all')

    let currentMoney = money
    if (filter === 'zloty') {
        currentMoney = money.filter(m => m.currency === 'zloty')
    }
    if (filter === 'dollar') {
        currentMoney = money.filter(m => m.currency === 'dollar')
    }
    if (filter === 'euro') {
        currentMoney = money.filter(m => m.currency === 'euro')
    }

    const clickFilter = (nameButton: FilterType) => {
        setFilter(nameButton)
    }

    return <div>
        <ul>
            {currentMoney.map((z: string, index: number) => {
                return (
                    <li key={index}>
                        <span>{z.currency}</span>
                        <span>{z.price}</span>
                        <span>{z.id}</span>
                    </li>
                )
            })}
        </ul>
        <div style={{marginLeft: '35px'}}>
            <button onClick={() => clickFilter('all')}>all</button>
            <button onClick={() => clickFilter('zloty')}>zloty</button>
            <button onClick={() => clickFilter('dollar')}>dollars</button>
            <button onClick={() => clickFilter('euro')}>euros</button>
        </div>
    </div>
}




