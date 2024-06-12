
import { useSelector, useDispatch } from 'react-redux';
import '../App.css';
import {
    Sale,
    SortOrder,
    SortTerm,
    selectSales,
    selectSortTerm,
    selectSortOrder,
    updateSortOrder,
    updateSortTerm
} from '../redux/itemSlice';
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

export const ItemTable = () => {
    const sales = useSelector(selectSales);
    const sortTerm = useSelector(selectSortTerm);
    const sortOrder = useSelector(selectSortOrder);
    const dispatch = useDispatch();

    const handleSort = (clickedSortTerm: SortTerm) => {
        // If the clicked sort term is the same as the current sort term, flip the sort order
        // If the clicked sort term is different than the current sort term, change the sort term to the clicked sort term

        if (clickedSortTerm === sortTerm) {
            if (sortOrder === SortOrder.ASC) {
                dispatch(updateSortOrder(SortOrder.DESC));
            } else {
                dispatch(updateSortOrder(SortOrder.ASC));
            }
        } else {
            dispatch(updateSortTerm(clickedSortTerm));
        }
    };

    return (
        <div className="table-div">
            <table className="table-main">
                <tr className="table-row">
                    <th className="table-cell" onClick={() => handleSort(SortTerm.WEEK_ENDING)}>
                        Week Ending
                        { (sortTerm === SortTerm.WEEK_ENDING && sortOrder === SortOrder.ASC) && <SlArrowUp className="table-arrow" />}
                        { (sortTerm === SortTerm.WEEK_ENDING && sortOrder === SortOrder.DESC) && <SlArrowDown className="table-arrow" />}
                    </th>
                    <th className="table-cell" onClick={() => handleSort(SortTerm.RETAIL_SALES)}>
                        Retail Sales
                        { (sortTerm === SortTerm.RETAIL_SALES && sortOrder === SortOrder.ASC) && <SlArrowUp className="table-arrow" />}
                        { (sortTerm === SortTerm.RETAIL_SALES && sortOrder === SortOrder.DESC) && <SlArrowDown className="table-arrow" />}
                    </th>
                    <th className="table-cell" onClick={() => handleSort(SortTerm.WHOLESALE_SALES)}>
                        Wholesale Sales
                        { (sortTerm === SortTerm.WHOLESALE_SALES && sortOrder === SortOrder.ASC) && <SlArrowUp className="table-arrow" />}
                        { (sortTerm === SortTerm.WHOLESALE_SALES && sortOrder === SortOrder.DESC) && <SlArrowDown className="table-arrow" />}
                    </th>
                    <th className="table-cell" onClick={() => handleSort(SortTerm.UNITS_SOLD)}>
                        Units Sold
                        { (sortTerm === SortTerm.UNITS_SOLD && sortOrder === SortOrder.ASC) && <SlArrowUp className="table-arrow" />}
                        { (sortTerm === SortTerm.UNITS_SOLD && sortOrder === SortOrder.DESC) && <SlArrowDown className="table-arrow" />}
                    </th>
                    <th className="table-cell" onClick={() => handleSort(SortTerm.RETAILER_MARGIN)}>
                        Retailer Margin
                        { (sortTerm === SortTerm.RETAILER_MARGIN && sortOrder === SortOrder.ASC) && <SlArrowUp className="table-arrow" />}
                        { (sortTerm === SortTerm.RETAILER_MARGIN && sortOrder === SortOrder.DESC) && <SlArrowDown className="table-arrow" />}
                    </th>
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