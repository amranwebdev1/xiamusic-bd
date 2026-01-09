
import React from 'react';
import Image from 'next/image';
const Logo = () => {
  return (
    <div className="flex justify-center py-8">
        <Image 
        src="https://maoa.xiamusicoa.com/upload/resource/wechat_official_965.png"
        alt="logo"
        width={150}
        height={150}
      />
      </div>
  );
};

export default Logo;