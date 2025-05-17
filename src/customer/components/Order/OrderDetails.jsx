import React from 'react';
import AddressCard from '../AddressCard/AddressCard';
import OrderTracker from './OrderTracker';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
    return (
        <div className="pt-[120px] pb-[300px] min-h-screen bg-gray-50">
            <div>
                <h1 className="font-bold text-xl py-7">Địa chỉ giao hàng</h1>
            </div>

            <AddressCard />

            <div className="py-20">
                <OrderTracker activeStep={3} />
            </div>

            <div className="flex flex-col gap-5">
                {[1, 2, 3].map((item) => (
                    <div
                        key={item}
                        className="flex justify-between items-start border rounded-md shadow-xl p-5 bg-white"
                    >
                        <div className="flex items-start gap-4">
                            <img
                                className="w-20 h-20 object-cover object-top rounded"
                                src="https://mystickermania.com/cdn/stickers/we-bare-bears/wbb-ice-bear-leech-512x512.png"
                                alt="product"
                            />
                            <div className="space-y-2 ml-5">
                                <p className="font-medium">Test test test</p>
                                <p className="text-sm text-gray-600 space-x-4">
                                    <span>Test: test</span>
                                    <span>Test: test</span>
                                </p>
                                <p className="text-sm text-gray-600">Test: test</p>
                                <p className="text-sm text-gray-800 font-semibold">654</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 cursor-pointer">
                            <StarBorderIcon className="text-yellow-500" />
                            <span className="text-sm font-medium">Đánh giá sản phẩm</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderDetails;
