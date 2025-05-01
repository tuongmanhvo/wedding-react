import React from 'react';

const Loimoi = () => {
    return (
        <div id="loimoi" className="min-h-screen flex items-center justify-center flex-col gap-20 lg:flex-row lg:gap-10 ">
            <div className="flex flex-col gap-7 font-bold">
                <span id="ten" className="text-xl">Tường & Kim</span>
                <span id="thenguyen" className="text-4xl">Thề Nguyện</span>
            </div>
            <div id="ngay" className="flex flex-col justify-center gap-4 items-center mx-4 lg:items-end">
                <span>Chúng mình sẽ chính thức bắt đầu hành trình mới,</span>
                <span>vào ngày <span className="font-bold">18.05.2025</span>, tại <span className="font-bold">Amor Resort - Sài Gòn</span>.</span>
                <span>Thật hạnh phúc nếu mọi người thân yêu ở đó cùng nâng ly và cùng vui với chúng mình.</span>

            </div>
        </div>
    );
};

export default Loimoi;