import React, { useEffect, useState } from 'react'
import './record.scss'
export const Record = ({ recordRef }) => {
    const [tableData, setTableData] = useState([]);

    const calculateColumn4Value = (gyro, magneticCourse, variation) => {

        let guti = gyro - variation
        guti = guti < 0 ? guti + 360 : guti
        let deviation = guti - magneticCourse
        
        deviation = deviation >= 360 ? deviation - 360 : deviation
        
        if (variation == '') deviation = 0

        if(deviation > 180 && gyro == 0 ) deviation -= 360
        if(deviation < -180 && gyro == 0) deviation += 360

        return deviation;
    };

    const handleInputChange = (e, rowIndex, colIndex) => {
        const { value } = e.target;
        setTableData((prevData) => {
            const newData = [...prevData];
            newData[rowIndex][colIndex] = value ? parseInt(value, 10) : '';
            return newData;
        });
    };

    useEffect(() => {
        // Inicializar los datos de la tabla
        const initialData = Array.from(Array(8).keys()).map((rowIndex) => [
            rowIndex * 45, // Valor de la primera columna
            0, // Valor de la segunda columna
            0, // Valor de la tercera columna
        ]);
        setTableData(initialData);
    }, []);



    return (
        <section class='record'>
            <h3>Record</h3>
            <table>
                <thead>
                    <tr>
                        <th>Gyro</th>
                        <th>Magnetic Course</th>
                        <th>Variation</th>
                        <th>Deviation</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            <td>{row[0]}</td>
                            <td>
                                <input
                                    type="number"
                                    value={row[1]}
                                    onChange={(e) => handleInputChange(e, rowIndex, 1)}
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    value={row[2]}
                                    onChange={(e) => handleInputChange(e, rowIndex, 2)}
                                />
                            </td>
                            <td>{calculateColumn4Value(row[0], row[1], row[2])}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div id='invisibleTable' ref={recordRef}>
                <table>
                    <thead>
                        <tr>
                            <th>Gyro</th>
                            <th>Magnetic Course</th>
                            <th>Variation</th>
                            <th>Deviation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((cell, columnIndex) => (
                                    <td key={columnIndex}>
                                        {cell}
                                    </td>
                                ))}
                                <td>{calculateColumn4Value(row[0], row[1], row[2])}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};