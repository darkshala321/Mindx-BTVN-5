import React, { useState } from 'react';

function CashRegister() {
    const [display, setDisplay] = useState('0');

    const handleClick = (value) => {
        setDisplay((prevDisplay) => {
            if (prevDisplay === '0' || prevDisplay === 'Error') {
                return value;
            } else {
                return prevDisplay + value;
            }
        });
    };
    

    const handleClear = () => {
        // Xử lý khi người dùng nhấn nút "C" để xóa màn hình
        // Đặt biến state display về '0'
        setDisplay('0');
    };

    const handleEqual = () => {
        // Xử lý khi người dùng nhấn nút "=" để tính toán kết quả
        try {
            const result = eval(display);
            setDisplay(result.toString());
        } catch (error) {
            setDisplay('Error');
        }
    };

    const buttons = [
        [7, 8, 9, '/'],
        [4, 5, 6, '*'],
        [1, 2, 3, '-'],
        ['C', 0, '=', '+'],
    ];

    return (
        <div className="cash-register">
            <div className="display">{display}</div>
            <div className="buttons">
                {buttons.map((row, rowIndex) => (
                    <div key={rowIndex} className="button-row">
                        {row.map((value) => (
                            <button
                                key={value}
                                className={
                                    value === 0
                                        ? "number zero"
                                        : value === '='
                                            ? "equal"
                                            : value === 'C'
                                                ? "clear"
                                                : /[0-9]/.test(value)
                                                    ? "number"
                                                    : "operation"
                                }
                                onClick={() =>
                                    value === '='
                                        ? handleEqual()
                                        : value === 'C'
                                            ? handleClear()
                                            : handleClick(value)
                                }
                            >
                                {value}
                            </button>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CashRegister;