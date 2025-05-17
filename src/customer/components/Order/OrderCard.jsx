import React from 'react';
import AdjustIcon from '@mui/icons-material/Adjust';

const OrderCard = () => {
    return (
        <div className="p-5 shadow-md shadow-black hover:shadow-2xl border">
            <div className="flex items-start justify-between gap-4">
                {/* Hình ảnh + nội dung trái */}
                <div className="flex items-start gap-4 cursor-pointer">
                    <img
                        className="w-20 h-20 object-cover object-top rounded"
                        src="https://mystickermania.com/cdn/stickers/we-bare-bears/wbb-ice-bear-leech-512x512.png"
                        alt="product"
                    />
                    <div className="space-y-1">
                        <p className="font-medium">Test test test</p>
                        <p className="text-sm text-gray-500 font-semibold">Test: test</p>
                        <p className="text-sm text-gray-600">Test test</p>
                    </div>
                </div>

                {/* Nội dung bên phải */}
                <div className="flex flex-col items-end text-right space-y-1">
                    <p className="text-sm font-medium text-gray-700">843</p>

                    {/* Trạng thái giao hàng */}
                    <div className="text-sm">
                        <p className="flex items-center justify-end text-green-600">
                            <AdjustIcon sx={{ width: 16, height: 16 }} className="mr-1" />
                            Giao ngày: 12/12/2023
                        </p>
                        <p className="text-xs text-gray-500">Hàng của bạn đang được giao</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;
