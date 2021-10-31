import React, { Component } from 'react'
//table class comonent
// class Table extends Component {
//     render() {
//         return (
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Job</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>Melaku</td>
//                         <td>Waiter</td>
//                     </tr>
//                     <tr>
//                         <td>Alu</td>
//                         <td>Teacher</td>
//                     </tr>
//                     <tr>
//                         <td>Ab</td>
//                         <td>Zebegna</td>
//                     </tr>
//                 </tbody>
//             </table>
//         )
//     }
// }
// mixed(simple and class) component
// const TableHeader = () => {
//     return (<thead>
//         <tr>
//             <th>Name</th>
//             <th>Job</th>
//         </tr>
//     </thead>)
// }
// const TableBody = () => {
//     return (<tbody>
//         <tr>
//             <td>Melaku</td>
//             <td>Waiter</td>
//         </tr>
//         <tr>
//             <td>Alu</td>
//             <td>Teacher</td>
//         </tr>
//         <tr>
//             <td>Ab</td>
//             <td>Zebegna</td>
//         </tr>
//     </tbody>
//     )
// }
// component with props 

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>)
}
const TableBody = (props) => {
    const rows = props.charData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}
class Table extends Component {
    render() {
        const { charData } = this.props
        return (
            <table>
                <TableHeader />
                <TableBody charData={charData} />
            </table>
        )
    }
}

export default Table