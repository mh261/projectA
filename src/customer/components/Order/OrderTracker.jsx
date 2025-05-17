import React from 'react';
import Stepper from '@mui/material/Stepper';
import { Step, StepLabel } from '@mui/material';

const steps = [
    "Đã đặt hàng",
    "Đã xác nhận đơn hàng",
    "Đã gửi hàng",
    "Đang giao hàng",
    "Đã giao thành công",
];

const OrderTracker = ({ activeStep }) => {
    return (
        <div className="w-full">
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => (
                    <Step key={index}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
};

export default OrderTracker;
