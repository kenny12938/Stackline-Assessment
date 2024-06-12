
import { useSelector } from 'react-redux';
import {
    Sale,
    selectSales
} from '../redux/itemSlice';

export const ItemTable = () => {
    const sales = useSelector(selectSales);

    return (
        <div className="table-div">
            <table className="table-main">
                <tr className="table-row">
                    <th className="table-cell">Week Ending</th>
                    <th className="table-cell">Retail Sales</th>
                    <th className="table-cell">Wholesale Sales</th>
                    <th className="table-cell">Units Sold</th>
                    <th className="table-cell">Retailer Margin</th>
                </tr>
                {sales.map((sale: Sale) => <tr className="table-row">
                    <td className="table-cell">{sale.weekEnding}</td>
                    <td className="table-cell">${sale.retailSales.toLocaleString()}</td>
                    <td className="table-cell">${sale.wholesaleSales.toLocaleString()}</td>
                    <td className="table-cell">{sale.unitsSold}</td>
                    <td className="table-cell">${sale.retailerMargin.toLocaleString()}</td>
                </tr>)}
            </table>
        </div>
    );
};