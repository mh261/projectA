import React from 'react';
import OrderCard from './OrderCard';

const orderStatus = [
    { label: "Đang giao", value: "on_the_way" },
    { label: "Đã giao", value: "delivered" },
    { label: "Đã hủy", value: "canceled" },
    { label: "Đã hoàn tiền", value: "returned" },
];

const Order = () => {
    return (
        <div className='px:5 lg:px-20'>
            <div className="pt-[120px] pb-[300px] bg-gray-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-6">
                    {/* Sidebar lọc */}
                    <div className="w-full lg:w-1/4">
                        <div className="sticky top-[100px] bg-white p-6 rounded-xl shadow-md">
                            <h1 className="text-lg font-bold mb-6">Lọc</h1>
                            <div className="space-y-4">
                                <h2 className="text-sm font-semibold">Trạng thái giao hàng</h2>
                                {orderStatus.map((option) => (
                                    <div key={option.value} className="flex items-center">
                                        <input
                                            id={option.value}
                                            type="checkbox"
                                            value={option.value}
                                            className="h-4 w-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                                        />
                                        <label htmlFor={option.value} className="ml-3 text-sm text-gray-700">
                                            {option.label}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-3/4 space-y-4">
                        <div className='space-y-5'>
                            {[1, 1, 1, 1,1,1].map((item) => (<OrderCard key={item} />))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Order;
