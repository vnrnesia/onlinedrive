import Image from 'next/image';
import React, { ReactNode } from 'react';

type LayoutProps = {
    children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex min-h-screen">
            <section className="bg-brand p-10 pl-16 w-1/2 hidden lg:flex lg:flex-col items-start justify-center space-y-12 xl:w-2/5">
                <div className="max-h-[800px] max-w-[430px]">
                    <Image src="/logo1.svg" alt="logo" width={224} height={82} />
                </div>

                <div className="space-y-5 text-white">
                    <h1 className="h1">Manage your files the best way</h1>
                    <p className="body-1">This is a place where you can store all your documents.</p>
                </div>

                <Image
                    src="/illustration.svg"
                    alt="Files"
                    width={342}
                    height={342}
                    className="transition-all hover:rotate-2 hover:scale-105"
                />
            </section>

            <section className="flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
                <div className="mb-16 lg:hidden">
                    <Image
                        src="/assets/icons/logo-full-brand.svg"
                        alt="Logo"
                        width={224}
                        height={82}
                        className="h-auto w-[200px] lg:w-[250px]"
                    />
                </div>

                {children}
            </section>
        </div>
    );
};

export default Layout;
