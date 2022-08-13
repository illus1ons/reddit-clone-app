import React from 'react';
import Link from "next/link";

function Register() {
    return (
        <div className="bg-white">
            <div className="flex flex-col items-center justify-center h-screen p-6">
                <div className="w-10/12 mx-auto md:w-96">
                    <h1 className="mb-2 text-lg font-medium text-black">회원가입</h1>
                    <form>
                        <button className="w-full py-2 mb-1 text-xs font-bold wext-white uppercase bg-gray-400 border border-gray-400 rounded">
                            회원가입
                        </button>
                    </form>
                    <small className="text-black">
                        이미 가입하셨나요?
                        <Link href="/login">
                            <a className="ml-1 text-blue-500 uppercase">로그인</a>
                        </Link>
                    </small>
                </div>
            </div>
        </div>
    );
}

export default Register;
